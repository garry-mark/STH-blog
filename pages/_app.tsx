import { AppProps } from 'next/app'
import '../theme/index.scss';

function BlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default BlogApp