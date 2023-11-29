import { NextRequest } from "next/server";
import "server-only";
import { handler } from "../../../graphql/graphql";

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
