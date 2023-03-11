import React from 'react';
import './App.css';
import Review from './components/Review'
import WatchReview from './components/WatchReview'

function App() {

  return (
    <>  
      <div className='container'>
        <Review/>
        <WatchReview/>
      </div>
    </>
  );
}

export default App;
