import MainPostItem from '@/components/Main-post-item'
import Navbar from '@/components/Navbar'

const getBlogPosts = async () => {
  try {
    const res = await fetch('http://localhost:4000/posts', {
      next: { revalidate: 0 },
    })
    return res.json()
  } catch (error) {
    throw new Error('failed to fetch data')
  }
}

export default async function Home() {
  const posts = await getBlogPosts()
  return (
    <>
      <Navbar />
      <main className='container mx-auto max-w-3xl mt-4'>
        <MainPostItem posts={posts} />
      </main>
    </>
  )
}
