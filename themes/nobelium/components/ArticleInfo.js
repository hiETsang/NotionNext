
import Image from 'next/image'
import TagItem from './TagItem'
import md5 from 'js-md5'
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(siteConfig('CONTACT_EMAIL', '#'))

  return <section className="flex-wrap flex mt-2 text-sm text-gray-600 dark:text-gray-400 font-normal leading-8">
        <div>
            <h1 className="font-semibold text-3xl text-black/95 dark:text-white/95">
                {post?.title}
            </h1>

            {post?.type !== 'Page' && <>
                <nav className="flex mt-7 items-start text-black/25 dark:text-white/25">
                    <div className="mr-2 mb-4 md:ml-0 text-lg font-medium">
                        {post?.publishDay}
                    </div>
                    {post?.tags && (
                        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                            {post?.tags.map(tag => (
                                <TagItem key={tag} tag={tag} />
                            ))}
                        </div>
                    )}
                    {/* <span className="hidden busuanzi_container_page_pv mr-2">
                        <i className='mr-1 fas fa-eye' />
                        &nbsp;
                        <span className="mr-2 busuanzi_value_page_pv" />
                    </span> */}
                </nav>
            </>}

        </div>

    </section>
}
