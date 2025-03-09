import Header from '@/components/Header'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default MainLayout