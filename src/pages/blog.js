import React, { useState } from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import ArticleGrid from '../components/article-grid';

const BlogPage = () => {

    const [currentCategory, setCategory] = useState("All");
    const [postCount, setPostCount] = useState(8);

    const { allStrapiCategory, allStrapiArticle } = useStaticQuery(graphql`
        query {
            allStrapiCategory {
                nodes {
                    Name
                    id
                }
            }
            allStrapiArticle {
                nodes {
                    Title
                    Image {
                        url
                    }
                    Excerpt
                    Categories {
                        Name
                    }
                    Slug
                    id
                }
            }
        }
    `);
    
    let categories = allStrapiCategory['nodes'];
    let articles = allStrapiArticle['nodes'];
    let loadCount = 4;

    function changeCategory(event, newCategory)
    {
        setCategory(newCategory);
        document.getElementsByClassName('selected')[0].classList.remove('selected');
        event.nativeEvent.srcElement.classList.add('selected');
    }

    function loadMore(event)
    {
        let newPostCount = postCount + loadCount;

        if(newPostCount >= articles.length)
        {
            event.nativeEvent.srcElement.classList.add('greyed-out');
            setPostCount(articles.length);
        }
        else
        {
            setPostCount(newPostCount);
        }
    }

    return (
        <Layout>
            <div id="blog">
                <div className={ `topic-section` }>
                    <button className={ `topics selected` } onClick={(e) => { changeCategory(e, 'All') }}>All</button>
                    { categories.map((category) => ( <div key={ category.id }><FontAwesomeIcon icon={'fa-diamond'} /><button topic-id={ category.Name } className={ `topics` } onClick={(e) => { changeCategory(e, category.Name) }}>{ category.Name }</button></div> ))}
                </div>

                <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, margin: `10px auto 10px auto` }}></hr>

                <ArticleGrid articles={ articles } category={ currentCategory } postCount={ postCount }/>

                <button onClick={(e) => { loadMore(e) }}>LOAD MORE</button>
            </div>
        </Layout>
    )
}

export default BlogPage