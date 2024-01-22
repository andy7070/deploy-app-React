import React, { useEffect, useState } from 'react'
import FilmePirataCaribe2 from './filmes/FilmePirataCaribe2'
import Naruto from './filmes/Naruto'
import Bleach from './filmes/Bleach'
import BobSponja from './filmes/BobSponja'
import FairyTail from './filmes/FairyTail'
import Amae from './filmes/Amae'
import Freira1 from './filmes/Freira1'
import Freira2 from './filmes/Freira2'
import DemonioAcencao from './filmes/DemonioAcencao'
import Beelzebub from './filmes/Beelzebub'
import FugaGalinha2 from './filmes/FugaGalinha2'
import PeakyBlinders from './filmes/PeakyBlinders'
import Supernatural from './filmes/Supernatural'
import NarutoShippuden from './filmes/NarutoShippuden'
import ResidentEvilIlhaMorte from './filmes/ResidentEvilIlhaMorte'
import Mercenarios3 from './filmes/Mercenarios3'


const PaginaInicial = () => {
 

  return (
    <section id='area1'>
        <h2>Acabou De Chegar</h2>
         <div className='filmesChegoAgora'>
           <FilmePirataCaribe2 />
           <Naruto />
           <Bleach />
           <BobSponja />
           <FairyTail />
           <Amae />
           <Freira1 />
           <Freira2 />
           <DemonioAcencao />
           <Beelzebub />
           <FugaGalinha2 />
           <PeakyBlinders />
           <Supernatural />
           <NarutoShippuden />
           <ResidentEvilIlhaMorte />
           <Mercenarios3 />

         </div>
           
           
    </section>
  )
}

export default PaginaInicial
