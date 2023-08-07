// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import { features } from './features'
import Check from '../icons/check'
import Remove from '../icons/remove'

const PricingDetails: React.FC = (data: any) => {
  // console.log('hhh', data)

  const featureSets = features()
  return (
    <div className="feature-sets">
      {data && (
        <header>
          <h2>{data?.section3_title}</h2>
          {/* <p>{data?.description?.childMarkdownRemark?.html}</p> */}

          <div
            dangerouslySetInnerHTML={{
              __html: data?.section3_des?.childMarkdownRemark?.html,
            }}
          />
        </header>
      )}

      {data &&
        data?.plan_feature_list?.map((item, index) => (
          <section key={index}>
            <details open>
              <summary>
                <h2>{item.title}</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.description?.childMarkdownRemark?.html,
                  }}
                />
              </summary>

              <table>
                <thead>
                  <tr>
                    <th scope="col" className="visually-hidden">
                      Features
                    </th>
                    <th scope="col" className="edition">
                      <span>Essentials</span>
                    </th>
                    <th scope="col" className="edition">
                      <span>Growth</span>
                    </th>
                    <th scope="col" className="edition">
                      <span>Lighthouse</span>
                    </th>
                  </tr>
                </thead>

                {/* <Remove /> */}

                <tbody>
                  {item?.plan_feature_list?.map((f, idx) => (
                    <tr key={idx}>
                      <th scope="row">{f.feature_text}</th>
                      <td className="edition">
                        {f.essentials_text === null ? (
                          f.essentials_check ? (
                            <Check />
                          ) : (
                            <Remove />
                          )
                        ) : f.essentials_check ? (
                          <>
                            <Check />
                            {f.essentials_text || ''}
                          </>
                        ) : (
                          <>
                            {/* <Remove /> */}
                            {f.essentials_text || ''}
                          </>
                        )}

                        {/* {f.essentials_text === null ? (
                          <Check />
                        ) : (
                          f.essentials_text || ''
                        )} */}
                      </td>
                      <td className="edition">
                        {f.growth_text === null ? (
                          f.growth_check ? (
                            <Check />
                          ) : (
                            <Remove />
                          )
                        ) : f.growth_check ? (
                          <>
                            <Check />
                            {f.growth_text || ''}
                          </>
                        ) : (
                          <>
                            {/* <Remove /> */}
                            {f.growth_text || ''}
                          </>
                        )}

                        {/* {f.growth_text === null ? (
                          f.growth_check ? (
                            <Check />
                          ) : (
                            <Remove />
                          )
                        ) : (
                          f.growth_text || ''
                        )} */}
                      </td>
                      <td className="edition">
                        {f.lighthouse_text === null ? (
                          f.lighthouse_check ? (
                            <Check />
                          ) : (
                            <Remove />
                          )
                        ) : f.lighthouse_check ? (
                          <>
                            <Check />
                            {f.lighthouse_text || ''}
                          </>
                        ) : (
                          <>
                            {/* <Remove /> */}
                            {f.lighthouse_text || ''}
                          </>
                        )}

                        {/* {f.lighthouse_text === null ? (
                          f.lighthouse_check ? (
                            <Check />
                          ) : (
                            <Remove />
                          )
                        ) : (
                          f.lighthouse_text || ''
                        )} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </section>
        ))}

      {/* {featureSets.map((set) => (
        <section key={set.name}>
          <details open>
            <summary>
              <h2>{set.name}</h2>
              <p>{set.description}</p>
            </summary>
            <table>
              <thead>
                <tr>
                  <th scope="col" className="visually-hidden">
                    Features
                  </th>
                  <th scope="col" className="edition">
                    <span>Essentials</span>
                  </th>
                  <th scope="col" className="edition">
                    <span>Growth</span>
                  </th>
                  <th scope="col" className="edition">
                    <span>Lighthouse</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {set.features.map((f) => (
                  <tr key={f.name}>
                    <th scope="row">{f.name}</th>
                    <td className="edition">{f.Essentials}</td>
                    <td className="edition">{f.Growth}</td>
                    <td className="edition">{f.Lighthouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </section>
      ))} */}
    </div>
  )
}
export default PricingDetails
