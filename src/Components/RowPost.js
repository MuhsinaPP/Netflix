import React  from 'react'
import Youtube from 'react-youtube'
import { useEffect,useState } from 'react'
import axios from './axios'
import {imageUrl,apiKey } from '../Constants/Constants'
import './RowPost.css'

function RowPost(Props) {
  const [movies,setMovies] = useState([])
  const [urlId, setUrlId] = useState()

  useEffect(() => {
    axios.get(Props.url).then(Response=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    })
  }, [Props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovies=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((Response)=>{
          if(Response.data.results.length!==0){
            setUrlId(Response.data.results[0])
          }
          else{
            window.confirm("not available")
          }
      })
  }
  
  

  return (
    <div className='row'> 
        <h2>{Props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          <>
          <div className={Props.isSmall? 'smallposter' :'poster'} style={{backgroundImage:`url(${imageUrl+obj.backdrop_path})`}}>
          <div className='postercontent'>
          <h1 className='postertitle'>{obj.title}{obj.name}</h1>
        </div>
        <div className='posterbuttondiv'>
            <button onClick={()=>handleMovies(obj.id)} className='posterbutton'>Play</button>
            <button className='posterbutton'>More info</button>
        </div>
          </div>
          
          </>
          )}
        </div>
        { urlId&&<Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost

/* <div className='row'> 
        <h2>{Props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          <img className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
        </div>
        { urlId&&<Youtube videoId={urlId.key} opts={opts}/>}
    </div>*/