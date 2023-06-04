import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <div className={jakarta.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
