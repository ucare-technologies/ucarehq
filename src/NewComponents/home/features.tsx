// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FadeIn from '../fade-in'
import FeatureList from '../features/feature-list'
import {
  AttendanceFeature,
  CheckInFeature,
  EventsFeature,
  GroupsFeature,
  ProcessesFeature,
  GivingFeature,
} from '../features/features'
import ucareHeart2 from '../../../content/assets/ucare-heart2.svg'
import Feature from '../features/feature'

interface CardsProps {
  title: string
  card_image: {
    file: {
      url: string
    }
  }
  image_classname: string
  feature_slug: string
}

interface DataPropsTypes {
  slice_name: string
  button_link: string
  button_text: string
  card_section_name: string
  section3_title: string
  cards: CardsProps[]
}

export default function Features(data: DataPropsTypes) {
  // console.log('hhh', data)

  return (
    <div className="container-fluid features">
      <div className="container p-0 text-center">
        {data && (
          <>
            <FadeIn fade="up">
              <h2 className="features-title text-center">
                {data?.section3_title}
                <img src={ucareHeart2} alt="ucareHeart2" />
              </h2>
            </FadeIn>
            <FeatureList>
              {/* <AttendanceFeature />
              <CheckInFeature />
              <EventsFeature />
              <GroupsFeature />
              <ProcessesFeature />
              <GivingFeature /> */}

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
            <FadeIn className="explore-more" fade="up">
              <Link to="/features" className="explore-more-btn">
                {data?.button_text}
                <span className="ms-2">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </FadeIn>
          </>
        )}
      </div>
    </div>
  )
}
