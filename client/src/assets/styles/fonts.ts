import { createGlobalStyle } from "styled-components";

const MontserratSemiBold = '/static/fonts/text/Montserrat-SemiBold.ttf'
const MontserratMedium = '/static/fonts/text/Montserrat-Medium.ttf'
const MontserratLight = '/static/fonts/text/Montserrat-Light.ttf'

const fonts = createGlobalStyle `
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold}) format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight}) format('truetype');
    font-weight: 300;
  }
`

export default fonts