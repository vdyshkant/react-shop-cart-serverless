import Home from './pages/Home'
import Product from './pages/Product'
import Result from './pages/Result'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const queryClient = new QueryClient()

const stripePromise = loadStripe(
  'pk_test_51Ic98cH9oF8StYkdSyGeFNkRNg38ZUKBY6feu8VjDmRhyL7RmAwfdBlqPrXd7BOxaMGG2isIjJCUZS0cWWpRQtPg00Epo7Rd5P'
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
