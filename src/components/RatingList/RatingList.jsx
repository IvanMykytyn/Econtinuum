import './rating-list.styles.scss'
import React from "react";
import RatingItem from "../RatingItem/RatingItem";

const RatingList = ({usersList}) => {
    return(
        usersList.map((user) => <RatingItem key={user.fullName} {...user} /> )
    )
}

export default RatingList