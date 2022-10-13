import { useEffect, useState } from 'react'
import  './styles.css'
import Favicon from '../assets/img/favicon-32x32.png'


import { api, api_img } from '../services/api';

function Home() {
    
  const [movies, setMovie] = useState([])


  useEffect(() => {
    fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      setMovie(data.results) 
      
    })
  }, []);


  function handleNextMovie(){
      
    
  }
  return (
    
    <div id="container">
        <div id="title">
            <h1>Não sabe o que assistir?</h1>
        </div> 
            {movies.map((movie) => 
        <div key={movie.id}>
           <div id="subtitle">  
          <h2>
              {movie.original_title}
          </h2>
          </div>
          <div id="img">
           <img src={api_img+movie.poster_path} width={250} height={300}></img>
                </div>  
              <div id="overview">
                  <p>{movie.overview}</p>
               </div>   
               <div>
               <button id="button" onClick={handleNextMovie}>
                  <img id="favicon" src={Favicon}/>
                      Encontrar filmes
                  </button>  
               </div>
               
          </div>
          
        )}

       
          
    
    </div>   
    
  )
}

export default Home
