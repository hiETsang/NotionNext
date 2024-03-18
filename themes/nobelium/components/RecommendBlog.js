import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { checkContainHttp, sliceUrlFromHttp } from '@/lib/utils'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'

const RecommendBlog = ({ post }) => {
  const url = checkContainHttp(post.slug) ? sliceUrlFromHttp(post.slug) : `${siteConfig('SUB_PATH', '')}/${post.slug}`

  const showPreview = siteConfig('POST_LIST_PREVIEW') && post.blockMap

  return (
    (<Link href={url}>
      <article key={post.id} className="mb-3 md:mb-5 flex flex-row space-x-3 md:space-x-5">
      <div className="flex-none w-[50px] h-[50px] md:w-[70px] md:h-[70px] ">
          <LazyImage src={post?.pageCoverThumbnail} alt={post?.title} className='w-full h-full object-cover hover:brightness-75 transition-all duration-300' />
        </div>
        <div className="flex flex-col">
          <header className="flex flex-col justify-between space-y-1">
            <time className="flex-shrink-0 text-[#00000033] dark:text-[#FFFFFF33] text-xs md:text-sm font-semibold uppercase">
              {post?.publishDay}
            </time>
            <h2 className="transition text-base md:text-xl font-medium mb-2 cursor-pointer text-[#000000F0] hover:text-[#D0CDC2] dark:text-[#FFFFFFF0] dark:hover:text-gray-400">
              {post.title}
            </h2>
          </header>
        </div>
      </article>

    </Link>)
  )
}

export default RecommendBlog
