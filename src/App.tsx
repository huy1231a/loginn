import './App.css'
import { Layout, Flex } from 'antd'
import Siderbar from './components/sideBar/siderbar'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import HeaderC from './components/header/header'
import ProjectPage from './pages/ProjectPage'
import DashBoardPage from './pages/DashBoardPage'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <>
      <BrowserRouter>
        <Flex gap='middle' wrap='wrap'>
          <Layout>
            <Siderbar />
            <Layout>
              <Header
                style={{
                  background: 'white',
                  width: '100%',
                  height: 'auto',
                }}>
                <HeaderC />
              </Header>
              <Content style={{ background: '#F4F9FD' }}>
                <Routes>
                  <Route path='/' Component={DashBoardPage} />
                  <Route path='/project' Component={ProjectPage} />
                </Routes>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Flex>
      </BrowserRouter>
    </>
  )
}

export default App
