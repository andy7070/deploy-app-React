import React, { useEffect, useState } from 'react'

const Freira2 = () => {
  const [dados, setDados] = useState(null)

  async function FetFilmes(){
     const res = await fetch('http://www.omdbapi.com/?i=tt10160976&apikey=5e4185d5')
     const json = await res.json()
     setDados(json)
  }

  useEffect(()=>{
     FetFilmes()
  },[])

  if(dados === null ) return null
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
               <p>A Freira 2</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{dados.Title}, {dados.Year},  {dados.Type}, Torrent Download</p>
       </div>
 
    </div>
  )
}

export default Freira2
