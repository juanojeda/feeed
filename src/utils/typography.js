import Typography from 'typography'
import altonTheme from 'typography-theme-alton'
import { assign } from 'lodash'

const themeOverrides = {};

themeOverrides.baseFontSize = '17px'
themeOverrides.scaleRatio = 3.25
themeOverrides.googleFonts = [
  ...altonTheme.googleFonts,
  {
    name: 'Quicksand',
    styles: ['400']
  }
];

const theme = assign({}, altonTheme, themeOverrides)

altonTheme.overrideThemeStyles = ({rhythm}, options, styles) => {
  return {
  'h1': {
    marginBottom: rhythm(2)
  },
  '.logo__logotype': {
    fontFamily: ['Quicksand', 'sans-serif'].join(',')
  }
}}

const typography = new Typography(theme)

export default typography