import React, {useState} from "react";


import './activities-form.styles.scss'
import {IoClose} from "react-icons/io5";
import {ClipIcon, LocationIcon, NumbersIcon, PlanetIcon} from "../../pages/Activities/styles/images";
import FormInput from "../FormInput/FormInput";
import {connect} from "react-redux";
import {closeActivityForm, requestActivityForm} from "../../redux/activityForm/activityForm.actions";
import {useNavigate} from "react-router-dom";

const ActivitiesForm = ({closeForm, activity, sendForm}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const [form, setForm] = useState({
        description: '',
        photos: ''
    })
    const [number, setNumber] = useState(0)
    const [fileByteArray, setFileByteArray] = useState([])

    const handleFileValidation = (event) => {

        const allowedExtension = /(\.jpg|\.jpeg|\.png|\.gif)$/i
        if (!allowedExtension.exec(event.target.value)) {
            event.target = ''
            setErrors('Invalid file type')
            return false
        }

        const byteArray = [];
        const reader = new FileReader();
        reader.readAsArrayBuffer(event.target.files[0]);
        reader.onloadend = (evt) => {
            if (evt.target.readyState === FileReader.DONE) {
                const arrayBuffer = evt.target.result,
                    array = new Uint8Array(arrayBuffer);
                for (const a of array) {
                    byteArray.push(a);
                }
                setFileByteArray([...fileByteArray, {type: "Buffer", data: [...byteArray]}])
                setErrors('')
            }
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const sendObject = {
            activity_type: String(activity.type),
            users_task_description: form.description,
            numerical_indicators: +number,
            location: 'SFSFA2312312231',
            photos: fileByteArray,
            token: JSON.parse(localStorage.getItem('user')).token
        }

        sendForm(sendObject)
        closeForm()

        navigate('/profile')
    }
    const handleChange = ({target: {name, value}}) => {
        setForm({...sendForm, [name]: value})

    }
    const {title, number_of_points, unit_of_measure} = activity
    return (
        <div className={"form-bg"}>
            <div className="form-box">
                <IoClose
                    size={45}
                    className="close-icon"
                    onClick={closeForm}
                />
                <div className="form-description-box">
                    <h2>Fill the form</h2>
                    <p className="task-description">
                        Write down some description information if needed
                    </p>
                    <hr/>
                    <p className="p-category-name">{title}</p>
                    <p className="p-count-of-points">{number_of_points} points per {unit_of_measure}</p>
                    <img src={PlanetIcon} alt='PlanetIcon'/>
                </div>
                <form className="form-fields" onSubmit={handleSubmit}>
                    <div className="location">
                        <img src={LocationIcon} alt='LocationIcon'/>
                        <p>Location</p>
                    </div>
                    <div className="photos">
                        <img src={ClipIcon} alt='ClipIcon'/>
                        <label htmlFor="photo" className="custom-file-upload">
                            <span className='photo__text'>Attach photos</span>
                            <FormInput
                                error={errors}
                                type='file'
                                id='photo'
                                label='Attach photos'
                                onChange={handleFileValidation}
                                name='photos'
                                multiple
                            />
                        </label>
                    </div>
                    <div className="number">
                        <img src={NumbersIcon} alt='NumbersIcon'/>
                        <FormInput
                            name="number"
                            type="number"

                            label="Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="description-input">
                         <textarea
                             name="description"
                             placeholder="Description"
                             value={form.description}
                             onChange={handleChange}
                         />
                    </div>
                    <div className="confirm-button">
                        <button disabled={errors} type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    activity: state.activityForm.activity,
})

const mapDispatchToProps = (dispatch) => ({
    closeForm: () => dispatch(closeActivityForm()),
    sendForm: form => dispatch(requestActivityForm(form))

})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesForm)