import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>
}

export default App
