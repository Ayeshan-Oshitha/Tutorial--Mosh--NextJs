import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  if (parseInt(id) > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ id: id, name: "Rice", price: 25.0 });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const { id } = await params;
  if (parseInt(id) > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ id: id, name: body.name, price: body.price });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  if (parseInt(id) > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(
    { message: `Product with id ${id} deleted successfully` },
    { status: 200 }
  );
}
