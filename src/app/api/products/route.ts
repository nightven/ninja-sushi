import { dbConnect } from '@/lib/db/connect';
import { Product } from '@/lib/models/products';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('category');
    const page = searchParams.get('page') || 0;
    const limit = searchParams.get('limit');
    const skip = (Number(page) - 1) * Number(limit);

    const products = await Product.find({ category: Number(query) }, null, {
      skip,
      limit: Number(limit),
    });
    console.log(products);
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};
