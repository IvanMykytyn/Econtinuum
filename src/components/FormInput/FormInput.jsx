import './form-input.styles.scss'

const FormInput = ({handleChange, label, error, ...otherProps}) => {
    return (
        <div className='form-input-container'>
            <input className={`form-input ${error ? 'has-error' : ''}`} onChange={handleChange} {...otherProps} autoComplete='on' placeholder={label}/>
            {error && <span className='help-block'>{error}</span>}
        </div>
    )
}

export default FormInput