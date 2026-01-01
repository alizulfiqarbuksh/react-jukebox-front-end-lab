import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import * as trackService from '../../services/trackService'


function NowPlaying() {

  const [track, setTrack] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const trackDetails = async (id) => {
      try {

        const foundTrack = await trackService.show(id)
        setTrack(foundTrack)
        
      } catch (error) {
        console.log(error)
      }
    }

    if (id) trackDetails(id)

  }, [id])

  return (
    <div>
      <h1>NowPlaying</h1>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </div>
  )
}

export default NowPlaying