import React, { useEffect, useState } from 'react'

const BobSponja = () => {
  const [dados, setDados] = useState(null)
   const [erro, setErro] = useState(null)
   useEffect(() =>{
     async function FetchFilmes(){

      try{
        const response = await fetch('http://www.omdbapi.com/?t=piece&apikey=5e4185d5')
        const json = await response.json()
        setDados(json)
        console.log(json)

      }catch(erro){
       setErro('dados nao encontrados')
      }
     }
     FetchFilmes()
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

export default BobSponja
