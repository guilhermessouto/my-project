import { LoaderIMG } from "./style"

const LoaderSVG = '../../../public/static/images/Loader.svg'
const DarkLoaderSVG = '../../../public/static/images/Dark-Loader.svg'

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