import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Common/Home/Content'
import { useSelector } from 'react-redux'
const Home = () => {
  const {user , isAuthenticated} = useSelector(state => state.user)
  return (
    <div className=' flex-1'>
        <Header/>
        <div className="main flex">
          {
            user.role !== 'admin' &&
            <Content user={isAuthenticated && user.role} />
          }
           
        </div>
    </div>
  )
}

export default Home