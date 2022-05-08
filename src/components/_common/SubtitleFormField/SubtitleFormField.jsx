import React from "react";

import './subtitle-form-field.styles.scss'

const SubtitleFormField = ({children, ...otherProps}) => {
    return (
        <span className='subtitle-form-field' {...otherProps}>Create your own story</span>
    )
}

export default SubtitleFormField