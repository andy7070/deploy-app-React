import {useState, useEffect} from 'react'

const Bleach = () => {
  const[data, setData] = useState(null)
          
  
  useEffect(() =>{
 
  async  function fetchFilmes(){
    
   const response = await fetch('http://www.omdbapi.com/?t=bleach&apikey=5e4185d5')
 
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
                <p>{data.Title}</p>
             </div>
     </div>
        <div className='descricao4'>
          <p>{data.Title}, {data.Year},  {data.Type}, Torrent Download</p>
        </div>
 
     </div>
   
   )
 }

export default Bleach
