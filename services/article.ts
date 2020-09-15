import { sleep } from "../utils/async-utils";

export enum ORDER_BY_TYPE {
  'TIME' = 0,
  'TIME_ASC',
  'HOT'
}
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

export interface Pagination {
  total: number;
  currentPage: number;
  pageCount: number;
}

export interface ResponsePagingData<T> extends Pagination {
  statusCode: number;
  message: string;
  data: Array<T>;
}

export interface RequestPagingData extends Pagination {
  condition: string;
  orderBy: number;
  sort: string;
}

export const DEFAULT_REQ_PAGING_DATA: Partial<RequestPagingData> = {
  orderBy: 0,
  total: 100,
  currentPage: 1,
  pageCount: 10,
};

export const DEFAULT_RES_PAGING_DATA: Partial<ResponsePagingData<any>> = {
  statusCode: 200,
  data: [],
  total: 100,
  currentPage: 1,
  pageCount: 10,
};

class ArticleService {
  constructor() {
    console.log("ArticleService constructor");
  }

  public async getArticleById(aid: number): Promise<ArticleVO> {
    return DEFAULT_ARTICLE;
  }

  public async getArticlesPaging(
    arg: Partial<RequestPagingData> = DEFAULT_REQ_PAGING_DATA
  ): Promise<Partial<ResponsePagingData<ArticleVO>>> {
    const { currentPage = 1 } = arg;
    const ap: Partial<ResponsePagingData<ArticleVO>> = {
      ...DEFAULT_RES_PAGING_DATA,
      currentPage,
    };
    try {
      // await withTimeout(100)(sleep(1000));
      await sleep(1000);
      ap.data = [DEFAULT_ARTICLE];
    } catch (error) {
      ap.message = error.message;
      ap.data = [];
    }
    return ap;
  }
}

export default new ArticleService();
