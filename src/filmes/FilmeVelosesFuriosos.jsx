import React, { useEffect, useState } from 'react'

const FilmeVelosesFuriosos = () => {
  const [data, setData] = useState([])
  const [erro, setError] = useState(null)
   
   useEffect(() => {

    async function fetchFilmes(){
        
      try{
       const   responseFuriosos = await fetch('http://www.omdbapi.com/?t=The+Fast+and+the+Furious&apikey=5e4185d5')
       const jsonFuriosos = await responseFuriosos.json()
       setData({...jsonFuriosos, })
      }catch(erro){
        setError('Dados nao encontrado')
      }
     }
     fetchFilmes()
  }, [])

   if(data === null) return null
  return (
         
       <section>
            <div className='wrarp'>
        <div className='containerImg' >
             <a href="#"><img id='img' src={data.Poster} alt="" /></a>
              <div className='descricao2'>
                <p>{data.Runtime}</p>
                <div className='descricao3'>
                     <p>{data.imdbRating}</p>
                </div>
              </div>
              <div className='descricao'>
                   <p>{data.Title}</p>
                </div>
        </div>
           <div className='descricao4'>
             <p>Veloses e furiosos Torrent 2001 Açao/Crime, Faixa etaira [12]</p>
           </div>
        </div>
       </section>

         
      
    
  )
}

export default FilmeVelosesFuriosos
