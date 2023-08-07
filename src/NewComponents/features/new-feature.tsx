import React from 'react'
import FeatureList from './feature-list'
import Feature from './feature'

const NewFeature = (data: any) => {
  // console.log('hh', data)

  return (
    <>
      <div className="container-fluid p-0 m-0 feature-page">
        <div className="container text-center my-4">
          <div className="row feature-page-body">
            {data?.section3_title && (
              <div className="feature_body_title">
                <h2>{data?.section3_title}</h2>
              </div>
            )}

            {/* <p>
              UCare provides effective and easy to use all-in-one church
              management solution that doesn’t cost the world so you can focus
              on ministry and loving people. Explore each powerful feature to
              find out how UCare handles the simplest to the most complex needs.
            </p> */}

            <div
              dangerouslySetInnerHTML={{
                __html: data?.rich_description?.childMarkdownRemark?.html,
              }}
              // className="title_text"
            />
          </div>
          <div className="feature-body-list mb-5">
            {/* <FeatureList>
                  <AllFeatures />
                </FeatureList> */}

            <FeatureList>
              {data?.cards.map((item, index) => (
                <Feature
                  to={item?.feature_slug}
                  className={item?.image_classname}
                  label={item?.title}
                >
                  <img src={item?.card_image?.file?.url} alt={item?.title} />
                </Feature>
              ))}
            </FeatureList>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewFeature
