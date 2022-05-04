import {ReactComponent as GoogleLogo} from "../../assets/Google.svg";
import './custom-button.styles.scss'

const CustomButton = ({children, googleButton, ...otherProps}) => {
    return (
        <button className={`custom-button ${googleButton ? 'google-button' : ''}`} {...otherProps}>
            {googleButton
                ? <GoogleLogo className='google-logo'/>
                : null
            }
            {children}
        </button>
    )
}

export default CustomButton