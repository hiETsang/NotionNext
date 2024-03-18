import dynamic from 'next/dynamic'
import { useEffect } from 'react';

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ notice, className }) => {
  useEffect(() => {
    if (notice?.blockMap) {
      const script = document.createElement("script");
      script.text = `
        window.CustomSubstackWidget = {
          substackUrl: "xcanoe.substack.com",
          placeholder: "example@gmail.com",
          buttonText: "Subscribe",
          theme: "custom",
          colors: {
            primary: "#FFDD03",
            input: "#00000000",
            email: "#8A8A8A",
            text: "#000000",
          }
        };
      `;
      document.getElementById("custom-substack-embed").appendChild(script);

      const script2 = document.createElement("script");
      script2.src = "https://substackapi.com/widget.js";
      script2.async = true;
      document.getElementById("custom-substack-embed").appendChild(script2);
    }
  }, [notice]);

  if (notice?.blockMap) {
    return (
      <div className={className}>
        <section id='announcement-wrapper' className='mb-10'>
          {notice && (
            <div id="announcement-content">
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="my-5 bg-gray-200 dark:bg-gray-600 w-20 h-1"></div>
                <div className="text-[#000000CC] dark:text-[#ffffffcc] text-[18px]">欢迎订阅我，及时获取一个普通人视角下的独立观察和真诚输出。</div>
                <div id="custom-substack-embed"></div>
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
