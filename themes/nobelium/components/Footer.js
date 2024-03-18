import Vercel from '@/components/Vercel'
import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer
     className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
       !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
     }`}
   >
     <hr className="border-gray-200 dark:border-gray-600" />
     <div className="my-4 text-sm leading-6">
       <div className="flex align-baseline justify-between flex-wrap">
         <p>
           © {siteConfig('AUTHOR')} {copyrightDate}
         </p>
         <div className="flex justify-end w-4 h-4 space-x-3 text-black/50 dark:text-white/50">
         <a target='_blank' rel='noreferrer' href={'/feed'} >
         <i class="fa-solid fa-rss"></i>
          </a>
         <a href="https://xcanoe.substack.com" target="_blank">
          <i class="fa-solid fa-bookmark"></i>
          </a>
          <a href="mailto:canoelikecode95@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://twitter.com/x_canoe" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/hiETsang" target="_blank">
          <i class="fa-brands fa-github"></i>
          </a>
         </div>
       </div>
     </div>
   </footer>
}
