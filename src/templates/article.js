import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery } from 'gatsby';

const ArticlePage = ({ data }) => {

    const article = useStaticQuery(graphql`
        query($Slug: String) {
            strapiArticle(Slug: { eq: $Slug }) {
                Title
                Image {
                    url
                }
                Categories {
                    Name
                }
                Content {
                    data {
                        Content
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, backgroundColor: `var(--black)`, padding: `60px`, borderRadius: `8px`, marginTop: `80px`, borderBottom: `solid 2px var(--gold)` }}>
                <img src={ article.strapiArticle.Image.url } style={{ backgroundColor: `var(--light-blue)`, padding: `40px`, borderRadius: `8px`, borderBottom: `solid 2px var(--platinum)` }} alt=""/>
                <h2 style={{ margin: `40px 0 0 0` }}>{ article.strapiArticle.Title }</h2>
                <h4 style={{ margin: `10px 0 0 0` }}>{ article.strapiArticle.Categories[0].Name }</h4>
                <hr style={{ width: `80px`, border: `1px solid var(--gold)`, margin: `20px 0` }}></hr>
                <p style={{ margin: 0 }}>{ article.strapiArticle.Content.data.Content }</p>
            </div>
        </Layout>
    )
}

export default ArticlePage