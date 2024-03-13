import AllImages from '@/DasComponent/Gallery/AllImages'
import PageTitle from '@/DasComponent/Others/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle text={"All Images"}/>
        <AllImages/>
    </div>
  )
}

export default page