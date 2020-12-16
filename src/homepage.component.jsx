import React from 'react';

import "./homepage.style.scss"

const HomePage = () => (

 <div className='homePage'>
  <div className='directory-menu'>
   <div className='menu'>
    <div className='content'>
     <h1 className='title'>Hats</h1>
     <span className='subtitle'>Shop now</span>
    </div>
   </div>
   <div className='menu'>
    <div className='content'>
     <h1 className='title'>Jackets</h1>
     <span className='subtitle'>Shop now</span>
    </div>
   </div>
   <div className='menu'>
    <div className='content'>
     <h1 className='title'>Sneakers</h1>
     <span className='subtitle'>Shop now</span>
    </div>
   </div>
   <div className='menu'>
    <div className='content'>
     <h1 className='title'>Women</h1>
     <span className='subtitle'>Shop now</span>
    </div>
   </div>
   <div className='menu'>
    <div className='content'>
     <h1 className='title'>Men</h1>
     <span className='subtitle'>Shop now</span>
    </div>
   </div>
  </div>
 </div>
);

export default HomePage;