import React from "react"
import ArticleCard from "./article-card";

const ArticleGrid = ({ articles, category, postCount }) => {

    function checkCategory(article)
    {
        if(category === 'All')
        {
            return article;
        }
        else if(article.Categories[0].Name === category)
        {
            return article;
        }
    }

    return (
        <div id="post-grid" className={ `post-section` }>
            {articles.filter(checkCategory).slice(0, postCount).map((article) => (
                <ArticleCard article={ article } key={ article.id }/>
            ))}
        </div>
    );
}

export default ArticleGrid