import logomm68 from "../../images/logomm68.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);


  useEffect(() => {
    if (userInfo) {
      navigate('/main');
    }
  },[navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ phone, password }).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/main');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="layout-Login">
      <div className="relative-login">
        <div className="container-login">
          <div className="top">
            <div className="flex-login flex-center-y-loin">
              <img alt="" className="logo-login" src={logomm68} />
            </div>
            <div className="btn-register">
              <Link to="/register">
                <div className="green-login">
                  <Badge pill bg="success" className="green-login1">
                    สมัครสมาชิก
                  </Badge>{" "}
                  <br /> စာရင်းသွင်းပါ။
                </div>
              </Link>
            </div>
          </div>
          <br />

          <h3 className="logo-text-login">Login</h3>
          
          <form onSubmit={submitHandler}>
            <div className="box-login">
              <FontAwesomeIcon icon={faPhone} className="icon-login" />
              <input
                type="tel"
                className="input-login"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="box-login">
              <FontAwesomeIcon icon={faUnlock} className="icon-login" />
              <input
                type="password"
                className="input-login"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* { isLoading && <Loader />} */}
            <div className="box-login">
              <button type="submit"  className="btn-login">
                เข้าสู่ระบบ / လော့ဂ်အင်
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

export default Login;
