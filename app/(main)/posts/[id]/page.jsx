import PostNavbar from '@/components/PostNavbar'
import PostOptions from '@/components/PostOptions'
import Image from 'next/image'
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
  const { title, featuredImage, createdAt, category, timeToRead, content } =
    await getSinglePostData(id)
  return (
    <>
      <PostNavbar title={title} />
      <main className='container max-w-4xl mx-auto '>
        <div className='bg-white pt-6 pb-12 px-4 mt-4 rounded-lg md:px-12'>
          <div className='h-[288px] relative'>
            <Image
              src={featuredImage}
              alt='Featured-image'
              fill
              className='rounded-2xl border-[1px] border-gray-300 object-cover'
            />
          </div>
          <h2>{title}</h2>
          <div className='grid grid-cols-2 gap-2 text-gray-500 text-sm border-[1px] rounded-lg p-2 mb-4'>
            <span className='text-md flex font-semibold text-gray-900'>
              Przemysław Kitowski
            </span>
            <div>{createdAt}</div>
            <div>{category}</div>
            <div>{timeToRead}</div>
          </div>
          <PostOptions />
          <div className='my-3 text-base leading-8 text-gray-700'>
            {content}
          </div>
          <PostOptions />
        </div>
      </main>
    </>
  )
}

export default PostPage
