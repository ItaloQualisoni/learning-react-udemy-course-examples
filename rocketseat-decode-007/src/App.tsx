import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import UserItem from './components/UserItem'
import logo from './logo.svg'

const random_users = () => {


}

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const url = 'https://random-data-api.com/api/users/random_user?size=30'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        data = data.map((user: { first_name: string; last_name: string }) => ({ ...user, fullUserName: user.first_name + ' ' + user.last_name }))
        setUsers(data)
      })
  }, [])


  return (
    <React.StrictMode>
      <div className='h-full overflow-hidden'>
        <Search search={search} setSearch={setSearch} />
        <ul className='relative z-0 divide-y divide-gray-200'>
          <li>
            {users.filter((user: any) => {
              let userName = user.first_name + ' ' + user.last_name
              return userName.toLowerCase().search(search) >= 0
            })
              .map((user: any, index: number) => {
                return (
                  <UserItem
                    key={index}
                    user={user} />
                )
              })}
          </li>
        </ul>
      </div>
    </React.StrictMode>

  )
}

export default App
