import React from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from "gatsby"


const BlogPage = () => {

    const { allStrapiCategory, allStrapiArticle } = useStaticQuery(graphql`
        query {
            allStrapiCategory {
                nodes {
                    Name
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
                }
            }
        }
    `)
    
    let categories = allStrapiCategory['nodes'];
    let articles = allStrapiArticle['nodes'];
    let postCount = 8;
    let loadCount = 4;

    function filterPosts(event, category)
    {
        let posts = document.getElementsByClassName('post');
        document.getElementsByClassName('selected')[0].classList.remove('selected');
        event.nativeEvent.srcElement.classList.add('selected');

        if(category === 'All')
        {
            for(let x = 0; x < articles.length; x++)
            {
                posts[x].style.display = 'flex';
            }
            return;
        }

        for(let x = 0; x < articles.length; x++)
        {
            if(posts[x].getAttribute('topic') === category.Name)
            {
                posts[x].style.display = 'flex';
            }
            else
            {
                posts[x].style.display = 'none';
            }
        }
    }

    function loadMore(event)
    {
        let articlesHTML = ``;
        let newTotal = postCount + loadCount;

        if(newTotal > articles.length)
        {
            return;
        }

        for(let x = postCount; x < newTotal; x++)
        {
            articlesHTML += `<div class="post" topic="${articles[x]['Categories'][0]['Name']}">
        
                <a style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;" href="/blog/${articles[x]['Slug']}"></a>
                    
                <img class="post-img" src="${articles[x]['Image']['url']}" alt="" />
                    
                <div class="post-info">
                        <p class="category">${articles[x]['Categories'][0]['Name']}</p>
            
                    <div>
                        <h3 class="post-title">${articles[x]['Title']}</h3>
                        <div class="info">
                            <p class="post-excerpt">${articles[x]['Excerpt']}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            
            postCount++;
        }
        document.getElementsByClassName('post-section')[0].innerHTML += articlesHTML;

        if(postCount === articles.length)
        {
            event.nativeEvent.srcElement.classList.add('greyed-out');
        }
    }

    return (
        <Layout>
            <div id="blog">
                <div className={ `topic-section` }>
                    <button className={ `topics selected` } onClick={(e) => { filterPosts(e, 'All') }}>All</button>
                    { categories.map((category, i) => ( <><FontAwesomeIcon icon={'fa-diamond'} /><button key={ i } topic-id={ category.Name } class="topics" onClick={(e) => { filterPosts(e, category) }}>{ category.Name }</button></> ))}
                </div>

                <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, margin: `10px auto 10px auto` }}></hr>

                <div className={ `post-section` }>
                    { articles.slice(0, postCount).map((article, i) => (
                        <div key={ i } className={ `post` } topic={ article.Categories[0].Name }>
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
                    ))}
                </div>

                <button onClick={(e) => { loadMore(e) }}>LOAD MORE</button>
            </div>
        </Layout>
    )
}

export default BlogPage