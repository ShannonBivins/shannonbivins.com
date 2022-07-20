import React from "react"

const ArticleCard = ({ article }) => {

    return (
        <div className={ `post` } topic={ article.Categories[0].Name }>
            <a style={{ position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }} href={ '/blog/' + article.Slug }>{ null }</a>

            <img className={ 'post-img' } src={ article.Image.url } alt=""/>

            <div className={ `post-info` }>
                <p className={ `category` }>{ article.Categories[0].Name }</p>

                <div>
                    <h3 className={ `post-title` }>{ article.Title }</h3>

                    <div className={ `info` }>
                        <p className={ `post-excerpt` }>{ article.Excerpt }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard