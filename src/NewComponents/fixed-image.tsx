// eslint-disable-next-line no-use-before-define
import * as React from 'react'

// import { FixedImageSrc } from '../types'

// export type FixedImageProps = FixedImageSrc;

const FixedImage: React.FC<{
  alt: string
  className?: string
  image: any
}> = ({
  alt,
  className,
  image: {
    childImageSharp: { fixed },
  },
}) => (
  <picture>
    {fixed.srcSetWebp && <source srcSet={fixed.srcSetWebp} type="image/webp" />}
    <source srcSet={fixed.srcSet} />
    <img
      srcSet={fixed.srcSet}
      src={fixed.src}
      alt={alt}
      className={className}
      width={fixed.width}
      height={fixed.height}
      loading="lazy"
    />
  </picture>
)
export default FixedImage
