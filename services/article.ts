export interface ArticleVO {
  aid?: number;
  banner: string;
  introduction: string;
  title: string;
  categoryName: string;
  content: string;
  contentType: ARTICLE_CONTENT_TYPE;
  pageView: number;
  like: number;
  author: string;
  origin?: string;
  originURL?: string;
  createTime: number;
  updateTime: number;
}

export enum ARTICLE_CONTENT_TYPE {
  HTML = 0,
  MARKDOWN,
  PLAIN,
}

export const DEFAULT_ARTICLE = {
  aid: -1,
  banner: "/images/STH-BG.jpg",
  introduction:
    "哈哈哈啊哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈",
  title:
    "哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈",
  categoryName: "默认",
  content: "无",
  contentType: ARTICLE_CONTENT_TYPE.PLAIN,
  pageView: 0,
  like: 0,
  author: "盖瑞",
  origin: "",
  originURL: "https//www.baidu.com",
  createTime: 1594946405156,
  updateTime: 1594946405156,
};

export interface ResponsePagingData<T> {
  statusCode: number;
  message: string;
  data: Array<T>;
  total: number;
  currentPage: number;
  pageCount: number;
}

export interface RequestPagingData {
  condition: string;
  orderBy: string;
  sort: string;
  total: number;
  currentPage: number;
  pageCount: number;
}

export const DEFAULT_REQ_PAGING_DATA: Partial<RequestPagingData> = {
  orderBy: "createTime",
  sort: "desc",
  total: 100,
  currentPage: 1,
  pageCount: 10,
};

export const DEFAULT_RES_PAGING_DATA: Partial<ResponsePagingData<any>> = {
  statusCode: 200,
  data: [],
  total: 0,
  currentPage: 1,
  pageCount: 10,
};

class ArticleService {
  public articles: ArticleVO[] = [];
  constructor() {
    this.articles = [];
  }

  public async getArticleById(aid: number): Promise<ArticleVO> {
    return DEFAULT_ARTICLE;
  }

  public async getArticlesPaging(
    arg: Partial<RequestPagingData> = DEFAULT_REQ_PAGING_DATA
  ): Promise<Partial<ResponsePagingData<ArticleVO>>> {
    return DEFAULT_RES_PAGING_DATA;
  }
}

export default new ArticleService();
