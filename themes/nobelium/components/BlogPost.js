import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'

const BlogPost = ({ post }) => {
  return (
    (<Link href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-9 flex flex-row space-x-3 md:space-x-5">
        <div className="flex-none w-[100px] h-[100px] md:w-[120px] md:h-[120px] ">
          <LazyImage src={post?.pageCoverThumbnail} alt={post?.title} className='w-full h-full object-cover hover:brightness-75 transition-all duration-300' />
        </div>
        <div className="flex flex-col">
          <header className="flex flex-col justify-between space-y-2">
            <time className="flex-shrink-0 text-[#00000033] dark:text-[#FFFFFF33] text-xs md:text-sm font-semibold uppercase">
              {post?.publishDay}
            </time>
            <h2 className="transition text-xl md:text-2xl font-medium mb-2 cursor-pointer text-[#000000F0] hover:text-[#D0CDC2] dark:text-[#FFFFFFF0] dark:hover:text-gray-400">
              {post.title}
            </h2>
          </header>
          <main>
            <p className="mt-[10px] text-xl md:text-lg text-[#00000094] dark:text-[#FFFFFF94]">
              {post.summary}
            </p>
          </main>
        </div>
      </article>

    </Link>)
  )
}

export default BlogPost
