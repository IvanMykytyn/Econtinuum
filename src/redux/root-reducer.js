import {combineReducers} from "redux";
import {authReducer} from "./auth/auth.reducer";
import {activitiesReducer} from "./activities/activities.reducer";
import {activityFormReducer} from "./activityForm/activityForm.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    activities: activitiesReducer,
    activityForm: activityFormReducer
})


export default rootReducer