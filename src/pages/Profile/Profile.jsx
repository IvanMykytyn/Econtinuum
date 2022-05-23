import React from "react";

import {IoMdCheckboxOutline} from "react-icons/io";
import {
    BiLockAlt
} from "react-icons/bi";


import "./profile.styles.scss";
import EditProfile from "../../components/EditProfile/EditProfile";
import TaskHistory from "../../components/TaskHistory/TaskHistory";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import StatusFilter from "../../components/StatusFilter/StatusFilter";


const Profile = () => {

    return (
        <div className="content">
            <nav>
                <div className="navigation-box">
                    <ul>
                        <li>
                            <IoMdCheckboxOutline size={24}/>
                            <h3>Go to task history</h3>
                        </li>
                        <li className="privacy-issues">
                            <BiLockAlt size={24}/>
                            <h3>Have privacy issues?</h3>
                        </li>
                        <li>
                            <p>Please, contact us using our social media below</p>
                        </li>
                    </ul>
                </div>
                <div className="filter-box">
                    <ul>
                        <CategoryFilter/>
                        <StatusFilter/>
                    </ul>
                </div>
            </nav>
            <main>
                <h1 className="title">Look over your profile info</h1>
                <EditProfile/>
                <TaskHistory/>
            </main>
        </div>
    );
};

export default Profile;
