import { useState, useContext } from 'react'
import AlertContext, { AlertContextType } from '../../context/alert/AlertContext'
import GithubContext, { GithubContextType } from '../../context/github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState<string>('')

  const {users, searchUsers, handleClearUsers} =useContext(GithubContext) as GithubContextType
  const {setAlert} =useContext(AlertContext) as AlertContextType

  const handleSubmitForm = (ev: any) => {
    ev.preventDefault()
    if(text === '') {
      setAlert('Please fill the form', 'error')
    } else {
      searchUsers(text)
      setText('')
    }
  }
  const handleChange = (ev:any) => setText(ev.target.value)

  return (
    <div className='
    grid grid-cols-1 
    xl:grid-cols-2
    lg:grid-cols-2      
    md:grid-cols-2 ml-8 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div className="form-control">
            <div className="relative">
              <input type="text" value={text} onChange={handleChange} className="
              w-full 
              pr-40 
              bg-gray-200
              input input-lg text-black"
              placeholder='Search'
              />
              <button id="goBtn" type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button onClick={() => handleClearUsers()} className="btn btn-ghost btn-lg">
            Clear
          </button>   
        </div>
        )}
    </div>
  )
}

export default UserSearch