import { RatingTypes } from './rating.types'
import axios from 'axios'

export const startLoadRatingList = () => ({
  type: RatingTypes.START_LOAD_LIST,
})
export const successLoadRatingList = (data) => ({
  type: RatingTypes.SUCCESS_LOAD_LIST,
  payload: data,
})
export const showMeInList = (data) => ({
  type: RatingTypes.SHOW_ME_IN_LIST,
  payload: data,
})
export const failureLoadRatingList = (error) => ({
  type: RatingTypes.FAILURE_LOAD_LIST,
  payload: error,
})
const categoryEnum = {
  sorting: 'Garbage sorting',
  waste: 'Paper waste sale',
  tech: 'Resource saving tech',
  flora: 'Plant a piece of flora',
  land: 'Clean a patch of land',
  any: 'any',
}
export const requestLoadRatingList =
  (categoryFilter) => (dispatch) => {
    dispatch(startLoadRatingList())
    axios
      .get(
        `https://eco-project-back-end.herokuapp.com/rating?category=${categoryEnum[categoryFilter]}`
      )
      .then((res) => {
        dispatch(successLoadRatingList(res.data))
      })
      .catch((error) => dispatch(failureLoadRatingList(error)))
  }

export const setRatingSortBy = (option) => ({
  type: RatingTypes.SET_RATING_FILTER,
  payload: option,
})
