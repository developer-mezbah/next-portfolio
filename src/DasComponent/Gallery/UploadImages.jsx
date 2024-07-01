export const revalidate = 0;
import AddCategory from "../Forms/AddCategory";
import ImageUpload from "../Forms/ImageUpload";
import prisma from "@/utils/prisma";

async function getData() {
  const galleryCat = await prisma.gallery.findMany({});
  return { galleryCat };
}

const UploadImages = async () => {
  const data = await getData();
  return (
    <div>
      <ImageUpload category={data.galleryCat} />
      <AddCategory />
    </div>
  );
};

export default UploadImages;
