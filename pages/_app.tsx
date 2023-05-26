import { AppProps } from "next/app";
import { createTRPCProxyClient } from "@trpc/client";
import { AppRouterType } from "../types/trpc";

// Initialize tRPC client outside of render method
const client = createTRPCProxyClient<AppRouterType>({
  url: "http://localhost:3005", // Change URL to your tRPC endpoint
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
