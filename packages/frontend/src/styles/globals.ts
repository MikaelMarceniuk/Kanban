import { globalCss } from './themes/default'

export const globalStyles = globalCss({
  'html body': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    backgroundColor: '$veryDarkGrey',
    height: "100vh"
  },
  html: {
    height: "100%",
  },
  '*': {
    boxSizing: 'border-box'
  }
})
