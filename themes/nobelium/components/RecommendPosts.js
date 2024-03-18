import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import RecommendBlog from './RecommendBlog'

/**
 * 展示文章推荐
 */
const RecommendPosts = ({ recommendPosts }) => {
  const { locale } = useGlobal()
  if (!recommendPosts || recommendPosts.length < 1) {
    return <></>
  }

  return (
    <div className="pt-2 pl-4 py-2 my-4 dark:text-gray-300 ">
      <div className="mb-2 font-bold text-lg">{locale.COMMON.RELATE_POSTS} :</div>
      <ul className="font-light text-base">
        {recommendPosts.map(post => (
          <li key={post.id}>
            <RecommendBlog post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RecommendPosts
