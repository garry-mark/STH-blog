import Link from "next/link";
import * as React from "react";
import { ArticleVO, DEFAULT_ARTICLE } from "../../services/article";
import formatTime from "../../utils/formatTime";
import styles from "./Home.module.scss";

interface HomeState {
  articles: ArticleVO[];
}

class HomeComp extends React.Component<any, HomeState> {
  public state: HomeState;

  constructor(props) {
    super(props);
    this.state = {
      articles: [DEFAULT_ARTICLE],
    };
  }

  public render() {
    const { articles } = this.state;

    return (
      <section className={`container ${styles.home}`}>
        <div className={styles.articles}>
          <h3>最近更新</h3>
          <ul>
            {articles.map((a, index) => (
              <li key={index} className={`${styles.item} panel`}>
                <Link key={index} href="/posts/[id]" as={`/posts/${a.aid}`}>
                  <img className={styles.banner} src={a.banner} alt={a.title} />
                </Link>
                <div className={styles.content}>
                  <Link key={index} href="/posts/[id]" as={`/posts/${a.aid}`}>
                    <h4 className={styles.title}>
                      <a>{a.title}</a>
                    </h4>
                  </Link>
                  <p className={styles.introduction}>{a.introduction}</p>
                  <p className={styles.orther}>
                    {a.origin ? <a href={a.originURL}>{a.origin}</a> : null}
                    <span>{a.like}</span>
                    <span>{a.pageView}</span>
                    <time className="float-right">
                      {formatTime(a.createTime, "YYYY-MM-dd")}
                    </time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default HomeComp;
