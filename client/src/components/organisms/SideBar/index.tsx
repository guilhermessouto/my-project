import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { service } from "../../../api"
import { AuthContext } from "../../../contexts/AuthContext"

import ProgressDemo from "../../atoms/Progress"
import Modal from "../Modal"

import {
  AddNewNote,
  Button,
  Logo,
  LogoContent, 
  LogoName, 
  Sidebar
} from "./style"

type DataForm = {
  category: string 
  title: string 
  text: string
  owner: {
    email: string | undefined
    _id: string | undefined
  }
}

type DataResponse = {
  message: string
  note: {
    category: string 
    title: string 
    text: string
    owner: {
      email: string | undefined
      _id: string | undefined
    }
  }
}

type Props = {
  children: JSX.Element
  isMenuOpen: boolean
  openAndCloseMenu: () => void
}

const SideBar = ({ children, isMenuOpen, openAndCloseMenu }: Props) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [closeModal, setCloseModal] = useState(false)
  const [closeProgress, setCloseProgress] = useState(true)
  const [progress, setProgress] = useState(.5)

  const { userData } = useContext(AuthContext)

  // funçao para a barra de progresso do componente ProgressDemo
  function progressFunc() {
    while (progress < 100) {
      const timer = setTimeout(() => setProgress(100), 0)

      return () => clearTimeout(timer)
    }
  }

  async function handleSubmit(data: DataForm) {
    setLoading(true)

    try {
      data.owner = {
        _id: userData?._id,
        email: userData?.email
      }

      const { data: resData } = await service.post<DataResponse>('/notes', data)

      //manda a mensagem pro componente ProgressDemo
      setResponseMessage(resData.message)

      // display none no componente Modal
      setCloseModal(true)
      
      // tira o display none do componente ProgressDemo
      setCloseProgress(false)
  
      progressFunc()
  
      setTimeout(() => {
        navigate('/home')

        window.location.reload()
      }, 1000);

      return

    } catch (error: any) {
      console.log(error)

    }

  }

  return (
    <Sidebar isMenuOpen={isMenuOpen}>
      <LogoContent>
        <Logo>
          <i className='bx bxl-c-plus-plus'></i>
          <LogoName>CodingLab</LogoName>
        </Logo>

        <Button 
          className="btn"
          onClick={openAndCloseMenu}
        >
          <i className='bx bx-menu'></i>
        </Button>
      </LogoContent>

      <Modal
        isMenuOpen={isMenuOpen}
        buttonLabel='Adicionar'
        handleSubmit={handleSubmit}
        loading={loading}
        closeModal={closeModal}
      >
        <AddNewNote>
          {isMenuOpen ? 'Adicionar' : <i className="bx bx-plus"></i>}
        </AddNewNote>
      </Modal>

      {children}

      <ProgressDemo
        label={responseMessage}
        closeProgress={closeProgress}
        progress={progress}
      />
    </Sidebar>
  )
}

export default SideBar