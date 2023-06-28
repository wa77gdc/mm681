
import React from "react";

import bank from "../../images/bank.png";
import BottomNav from "../../components/BottomNav";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="main">
        <div className="page">
            <div className="layout-profile">
                <div className="relative-profile">
                    <div className="container-profile">
                        {/* <div style={{position: 'relative'}}>ข้อมูลโปรไฟล์</div> */}
                        <h6>ข้อมูลโปรไฟล์ :</h6>
                        <div className="box-profile">
                            <div className="circle-icon-profile">
                                <div style={{fontSize: "32px"}}>
                                    <FontAwesomeIcon icon={faIdCard} />
                                </div>
                            </div>
                            <div className="text-profile">
                                <div className="ID-profile">
                                NAME : {userInfo ? userInfo.name : ""} 
                                </div>
                                <div className="box-font08-profile">
                                   <div>{userInfo ? userInfo.phone : ""} </div> 
                                   <div>50.00 ฿</div> 
                                </div>
                            </div>
                        </div>
                        <p style={{textAlign: "right",fontSize:"13px",color:"rgb(201,3,3)"}}> เปลี่ยนรหัสผ่าน ?</p>
                    </div>
                    <div style={{height: "180px"}}></div>
                    <div className="container-contact-profile">
                        <div className="top-contact-profile">
                            <div className="title-contact-profile">Link แนะนำ</div>
                        </div>
                        <div className="bottom-contact-profile">
                            <div>{userInfo ? userInfo.phone : ""}</div>
                        </div>
                    </div>
                    <div className="container-contact-profile">
                        <div className="top-contact-profile">
                            <div className="title-contact-profile">
                                ผลประโยชน์จากการแนะนำ
                            </div>
                        </div>
                        <div className="bottom-contact-profile">
                            <div>รับคอมมิชชั่นจากทุกยอดการซื้อ
รับคอมมิชชั่นจากการยอดการซื้อ หมายถึง การรับรายได้จากทุกยอดการซื้อของสมาชิกที่คุณแนะนำมาเท่านั้น ตัวอย่างเช่น เมื่อสมาชิกคุณซื้อหวย 1000 บาท คุณจะได้รับคอมมิชชั่น ตามเปอร์เซ็นต์ที่กำหนด โดยระบบจะทำการคำนวนให้ทันที่มีการซื้อ</div>
                        </div>
                    </div>
                    <div className="container-contact-profile">
                        <div className="top-contact-profile">
                            <div className="title-contact-profile">
                                ข้อมูลการติดต่อ
                                <div className="fix-right">
                                <FontAwesomeIcon icon={faPenToSquare} style={{marginRight:"5px"}} />แก้ไข
                                </div>
                            </div>
                        </div>
                        <div className="bottom-contact-profile">
                            <div>เบอร์โทรศัพท์ </div>
                            <div>08XXXXXXXX</div>
                            <br />
                            <div>ชื่อ - นามสกุล</div>
                            <div>Songkran April</div>
                        </div>
                    </div>
                    <div className="container-contact-profile">
                        <div className="top-contact-profile">
                            <div className="title-contact-profile">ข้อมูลธนาคาร</div>
                        </div>
                        <div className="acc-bank-profile">
                            <img src={bank} className='logo-bank-profile' alt="bank" />
                            <div className="text-bank-profile">
                                <div className="ID-Withdraw">
                                เลขที่ : 7999999999
                                </div>
                                <div className="box-font-withdraw">
                                    <div>บัญชี : Bangkok Bank</div>
                                    <div>ชื่อบัญชี : Songkran April</div>
                                    <div>สถานะ :<span style={{color:"green"}}>กำลังใช้งาน</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    </div>
  );
}

export default Profile;
