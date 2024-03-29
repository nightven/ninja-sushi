import { dbConnect } from '@/lib/db/connect';
import { News } from '@/lib/models/news';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (request: NextApiRequest) => {
  try {
    dbConnect();
    const news = await News.find();
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    throw new Error("Can't fetch news ");
  }
};
