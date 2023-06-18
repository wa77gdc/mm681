import logomm68 from "../../images/logomm68.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faUnlock, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link,  useNavigate  } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

const Register = () => {
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ suggester, setSuggester ] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [register] = useRegisterMutation();
  
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (userInfo) {
        navigate('/login');
      }
    },[navigate, userInfo]);

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
          toast.error('Password do not match')
        } else {
          try {
            const res = await register({name, phone, suggester, password }).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/login');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
        }
    }

  return (
    <div className="layout-Login">
      <div className="relative-login">
        <div className="container-login">
          <div className="top">
            <div className="flex-login flex-center-y-loin">
              <img alt="" className="logo-login" src={logomm68} />
            </div>
            <div className="btn-register">
              <Link to="/">
                <div className="green-login">
                  <Badge pill bg="success" className="green-login1">
                    เข้าสู่ระบบ
                  </Badge>{" "}
                  <br /> လော့ဂ်အင်
                </div>
              </Link>
            </div>
          </div>
          <br />

          <h3 className="logo-text-login">Register</h3>
            <form onSubmit={ onSubmitHandle }>

            <div className="box-login">
                <FontAwesomeIcon icon={faUser} className="icon-login" />
                <input 
                type="text" 
                placeholder="Enter Name"
                className="input-login" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <div className="box-login">
                <FontAwesomeIcon icon={faPhone} className="icon-login" />
                <input 
                type="tel" 
                className="input-login" 
                placeholder="Enter Phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                />
            </div>
            <div className="box-login">
                <FontAwesomeIcon icon={faUserGroup} className="icon-login" />
                <input 
                type="tel" 
                className="input-login" 
                placeholder="Enter Suggester Phone Number ( NOt require ) "
                value={suggester}
                onChange={(e)=> setSuggester(e.target.value)}
                />
            </div>
            <div className="box-login">
                <FontAwesomeIcon icon={faUnlock} className="icon-login" />
                <input 
                type="password" 
                className="input-login" 
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <div className="box-login">
                <FontAwesomeIcon icon={faUnlock} className="icon-login" />
                <input 
                type="password" 
                className="input-login" 
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="box-login">
                    <button type="submit" className="btn-login"  >
                        สมัครสมาชิก / စာရင်းသွင်းပါ။
                    </button>
            </div>  
        </form>

          <div className="flex-login">
            <Link to="/forgetpassword" className="text-dec">
              <div className="green-login">
                <Badge pill bg="success" className="green-login1">
                  ลืมรหัสผ่าน
                </Badge>{" "}
                <br />
                စကားဝှက်မေ့နေပါသလား
              </div>
            </Link>
            <div className="flex1-login"></div>
            <a href="https://line.me/ti/p/~warut77" className="text-dec">
              <div className="green-login">
                <Badge pill bg="success" className="green-login1">
                  ติดต่อเรา
                </Badge>{" "}
                <br /> ဆက်သွယ်ပါ။
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
