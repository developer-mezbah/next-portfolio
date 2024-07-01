export const revalidate = 0;
import LoginComponent from "@/DasComponent/Forms/LoginComponent";
import "./style.css";
import prisma from "@/utils/prisma";

async function getData() {
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
