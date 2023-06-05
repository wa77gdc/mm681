import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faChevronLeft, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
// import { Modal } from 'react-bootstrap'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandle = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Header">
      <div className="flex-1-header">
        <div className="left-header" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} className="fa icon-user-main" />
        </div>
      </div>
      <div className="flex-1-header">
        <h5>MM68APP</h5>
      </div>
      <div className="flex-1-header">

       
        {/* <div className="margin5-header" onClick={handleShow}>  */}
        <div className="margin5-header" onClick={logoutHandle}> 
          <FontAwesomeIcon icon={faPowerOff} className="fa icon-user-main" />
        </div>
        {/* <Modal show={show} onHide={handleClose} animation={false}>

          <Modal.Body>
            <div className="Text-Modal-confirm">ยืนยันการออกจากระบบ</div>
          </Modal.Body>

        </Modal> */}
      </div>
    </div>
  )
}

export default Header
