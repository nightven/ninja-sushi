// import { getOneNew } from '@/app/api/news/[slug]/route';
// import Image from 'next/image';

// export interface IParams {
//   slug: string;
// }

// export const generateMetadata = async ({ params }: { params: IParams }) => {
//   const { slug } = params;

//   const oneNew = await getOneNew(slug);

//   return {
//     category: oneNew.category,
//     title: oneNew.localizedTitle,
//   };
// };

// const OneNewPage = async ({ params }: { params: IParams }) => {
//   const { slug } = params;

//   const oneNew = await getOneNew(slug);

//   return (
//     <div>
//       <h1>{oneNew.localizedTitle}</h1>
//       {oneNew.image && (
//         <div>
//           <Image src={oneNew.image} alt="New image" fill />
//         </div>
//       )}
//       <div>
//         <p>{oneNew.category}</p>
//         <p>{oneNew.date}</p>
//       </div>
//       <p>{oneNew.description}</p>
//     </div>
//   );
// };

// export default OneNewPage;
