import UploadImages from '@/DasComponent/Gallery/UploadImages'
import PageTitle from '@/DasComponent/Others/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle text={"Image upload in cloudinary"}/>
      <UploadImages/>
    </div>
  )
}

export default page