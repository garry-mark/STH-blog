import * as React from 'react';
import Link from 'next/link'
import styles from './Layout.module.scss';

class LayoutComp extends React.Component<any, any> {
  public render() {
    const { children } = this.props;
    return <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <h1>盖瑞的精神时光屋</h1>
          <nav>
            <Link href="/"><a>主页</a></Link>
            <Link href="/about"><a>关于</a></Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        Designed by Garry Mak.
      </footer>
    </div>
  }
}

export default LayoutComp;
