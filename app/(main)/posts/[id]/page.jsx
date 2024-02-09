import PostNavbar from '@/components/PostNavbar'
import { notFound } from 'next/navigation'
import React from 'react'

const getSinglePostData = async (id) => {
  const res = await fetch(`http://localhost:4000/posts/${id}`, {
    next: {
      revalidate: 0,
    },
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export const PostPage = async ({ params: { id } }) => {
  const { title } = await getSinglePostData(id)
  return (
    <>
      <PostNavbar title={title} />
      <main className='container mx-auto max-w-3xl mt-4'>
        <div>Post: {title}</div>
      </main>
    </>
  )
}

export default PostPage
