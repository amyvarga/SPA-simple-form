import App from 'next/app';
import '../src/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}