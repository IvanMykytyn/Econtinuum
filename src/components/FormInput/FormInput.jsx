import './form-input.styles.scss'

const FormInput = ({label, error, ...otherProps}) => {
    return (
        <div className='form-input-container'>
            <input className={`form-input ${error ? 'has-error' : ''}`}  {...otherProps} autoComplete='on' placeholder={label}/>
            {error && <span className='help-block'>{error}</span>}
        </div>
    )
}

export default FormInput