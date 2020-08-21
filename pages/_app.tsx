import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { getStore } from "../store";
import "../theme/iconfont/iconfont.css";
import "../theme/index.scss";

const store = getStore() || {};

function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default BlogApp;
