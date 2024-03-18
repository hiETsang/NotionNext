
import { useEffect } from 'react';

const RecommendationModule = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.text = `
      window.SubstackFeedWidget = {
        substackUrl: "xcanoe.substack.com",
        posts: 3,
        filter: "top",
        layout: "right",
        hidden: ["author"],
        colors: {
          primary: "#7C7C7C",
          secondary: "#A0A0A0",
          background: "#FFFFFF00",
        }
      };
    `;
    document.getElementById('substack-feed-embed').appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://substackapi.com/embeds/feed.js';
    script2.async = true;
    document.getElementById('substack-feed-embed').appendChild(script2);
  }, []);

  return (
    <div id='recommendation-module' className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <hr className="mt-8 border-black/5 dark:border-white/5" />
        <div className="text-xl font-semibold text-[#000000cc] dark:text-[#ffffffcc]">热门文章</div>
      </div>
      <section className='mb-10'>
        <div id='substack-feed-embed'></div>
      </section>
    </div>
  );
};

export default RecommendationModule;