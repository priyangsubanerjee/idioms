import "@/styles/globals.css";
import NextProgress from "next-progress";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </div>
  );
}
