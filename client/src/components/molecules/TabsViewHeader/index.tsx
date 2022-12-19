import { Container, Title } from "./style"

type Props = {
  title: string
}

const TabsViewHeader = ({ title }: Props) => {
  return (
    <Container>
      <Title>
        { title }
      </Title>
    </Container>
  )
}

export default TabsViewHeader