import { Route, Routes } from 'react-router'
import TrackList from '../TrackList/TrackList'
import NowPlaying from '../NowPlaying/NowPlaying'
import TrackForm from '../TrackForm/TrackForm'
import * as trackService from '../../services/trackService'
import { useState, useEffect } from 'react';

function Home() {

  const [tracks, setTracks] = useState([]);

  const [trackToUpdate, setTrackToUpdate] = useState(null)

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

  const handleDelete = async (id) => {
    const deletedTrack = await trackService.deleteOne(id)

    if (deletedTrack) {
      const newList = tracks.filter((track) => {
        return track._id !== id
      })
      setTracks(newList)
    }
    else {
      console.log("Something went wrong")
    }
  }

  const updateTrackList = (track) => {
    setTracks([...tracks, track]);
  }

  const findTrackToUpdate = (trackToUpdateId) => {
    const foundTrack = tracks.find((track) => track._id === trackToUpdateId)
    setTrackToUpdate(foundTrack)
  }

  const updateOneTrack = (trackObj) => {
    const newTrackList = tracks.map((track) => {
      if (track._id === trackObj._id) {
        return trackObj
      }
      else {
        return track
      }
    })
    setTracks(newTrackList)
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<TrackList tracks={tracks} handleDelete={handleDelete} findTrackToUpdate={findTrackToUpdate} />} />
        <Route path='/tracks/:id' element={<NowPlaying />} />
        <Route path='/tracks/add-track' element={<TrackForm updateTrackList={updateTrackList} />} />
        <Route path='/tracks/:id/update' element={<TrackForm updateTrackList={updateTrackList} trackToUpdate={trackToUpdate} updateOneTrack={updateOneTrack} />} />
      </Routes>
    </div>
  )
}

export default Home