import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
// @ts-ignore
import styled from 'styled-components/native'
import axios from 'axios'

const Test = styled.View`
  height: 40px;
  width: 40px;
  background: red;
`

function App() {
  const [posts, setPosts] = useState()
  const [error, setError] = useState<any>()

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://cpvapi.com/pens/popular')
        setPosts(data)
      } catch (error) {
        setError(error as any)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <Test />
      <header className="App-header">🤔</header>
    </div>
  )
}

export default App
