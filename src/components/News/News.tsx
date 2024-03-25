import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { INews } from './NewsList';

const News: FC<{ oneNew: INews }> = ({ oneNew }) => {
  return (
    <>
      <Image
        src={oneNew.poster}
        alt="New image"
        width={292}
        height={200}
        className="w-full rounded-t-xl"
      />
      <div className="p-3 md:p-4">
        <div className="flex justify-between items-center text-[10px] tablet:text-sm text-gray-500 mb-2">
          <p className="bg-gray-100 rounded-md px-2 py-1">{oneNew.topic}</p>
          <p>{oneNew.date}</p>
        </div>
        <div className=" flex flex-col justify-between">
          <h3 className="text-base tablet:text-lg font-bold mb-1.5">
            {oneNew.title}
          </h3>
          <Link
            href={`/news/${oneNew.slug}`}
            className="text-green-400 text-xs tablet:text-sm"
          >
            Детальніше
          </Link>
        </div>
      </div>
    </>
  );
};

export default News;
