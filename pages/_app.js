import Contribute from "@/components/Contribute";
import GLobalState from "@/context/globalStates";
import "@/styles/globals.css";
import NextProgress from "next-progress";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [contributeOpen, setContributeOpen] = useState(false);
  return (
    <GLobalState.Provider
      value={{
        contributeOpen,
        setContributeOpen,
      }}
    >
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
      <Contribute />
    </GLobalState.Provider>
  );
}
