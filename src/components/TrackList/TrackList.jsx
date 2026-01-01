import React from 'react'
import * as trackService from '../../services/trackService'
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function TrackList() {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getAllTracks = async () => {
      try {

        const tracks = await trackService.index()
        setTracks(tracks)
        
      } catch (error) {
        console.log(error)
      }
    }

    getAllTracks()

  }, [])

  return (
    <div>
      <h1>All Tracks</h1>

      {tracks.map((track) =>
        <div key={track._id}>
          <h3>Title:{track.title}</h3>
          <Link to={`/${track._id}`}><button>Play</button></Link>
        </div>
      )}
    </div>
  )
}

export default TrackList