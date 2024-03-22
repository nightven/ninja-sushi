import News from '@/components/News/News';
import React from 'react';
// import { getNews } from '../api/news/route';

const NewsPage = async () => {
  // const news = await getNews();

  return (
    <div>
      <News />
      {/* {news &&
        news.map(oneNew => (
          <div key={oneNew.id}>
            <News oneNew={oneNew} />
          </div>
        ))} */}
    </div>
  );
};

export default NewsPage;
