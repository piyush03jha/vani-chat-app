import React from 'react'

const Users = () => {
  return (
    <div className='flex gap-5 items-center'>
        <div className="avatar">
            <div className="w-12 rounded-full mx-3">
                 <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
        </div>
        <div>
            <h2 className='line-clamp-1'>Full Name</h2>
            <p className='text-sm'>email</p>
        </div>
    </div>
  )
}

export default Users