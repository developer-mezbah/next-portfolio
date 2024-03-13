import React from 'react'

const FormTitle = ({text}) => {
  return (
    <div className='bg-[url("/images/form-title-bg.png")] m-5 bg-center bg-no-repeat bg-cover w-[200px] h-[100px] flex justify-center items-center'>
        <h2 className='text-xl text-gray-300'>{text}</h2>
    </div>
  )
}

export default FormTitle