import React, { useEffect } from 'react'

const Beelzebub = () => {
  const [dados, setDados] = React.useState(null)

  useEffect(() =>{
    fetch('http://www.omdbapi.com/?i=tt1882240&apikey=5e4185d5')
    .then(res => res.json())
    .then(json => setDados(json))
  })

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
               <p>{dados.Title}</p>
            </div>
    </div>
       <div className='descricao4'>
         <p>{dados.Title}, {dados.Year},  {dados.Type}, Torrent Download</p>
       </div>
 
    </div>
  )
  else return null
}

export default Beelzebub
