import './rating-list.styles.scss'
import React from "react";
import RatingItem from "../RatingItem/RatingItem";
import {connect} from "react-redux";
import WithSpinner from "../withSpinner/withSpinner";



const RatingList = ({ratingList, sortBy, isTopInTheActivity}) => {
    const compareItem = (a, b) => b[sortBy] - a[sortBy]
    if (isTopInTheActivity) {
        ratingList.sort(compareItem)
        ratingList = [...new Map(ratingList.reverse().map(item =>
            [item.favorite, item])).values()]
    } else {
        ratingList.sort(compareItem)
    }
    ratingList = ratingList.filter(item => item.favorite !== 'none')

    return (
        ratingList.map((user, index) => <RatingItem key={index} place={index+1}{...user} />)
    )
}


const mapStateToProps = state => ({
    ratingList: state.rating.ratingList,
    sortBy: state.rating.sortBy
})

export default connect(mapStateToProps)(WithSpinner(RatingList));