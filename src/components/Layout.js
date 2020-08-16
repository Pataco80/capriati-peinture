import React from 'react'
import GlobalStyle from '../theme/globalStyles'
const Layout = ({children}) => {
  return (
    <>
    <GlobalStyle/>
      <main style={{maxWidth:'1170px'}}>{children}</main>
    </>
  )
}

export default Layout
