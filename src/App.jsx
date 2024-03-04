import { useState } from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Arouter from './Arouter/Arouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
      
      <Arouter></Arouter>
    </ChakraProvider>
    </>
  )
}

export default App
