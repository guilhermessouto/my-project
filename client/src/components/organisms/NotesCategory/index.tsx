import { useNavigate } from "react-router-dom"
import NotesCard from "../../molecules/NotesCard"
import { Arrow, ArrowContainer } from "./style"

type Props = {
  data?: [
    {
      category: string | undefined
      title: string
      text: string
      _id: string
    }
  ]
}

const NotesCategory = ({ data }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <ArrowContainer onClick={() => navigate('/home')}>
        <Arrow>
          <i className='bx bx-left-arrow-alt'></i>
        </Arrow>
      </ArrowContainer>

      {data?.map(note => (
          <NotesCard
            key={note._id}
            category={note.category ? note.category : 'Sem categoria.'}
            title={note.title ? note.title : 'Sem título.'}
            text={note.text}
          />
      ))}
    </>
  )
}

export default NotesCategory