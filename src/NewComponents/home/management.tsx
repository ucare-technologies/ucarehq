// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import FadeIn from '../fade-in'

import { useLocation } from '@reach/router'

interface DataPropsTypes {
  basic_info_section_name: string
  button_text: string
  slice_name: string
  section2_title: string
  sub_title: string
  button_link: string
}

export default function Management(data: DataPropsTypes) {
  // console.log('hhh', data)

  const ll = useLocation()

  // console.log('lll', ll)

  return (
    <FadeIn
      as="section"
      className="container management justify-content-center"
      fade="up"
    >
      <h1 className="text-center title">{data && data?.section2_title}</h1>
      <h2 className="text-center try-ucare">
        {data && data?.sub_title}{' '}
        <Link to={data?.button_link}>
          <button className="try-today align-text-bottom" type="button">
            {data && data?.button_text}
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </button>
        </Link>
      </h2>
    </FadeIn>
  )
}
