import { LoaderIMG } from "./style"

const LoaderSVG = '../../../static/images/Loader.svg'
const DarkLoaderSVG = '../../../static/images/Dark-Loader.svg'

type Props = {
  theme?: string
  size?: string 
}

const Loader = ({ theme, size }: Props) => {
  return <LoaderIMG 
    src={theme === 'dark' ? DarkLoaderSVG : LoaderSVG} 
    size={size === 'large' ? 'large' : ''}
  />
}

export default Loader