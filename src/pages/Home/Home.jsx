import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Filtros from '../../components/Filtros'
import ListagemBarcos from '../../components/Listagem_barcos'
// import Card_barco from '../../components/Card_barco'
function Home() {
  return (
    <div className='home-container'>
        <Header/>
      <div className='conteudo-container'>
        <Filtros/>
        <ListagemBarcos/>
      </div>
    </div>
  )
}

export default Home
