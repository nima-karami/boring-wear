import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
// );

export const stripePromise = loadStripe(
  'pk_test_51LnR2rJEjrMBYx3iXbCyR9EPQwQjJDXXWDSKgIW2NVVoEiF5ocnPfNODkToaXU4dSRRUcPWxwkilD9wO6VEFcVzY00nlRHGVb0'
);