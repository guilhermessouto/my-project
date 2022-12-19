import { useEffect, useState } from "react"
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

type DataFiltered = {
  category: string | undefined
  title: string
  text: string
  _id: string
}

const TabNoCategories = ({ data }: Props) => {
  const [dataFiltered, setDataFiltered] = useState<DataFiltered[]>()

  useEffect(() => {
    const dataFilter = data?.filter((note) => !note.category)
    setDataFiltered(dataFilter)

  }, [])

  return (
    <>
      {!dataFiltered?.length  
        ? <p 
            style={{ 
              color: '#fff',
              fontSize: '2em',
              fontWeight: 'bolder'
            }}
          >
            Não há notas.
          </p> 
        
        : dataFiltered?.map(note => (
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

export default TabNoCategories