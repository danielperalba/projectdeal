import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3000'
})

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [senha, setSenha] = useState('')



  useEffect(() => {
    server.get('/usuarios').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])


  function newUser() {
    server.post('/usuarios', {
      name,
      senha,
    }).then((response) => {
      console.log(response)
    })
  }


  return (
    <div>
      <h1>Usuarios</h1>


      <ul>
        {users.map(user => (
          <li key={user.name}>
            Nome: {user.name} - Idade: {user.senha}
          </li>
        ))}
      </ul>

      <h2>Adicionar novo usuario</h2>
      <input placeholder='Nome' onChange={event => setName(event.target.value)} />
      <input placeholder='Senha' onChange={event => setSenha(event.target.value)} />
      <button onClick={newUser}>Adicionar</button>

    </div>
  )
}

export default App
