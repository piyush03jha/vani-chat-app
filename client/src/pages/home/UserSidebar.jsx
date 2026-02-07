import Users from './Users'

const UserSidebar = () => {
  return (
    <div className='max-w-[20rem] h-screen w-full flex flex-col border-r border-r-white/10'>
            <h1 className='mx-3 px-2 py-1 rounded-lg text-[#7480ff] text-xl font-semibold'>VANI</h1>
        <div className='p-3'>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search" />
            </label>
        </div>
        <div className='h-full overflow-y-scroll'> <Users /></div>
        <div className="flex items-center justify-between p-3">
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            <button className="btn btn-primary btn-sm px-3">Logout</button>
        </div>
    </div>
  )
}

export default UserSidebar