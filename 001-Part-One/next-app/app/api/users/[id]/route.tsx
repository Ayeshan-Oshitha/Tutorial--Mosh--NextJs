import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: id, name: "bob" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: id, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(
    { message: `User with id ${id} deleted successfully` },
    { status: 200 }
  );
}
