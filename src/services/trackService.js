import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`

const index = async () => {
  try {

    const response = await axios.get(BASE_URL)
    return response.data.tracks
    
  } catch (error) {
    console.log(error)
  } 
}

const show = async (id) => {
  try {

    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data.track
     
  } catch (error) {
    console.log(error)
  }
}

const create = async (track) => {
  try {

    const response = await axios.post(BASE_URL, track);
    return response.data.track
    
  } catch (error) {
    console.log(error)
  }
}

const deleteOne = async (id) => {
  try {

    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data.track
    
  } catch (error) {
    console.log(error)
  }
}

const update = async (id, track) => {
  const response = await axios.put(`${BASE_URL}/${id}`, track)
  return response.data.track
}

export {
  index,
  show,
  create,
  deleteOne,
  update,
};