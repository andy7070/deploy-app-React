import {useState, useEffect} from 'react'

const Freira1 = () => {
  const [dados, setDados] = useState(null)

   async function FetchFilmes(){
     
    try{
      const res = await fetch('http://www.omdbapi.com/?i=tt5814060&apikey=5e4185d5')

      const json = await res.json()
     setDados(json)
    }catch(error){
      console.error('error')
    }

   }
   useEffect(() =>{
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
               <p>A Freira</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{dados.Title}, {dados.Year},  {dados.Type}, Torrent Download</p>
       </div>
 
    </div>
  )
}

export default Freira1
