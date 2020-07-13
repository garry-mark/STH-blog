import * as React from 'react';
import styles from './Article.module.scss';
import { ArticleVO, ARTICLE_CONTENT_TYPE, DEFAULT_ARTICLE } from '../../services/article';

type ArticleState = ArticleVO;
interface ArticleProps{
  aid: number;
}

class ArticleComp extends React.Component<ArticleProps, ArticleState> {

    public state: ArticleState = DEFAULT_ARTICLE;

    private renderContent(
        type: ARTICLE_CONTENT_TYPE = ARTICLE_CONTENT_TYPE.PLAIN,
        content: string = '暂无数据'
    ){
        // 使用switch/case、object实现、抽象类实现
        switch(type){
            case ARTICLE_CONTENT_TYPE.PLAIN:
                return <div className={styles.content}>{content}</div>;
            case ARTICLE_CONTENT_TYPE.HTML:
                return null;
            case ARTICLE_CONTENT_TYPE.MARKDOWN:
                return null;
        }
    }

    public render() {
        const { aid } = this.props;
        const {
            title,
            categoryName,
            content,
            contentType,
            pageView,
            like,
            updateTime,
            author,
            origin,
            originURL
        } = this.state;
        return (
            <article className={styles.article}>
                <h2>{title}</h2>
                <div className={styles.info}>
                    <span className={styles.category}>分类：{categoryName}</span>
                    <span className={styles.author}>作者：{author}</span>
                    <span className={styles.time}>最近修改：{updateTime}</span>
                    {origin && <span className={styles.origin}>
                        {originURL ? <a target="_blank" href={originURL}>{origin}</a> : origin}
                    </span>}
                </div>
                {this.renderContent(contentType, content)}
                <footer>
                    <span><i className="icon iconfont-view"></i>阅读数量：{pageView}</span>
                    <span><i className="icon iconfont-like"></i>点赞数量：{like}</span>
                </footer>
            </article>
        );
    }
}

export default ArticleComp;
