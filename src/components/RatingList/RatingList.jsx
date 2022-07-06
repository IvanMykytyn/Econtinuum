import './rating-list.styles.scss'
import React from "react";
import RatingItem from "../RatingItem/RatingItem";
import {connect} from "react-redux";
import WithSpinner from "../withSpinner/withSpinner";



const RatingList = ({ratingList, isTopInTheActivity, userId}) => {
    if (isTopInTheActivity) {
        ratingList = [...new Map(ratingList.reverse().map(item =>
            [item.favorite, item])).values()]
    }
    ratingList = ratingList.filter(item => item.favorite !== 'none')

    return (
        ratingList.map((user) => <RatingItem key={user._id} {...user} userId={userId} />)
    )
}


const mapStateToProps = state => ({
    ratingList: state.rating.ratingList,
    userId: state.auth.userObject?._id, 
})

export default connect(mapStateToProps)(WithSpinner(RatingList));