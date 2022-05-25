import {combineReducers} from "redux";
import {authReducer} from "./auth/auth.reducer";
import {activitiesReducer} from "./activities/activities.reducer";
import {activityFormReducer} from "./activityForm/activityForm.reducer";
import {editProfileReducer} from "./editProfile/editProfile.reducer";
import {tasksHistoryReducer} from "./tasksHistory/tasksHistory.reducer";
import {FilterReducer} from "./filter/filter.reducer";
import {ratingReducer} from "./rating/rating.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    activities: activitiesReducer,
    activityForm: activityFormReducer,
    editProfile: editProfileReducer,
    tasksHistory: tasksHistoryReducer,
    filter: FilterReducer,
    rating:ratingReducer,
})


export default rootReducer