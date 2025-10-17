import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

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
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: id, name: body.name });
}
