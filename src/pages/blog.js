import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import BlogList from '../components/blogs/bloglist';
import LatestBlog from '../components/blogs/latestblog';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      initImage: "",
      page : 0,
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handlePrevious() {
    this.setState({ page: this.state.page + 1 });
  }
  handleNext() {
    this.setState({ page: this.state.page - 1 });
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
              filter: { frontmatter: { type: {eq: "post"}}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                  url
                  tagline
                  title
                  date,
                  featured_image {
                    id
                    name
                    extension
                    relativePath
                  }
                }
                  excerpt(pruneLength: 240)
                  fields {
                    slug
                  }
                }
              }
            }
            allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{ eq:"images" }}) {
              edges {
                node {
                  publicURL
                  relativePath
                  name
                  ext
                }
              }
            }
            blog: file(relativePath: { eq: "page/blog/friends04.jpg" }) {
              publicURL
            }
          }
        `}
        render={ data => {
          const { allMarkdownRemark, allFile, blog } = data;
          const { page } = this.state;
          let imageArray = [];
          let pageLimit = 0;
          (page * 5 + 5) > allMarkdownRemark.totalCount ?
            pageLimit = allMarkdownRemark.totalCount
            :
            pageLimit = page * 5 + 5;
          for (let i = page * 5; i < pageLimit; i++) {
            const { date, title } = allMarkdownRemark.edges[i].node.frontmatter;
            const { slug } = allMarkdownRemark.edges[i].node.fields;
            let relativePath = null;
            if (allMarkdownRemark.edges[i].node.frontmatter.featured_image) {
              relativePath = allMarkdownRemark.edges[i].node.frontmatter.featured_image.relativePath
            } else {

            }
            const { excerpt } = allMarkdownRemark.edges[i].node;
            allFile.edges.map((item, key) => (
              item.node.relativePath === relativePath && 
              imageArray.push({
                imageUrl: item.node.publicURL,
                url: slug,
                date,
                title,
                excerpt
              })
            ))
          }
          return (
            <Layout>
              <div
                className="container-fluid p-0 blog-header text-center"
                style={ {
                  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${blog.publicURL})`,
                  backgroundColor: '#323a46',
                  backgroundPosition: '50%',
                  backgroundSize: 'cover'
                } }
              >
                <div className="centered">
                  <h1>Blog</h1>
                  <h6>Latest News & Updates from the UCare Team
</h6>
                </div>           
              </div>
              <div className="container blog-list-main">
                {
                  imageArray.map((item, key) => (
                    <BlogList
                      title={ item.title }
                      date={ item.date }
                      url={ item.url }
                      excerpt={ item.excerpt }
                      imageURL={ item.imageUrl }
                      key={key}
                  />
                  ))
                }
                <div className="arrow">
                  { page !== 8 &&  (
                    <button
                      type="button"
                      className="btn btn-default arrow-btn"
                      onClick={this.handlePrevious}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
                    </button>
                    
                  ) } 
                  {
                    page !== 0 && (
                      <button
                      type="button"
                      className="btn btn-default arrow-btn"
                      onClick={this.handleNext}
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                    </button> 
                    )
                  }
                </div>
              </div>
              <div>
                <LatestBlog />
              </div>
            </Layout>
          )
        }}
      />
     );
  }
}
 
export default Blog;