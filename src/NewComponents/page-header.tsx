import React from 'react'
import hexToRgba from 'hex-to-rgba'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '../utils/convertDateToText'

const PageHeader: React.FC = (data: any) => {
  // console.log('hh', data)

  const rgbaColor = !data?.feature_colour
    ? 'rgba(50, 58, 70, 0.5)'
    : data?.feature_colour.indexOf('#') === 0
    ? hexToRgba(data?.feature_colour, 0.75)
    : data?.feature_colour

  const backgroundImage = `linear-gradient(${rgbaColor}, ${rgbaColor})`

  const backgroundColor = data?.feature_colour || '#323a46'

  return (
    <>
      {/* <header
        className="container-fluid p-0 page-header"
        style={{
          backgroundImage: `url(https://static9.depositphotos.com/1074452/1184/i/950/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg)`,
        }}
      >
        <div
          className="page_header_bg_img"
          style={{
            backgroundImage: `url(${data?.background_image?.file?.url})`,
          }}
        />

        <h1>Pricing for every church</h1>
        <h3>
          Simplify church management with any of our fully customizable
          editions.
        </h3>
      </header> */}

      {data && (
        <div
          className="container-fluid p-0 page_header_wrapper"
          style={{
            // backgroundImage: `url(${data?.background_image?.file?.url})`,
            backgroundImage: `${backgroundImage},url(${data?.background_image?.file?.url})`,
          }}
        >
          <div
            className="img_bg"
            style={{
              backgroundColor: backgroundColor,
              opacity: data?.feature_colour ? 0.8 : 0.5,
            }}
          />

          <div className="container position-sticky text-center h-100">
            <div className="text_wrap">
              {/* <h1>{rich_title}</h1> */}

              {data?.image && (
                <div className="banner_icon_wrapper">
                  <div className="banner_icon">
                    <img src={data?.image?.file?.url} alt="img" />
                  </div>
                </div>
              )}

              {data?.rich_title && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.rich_title?.childMarkdownRemark?.html,
                  }}
                  className="title_text"
                />
              )}

              {data?.section1_des && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.section1_des?.childMarkdownRemark?.html,
                  }}
                  className="des_text"
                />
              )}

              {data?.blog_date && (
                <span
                  className="date"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {formatDate(data?.blog_date)}
                </span>
              )}

              {/* <h3>
                Simplify church management with any of our fully customizable
                editions.
              </h3> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PageHeader
