import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const MainPostItem = () => {
  return (
    <div className='p-2 border-[1px] border-gray-300 rounded-2xl'>
      <div className='bg-white p-5 rounded-lg border-[1px] border-gray-300'>
        <div className='aspect-video relative'>
          <Image
            src='/assets/background.jpeg'
            alt='Post image'
            fill
            className='object-cover rounded-2xl'
          />
        </div>
        <div className='mt-4'>
          <h3>How to Create a Winning Marketing Plan for Your Startup</h3>
        </div>

        <div className='flex text-gray-500 my-3 gap-2 items-center'>
          <Badge variant='secondary'>Marketing</Badge>
          <div className='flex items-center text-sm gap-1'>
            <div className='h-[18px] w-[18px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-full h-full'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                />
              </svg>
            </div>
            <span>20/10/2023</span>
          </div>
          <div className='flex items-center text-sm gap-1'>
            <div className='h-[18px] w-[18px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-full h-full'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            </div>
            <span>3 min</span>
          </div>
        </div>

        <p className='text-sm text-gray-600 leading-6'>
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
          Eleifend egestas fringilla sapien...
        </p>
        <Separator className='mt-4 mb-2' />
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src='/assets/avatar.jpg' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='text-sm'>
            <p className='text-bold-900 font-semibold'>Przemysław Kitowski</p>
            <p>Author</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPostItem
