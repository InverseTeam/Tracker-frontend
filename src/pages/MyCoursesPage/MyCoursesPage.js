import React from 'react'
import MyCourses from '../../components/MyCourses/MyCourses'

const MyCoursesPage = () => {
  return (
    <div className='p-20 w-fit h-full flex flex-col box-border'>
      <span className='font-mont-bold text-2xl text-black mb-5'>
        Мои курсы
      </span>

      <MyCourses/>
    </div>
  )
}

export default MyCoursesPage