import Message from './Message'
import Users from './Users'
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className='h-screen w-full flex flex-col'>

        <div className='p-3 border-b border-b-white/10'>
          <Users />
        </div>

        <div className='h-full overflow-y-auto p-3'>
            <Message />
        </div>

        <div className='w-full p-3 flex gap-2'>
            <input type="text" placeholder="Type here" className="input w-full rounded-full input-bordered input-primary" />
            <button className='btn btn-circle btn-outline btn-primary'><IoSend className='text-white' /></button>
        </div>

    </div>
  )
}

export default MessageContainer