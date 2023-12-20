
import './App.css'
import phrases from'./utils/phrases.json'
import arrPhotos from'./utils/photos.json'
import getRandomFromArr from './utils/getRandomFromArr'
import { useState } from 'react'
import Phrase from './components/Phrase'
import Button from './components/Button'

function App() {
  const  initialPhrase= getRandomFromArr(phrases)
  const  initialPhoto= getRandomFromArr(arrPhotos)
  
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
  const [photoRandom, setPhotoRandom] = useState(initialPhoto)
  const objStyle={
    backgroundImage: `url(../fondo${photoRandom}.png)`
  }
  
  
  
  return (
    <>
      <div className='app' style={objStyle}>
        <h1 className={`app__title color__title${photoRandom}`} >Galleta de la Fortuna</h1>
        <Phrase quoteRandom={quoteRandom} />
        <Button 
        setQuoteRandom={setQuoteRandom}
        setPhotoRandom={setPhotoRandom}
        />
      </div>
     
    </>
  )
}

export default App
