import {useState, useEffect} from 'react'

const Supernatural = () => {
  const [data, setData] = useState(null)
  const [erro, setError] = useState(null)
   
   useEffect(() => {

    async function fetchFilmes(){
        
      try{
       const   response = await fetch('http://www.omdbapi.com/?i=tt0460681&apikey=5e4185d5')
       const json = await response.json()
       setData(json)
      }catch(erro){
        setError('Dados nao encontrado')
      }
     }
     fetchFilmes()
  }, [])

   if(data === null) return null
  return (
         
       
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
             <p>Batman  Torrent  1989 ‧ Ação/Crime, Faixa etaira [12]</p>
           </div>
        </div>
    
  )
}

export default Supernatural
