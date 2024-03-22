import { dbConnect } from '@/lib/db/connect';
import { Product } from '@/lib/models/products';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || 12;
    const lactose = searchParams.get('lactose') === 'true';
    const vegan = searchParams.get('vegan') === 'true';
    const spicy = searchParams.get('spicy') === 'true';

    const filter: Record<string, any> = { category };

    if (vegan) {
      filter.vegan = true;
    }
    if (lactose) {
      filter.lactose = true;
    }
    if (spicy) {
      filter.spicy = true;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const products = await Product.find(filter, null, {
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
