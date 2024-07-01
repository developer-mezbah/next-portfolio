export const revalidate = 0;
import ProfileForm from '@/DasComponent/Forms/ProfileForm'
import prisma from '@/utils/prisma';

async function getData(){
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