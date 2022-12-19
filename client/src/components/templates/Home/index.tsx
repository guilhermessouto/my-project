import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Dialog from '@radix-ui/react-dialog'

import { useNotes } from "../../../api/services/notes"

import Tabs from "../../atoms/Tabs"
import TabsItemLabel from "../../atoms/TabsItemLabel"
import TabsViewHeader from "../../molecules/TabsViewHeader"
import SideBar from "../../organisms/SideBar"
import TabCategories from "../../organisms/TabCategories"
import TabDashBoard from "../../organisms/TabDashBoard"
import TabNoCategories from "../../organisms/TabNoCategories"

import {
  Container,
  TabsContainer,
  TabsSelectorContainer,
  TabsViewContainer,
  TabsViewSubContainer
} from "./style"

const HomeTemplate = () => {
  const navigate = useNavigate()

  const tabs = [
    {
      label: <TabsItemLabel icon="bx bx-grid-alt" label="Dashboard" />,
      labelDashBoard: 'Dashboard',
      id: 0
    },
    {
      label: <TabsItemLabel icon="bx bxs-folder" label="Categorias"/>,
      labelDashBoard: 'Categorias',
      id: 1
    },
    {
      label: <TabsItemLabel icon="bx bx-folder" label="Sem Categoria"/>,
      labelDashBoard: 'Sem Categoria',
      id: 2
    }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const { data }: any = useNotes()

  useEffect(() => {
    const { 'myproject-token': token } = parseCookies()

    if(!token)
      return navigate('/login')

  }, [])
  
  const TabsView = () => {
    switch(activeTab.id) {
      case 1:
        return <TabCategories data={data}/>
      
      case 2:
        return <TabNoCategories data={data}/>

      default:
        return <TabDashBoard data={data}/>
    }
  }

  return (
    <Container>
      <SideBar
        isMenuOpen={isMenuOpen}
        openAndCloseMenu={() => setIsMenuOpen(!isMenuOpen)}
      >
        <TabsContainer>
          <TabsSelectorContainer>
            <Tabs 
              items={tabs} 
              onTabSelect={(tab: any) => setActiveTab(tab)} 
            />
          </TabsSelectorContainer>
        </TabsContainer>
        
      </SideBar>

      <TabsViewContainer>
        <TabsViewHeader 
          title={activeTab.labelDashBoard}
        />

        <TabsViewSubContainer>
          <TabsView />
        </TabsViewSubContainer>

      </TabsViewContainer>
    </Container>
  )
}

export default HomeTemplate