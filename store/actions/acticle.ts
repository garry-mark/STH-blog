import ArticleService, {
  ArticleVO,
  RequestPagingData,
  ResponsePagingData,
} from "../../services/article";

function setArticles(articlesData: Partial<ResponsePagingData<ArticleVO>>) {
  return {
    type: "SET_ARTICLES",
    articlesData,
    lastModify: Date.now(),
  };
}

function setStatus(status: "pending" | "resolved" | "rejected") {
  return {
    type: "SET_STATUS",
    status,
  };
}

function fetchActicles(arg: Partial<RequestPagingData>) {
  return async (dispatch) => {
    try {
      dispatch(setStatus("pending"));
      const data = await ArticleService.getArticlesPaging(arg);
      dispatch(setArticles(data));
      dispatch(setStatus("resolved"));
    } catch (error) {
      dispatch(setStatus("rejected"));
    }

    return;
  };
}

export default {
  setArticles,
  fetchActicles,
};
