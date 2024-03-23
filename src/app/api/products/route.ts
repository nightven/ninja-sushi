import { dbConnect } from '@/lib/db/connect';
import { Product } from '@/lib/models/products';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    dbConnect();

    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};
