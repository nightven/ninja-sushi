import { dbConnect } from '@/lib/db/connect';
import { News } from '@/lib/models/news';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (request: NextApiRequest, { params }: any) => {
  const { slug } = params;
  try {
    dbConnect();
    const news = await News.findOne({ slug });
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    throw new Error("Can't fetch one news ");
  }
};
