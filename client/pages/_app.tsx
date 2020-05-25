/*
This componeent is used for displaying a static nav/footer across all pages
Simply render whatever components are to be displayed either above or below
<Component />
*/

import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

import './styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
