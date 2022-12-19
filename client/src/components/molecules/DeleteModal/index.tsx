import * as Dialog from '@radix-ui/react-dialog'

import SubmitButton from '../../atoms/SubmitButton'

import { ButtonsContainer, Container, ContentSubContainer } from "./style"

type Props = {
  loading: boolean
}

const DeleteModal = (props: Props) => {
  function DeleteNote() {

  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        Excluir
      </Dialog.Trigger>

      <Dialog.Portal>
        <Container>
          <Dialog.Content className='DialogContent'>
            <ContentSubContainer>
              <div className='content'>
                <p>Você tem certeza ?</p>

                <ButtonsContainer>
                  <Dialog.Close asChild id='close_modal_form'>
                    <span className='cancel'>Cancelar</span>
                  </Dialog.Close>

                  <SubmitButton 
                    label='Deletar'
                    background='orange'
                    loading={props.loading}
                    themeLoader='dark'
                  />
                </ButtonsContainer>
              </div>

            </ContentSubContainer>
          </Dialog.Content>
        </Container>
      </Dialog.Portal>     
    </Dialog.Root> 
  )
}

export default DeleteModal