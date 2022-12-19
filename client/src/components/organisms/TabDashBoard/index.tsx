import NotesCard from "../../molecules/NotesCard"

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

const TabDashBoard = ({ data }: Props) => {

  return (
    <>
      {!data?.length  
        ? <p 
            style={{ 
              color: '#fff',
              fontSize: '2em',
              fontWeight: 'bolder'
            }}
          >
            Não há notas.
          </p> 
        
        : data?.map(note => (
        <NotesCard
          key={note._id}
          idNote={note._id}
          category={note.category ? note.category : 'Sem categoria.'}
          title={note.title ? note.title : 'Sem título.'}
          text={note.text}
        />
      ))}
    </>
  )
}

export default TabDashBoard