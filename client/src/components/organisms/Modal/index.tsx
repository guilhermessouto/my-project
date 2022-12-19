import * as Dialog from '@radix-ui/react-dialog';

import ModalForm from '../../molecules/ModalForm';

import { Container, ContentSubContainer } from './style';

type Props = {
  isMenuOpen?: boolean
  handleSubmit: any
  loading?: boolean
  buttonLabel: string
  closeModal: boolean
  children: any
  defaultValueCategory?: string
  defaultValueTitle?: string
  defaultValueText?: string 
}

const Modal = (props: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Container closeModal={props.closeModal}>
          <Dialog.Content className="DialogContent">
            <ContentSubContainer>
              <ModalForm 
                buttonLabel={props.buttonLabel}
                handleSubmit={props.handleSubmit}
                defaultValueCategory={props.defaultValueCategory}
                defaultValueTitle={props.defaultValueTitle}
                defaultValueText={props.defaultValueText}
                loading={props.loading}
              />
            </ContentSubContainer>
          </Dialog.Content>
        </Container>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal