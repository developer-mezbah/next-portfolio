export const revalidate = 0;
import ProfileForm from '@/DasComponent/Forms/ProfileForm'
import { PrismaClient } from '@prisma/client';

async function getData(){
    const prisma = new PrismaClient();
    const data = await prisma.profile.findFirst({});
    return data
}

const page = async () => {
    const data = await getData()
  return (
    <div>
        <ProfileForm data={data}/>
    </div>
  )
}

export default page