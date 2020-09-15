import Link from "next/link";
import * as React from "react";
import formatTime from "../../utils/formatTime";
import styles from "./Home.module.scss";

class ArticlesComp extends React.Component<any, any> {
  public render() {
    const { data = [] } = this.props;

    return (
      <>
        {data.length === 0 ? (
          "暂无数据"
        ) : (
          <ul>
            {data.map((a, index) => (
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
                    <span>
                      <i className="iconfont icon-hot"></i>
                      {a.like}
                    </span>
                    <span>
                      <i className="iconfont icon-eye"></i>
                      {a.pageView}
                    </span>
                    <time className="float-right">
                      {formatTime(a.createTime, "YYYY-MM-dd")}
                    </time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ArticlesComp;
