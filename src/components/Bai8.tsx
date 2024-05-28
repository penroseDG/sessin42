import React from 'react'

export default function Bai8() {
  return (
    <div>
      <h3>Các phần tử nằm bên trái</h3>
      <div className='flex gap-1 mb-2 border'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
      <h3>Các phần tử nằm bên phải</h3>
      <div className='flex gap-1 mb-2 border justify-end'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
      <h3>Các phần tử nằm ở giữa</h3>
      <div className='flex gap-1 mb-2 border justify-center'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
      <h3>Các phần tử giãn ra hai bên</h3>
      <div className='flex gap-1 mb-2 border justify-between'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
      <h3>Các phần tử giãn đều 2 bên</h3>
      <div className='flex gap-1 mb-2 border justify-around'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
      <h3>Các phần tử giữa đều</h3>
      <div className='flex gap-1 mb-2 border justify-evenly'>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
        <div className='bg-blue-500 w-10 h-10'></div>
      </div>
    </div>
  )
}
