import React from 'react'

function UserItem({ user }: { user: any }) {
    let { fullUserName, avatar, employment } = user;
    return (
        <div className='relative px-6 py-5 flex items-center space-x-3'>
            <div className='flex-shrink-0'>
                <img className='h-10 w-10 rounded-full'
                    src={avatar}
                    alt='' />
            </div>
            <div className='flex-1 min-w-0'>
                <div className='focus:outline-none'>
                    <span className='absolute inset-0' aria-hidden="true" />
                    <p className='text-sm font-medium text-gray-900'>{fullUserName}</p>
                    <p className='text-sm text-gray-500 truncate'>{employment.title}</p>
                </div>
            </div>
        </div>
    )
}

export default UserItem