
import './task-history-list.styles.scss'
import TaskItem from "../TaskItem/TaskItem";
import WithSpinner from "../withSpinner/withSpinner";
import {connect} from "react-redux";

const TaskHistoryList = ({tasks}) => {
    return (
        <>
            {tasks.map((task,index) => <TaskItem key={task._id} index={index} {...task}/>)}
        </>
    )
}
const mapStateToProps = state => ({
    tasks: state.tasksHistory.tasks
})
export default  connect(mapStateToProps)(WithSpinner(TaskHistoryList))