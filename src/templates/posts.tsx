import React from 'react'
import AllPosts from '../NewComponents/blogs/posts'

const PostsPages = ({ pageContext, location }: any) => {
  return (
    <>
      <AllPosts location={location} {...pageContext} />
    </>
  )
}

export default PostsPages
