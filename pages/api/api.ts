import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getUserProfile(email) {
  const data = await prisma.profile.findUnique(email);
  return data;
}
