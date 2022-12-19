import { Formik, Field, Form } from 'formik';
import * as yup from "yup";
import * as Dialog from '@radix-ui/react-dialog';

import SubmitButton from '../../atoms/SubmitButton';
import Label from '../../atoms/Label';
import ErrorMessage from '../../atoms/ErrorMessageForm';

import { ButtonsContainer, Container, FieldContainer } from './style';

type Props = {
  handleSubmit: () => Promise<void>
  loading?: boolean
  defaultValueCategory?: string
  defaultValueTitle?: string
  defaultValueText?: string 
  buttonLabel: string
}

const ModalForm = (props: Props) => {
  const schema = yup.object().shape({
    category: yup.string(),

    title: yup.string(),

    text: yup.string()
    .required('Este campo é obrigatório.')
  })

  return (
    <Formik
      onSubmit={props.handleSubmit}
      validationSchema={schema}
      validateOnMount
      initialValues={{category: '', title: '', text: ''}}
    >
      {({errors, touched}: any) => (
        <Container>
          <Form>
            <FieldContainer>
              <Label label='Categoria:' color='white'/>

              <Field 
                name='category'
                type='text'
                defaultValue={props.defaultValueCategory}
                placeholder='Categoria'
              />

              <ErrorMessage 
                message={touched.category ? errors.category : ''}
              />
            </FieldContainer>

            <FieldContainer>
              <Label label='Título:' color='white'/>

              <Field 
                name='title'
                type='text'
                defaultValue={props.defaultValueTitle}
                placeholder='Título'
              />

              <ErrorMessage 
                message={touched.title ? errors.title : ''}
              />
            </FieldContainer>

            <FieldContainer>
              <Label label='Texto:' color='white'/>

              <Field 
                name='text'
                as='textarea'
                defaultValue={props.defaultValueText}
                placeholder='Texto'
                required={true}
              />

              <ErrorMessage 
                message={touched.text ? errors.text : ''}
              />
            </FieldContainer>
            
            <ButtonsContainer>
              <Dialog.Close asChild id='close_modal_form'>
                <span className='cancel'>Cancelar</span>
              </Dialog.Close>

              <SubmitButton 
                label={props.buttonLabel}
                background='orange'
                loading={props.loading}
                themeLoader='dark'
              />
            </ButtonsContainer>

          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default ModalForm