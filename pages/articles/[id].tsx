import Head from 'next/head';
import Article from '../../components/Article';

export default function ArticlePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article aid={1} />
    </>
  )
}
