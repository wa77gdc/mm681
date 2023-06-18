import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Forget0 from './Forget0';
import Forget1 from './Forget1';
import Forget2 from './Forget2';
import Footer from '../../components/Footer';



function ForgetPassword() {
    const [forget, setForget] = useState(0)
    const navigate = useNavigate()
    const onClickSubmit = () => navigate('/login')

    const ForgetTitle = ["STEP 1/3", "STEP 2/3", "STEP 3/3"]

    const ForgetDisply = ()=> {
        if(forget === 0) {
            return <Forget0 />
        } else if (forget === 1){
            return <Forget1 />
        } else  {
            return <Forget2 />
        }
    }


    return (
        <div className='main'>
            <div className="layout-Register">
                <div className="relative-Register">
                    <div className="container-Register">
                        {ForgetDisply()}
                    
                    </div>
                    <div style={{height: "350px"}}></div>
                </div>
                <div className="btn-Register">
                            <button
                                disabled={forget === 0}
                                onClick={()=> {
                                    setForget((currForget) => currForget -1)
                                }} 
                                className="btn-cancel-Register" 
                            >
                            Prev
                            </button>
                            <button 
                                onClick={()=>{
                                    if(forget === ForgetTitle.length -1){
                                        alert("New Password Ready");
                                        console.log("Ready");
                                        onClickSubmit();
                                    }else {
                                        setForget((currForget)=>currForget +1)
                                    }
                                }}
                                className="btn-confirm-Register"
                            >
                            {forget === ForgetTitle.length -1 ? "Submit" : "Next"}
                            </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgetPassword
