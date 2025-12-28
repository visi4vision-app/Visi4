import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16"
});

export async function createCheckout(email) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "eur",
          recurring: { interval: "month" },
          product_data: { name: "Freemind Pro" },
          unit_amount: 999
        },
        quantity: 1
      }
    ],
    success_url: "https://success.freemind.app",
    cancel_url: "https://cancel.freemind.app"
  });

  return session.url;
}
