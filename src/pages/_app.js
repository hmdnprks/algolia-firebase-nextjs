import '@src/styles/globals.css'
import { initializeApp } from "firebase/app";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
