import OneNew from '@/components/News/OneNew';

export interface IParams {
  slug: string;
}

const OneNewPage = ({ params }: { params: IParams }) => {
  const { slug } = params;

  return (
    <div className="text-black container mt-4 mb-6">
      <OneNew slug={slug} />
    </div>
  );
};

export default OneNewPage;
