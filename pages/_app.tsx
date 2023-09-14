import RealmEmailProvider from "@/realmEmailProvider/context/RealmEmailProvider";
import "@/styles/globals.css";
import { RealmProvider } from "@llampukaq/realm";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RealmProvider
      appId={process.env.NEXT_PUBLIC_REALM as string}
      plugins={[<RealmEmailProvider />]}
    >
      <Component {...pageProps} />
    </RealmProvider>
  );
}
