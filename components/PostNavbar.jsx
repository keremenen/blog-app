import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export const PostNavbar = ({ title }) => {
  return (
    <nav className=' bg-gray-100 dark:bg-slate-900'>
      <div className='flex items-center justify-between px-4 py-4 max-w-5xl mx-auto'>
        <Link href={'/'}>
          <Button
            variant='outline'
            className='w-[42px] h-[42px] rounded-full p-0 flex-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-[20px] h-[20px]'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5 8.25 12l7.5-7.5'
              />
            </svg>
          </Button>
        </Link>
        <h1>{title}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='/assets/avatar.jpg' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Przemysław Kitowski</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Posts
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Bookmarks
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default PostNavbar
