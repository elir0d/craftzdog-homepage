import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Palette from "../lib/palette.js";

const styles = {
  global: props => ({
    body: {
      bg: mode('#a0ced0', '#2C3333')(props), // primary 50, primary custom
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#805ad5', '#fbd38d')(props),
      textUnderlineOffset: 3
    })
  },

  Input: {
    baseStyle: props => ({
      field: {
        minHeight: "40px",
        color: "#525252",
        boxShadow: mode("inset 5px 5px 10px #8eb7b9, inset -5px -5px 10px #b2e5e7", "inset 5px 5px 10px #272d2d, inset -5px -5px 10px #313939")(props)
      },
    })
  },
  Textarea: {
    baseStyle: props => ({
      color: "#525252",
      boxShadow: mode("inset 5px 5px 10px #8eb7b9, inset -5px -5px 10px #b2e5e7", "inset 5px 5px 10px #272d2d, inset -5px -5px 10px #313939")(props)
    })
  },
  Button: {
    baseStyle: props => ({
      boxShadow: mode("5px 5px 10px #8eb7b9, -5px -5px 10px #b2e5e7", "5px 5px 10px #272d2d, -5px -5px 10px #313939")(props),
      _active: {
        boxShadow: mode("inset 5px 5px 10px #8eb7b9, inset -5px -5px 10px #b2e5e7", "inset 5px 5px 10px #272d2d, inset -5px -5px 10px #313939")(props)
      }

    })
  }
}

const fonts = {
  heading: "'Source Code Pro'"
}


const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}


const paletteColors = Palette


const theme = extendTheme({ config, styles, components, fonts, paletteColors })
export default theme
