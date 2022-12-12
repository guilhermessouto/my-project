import { Formik, Field, Form } from 'formik';
import * as yup from "yup";

import SubmitButton from '../../atoms/SubmitButton';
import Label from '../../atoms/Label';
import ErrorMessage from '../../atoms/ErrorMessageForm';

import { Container, FieldContainer } from './style';

type Props = {
  handleEnterSubmit: any
  loading?: boolean
  error_message: string
}

const SignInCard = (props: Props) => {
  const schema = yup.object().shape({
    email: yup.string()
    .email('Email inválido.')
    .required('Este campo é obrigatório.'),

    password: yup.string()
    .required('Este campo é obrigatório.')
  })

  return (
    <Formik
      onSubmit={props.handleEnterSubmit}
      validationSchema={schema}
      validateOnMount
      initialValues={{email: '', password: ''}}
    >
      {({errors, touched}: any) => (
        <Container>
          <ErrorMessage message={props.error_message} />

          <Form>
            <FieldContainer>
              <Label label='Email:'/>

              <Field 
                name="email" 
                type="email" 
                placeholder='Email' 
                required={true}
              />

              <ErrorMessage 
                message={touched.email ? errors.email : ''}
              />
            </FieldContainer>

            <FieldContainer>
              <Label label='Senha:'/>

              <Field 
                name="password" 
                type="password" 
                placeholder='Senha' 
                required={true}
              />

              <ErrorMessage 
                message={touched.password ? errors.password : ''}
              />
            </FieldContainer>

            <SubmitButton 
              label='Continuar' 
              loading={props.loading}
            />
          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default SignInCard