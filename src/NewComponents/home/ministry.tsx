// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import ChildrenIcon from '../icons/ministry-icons/children'
import YouthIcon from '../icons/ministry-icons/youth'
import WorshipIcon from '../icons/ministry-icons/worship'
import AdminFinancesIcon from '../icons/ministry-icons/admin.finances'
import CounsellingIcon from '../icons/ministry-icons/counselling'
import SmallGroupsIcon from '../icons/ministry-icons/smallgroup'
import FadeIn from '../fade-in'

interface DataPropsTypes {
  button_link: string | null
  button_text: string | null
  card_section_name: string
  section3_description: string
  section3_title: string
  slice_name: string
  cards: {
    card_name: string
    description: string
    image_classname: string | null
    title: string
    card_image: {
      file: {
        url: string
      }
    }
  }[]
}

export default function Ministry(data: DataPropsTypes) {
  //   console.log('hhh', data)

  return (
    <section className="container ministry">
      {data && (
        <>
          <FadeIn className="row text-center" fade="up">
            <div className="col-md-12">
              <h2>
                {/* Ministry. <br className="visible-xs" />
            We’ve got you covered. */}

                {data?.section3_title}
              </h2>
              <p>{data?.section3_description}</p>
            </div>
          </FadeIn>

          <FadeIn className="row text-center" fade="up">
            {data?.cards?.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="ministry-circle">
                  {/* <ChildrenIcon /> */}

                  <img src={item?.card_image?.file?.url} alt={item?.title} />
                </div>
                <h5>{item?.title}</h5>
                <h6>{item?.description}</h6>
              </div>
            ))}
          </FadeIn>

          {/* <FadeIn className="row text-center" fade="up">
            <div className="col-md-4">
              <div className="ministry-circle">
                <ChildrenIcon />
              </div>
              <h5>CHILDREN</h5>
              <h6>
                First impressions last so make a great start with easy to use
                check-in that improves child safety and volunteer management.
              </h6>
            </div>

            <div className="col-md-4">
              <div className="ministry-circle">
                <YouthIcon />
              </div>
              <h5>YOUTH</h5>
              <h6>
                Track attendance, book events, broadcast SMS, organize groups.
                There’s a lot youth ministry needs, UCare helps with it all.
              </h6>
            </div>

            <div className="col-md-4">
              <div className="ministry-circle">
                <WorshipIcon />
              </div>
              <h5>WORSHIP &amp; SERVICES</h5>
              <h6>
                Plan services, organize teams, confirm volunteers and learn new
                songs. We’ve got the tool that will simplify it all.
              </h6>
            </div>
          </FadeIn> */}

          {/* <FadeIn className="row text-center" fade="up">
            <div className="col-md-4">
              <div className="ministry-circle">
                <AdminFinancesIcon />
              </div>
              <h5>ADMIN &amp; FINANCES</h5>
              <h6>
                Reporting trends, tracking finances and managing facilities can
                quickly overload the best admins, why not let UCare take the
                load?
              </h6>
            </div>
            <div className="col-md-4">
              <div className="ministry-circle">
                <CounsellingIcon />
              </div>
              <h5>COUNSELLING &amp; FOLLOWUP</h5>
              <h6>
                Run effective counselling services &amp; ensure people don’t
                fall through the cracks. UCare tracks it &amp; sends timely
                reminders with ease.
              </h6>
            </div>
            <div className="col-md-4">
              <div className="ministry-circle">
                <SmallGroupsIcon />
              </div>
              <h5>SMALL GROUPS &amp; CONNECTION</h5>
              <h6>
                Make it easy for people to find &amp; join groups. Give leaders
                the tools they need to communicate &amp; quickly report
                attendance.
              </h6>
            </div>
          </FadeIn> */}
        </>
      )}
    </section>
  )
}
