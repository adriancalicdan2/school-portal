import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const authData = await auth();
  const user = await currentUser();

  const userId = authData.userId;

  if (!userId) {
    return NextResponse.json(
      {
        message: "Not authenticated",
      },
      { status: 401 },
    );
  }

  return NextResponse.json(
    {
      message: "Authenticated",
      data: { userId: userId, username: user?.username },
    },
    { status: 200 },
  );
}
