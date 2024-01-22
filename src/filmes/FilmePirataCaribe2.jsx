import React, { useEffect, useState } from 'react'

const FilmePirataCaribe2 = () => {
  const[data, setData] = useState(null)
          
  
 useEffect(() =>{

 async  function fetchFilmes(){
   
  const response = await fetch('https://www.omdbapi.com/?t=pirates+of+the+caribbean&apikey=5e4185d5')

  const json = await response.json()
  setData(json)
  console.log(json)

 }
 fetchFilmes()
 },[])

 if(data === null ) return null


    
  return (
    <div className='wrarp' key={data.Title}>
    <div className='containerImg' >
         <a href="#"><img id='img' src={data.Poster} alt="" /></a>
          <div className='descricao2'>
            <p>{data.Runtime}</p>
            <div className='descricao3'>
                 <p>{data.imdbRating}</p>
            </div>
          </div>
          <div className='descricao'>
               <p>Piratas do Caribe: A Maldição do Pérola Negra</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{data.Title}, {data.Year},  {data.Type}, Torrent Download</p>
       </div>

    </div>
  
  )
}

export default FilmePirataCaribe2
