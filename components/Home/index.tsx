import { withRouter } from "next/router";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ORDER_BY_TYPE } from "../../services/article";
import ActicleActionCreator from "../../store/actions/acticle";
import Dropdown, { DropdownMenuItem } from "../Dropdown";
import Pagination from "../Pagination";
import Articles from "./Articles";
import styles from "./Home.module.scss";

// export async function getServerSideProps() {
//   const articlesData = await ArticleService.getArticlesPaging();
//   console.log("getServerSidePropss");
//   return { props: { articlesData, status: "resolved" } };
// }

interface HomeState {
  orderBy: number;
  dropdownMenu: Array<DropdownMenuItem>;
  currentDropdownName: string;
}
@connect(
  (state) => ({ ...state.article }),
  (dispatch) => ({
    actions: bindActionCreators(ActicleActionCreator, dispatch),
    dispatch,
  })
)
class HomeComp extends React.Component<any, HomeState> {
  public state: HomeState = {
    orderBy: 0,
    dropdownMenu: [
      {
        name: "按时间从近到远",
        key: "orderByTimeDesc",
        value: 0,
        disabled: false,
      },
      {
        name: "按时间从远到近",
        key: "orderByTimeAsc",
        value: 1,
        disabled: false,
      },
      {
        name: "最热",
        key: "hot",
        value: 2,
        disabled: false,
      },
    ],
    currentDropdownName: "按时间从近到远",
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.validateQuery();
    console.log(await this.props.actions.fetchActicles());
  }

  changeCurrent(c) {
    this.props.actions.fetchActicles({ currentPage: c });
  }

  validateQuery() {
    const { query = ORDER_BY_TYPE.TIME } = this.props.router;
    const { orderBy } = query;

    if (!(orderBy in ORDER_BY_TYPE)) {
      this.setState({ orderBy: ORDER_BY_TYPE.TIME });
    } else {
      this.setState({ orderBy: Number(orderBy) });
    }
    this.resetDropdown();
    console.log(this.state);
  }

  public resetDropdown() {
    let command = this.state.dropdownMenu.filter(
      (m) => m.value === this.state.orderBy
    )[0];
    if (!command) return;
    this.setState({ currentDropdownName: command.name });
  }

  public handleCommand(key: string) {
    let command = this.state.dropdownMenu.filter((m) => m.key === key)[0];
    if (!command) return;

    this.setState({ currentDropdownName: command.name });
    this.props.actions.fetchActicles({ orderBy: command.value });
  }

  public render() {
    const { articlesData, status, router } = this.props;
    const { orderBy, dropdownMenu, currentDropdownName } = this.state;
    const {
      data,
      total,
      currentPage,
      pageCount,
      statusCode,
      message,
    } = articlesData;

    // console.log("state", orderBy);

    return (
      <section className={`container ${styles.home}`}>
        <div className={styles.articles}>
          <h3>
            文章列表 {status === "pending" && "loading"}
            <Dropdown
              className={styles.filter}
              menu={dropdownMenu}
              onCommand={this.handleCommand.bind(this)}
            >
              <button
                className={`button ${
                  orderBy === ORDER_BY_TYPE.TIME && "active"
                }`}
                data-type="text"
              >
                <span>排序（{currentDropdownName}）</span>
              </button>
            </Dropdown>
          </h3>
          {status === "rejected" ? (
            `${statusCode}: ${message}`
          ) : (
            <>
              <Articles data={data} />
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

export default withRouter(HomeComp);
