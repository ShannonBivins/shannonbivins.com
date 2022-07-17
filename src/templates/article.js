import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const ArticlePage = ({ data }) => {

    return (
        <Layout>
            <div id="single-post" style={{ display: `flex`, flexDirection: `column`, alignItems: `center`, margin: `80px 0`, width: `100%` }}>
                <div style={{ width: `min(1000px, 90%)`, display: `flex`, flexDirection: `column` }}>
                    <div style={{ backgroundColor: `var(--black)`, borderRadius: `8px 8px 0 0`, padding: `60px 60px 0`, width: `fit-content`, boxSizing: `border-box`  }}>
                        <img className="post-img" src={ data.strapiArticle.Image.url } style={{ backgroundColor: `var(--light-blue)`, padding: `40px`, borderRadius: `8px`, borderBottom: `solid 2px var(--platinum)`, maxWidth: `500px` }} alt=""/>
                    </div>

                    <div style={{ backgroundColor: `var(--black)`, borderRadius: `0 8px 8px 8px`, borderBottom: `solid 2px var(--gold)`, padding: `0 60px 60px`, width: `100%`, boxSizing: `border-box`  }}>
                        <h2 style={{ margin: `40px 0 0 0` }}>{ data.strapiArticle.Title }</h2>
                        <h4 style={{ margin: `10px 0 0 0` }}>{ data.strapiArticle.Categories[0].Name }</h4>
                        <hr style={{ width: `80px`, border: `1px solid var(--gold)`, margin: `20px 0` }}></hr>
                        <p style={{ margin: 0 }}>{ data.strapiArticle.Content.data.Content }</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ArticlePage

export const article = graphql`
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
`