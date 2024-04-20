/**
 * GQty: You can safely modify this file based on your needs.
 */
import { createReactClient } from '@gqty/react'
import { Cache, GQtyError, type QueryFetcher, createClient } from 'gqty'

import { getHeaders } from './cookies'
import { type GeneratedSchema, generatedSchema, scalarsEnumsHash } from './schema.generated'

const queryFetcher: QueryFetcher = async function (
  { query, variables, operationName },
  fetchOptions
) {
  let payloadCookie: Record<string, string> = {}

  const header: Record<string, string> = {}
  if (typeof window === 'undefined') {
    const cookieStore = getHeaders()
    payloadCookie = cookieStore.getAll().reduce(
      (acc, { name, value }) => {
        if (name.startsWith('payload')) {
          acc[name] = value
        }
        return acc
      },
      {} as Record<string, string>
    )
  } else {
    const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
    header['Authorization'] = `JWT ${token['payload-token']}`
  }

  // Modify "/api/graphql" if needed
  const response = await fetch('http://localhost:3001/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: Object.entries(payloadCookie)
        .map(([name, value]) => `${name}=${value}`)
        .join('; '),
      ...header,
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
    mode: 'cors',
    ...fetchOptions,
  })

  if (response.status >= 400) {
    throw new GQtyError(`GraphQL endpoint responded with HTTP status ${response.status}.`)
  }

  const text = await response.text()

  try {
    return JSON.parse(text)
  } catch {
    throw new GQtyError(
      `Malformed JSON response: ${text.length > 50 ? text.slice(0, 50) + '...' : text}`
    )
  }
}

const cache = new Cache(
  undefined,
  /**
   * Default option is immediate cache expiry but keep it for 5 minutes,
   * allowing soft refetches in background.
   */
  {
    maxAge: 10 * 60 * 1000,
    staleWhileRevalidate: 5 * 60 * 1000,
    normalization: true,
  }
)

export const client = createClient<GeneratedSchema>({
  schema: generatedSchema,
  scalars: scalarsEnumsHash,
  cache,
  fetchOptions: {
    fetcher: queryFetcher,
  },
})

// Core functions
export const { resolve, subscribe, schema } = client

// Legacy functions
export const { query, mutation, mutate, subscription, resolved, refetch, track } = client

export const {
  state,
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Enable Suspense, you can override this option for each hook.
    suspense: false,
  },
})

export * from './schema.generated'
