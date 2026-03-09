import './App.css'
import Box from './components/Box'
import Password from './components/Password'
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'
import { Context, createContext } from 'react'

export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="abcde">
    {/* <div>
      <TodoInput></TodoInput>
      <Box componenet={<div>Hi Brooo</div>}>
      </Box>
      <Todo></Todo>
    </div> */}
    <Password name="HI "></Password>
    </UserContext.Provider>
  )
}

export default App