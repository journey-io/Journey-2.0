/*
This componeent is used for displaying a static nav/footer across all pages
Simply render whatever components are to be displayed either above or below
<Component />
*/

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
