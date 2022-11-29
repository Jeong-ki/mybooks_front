import Head from "next/head";
import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "src/components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import favicon from "src/public/favicon.ico";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Head>
        <title>MyBooks</title>
        <meta name="description" content="Memo Your Algorithm" />
        <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
