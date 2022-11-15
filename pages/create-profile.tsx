import { unstable_getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

import { PrismaClient } from "@prisma/client";
import CreateProfile from "../components/profile/CreateProfile";
const userEmail = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  return userEmail;
};
const createProfile = () => {
  return (
    <div>
      <CreateProfile />
    </div>
  );
};
export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const email = session.user?.email;
  const data = await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      profile: true,
    },
  });
  console.log(data);
  return { props: { email } };
}

export default createProfile;
