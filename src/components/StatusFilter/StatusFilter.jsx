
import './status-filter.styles.scss'
import {BiChevronDown, BiChevronUp, BiLoaderCircle} from "react-icons/bi";
import {BsCheck2, BsCircle} from "react-icons/bs";
import {IoClose} from "react-icons/io5";
import {CgSandClock} from "react-icons/cg";
import React, {useState} from "react";
import {setStatusFilter} from "../../redux/filter/filter.actions";
import {connect} from "react-redux";
const initialStatus = {
    any: "any",
    success: "accepted",
    failed: "rejected",
    validating: "testing",
};
const StatusFilter = ({setStatusFilter,statusSelectedOption}) =>{
    const [statusList, setStatusList] = useState(true);

    return(
        <li className="status-section">
            <div
                className="status-title"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    setStatusList(!statusList);
                }}
            >
                <div>
                    <BiLoaderCircle size={30} />
                    <h4>Status</h4>
                </div>
                {statusList && <BiChevronUp size={30} />}
                {!statusList && <BiChevronDown size={30} />}
            </div>
            {!statusList && (
                <ul className="status-list">
                    <li
                        id="status-any"
                        className={
                            statusSelectedOption === initialStatus.any ? "active-category" : ''
                        }
                        onClick={() => {
                            setStatusFilter(initialStatus.any);
                        }}
                    >
                        <BsCircle
                            size={18}
                            color={"#339BD6"}
                            style={{ margin: "0 3px" }}
                        />
                        <p>Any</p>
                    </li>
                    <li
                        id="status-success"
                        className={
                            statusSelectedOption === initialStatus.success? "active-category" : ''
                        }
                        onClick={() => {
                            setStatusFilter(initialStatus.success);
                        }}
                    >
                        <BsCheck2 size={24} color={"#6EB29A"} />
                        <p>Success</p>
                    </li>
                    <li
                        id="status-failed"
                        className={
                            statusSelectedOption === initialStatus.failed ? "active-category" : ''
                        }
                        onClick={() => {
                            setStatusFilter(initialStatus.failed);
                        }}
                    >
                        <IoClose size={24} color={"#ff5f71"} />
                        <p>Failed</p>
                    </li>
                    <li
                        id="status-validating"
                        className={
                            statusSelectedOption === initialStatus.validating ? "active-category" : ''
                        }
                        onClick={() => {
                            setStatusFilter(initialStatus.validating);
                        }}
                    >
                        <CgSandClock size={24} color={"#708090"} />
                        <p>Validating</p>
                    </li>
                </ul>
            )}
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    setStatusFilter: (option) => dispatch(setStatusFilter(option))
})
const mapStateToProps = state => ({
    statusSelectedOption: state.filter.status
})
export default connect(mapStateToProps, mapDispatchToProps)(StatusFilter)