import React, { useState } from 'react'
import * as trackService from '../../services/trackService'
import { useNavigate } from 'react-router'

function TrackForm({updateTrackList, trackToUpdate, updateOneTrack}) {

  const [formData, setFormData] = useState(trackToUpdate ? trackToUpdate 
    :
    {
    title: '',
    artist: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (trackToUpdate) {
      const updatedTrack = await trackService.update(trackToUpdate._id, formData)

      if (updatedTrack) {
        updateOneTrack(updatedTrack)
        navigate('/')
      }
      else {
        console.log("Something went wrong")
      }
    }
    else {
      try {

      const track = await trackService.create(formData)

      if (track) {
        updateTrackList(track)
        navigate('/')
      }
      else {
        console.log("Something went wrong")
      }
      
    } catch (error) {
      console.log(error)
    }
    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
    console.log(formData)
  }

  return (
    <div>
      <h1>Add a Track</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <input onChange={handleChange} type="text" id='title' name='title' value={formData.title} />

        <label htmlFor="artist">Artist: </label>
        <input onChange={handleChange} type="text" id='artist' name='artist' value={formData.artist} />

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default TrackForm