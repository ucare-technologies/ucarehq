import React from 'react'
import Layout from '../layout'
import SEO from '../seo'
import PageHeader from '../page-header'
import BlogItem from './blog-item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import LatestBlog from './latest-blog'

interface singleBlogsTypes {
  title: string
  long_description: {
    childMarkdownRemark: {
      html: string
    }
  }
  card_image: {
    file: {
      url: string
    }
  }
  id: string
  blog_slug: string
  blog_date: string
}

interface BannerTypes {
  rich_title: {
    childMarkdownRemark: {
      html: string
    }
  }
  section1_des: {
    childMarkdownRemark: {
      html: string
    }
  }
  background_image: {
    file: {
      url: string
    }
  }
}

const AllPosts: React.FC<{
  blogsPageData: {
    all_blogs_banner_section: BannerTypes
    single_blogs: singleBlogsTypes[]
    others_all_blogs_section: any
  }
  currentPage: number
  limit: number
}> = ({ blogsPageData, currentPage, limit }) => {
  // console.log('blogs', blogsPageData?.single_blogs)
  // console.log('blogsPageData', blogsPageData)

  const numPages = Math.ceil(blogsPageData?.single_blogs?.length / limit)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 <= 1 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  const start = (currentPage - 1) * limit
  const pagePosts = blogsPageData?.single_blogs?.slice(start, start + limit)

  // console.log('pagePosts', pagePosts)

  return (
    <>
      <Layout>
        <SEO
          title={currentPage === 1 ? 'Blog' : `Blog | Page ${currentPage}`}
        />

        <main>
          <PageHeader key={1} {...blogsPageData?.all_blogs_banner_section} />

          {pagePosts &&
            pagePosts?.map(
              ({
                title,
                long_description,
                blog_date,
                card_image,
                blog_slug,
              }) => (
                <BlogItem
                  title={title}
                  date={blog_date}
                  slug={blog_slug}
                  excerpt={long_description?.childMarkdownRemark?.html}
                  imagePath={card_image?.file?.url || null}
                  key={blog_slug}
                />
              )
            )}

          <div className="container blog-list-main">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="arrow">
                  {!isLast && (
                    <Link to={nextPage} rel="next">
                      <button
                        type="button"
                        className="btn btn-default arrow-btn"
                      >
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          className="arrow-icon mr-2"
                        />
                        Older
                      </button>
                    </Link>
                  )}
                  &nbsp;&nbsp;&nbsp;
                  {!isFirst && (
                    <Link to={prevPage} rel="prev">
                      <button
                        type="button"
                        className="btn btn-default arrow-btn"
                      >
                        Newer
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="arrow-icon ml-2"
                        />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        <LatestBlog key={2} {...blogsPageData?.others_all_blogs_section[0]} />
      </Layout>
    </>
  )
}

export default AllPosts
