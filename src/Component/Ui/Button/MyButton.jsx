import React  from 'react'
import style from '../Button/MyButton.module.css'

const MyButton = function({children, ...props}) {

return(
        <button {...props} className = { style.btn}>

        {children}

        </button>
)
}
export default MyButton