import React from 'react'

const Phrase = ({quoteRandom}) => {
  return (
    <div className='app__card'>
    <p className='app__phrase'>{quoteRandom.phrase}</p>
    </div>
  )
}

export default Phrase