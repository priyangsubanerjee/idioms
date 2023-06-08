import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
