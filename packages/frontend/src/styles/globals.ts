import { globalCss } from './themes/default'

export const globalStyles = globalCss({
  'html body': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    backgroundColor: '$linesDark'
  },

  '*': {
    boxSizing: 'border-box'
  }
})
