import React from 'react'
import { Button } from './ui/button'

const PostOptions = () => {
  return (
    <div className='grid grid-flow-col gap-6'>
      <Button
        variant='outline'
        className='text-gray-500'>
        Comments
      </Button>
      <Button
        variant='outline'
        className='text-gray-500'>
        Booksmarks
      </Button>

      <Button
        variant='outline'
        className='text-gray-500'>
        Share
      </Button>
    </div>
  )
}

export default PostOptions
