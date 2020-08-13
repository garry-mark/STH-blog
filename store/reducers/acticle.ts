export default function ArticleReducer(
  state = {
    status: "pending",
    lastModify: Date.now(),
    articlesData: { data: [] },
  },
  action: any
) {
  switch (action.type) {
    case "SET_ARTICLES":
      const { lastModify, articlesData } = action;
      return {
        ...state,
        lastModify,
        articlesData,
      };
    case "SET_STATUS":
      const { status } = action;
      return { ...state, status };

    default:
      return state;
  }
}
