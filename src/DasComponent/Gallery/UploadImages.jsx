import { PrismaClient } from "@prisma/client";
import AddCategory from "../Forms/AddCategory";
import ImageUpload from "../Forms/ImageUpload";

async function getData() {
  const prisma = new PrismaClient();
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
