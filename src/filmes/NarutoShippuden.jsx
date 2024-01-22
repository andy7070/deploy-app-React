import React, { useEffect, useState } from 'react'

const NarutoShippuden = () => {
  const [dados, setDados] = useState(null)

   useEffect(() =>{
    fetch('http://www.omdbapi.com/?i=tt0988824&apikey=5e4185d5')
    .then(res => res.json())
    .then(json => setDados(json))
   },[])

   if(dados === null) return null 
  return (
    <div className='wrarp' key={dados.Title}>
    <div className='containerImg' >
         <a href="#"><img id='img' src={dados.Poster} alt="" /></a>
         <div className='descricao3'>
                 <p>{dados.imdbRating}</p>
            </div>
          <div className='descricao2'>
            <p>{dados.Runtime}</p>
          </div>
          <div className='descricao'>
               <p>{dados.Title}</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{dados.Title}, {dados.Year},  {dados.Type}, Torrent Download</p>
       </div>
 
    </div>
  )
}

export default NarutoShippuden
