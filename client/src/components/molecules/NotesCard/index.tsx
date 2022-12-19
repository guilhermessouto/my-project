import NavigationMenuDemo from "../../organisms/NavigationMenu"

import { Category, Container, Line, Text, Title, TopHeader } from "./style"

type Props = {
  category: string | undefined
  title: string
  text: string
  idNote: string
}

const NotesCard = ({ category, title, text, idNote }: Props) => {
  return (
    <Container>
      <TopHeader>
        <Category>
          {category ? category : 'Sem categoria' }
        </Category>

        <NavigationMenuDemo idNote={idNote}/> 
      </TopHeader>

      <Title>{ title }</Title>
      <Line />
      <Text>{ text }</Text>
    </Container>
  )
}

export default NotesCard