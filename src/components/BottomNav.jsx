import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faAddressCard, faHome, faBookmark, faHistory, faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <div className="container-bottomnav">
            <div className="flex-1-Home">
                <Link to="/profile">
                    <FontAwesomeIcon icon={faAddressCard} />
                    <div className="font8-Home-Nav">โปรไฟล์</div>
                </Link>
            </div>

            <div className="flex-1-Home">
                <Link to="/listlotto">
                <FontAwesomeIcon icon={faBookmark} />
                <div className="font8-Home-Nav">แทงหวย</div>
                </Link>
            </div>

            <div className="flex-1-Home">
                <Link to="/main">
                    <div className="icon-Home">
                        <FontAwesomeIcon icon={faHome} className="fa-home" />
                    </div>
                </Link>
            </div>
            <div className="flex-1-Home">
                <Link to="/history">
                <FontAwesomeIcon icon={faHistory} />
                <div className="font8-Home-Nav">ประวัติ</div>
                </Link>
            </div>
            <div className="flex-1-Home">
                <Link to="/contact">
                <FontAwesomeIcon icon={faInfoCircle} />
                <div className="font8-Home-Nav">ติดต่อเรา</div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNav
