export const revalidate = 0;
import LoginComponent from "@/DasComponent/Forms/LoginComponent";
import { PrismaClient } from "@prisma/client";
import "./style.css";

async function getData() {
  const prisma = new PrismaClient();
  let data = await prisma.profile.findFirst({});
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <>
        <LoginComponent data={data} />
      </>
    </main>
  );
}
