import type { BeforeChangeHook } from 'payload/dist/collections/config/types'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
})

const createStripeCustomer: BeforeChangeHook = async ({ req, data, operation }) => {
  console.log(operation)
  if (operation === 'create' && !data.stripeCustomerID) {
    try {
      // lookup an existing customer by email and if found, assign the ID to the user
      // if not found, create a new customer and assign the new ID to the user
      const existingCustomer = await stripe.customers.list({
        limit: 1,
        email: data.email,
      })

      if (existingCustomer.data.length) {
        // existing customer found, assign the ID to the user
        return {
          ...data,
          stripeCustomerID: existingCustomer.data[0].id,
        }
      }

      // create a new customer and assign the ID to the user
      const customer = await stripe.customers.create({
        email: data.email,
        name: data.firstName,
      })

      return {
        ...data,
        stripeCustomerID: customer.id,
      }
    } catch (error: unknown) {
      req.payload.logger.error(`Error creating Stripe customer: ${error}`)
    }
  } else if (operation === 'update' && data.stripeCustomerID) {
    try {
      const existingCustomer = await stripe.customers.retrieve(data.stripeCustomerID)
      const previousName: string = 'name' in existingCustomer ? existingCustomer.name : ''
      if (previousName !== data.firstName) {
        req.payload.logger.info(
          `Updating Stripe customer name from ${previousName} to ${data.firstName}`
        )
        await stripe.customers.update(data.stripeCustomerID, {
          name: data.firstName,
        })
      }
    } catch (error) {
      req.payload.logger.error(`Error update Stripe customer: ${error}`)
    }
  }

  return data
}

export default createStripeCustomer
