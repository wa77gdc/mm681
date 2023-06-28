import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faPlusCircle,
  faMinusCircle,
  faTrophy,
  faListAlt,
  faBullhorn,
  faUser,
  faMoneyBill1,
  faQuestion,
  faThumbsUp,
  faGamepad,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { Badge } from "react-bootstrap";
import "../../css/Main.css";
import BottomNav from "../../components/BottomNav";
import { useSelector } from "react-redux";

const style ={ color: "#198754" }

const Main = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="layout-main-Home">
        <div style={{ position: "relative" }}>
          <div className="example1">
            <p>COMING SOON : </p>
          </div>
        </div>
        <div className="relative-Home">
          <div className="box-wallet-Home box-shadow-Home">
            <div className="flex-Home">
              <div>
                <div className="wallet-icon-Home">
                  <div className="font8-Home main-one">
                    <Badge pill bg="success">
                      บัญชีผู้ใช้{" "}
                    </Badge>{" "}
                    / သုံးစွဲသူအကောင့်
                  </div>
                  <br />
                  <div className="second">

                  
                  
                  <div className="main-three">
                    <div className="font8-Home icon-User">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="fa icon-user-Home"
                      style={style}
                    />
                    </div>
                    <div className="font8-Home">
                      Name : {userInfo ? userInfo.name : ""} 
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="fa icon-user-Home icon-Phone"
                        style={style}
                      />{" "}: {userInfo ? userInfo.phone : ""}
                    </div>
                  </div>
                  </div>
                </div>
                <div className="box-money-Home">
                  <div className="left-Home">
                    <div
                      className="font8-Home"
                      style={{ color: "rgb(103, 103, 103)" }}
                    >
                      <Badge pill bg="success">
                        แต้มสะสม
                      </Badge>
                      <br /> စုဆောင်းအမှတ်များ
                    </div>
                    <div
                      className="font1-Home-money"
                      style={{ color: "rgb(251, 183, 28)" }}
                    >
                      0
                    </div>
                  </div>
                  <div className="right-Home">
                    <div
                      className="font8-Home"
                      style={{ color: "rgb(103, 103, 103)" }}
                    >
                      <Badge pill bg="success">
                        ยอดเงินในกระเป๋า
                      </Badge>
                      <br /> အိတ်ဆောင်လက်ကျန်
                    </div>
                    <div className="font1-Home-money">0.00 ฿</div>
                  </div>
                </div>
                <div>
                  <div className="box-bank-Home">
                    <div className="Topup-Home">
                      <Link to="/topup ">
                        <div className="icon-TopUp-Home">
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="icon-TopUp-Home"
                          />
                          {/* <i className="fa fa-plus-circle"></i> */}
                        </div>
                        <div>
                          <h5>
                            <Badge pill bg="success">
                              เติมเงิน
                            </Badge>
                          </h5>{" "}
                          ငွေဖြည့်
                        </div>
                      </Link>
                    </div>
                    <div className="Withdraw-Home">
                      <Link to="/withdraw">
                        <div className="icon-Withdraw-Home">
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            className="icon-Withdraw-Home"
                          />
                          {/* <i className="fa fa-minus-circle"></i> */}
                        </div>
                        <div>
                          <h5>
                            <Badge pill bg="success">
                              ถอนเงิน
                            </Badge>
                          </h5>{" "}
                          ငွေထုတ်ယူပါ။
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "400px" }}></div>
        <div>
          <div className="title-Home">
            <div className="font-title-Home">
              <div className="bold-Home">รายการ / စာရင်း</div>
              <div>ทั้งหมด</div>
            </div>
          </div>
          <div className="box-lists-Home">
            <div className="flex1-Home">
              <Link to="/listlotto">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faTrophy} className="icons-Home" />
                  {/* <i className="fa fa-trophy icons-Home"></i> */}
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  แทงหวย
                </Badge>
                <br /> ထီလောင်းခြင်း။
              </div>
            </div>
            <div className="flex1-Home">
              <Link to="/orderlist">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faListAlt} className="icons-Home" />
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  โพยหวย
                </Badge>
                <br /> မဲနှိုက်ခြင်း။
              </div>
            </div>
            <div className="flex1-Home">
              <Link to="/prize">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faBullhorn} className="icons-Home" />
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  ผลรางวัล
                </Badge>
                <br /> ဆု
              </div>
            </div>
            <div className="flex1-Home">
              <Link to="/memberd">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faUser} className="icons-Home" />
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  ดาวน์ไลน์
                </Badge>
                <br /> ဒေါင်းလိုင်း
              </div>
            </div>
            <div className="flex1-Home">
              <Link to="/commission">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faMoneyBill1} className="icons-Home" />
                  <i className="fa fa-money icons-Home"></i>
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  คอมมิชชั่น
                </Badge>
                <br /> ကော်မရှင်
              </div>
            </div>
            <div className="flex1-Home">
              <Link to="/howto">
                <div className="icon-lists-Home">
                  <FontAwesomeIcon icon={faQuestion} className="icons-Home" />
                </div>
              </Link>
              <div>
                <Badge pill bg="success">
                  วิธีใช้งาน
                </Badge>
                <br /> အသုံးပြုနည်း
              </div>
            </div>
            <div className="flex1-Home">
              <div className="icon-lists-Home icon-lists-Home-disable">
                <FontAwesomeIcon icon={faThumbsUp} className="icons-Home" />
              </div>
              <div>
                <Badge pill bg="success" className="icon-lists-Home-disable">
                  แจ็คพ็อต
                </Badge>
                <br /> ဘောနပ်စ်
              </div>
            </div>
            <div className="flex1-Home">
              <div className="icon-lists-Home icon-lists-Home-disable">
                <FontAwesomeIcon icon={faGamepad} className="icons-Home" />
              </div>
              <div>
                <Badge pill bg="success" className="icon-lists-Home-disable">
                  เกม
                </Badge>
                <br /> ဂိမ်းများ
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Main;
