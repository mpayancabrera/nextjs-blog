import { AppProps } from "next/app";
import GlobalStyle from "styles/global";

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
