import { Route, Routes } from 'react-router'
import TrackList from '../TrackList/TrackList'
import NowPlaying from '../NowPlaying/NowPlaying'

function Home() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TrackList />} />
        <Route path='/:id' element={<NowPlaying />} />
      </Routes>
    </div>
  )
}

export default Home