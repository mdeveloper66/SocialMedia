import React from 'react';
import './ProfileCard.css';
import cover from '../../img/cover.jpg';
import profile from '../../img/profileImg.jpg';

function ProfileCard() {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={cover} alt="cover" />
        <img src={profile} alt="profile" />
      </div>

      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {ProfilePage && (
            <>
            <div className="vl"></div>
              <div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </div>            
            </>
          )}
        </div>
        <hr />
      </div>

      { ProfilePage ? <></> : (<span>My Profile</span>)}
    </div>
  )
};

export default ProfileCard