/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// import { FixedImageSrc } from '../../types';

import FadeIn from '../fade-in'
import { formatDate } from '../../utils/convertDateToText'

// interface LatestBlogPosts {
// 	posts: {
// 		edges: {
// 			node: {
// 				title: string;
// 				date: string;
// 				categories: string;
// 				slug: string;
// 				excerpt: string;
// 				featured_image: FixedImageSrc;
// 			};
// 		}[];
// 	};
// }

interface CardsProps {
  title: string
  tag: string
  sub_title: string
  blog_date: string
  blog_slug: string
  long_description: {
    childMarkdownRemark: {
      html: string
    }
  }
  button_text: string
  card_image: {
    file: {
      url: string
    }
  }
}

interface DataPropsTypes {
  card_section_name: string
  section3_title: string
  slice_name: string
  cards: CardsProps[]
}

const LatestBlog: any = (data: DataPropsTypes) => {
  // const { posts } = useStaticQuery<LatestBlogPosts>(graphql`
  // 	query LatestBlogPosts {
  // 		posts: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 3) {
  // 			edges {
  // 				node {
  // 					title
  // 					date(formatString: "D MMMM YYYY")
  // 					categories
  // 					slug
  // 					excerpt(pruneLength: 300)
  // 					featured_image {
  // 						childImageSharp {
  // 							fixed(width: 375, height: 250) {
  // 								src
  // 							}
  // 						}
  // 					}
  // 				}
  // 			}
  // 		}
  // 	}
  // `);

  // console.log('hhh', data)

  // const inputDate = '2023-07-28T00:00+05:30'
  // const formattedDate = formatDate(inputDate)

  // console.log('formattedDate', formattedDate)

  return (
    <div className="container-fluid text-center latest-blog">
      <FadeIn fade="up">
        <div className="container latest-blog-wrapper">
          <h2>{data?.section3_title}</h2>

          {data &&
            data?.cards?.map((item, index) => (
              <div
                className="col-lg-4 pt-3 px-0 align-top blog-out"
                key={index}
              >
                <div className="blogs text-left">
                  <Link
                    to={`/blog/${item?.blog_slug}`}
                    // to="/"
                    className="latest-blog"
                  >
                    <div className="thumb">
                      {/* {childImageSharp ? (
                        <img
                          src={childImageSharp.fixed.src}
                          className="m-0"
                          alt={title}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      ) : null} */}

                      <img
                        //   src={childImageSharp.fixed.src}
                        src={item?.card_image?.file?.url}
                        className="m-0"
                        alt="img"
                        style={{ width: '100%', height: 'auto' }}
                      />

                      {/* <span className="cat">{categories.split(',')[0]}</span> */}

                      <span className="cat">{item?.tag}</span>
                    </div>

                    <div className="content content_wrap">
                      <h3>{item?.title}</h3>
                      <span className="text-left feature-date">
                        {/* {item?.sub_title} */}
                        {/* {item?.blog_date} */}

                        {formatDate(item?.blog_date)}
                      </span>

                      <div className="blog-excerpt">
                        {/* <div>{excerpt}</div> */}

                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              item?.long_description?.childMarkdownRemark?.html,
                          }}
                        />
                      </div>

                      <div className="readmore-link readmore_link">
                        <span className="read-more">
                          {/* {item?.button_text} */}
                          Read More
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="ml-2"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}

          {/* {posts.edges.map(
						({
							node: {
								title,
								date,
								categories,
								featured_image: { childImageSharp },
								excerpt,
								slug,
							},
						}) => (
							<div className='col-lg-4 pt-3 px-0 align-top blog-out' key={slug}>
								<div className='blogs text-left'>
									<Link to={`/blog${slug}`} className='latest-blog'>
										<div className='thumb'>
											{childImageSharp ? (
												<img
													src={childImageSharp.fixed.src}
													className='m-0'
													alt={title}
													style={{ width: '100%', height: 'auto' }}
												/>
											) : null}
											<span className='cat'>{categories.split(',')[0]}</span>
										</div>
										<div className='content'>
											<h3>{title}</h3>
											<span className='text-left feature-date'>{date}</span>
											<div className='blog-excerpt'>
												<div>{excerpt}</div>
											</div>
											<div className='readmore-link'>
												<span className='read-more'>
													Read More
													<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
												</span>
											</div>
										</div>
									</Link>
								</div>
							</div>
						)
					)} */}
        </div>
      </FadeIn>
    </div>
  )
}
export default LatestBlog
