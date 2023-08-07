// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import Details from './details'
import EditionSelect from './editions'

export default function Pricing({ sections }: any) {
  // console.log('sections', sections)

  const sectionType = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'plans':
        return <EditionSelect key={index} {...item} />
      case 'plan_edition_details':
        return <Details key={index} {...item} />

      default:
        return null
    }
  })

  return (
    <div id="pricing" className="price-calc">
      {sectionType}
    </div>
  )
}
