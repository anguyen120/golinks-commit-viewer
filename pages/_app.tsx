import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import client from "../apollo-client"
import { GoogleAnalytics } from "nextjs-google-analytics"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
