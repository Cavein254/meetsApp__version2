import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function upDateProfile(req) {
  console.log(req.body);
}
