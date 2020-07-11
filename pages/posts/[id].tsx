import Head from 'next/head';
import Article from '../../components/Article';

export default function About() {
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
