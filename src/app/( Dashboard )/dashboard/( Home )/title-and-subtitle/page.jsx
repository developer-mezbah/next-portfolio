export const revalidate = 0;
import TitleAndSubtitle from "@/DasComponent/Forms/TitleAndSubtitle"
import prisma from "@/utils/prisma";

async function getData(){
    try {
        const data = await prisma.section_details.findFirst({})
        return data
    } catch (error) {
        console.log(error);
    }
}

const page = async () => {
    const data = await getData();
  return (
    <div>
        <TitleAndSubtitle sectionData={data}/>
    </div>
  )
}

export default page