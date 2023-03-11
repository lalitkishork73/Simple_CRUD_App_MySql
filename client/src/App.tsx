import React from 'react';
import './App.css';

function App() {

  return (
    <>  
      <div className='container'>
        <div className='innerContainer'>
            <form action="">
              <div className='input'>
                <label htmlFor="MovieName">Movie Name</label>
                <input type="text" placeholder='Movie Name' name='MovieName' id='MovieName'/>
              </div>
              <div className='input'>
                <label htmlFor="Review">Review</label>
                <input type="text" placeholder='Review' name='Review' id='Review'/>
              </div>
              <div className='btn'>
                <button>Submit</button>
              </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default App;
