import React from 'react'
import { Link, useNavigate } from 'react-router';

function TrackList({tracks, handleDelete, findTrackToUpdate}) {

  const navigate = useNavigate()

  return (
    <div>
      <h1>All Tracks</h1>

      {tracks.map((track) =>
        <div key={track._id}>
          <h3>Title: {track.title}</h3>
          <Link to={`/tracks/${track._id}`}><button>Play</button></Link>
          {' '}
          <button onClick={() => {
            findTrackToUpdate(track._id)
            navigate(`/tracks/${track._id}/update`)
            }} >Update</button>
          {' '}
          <button onClick={() => {handleDelete(track._id)}} >Delete</button>
        </div>
      )}
    </div>
  )
}

export default TrackList