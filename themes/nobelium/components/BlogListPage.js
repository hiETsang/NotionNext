
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogPost from './BlogPost'

export const BlogListPage = props => {
    const { page = 1, posts, postCount } = props
    const { locale } = useGlobal()
    const router = useRouter()
    const totalPage = Math.ceil(postCount / parseInt(siteConfig('POSTS_PER_PAGE')))
    const currentPage = +page

    const showPrev = currentPage > 1
    const showNext = currentPage < totalPage && posts?.length > 0
    const pagePrefix = router.asPath.split('?')[0].replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '')

    return (
        <div className="w-full md:pr-12 my-6">
            <div id="posts-wrapper">
                {posts?.map((post, index) => (
                    <div>
                        <BlogPost post={post} />
                        {index !== posts.length - 1 && <hr className="my-6 border-black/5 dark:border-white/5" />}
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-base font-medium text-[#000000f0] dark:text-[#fffffff0] ">
                <Link
                    href={{ pathname: currentPage - 1 === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`, query: router.query.s ? { s: router.query.s } : {} }}
                    className={`${showPrev ? '  ' : ' invisible block pointer-events-none '}no-underline py-2 px-3 rounded`}>

                    <button rel="prev" className="block cursor-pointer">
                        ← {locale.PAGINATION.PREV}
                    </button>

                </Link>
                <Link
                    href={{ pathname: `${pagePrefix}/page/${currentPage + 1}`, query: router.query.s ? { s: router.query.s } : {} }}
                    className={`${showNext ? '  ' : 'invisible pointer-events-none '}  no-underline py-2 px-3 rounded`}>

                    <button rel="next" className="block cursor-pointer">
                        {locale.PAGINATION.NEXT} →
                    </button>

                </Link>
            </div>
        </div>
    )
}
