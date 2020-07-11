import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../theme/index.scss';

function BlogApp({ Component, pageProps }: AppProps) {

  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}

export default BlogApp