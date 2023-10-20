import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  colors: { brand: colors },
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: 'Inter',
        backgroundColor: colors.background,
        overflowX: 'hidden'
      }
    }
  }
})
