import React from 'react'
import { FaArchway, FaClapperboard, FaDesktop, FaEarlybirds,FaMagnifyingGlass   } from 'react-icons/fa6'

const Header = () => {
  return (
    <div>
         <header id='cabecario'>
            <nav id='nav'>
              <ul>
                <li> <FaArchway style={{color: 'wheat', margin: '0 7px'}}/><a href="/inicio">Inicio</a></li>
                <li> <FaClapperboard style={{color: 'red', margin: '0 7px'}}/><a href="/Filmes">Filmes</a></li>
                <li><FaDesktop style={{color: 'aqua', margin: '0 7px'}} /><a href="/series">Séries</a></li>
                <li> <FaEarlybirds style={{color: 'orange', margin: '0 7px'}} /><a href="/animes">Animes</a></li>
                <li><a href="/720p">720P</a></li>
                <li><a href="/1080p">1080P</a></li>
                <li><a href="/4k">4K</a></li>
                <li></li>
              </ul>
            </nav>

             
              <form>
              <div id='containerSeach'>
              <FaMagnifyingGlass style={{color: 'greenyellow', margin:'0 10px', cursor: 'pointer'}} />
              <input type="text" placeholder='Pesquisar...'/>
              </div>
              </form>
                
             
         </header>
    </div>
  )
}

export default Header
