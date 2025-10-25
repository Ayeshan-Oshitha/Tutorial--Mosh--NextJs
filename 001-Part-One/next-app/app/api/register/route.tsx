import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { prisma } from "../../../prisma/client";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(10),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const exisitingUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (exisitingUser) {
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword: hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email }, { status: 201 });
}
