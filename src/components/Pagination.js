import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
    const {page,handlePageChange,totalPages}=useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 py-2'>
        <div className='w-11/12 max-w-[650px] flex justify-between'>
          <div className='flex gap-x-4'>
          { page > 1 &&
               ( <button
               className='rounded-md border-2 py-1 px-4'
                onClick={()=>handlePageChange(page-1)}>
                Previous
            </button>)
            }
            {
                page < totalPages && (
                    <button 
                    className='rounded-md border-2 py-1 px-4'
                    onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>
                ) 
            }
          </div>
            <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
        </div>
    </div>
  )
}
