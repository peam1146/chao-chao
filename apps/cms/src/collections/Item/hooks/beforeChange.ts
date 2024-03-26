import type { BeforeChangeHook } from 'payload/dist/globals/config/types'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(stripeSecretKey || '', { apiVersion: '2022-08-01' })

const logs = false

export const beforeProductChange: BeforeChangeHook = async ({ req, data }) => {
  const { payload } = req
  const newDoc = {
    ...data,
    skipSync: false, // Set back to 'false' so that all changes continue to sync to Stripe
  }

  if (data.skipSync) {
    if (logs) payload.logger.info(`Skipping product 'beforeChange' hook`)
    return newDoc
  }

  if (!data.stripeProductID) {
    // create a now product in Stripe
    const productData = {
      name: data.name,
      description: data.description || '',
      price: data.price || 0,
    }
    if (logs) payload.logger.info(`Creating product in Stripe...`)
    try {
      const product = await stripe.products.create({
        name: productData.name,
        description: productData.description,
        default_price_data: { currency: 'THB', unit_amount: productData.price },
      })
      newDoc.stripeProductID = product.id
      if (logs) payload.logger.info(`Created product in Stripe: ${product.id}`)
    } catch (error: unknown) {
      payload.logger.error(`Error creating product in Stripe: ${error}`)
      return newDoc
    }
  }

  if (logs) payload.logger.info(`Looking up product from Stripe...`)

  try {
    const stripeProduct = await stripe.products.retrieve(data.stripeProductID)
    if (logs) payload.logger.info(`Found product from Stripe: ${stripeProduct.name}`)
    // newDoc.name = stripeProduct.name;
    newDoc.description = stripeProduct.description
  } catch (error: unknown) {
    payload.logger.error(`Error fetching product from Stripe: ${error}`)
    return newDoc
  }

  if (logs) payload.logger.info(`Looking up price from Stripe...`)

  try {
    const allPrices = await stripe.prices.list({
      product: data.stripeProductID,
      limit: 100,
    })

    newDoc.priceJSON = JSON.stringify(allPrices)
  } catch (error: unknown) {
    payload.logger.error(`Error fetching prices from Stripe: ${error}`)
  }

  return newDoc
}
