import * as React from 'react';
import Link from 'next/link'
import styles from './Layout.module.scss';

class Header extends React.Component<any, any> {
  public render() {
    const { children } = this.props;
    return <>
      <header className={styles.header}>
        <h1>盖瑞的精神时光屋</h1>
        <nav>
          <Link href="/"><a>主页</a></Link>
          <Link href="/about"><a>关于</a></Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        Designed by Garry Mak.
      </footer>
    </>
  }
}

export default Header;
