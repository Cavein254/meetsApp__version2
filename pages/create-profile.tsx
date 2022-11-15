import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

import { PrismaClient } from "@prisma/client";
import CreateProfile from "../components/profile/CreateProfile";
const createProfile = ({ data }) => {
  return (
    <div>
      <CreateProfile data={data} />
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
  return { props: { data } };
}

export default createProfile;
