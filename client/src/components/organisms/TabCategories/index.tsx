import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import NotesCategory from "../NotesCategory"

import { Container } from "./style"

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

const TabCategories = ({ data }: Props) => {
  const navigate = useNavigate()
  const { '*': param } = useParams()

  const [dataFiltered, setDataFiltered] = useState<DataFiltered[]>()
  const [categoryFiltered, setCategoryFiltered]: any = useState()

  const [showCategories, setShowCategories] = useState(true)

  useEffect(() => {
    const setCategory = new Set();

    const filterData = data?.filter(note => note.category !== null)

    const dataFiltered = filterData?.filter(note => {
      const duplicatedCategory = setCategory.has(note.category)
      setCategory.add(note.category)

      return !duplicatedCategory
    })

    setDataFiltered(dataFiltered)

    if(param) {
      setShowCategories(false)

      const dataCategory = filterData?.filter(category => category.category === param)

      setCategoryFiltered(dataCategory)
    } 

  }, [])

  return (
    <>
      {showCategories ? !dataFiltered?.length 
        ? <p 
            style={{ 
              color: '#fff',
              fontSize: '2em',
              fontWeight: 'bolder'
            }}
          >
            Não há categorias.
          </p> 
        : dataFiltered?.map(note => (
          <Container key={note._id}>
            <p onClick={() => navigate(`/home/${note.category}`)}>
              {note.category}
            </p>
          </Container>
        ))
        : <NotesCategory data={categoryFiltered}/>
      }
    </>
  )
}

export default TabCategories