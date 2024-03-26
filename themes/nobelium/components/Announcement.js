import dynamic from 'next/dynamic'
import { useEffect } from 'react';

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ notice, className }) => {

  if (notice?.blockMap) {
    return (
      <div className={className}>
        <section id='announcement-wrapper' className='mb-10'>
          {notice && (
            <div id="announcement-content">
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="my-5 bg-gray-200 dark:bg-gray-600 w-20 h-1"></div>
              </div>
              <NotionPage post={notice} className='' />
              <div className="flex justify-center items-center">
                <a href="https://www.buymeacoffee.com/xcanoe" target="_blank">
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="transition h-[60px] w-[217px] hover:scale-90" />
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Announcement
