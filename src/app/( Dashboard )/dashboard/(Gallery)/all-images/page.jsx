import AllImages from "@/DasComponent/Gallery/AllImages";
import PageTitle from "@/DasComponent/Others/PageTitle";
import { getAllPhotos } from "@/utils/actions/uploadActions";
import React from "react";

const page = async () => {
  const photos = await getAllPhotos();
  return (
    <div>
      <PageTitle text={"All Images"} />
      <AllImages photos={photos} />
    </div>
  );
};

export default page;
