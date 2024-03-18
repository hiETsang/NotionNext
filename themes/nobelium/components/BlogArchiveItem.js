import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { checkContainHttp, sliceUrlFromHttp } from '@/lib/utils'

/**
 * 归档分组文章
 * @param {*} param0
 * @returns
 */
export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
        <div key={archiveTitle}>
            <ul>
                {archivePosts[archiveTitle].map(post => {
                  const url = checkContainHttp(post.slug) ? sliceUrlFromHttp(post.slug) : `${siteConfig('SUB_PATH', '')}/${post.slug}`

                  return <li
                        key={post.id}
                        className="p-1 mt-0.5 text-base md:text-xl items-center"
                    >
                        <div id={post?.publishDay}>
                            <span className="text-black/25 dark:text-white/25 font-medium">
                                {post.date?.start_date}
                            </span>{' '}
                            &nbsp;
                            <Link
                                href={url}
                                passHref
                                className="dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">

                                {post.title}

                            </Link>
                        </div>
                    </li>
                })}
            </ul>
        </div>
  )
}
