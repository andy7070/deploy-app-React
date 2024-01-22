import React, { useEffect, useState } from 'react'

const DemonioAcencao = () => {
  const [dados, setDados] = useState(null)

   useEffect(() =>{
    fetch('http://www.omdbapi.com/?i=tt13345606&apikey=5e4185d5')
    .then(response => response.json())
    .then(json => setDados(json))
   },[])
   
   if(dados)
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
               <p>A Morte do Demônio: A Ascensão</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{dados.Title}, {dados.Year},  {dados.Type}, Torrent Download</p>
       </div>
 
    </div>
  )
  else return null
}

export default DemonioAcencao
