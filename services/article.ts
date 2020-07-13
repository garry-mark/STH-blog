export interface ArticleVO {
    aid?: number;
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
    PLAIN
}

export const DEFAULT_ARTICLE = {
    aid: -1,
    title: '无',
    categoryName: '默认',
    content: '无',
    contentType: ARTICLE_CONTENT_TYPE.PLAIN,
    pageView: 0,
    like: 0,
    author: '盖瑞',
    origin: '',
    originURL: 'https//www.baidu.com',
    createTime: Date.now(),
    updateTime: Date.now()
}