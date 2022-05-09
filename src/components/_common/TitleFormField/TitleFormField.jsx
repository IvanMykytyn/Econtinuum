import React from "react";
import './title-form-field.styles.scss'

const TitleFormField = ({children, ...otherProps}) => {
    return (
        <h2 className='title-form-field' {...otherProps}>{children}</h2>
    )
}

export default TitleFormField