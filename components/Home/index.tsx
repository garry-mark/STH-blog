import Link from "next/link";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import ArticleService from "../../services/article";
import ActicleActionCreator from "../../store/actions/acticle";
import formatTime from "../../utils/formatTime";
import Pagination from "../Pagination";
import styles from "./Home.module.scss";

// export async function getServerSideProps() {
//   const articlesData = await ArticleService.getArticlesPaging();
//   console.log("getServerSidePropss");
//   return { props: { articlesData, status: "resolved" } };
// }

interface HomeState {}
@connect(
  (state) => ({ ...state.article }),
  (dispatch) => ({
    actions: bindActionCreators(ActicleActionCreator, dispatch),
    dispatch,
  })
)
class HomeComp extends React.Component<any, HomeState> {
  public state: HomeState;

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(await this.props.actions.fetchActicles());
  }

  changeCurrent(c) {
    this.props.actions.fetchActicles({ currentPage: c });
  }

  public render() {
    const { articlesData, status } = this.props;
    const {
      data,
      total,
      currentPage,
      pageCount,
      statusCode,
      message,
    } = articlesData;
    return (
      <section className={`container ${styles.home}`}>
        <div className={styles.articles}>
          <h3>最近更新 {status === "pending" && "loading"}</h3>
          {status === "rejected" && `${statusCode}: ${message}`}
          {status === "resolved" && data.length === 0 ? (
            "暂无数据"
          ) : (
            <>
              <ul>
                {data.map((a, index) => (
                  <li key={index} className={`${styles.item} panel`}>
                    <Link key={index} href="/posts/[id]" as={`/posts/${a.aid}`}>
                      <img
                        className={styles.banner}
                        src={a.banner}
                        alt={a.title}
                      />
                    </Link>
                    <div className={styles.content}>
                      <Link
                        key={index}
                        href="/posts/[id]"
                        as={`/posts/${a.aid}`}
                      >
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
              <Pagination
                total={total}
                currentPage={currentPage}
                pageCount={pageCount}
                disabled={status === "pending"}
                showNumberLen={5}
                onCurrentChange={this.changeCurrent.bind(this)}
              />
            </>
          )}
        </div>
      </section>
    );
  }
}

export default HomeComp;
