import './form-input.styles.scss'

const FormInput = ({handleChange, label,...otherProps}) => {
    return (
        <input className='form-input' onChange={handleChange} {...otherProps} placeholder={label}/>
    )
}

export default FormInput