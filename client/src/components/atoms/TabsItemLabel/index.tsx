import { Container, Icon, Span, SubContainer, ToolTip } from "./style"

type Props = {
  icon: string
  label: string
}

const TabsItemLabel = ({ icon, label }: Props) => {
  return (
    <>
      <Container>
        <SubContainer>
          <Icon className={icon}></Icon>
          <Span>{label}</Span>
        </SubContainer>
        
        <ToolTip>
          {label}
        </ToolTip>
      </Container>

    </>
  )
}

export default TabsItemLabel