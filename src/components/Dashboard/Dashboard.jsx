import React, { useState } from "react";
import "./dashboard.styles.scss";
import RatingList from "../RatingList/RatingList";

const tasks = [
    {
        place: 1,
        fullName: "M. Tsarynskyi",
        points: 100,
        tasksDone: 123,
        favorite: "Flora",
    },
    {
        place: 2,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
    {
        place: 3,
        fullName: "D. Semtso",
        points: 56,
        tasksDone: 7,
        favorite: "Flora",
    },
    {
        place: 4,
        fullName: "I. Mykytyn",
        points: 18,
        tasksDone: 6,
        favorite: "Sorting",
    },
    {
        place: 5,
        fullName: "H. Hrybuy",
        points: 9,
        tasksDone: 3,
        favorite: "Tech",
    },
    {
        place: 6,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
    {
        place: 7,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
    {
        place: 8,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
    {
        place: 9,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
    {
        place: 10,
        fullName: "O. Klymko",
        points: 70,
        tasksDone: 14,
        favorite: "Land",
    },
];

const initialFilter = {
    points: "points",
    quantity: "quantity",
    topInTheActivity: "top in the activity",
};

const Dashboard = ({}) => {
    const [dashboardFilter, setDashboardFilter] = useState(initialFilter.points);

    return (
        <div className="dashboard">
            <h1>Current</h1>
            <div className="filter-buttons">
                <button
                    className={
                        dashboardFilter === initialFilter.points ? "active-filter" : ""
                    }
                    onClick={() => setDashboardFilter(initialFilter.points)}
                >
                    Points
                </button>
                <button
                    className={
                        dashboardFilter === initialFilter.quantity ? "active-filter" : ""
                    }
                    onClick={() => setDashboardFilter(initialFilter.quantity)}
                >
                    Quantity
                </button>
                <button
                    className={
                        dashboardFilter === initialFilter.topInTheActivity
                            ? "active-filter"
                            : ""
                    }
                    onClick={() => setDashboardFilter(initialFilter.topInTheActivity)}
                >
                    Top in the activity
                </button>
            </div>

            <div className="task-table">
                <div className="table-header">
                    <p>Place</p>
                    <p>Full Name</p>
                    <p>Points</p>
                    <p>Tasks done</p>
                    <p>Favorite</p>
                </div>
                <RatingList usersList={tasks}/>
            </div>
        </div>
    );
};

export default Dashboard;
