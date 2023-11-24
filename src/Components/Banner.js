import React from 'react'
import { useEffect,useState } from 'react'
import { apiKey,imageUrl } from '../Constants/Constants'
import axios from './axios'
import './Banner.css'

function Banner() {
  const [movie,setMovie] = useState('')

  useEffect(() => {
      axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((Response)=>{
        console.log(Response.data.results[2])
        setMovie(Response.data.results[3])
       
      })
      
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className='banner'>
        <div className='content'>
          <h1 className='title'>{movie.title}</h1>
        </div>
        <div className='buttondiv'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie.overview}</h1>
        <div className='fade'></div>
    </div>
  )
}

export default Banner