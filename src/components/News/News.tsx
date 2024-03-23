// import Image from 'next/image';
// import Link from 'next/link';
// import { FC } from 'react';

// interface INewsProps {
//   oneNew: {
//     image: string;
//     category: string;
//     date: string;
//     localizedTitle: string;
//     slug: string;
//   };
// }

// const News: FC<INewsProps> = ({ oneNew }) => {
//   return (
//     <div>
//       <h1>Новини</h1>
//       <Image src={oneNew.image} alt="New image" />
//       <div>
//         <p>{oneNew.category}</p>
//         <p>{oneNew.date}</p>
//       </div>
//       <h3>{oneNew.localizedTitle}</h3>
//       <Link href={`/news/${oneNew.slug}`}>Детальніше</Link>
//     </div>
//   );
// };

// export default News;

import Image from 'next/image';
import React from 'react';

// import Home from '../../assets/svgs/news/home.svg';
// import Home from '../../assets/svgs/news/search.svg';
import Home from '../../assets/svgs/header/bell.svg';

//// Grids

// const News = () => {
//   return (
//     <div className="text-black container mt-4">
//       <div className="flex gap-4 mb-8 items-center ">
//         <button className="text-xs text-green-400 bg-white rounded-xl py-2 px-4">
//           Назад
//         </button>

//         <button>
//           <Home />
//         </button>
//         <p className="text-sm text-gray-400">Новини</p>
//       </div>
//       <h1 className="text-5xl font-bold mb-6">Новини</h1>
//       <div className="flex flex-col tablet:flex-row gap-4 justify-between text-sm tablet:text-base mb-6">
//         <div className="flex  gap-2">
//           <button className="text-white bg-orange-500 rounded-xl py-3 px-4">
//             Все
//           </button>
//           <button className="bg-white rounded-xl py-3 px-4">
//             Оновлення в меню
//           </button>
//           <button className="bg-white rounded-xl py-3 px-4">SushiKino</button>
//         </div>
//         <input
//           type="text"
//           name="search"
//           placeholder="Введіть ключові слова"
//           className="bg-white rounded-xl py-3 px-4 "
//         />
//       </div>
//       <ul className="grid tablet:grid-cols-2 gap-5 mb-6  ">
//         <li className="bg-white rounded-xl shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={292}
//             height={200}
//             className="w-full desktop:h-[446px]"
//           />
//           <div className="p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new2.png"
//             alt=""
//             width={292}
//             height={200}
//             className="w-full desktop:h-[446px]"
//           />
//           <div className="p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//       </ul>
//       <ul className="grid grid-cols-2 desktop:grid-cols-4 gap-3 tablet:gap-5 mb-10">
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//         <li className="bg-white rounded-xl  shadow-md">
//           <Image
//             src="/new1.png"
//             alt=""
//             width={138}
//             height={85}
//             className="w-full"
//           />
//           <div className="p-3 md:p-4 ">
//             <div className="flex justify-between  text-sm text-gray-500 mb-2">
//               <p className="bg-gray-100 rounded-md px-2 py-1">Category</p>
//               <p>Data</p>
//             </div>
//             <h3 className="text-lg font-bold mb-1.5">New title</h3>
//             <button className="text-green-400">Детальніше</button>
//           </div>
//         </li>
//       </ul>
//       <div className="flex   justify-center">
//         <button className="text-green-400 w-full md:w-auto py-4 px-6 bg-white rounded-xl mb-16 ">
//           Показати більше
//         </button>
//       </div>
//     </div>
//   );
// };

// OneNew
const News = () => {
  return (
    <div className="text-black container mt-4 mb-6">
      <div className="flex gap-4 mb-8 items-center text-sm text-gray-400 ">
        <button className="text-xs text-green-400 bg-white rounded-xl py-2 px-4">
          Назад
        </button>
        <button>
          <Home />
        </button>
        <p className="">Новини</p>
        <p className="">New title</p>
      </div>
      <div className=" p-0 tablet:px-56">
        <h3 className="text-5xl font-bold mb-3">New title</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 tablet:mb-8 ">
          <p className=" bg-white rounded-md px-2 py-1">Новини</p>
          <p>Data</p>
        </div>
      </div>
      <div className="p-0 tablet:px-28 ">
        <Image
          src="/new1.png"
          alt=""
          width={292}
          height={200}
          className="w-full desktop:h-[634px] rounded-xl mb-7"
        />
        <p className="text-sm p-4 tablet:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          deleniti! Deleniti, voluptatum exercitationem tempora voluptates odio
          adipisci aliquam, perferendis nulla nisi debitis veniam rem
          voluptatibus, itaque autem.
        </p>
      </div>
    </div>
  );
};

export default News;
