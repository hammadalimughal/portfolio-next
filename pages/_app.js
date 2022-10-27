import { useEffect } from "react";
import '../styles/globals.css'
import '../styles/fontawesomev6.css'
// import "@fancyapps/ui/dist/fancybox.esm.js";
// import "@fancyapps/ui/dist/fancybox.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
