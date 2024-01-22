import {useState, useEffect} from 'react'

const FilmeBatman2 = () => {
  const [data, setData] = useState([])
  const [erro, setError] = useState(null)
   
   useEffect(() => {

    async function fetchFilmes(){
        
      try{
       const   response = await fetch('https://www.omdbapi.com/?s=Batman&apikey=5e4185d5')
       const json = await response.json()
       if(json.Search){
        setData(json.Search)
       }else {
        setData([])
       }
      }catch(erro){
        setError('Dados nao encontrado')
      }
     }
     fetchFilmes()
  }, [])

   return (
         
              
             <section id='area2'>


 {data.map((data) => 
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
              )}

             </section>
                
    
  )
}


export default FilmeBatman2
