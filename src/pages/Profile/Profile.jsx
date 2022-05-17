import React from "react";

import { IoMdCheckboxOutline } from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import EditProfile from "./EditProfile";

import "./profile.styles.scss";

const Profile = () => {
  return (
    <div className="content">
      <nav>
        <div className="navigation-box">
          <ul>
            <li>
              <IoMdCheckboxOutline size={24} />
              <h3>Go to task history</h3>
            </li>
            <li className="privacy-issues">
              <BiLockAlt size={24} />
              <h3>Have privacy issues?</h3>
            </li>
            <li>
              <p>Please, contact us using our social media below</p>
            </li>
          </ul>
        </div>
        <div className="filter-box">
          <ul>
            <li>
              {/* {img}  */}
              <h4>Category</h4>
              {/* {img}  */}
              <ul>
                <li>
                  <span></span>
                  <p>Any</p>
                </li>
                <li>
                  <span></span>
                  <p>Paper waste</p>
                </li>
                <li>
                  <span></span>
                  <p>Sorting</p>
                </li>
                <li>
                  <span></span>
                  <p>Tech</p>
                </li>
                <li>
                  <span></span>
                  <p>Flora</p>
                </li>
                <li>
                  <span></span>
                  <p>Land</p>
                </li>
              </ul>
            </li>
            <li>
              {/* {img}  */}
              <h4>Status</h4>
              {/* {img}  */}
              <ul>
                <li>
                  <span></span>
                  <p>Any</p>
                </li>
                <li>
                  <span></span>
                  <p>Success</p>
                </li>
                <li>
                  <span></span>
                  <p>Failed</p>
                </li>
                <li>
                  <span></span>
                  <p>Validating</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1 className="title">Look over your profile info</h1>
        <EditProfile />

        <div className="something"></div>
      </main>
    </div>
  );
};

export default Profile;
