import React from 'react';
import "../css/ProfileId.css";

import ProfilePic from "../asset/profile.jpg";

export const ProfileId = () => {
  return (
    <div className='profile-id' >  
        <div className='profile-pic' >
            <img src={ProfilePic} />
        </div>
        <div className='profile-name' >
            <span className='name' >Actual name</span>
            <span className='user' >username</span>

        </div>
    </div>
  )
}
