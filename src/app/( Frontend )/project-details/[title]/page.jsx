export const revalidate = 0;
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import MasterLayout from "@/layout/MasterLayout";
import { projectDetailsPromise, relatedProjectPromise } from "@/utils/fetchData";

// const getData = async (id) => {
//   try {
//     const projects = await prisma.projects.findUnique({
//       where: { id: parseInt(id) },
//       include: {
//         profile: { select: { user_name: true, img: true } },
//         key_feature: true,
//         for_developer: true,
//       },
//     });
//     const relatedProjects = await prisma.projects.findMany({
//       where: { categoryId: projects.categoryId },
//     });

//     return { projects, relatedProjects };
//   } catch (error) {
//     console.log(error);
//   }
// };

export async function generateMetadata(props) {
  let id = await props.searchParams["id"];
  const data = await projectDetailsPromise(id)
  return {
    title: data?.title,
    description: data?.description,
    keywords: [data?.keywords],
    openGraph: {
      images: [data?.long_img, data?.banner_img],
    },
  };
}

export default async function page(props) {
  let id = await props.searchParams["id"];
  // const data = await getData(id);
  const data = await projectDetailsPromise(id)
  const relatedProjects = await relatedProjectPromise(data?.categoryId)
  
  return (
    <MasterLayout>
      <div>
        <ProjectDetails
          data={data}
          relatedProjects={relatedProjects}
        />
      </div>
    </MasterLayout>
  );
}
