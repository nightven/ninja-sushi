import { getOneNews } from '@/lib/routes/news';
import Image from 'next/image';
import Home from '../../../assets/svgs/header/bell.svg';

export interface IParams {
  slug: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const { slug } = params;

  const oneNew = await getOneNews(slug);

  return {
    category: oneNew.topic,
    title: oneNew.title,
  };
};

const OneNewPage = async ({ params }: { params: IParams }) => {
  const { slug } = params;

  const oneNew = await getOneNews(slug);

  return (
    <div className="text-black container mt-4 mb-6">
      <div className="flex gap-4 mb-8 items-center ">
        <button className="text-xs text-green-400 bg-white rounded-xl py-2 px-4">
          Назад
        </button>
        <button>
          <Home />
        </button>
        <p className="text-sm text-gray-400">Новини</p>
      </div>
      <div className=" tablet:px-28 desktop:px-56">
        <h2 className=" text-2xl tablet:text-5xl font-bold mb-3">
          {oneNew.title}
        </h2>
        <div className="flex items-center gap-4 text-xs  tablet:text-sm  text-gray-500 mb-3 tablet:mb-8 ">
          <p className=" bg-white rounded-md px-2 py-1">{oneNew.topic}</p>
          <p>{oneNew.date}</p>
        </div>
      </div>
      {oneNew.poster && (
        <div className="p-0 tablet:px-28 ">
          <Image
            src={oneNew.poster}
            alt="New image"
            width={292}
            height={200}
            className="w-full desktop:h-[634px] rounded-xl mb-7"
          />
          <p className="text-sm p-4 tablet:text-base desktop:text-lg ">
            {oneNew.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default OneNewPage;
