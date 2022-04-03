import React, { useState } from 'react'


const Header = ({ icon, title, display, isThereNotification }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='flex justify-between align-center'>
            <div className='page-header'>
                <h1 className='page-title'>
                    {icon}&nbsp;{title}
                </h1>
            </div>
            <h1 className={!display ? "d-none notify" : "flex notify"} style={{ marginRight: "30px", cursor: "pointer" }} onClick={() => { setVisible(!visible) }}><i className='fas fa-bell'></i><span className={!isThereNotification ? "d-none" : "flex"}></span></h1>
            
        </div>

    )
}

export default Header