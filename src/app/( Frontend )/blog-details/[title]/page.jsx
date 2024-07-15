export const revalidate = 0;
import BlogDetails from "@/components/Blogs/BlogDetails";
import MasterLayout from "@/layout/MasterLayout";
import { blogPromise, commentsDataPromise } from "@/utils/fetchData";

// export async function generateMetadata(props) {
//   let id = await props.searchParams["id"];
//   const data = await getData(id);
//   return {
//     title: data?.blog?.title,
//     description: data?.blog?.short_des,
//     keywords: [data?.blog?.keywords],
//     openGraph: {
//       images: [data?.blog?.img],
//     },
//   };
// }

export default async function page(props) {
  let id = await props.searchParams["id"];
  const [blog, commentsData] = await Promise.all([
    blogPromise(id),
    commentsDataPromise(id),
  ]);
  return (
    <MasterLayout>
      <BlogDetails
        comments={commentsData}
        blogId={id}
        data={blog}
      />
    </MasterLayout>
  );
}
