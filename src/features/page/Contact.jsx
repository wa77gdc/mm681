import React from 'react'
import qrimg from '../../images/qrcode.jpg'
import BottomNav from '../../components/BottomNav'

const Contact = () => {
  return (
    <div className='main'>
        <div className="page">
            <div className="layout-contact">
                <div className="relative">
                    <div className="box-contact">
                        <div className="container-box-contact">
                            <h5>ช่องทางการติดต่อ</h5>
                            <br />
                            <div className="qrimg">
                            <img src={qrimg} alt="" style={{width:"200px",height: "200px"}}/>
                            <br />
                            <br />
                            <div className="contact-info">
                                <a href="https://line.me/R/ti/p/@419gtumj" rel='noreferrer' target="_blank">
                                <button className='btn-contact btn-green-contact'>Line</button>

                                </a>
                                <button className='btn-contact btn-red-contact'>วิธีการใช้งาน</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <BottomNav />
    </div>
  )
}

export default Contact
