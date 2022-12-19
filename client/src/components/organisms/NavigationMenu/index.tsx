import { useContext, useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { AuthContext } from "../../../contexts/AuthContext"
import { service } from '../../../api'
import ProgressDemo from '../../atoms/Progress'
import DeleteModal from '../../molecules/DeleteModal'
import Modal from '../Modal'

import { Container } from './style'

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

type RemoveNote = {
  idNote: string
}

const NavigationMenuDemo = ({ idNote }: RemoveNote) => {
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

  async function updateNote(data: DataForm) {
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
        window.location.reload()  

      }, 1000);

      return

    } catch (error: any) {
      console.log(error)

    }
  }

  return (
    <Container>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='NavigationMenuTrigger'>
              <i className='bx bx-dots-horizontal'></i>
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className='NavigationMenuContent'>
              <Modal
                isMenuOpen={closeModal}
                buttonLabel='Editar'
                handleSubmit={updateNote}
                loading={loading}
                closeModal={closeModal}
              >
                <button>Editar</button>
              </Modal>


              <DeleteModal loading={loading} />     
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>

      <ProgressDemo
        label={responseMessage}
        closeProgress={closeProgress}
        progress={progress}
      />
    </Container>
  )
}

export default NavigationMenuDemo