import {combineReducers} from "redux";
import {authReducer} from "./auth/auth.reducer";
import {activitiesReducer} from "./activities/activities.reducer";
import {activityFormReducer} from "./activityForm/activityForm.reducer";
import {editProfileReducer} from "./editProfile/editProfile.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    activities: activitiesReducer,
    activityForm: activityFormReducer,
    editProfile: editProfileReducer,
})


export default rootReducer