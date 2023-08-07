import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '../../utils/convertDateToText'

const BlogItem: React.FC<{
  title: string
  date: string
  slug: string
  excerpt: string
  imagePath: string | null
}> = ({ title, date, slug, excerpt, imagePath }) => {
  const linkTo = `/blog/${slug}`

  return (
    <>
      <div className="container blog-list">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="entry-image">
              <Link to={linkTo}>
                <img
                  src={imagePath}
                  className="m-0"
                  alt="img"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </div>

            <div className="entry-content">
              <article>
                <Link to={linkTo} className="blog-title">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                  />
                </Link>

                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {formatDate(date)}
                </span>

                <div className="entry-summary">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: excerpt,
                    }}
                  />
                </div>
              </article>

              <div>
                <Link to={linkTo} className="readmore">
                  Read More
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogItem
