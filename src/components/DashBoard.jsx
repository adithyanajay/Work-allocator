import React from 'react'
import "../App.css"
import { WorkBox } from './WorkBox'
export const DashBoard = () => {
  return (
    <div className='gridsystem mt-12 py-3 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <WorkBox/>
    </div>
  )
}
