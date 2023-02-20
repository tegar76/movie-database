import React from 'react'
import Container from '../Container/Container'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout(props) {
  return (
    <>
        <Navbar/>
        <main>
          <Container>{props.children}</Container>
        </main>
        <Footer/>
    </>
  )
}
