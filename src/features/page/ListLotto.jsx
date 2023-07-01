import React, { useState } from 'react'

import logo681 from '../../images/mm681.jpg'
import logo682 from '../../images/mm682.jpg'
import logo683 from '../../images/mm683.jpg'
import ppf12 from '../../images/ppf12.png'
import ppf13 from '../../images/ppf13.png'
import ppf14 from '../../images/ppf14.png'
import ppf15 from '../../images/ppf15.png'

import logo68 from '../../images/logo68.jpg'
import Karen from '../../images/karen.jpg'
import banner from '../../images/banner.jpg'

import Cat from '../../images/cat.jpg'
import Dog from '../../images/dog.jpg'
import Cheetah from '../../images/Cheetah.jpg'
import Penguin from '../../images/penguin.jpg'

import elephant from '../../images/elephant.jpg'
import Bee from '../../images/bee.jpg'
import Fish from '../../images/fish.jpg'
import Bull from '../../images/bull.jpg'
import Monkey from '../../images/monkey.jpg'
import panda from '../../images/panda.jpg'
import turtle from '../../images/turtle.jpg'

import cow from '../../images/cow.jpg'
import fox from '../../images/fox.jpg'
import hippopotamus from '../../images/hippopotamus.jpg'
import ladybug from '../../images/ladybug.jpg'

import bear from '../../images/bear.jpg'
import dragon from '../../images/dragon.jpg'
import lion from '../../images/lion.jpg'
import rhinoceros from '../../images/rhinoceros.jpg'

import snake from '../../images/snake.jpg'
import durian from '../../images/durian.jpg'
import grape from '../../images/grape.jpg'
import orange from '../../images/orange.jpg'

import mangosteen from '../../images/mangosteen.jpg'

import watermelon from '../../images/watermelon.jpg'
import banana from '../../images/banana.jpg'
import greenapple from '../../images/greenapple.jpg'
import mango from '../../images/mango.jpg'

import papaya from '../../images/papaya.jpg'
import redapple from '../../images/redapple.jpg'
import cherry from '../../images/cherry.jpg'
import coconut from '../../images/coconut.jpg'

import lemon from '../../images/lemon.jpg'
import pineapple from '../../images/pineapple.jpg'
import strawberry from '../../images/strawberry.jpg'
import cake from '../../images/cake.jpg'

import chocolate from '../../images/chocolate.jpg'
import hamburger from '../../images/hamburger.jpg'
import pizza from '../../images/pizza.jpg'
import sausage from '../../images/sausage.jpg'

import baseball from '../../images/baseball.jpg'
import basketball from '../../images/basketball.jpg'
import bowling from '../../images/bowling.jpg'
import football from '../../images/football.jpg'

import rugby from '../../images/rugby.jpg'
import equipment from '../../images/equipment.jpg'
import hammer from '../../images/hammer.jpg'
import pencil from '../../images/pencil.jpg'

import ruler from '../../images/ruler.jpg'
import scissors from '../../images/scissors.jpg'
import candlestick from '../../images/candlestick.jpg'
import hanginglamp from '../../images/hanginglamp.jpg'

import match from '../../images/match.jpg'
import tablelamp from '../../images/tablelamp.jpg'
import torch from '../../images/torch.jpg'
import coin from '../../images/coin.jpg'

import crown from '../../images/crown.jpg'
import diamond from '../../images/diamond.jpg'
import gold from '../../images/gold.jpg'
import treasurechest from '../../images/treasurechest.jpg'
import { Button } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';





function ListLotto() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const navigate = useNavigate();
  const onClickSubmit = () => console.log("onclick")
//   const onClickSubmit = () => navigate('/playlotto')
  return (

    <div className='main'>
      <div className="page">

        <div className="layout-lotto">
          <div className="relative-lotto">
            <>
              <div className="container-lotto">
                <div className="box-text-lotto">
                  <div className="box-title-lotto">
                    <div className="flag-lotto">
                      <img alt="" className="flag-karean" src={ppf12} />
                    </div>
                    <div className="title-lotto">
                      HUAY GOLD WING
                      <div className="subtitle-lotto">01/01/2566</div>
                    </div>
                  </div>
                  <div className="box-countdown-lotto">
                    <div className="box-countdown-lotto-top">
                      เหลือเวลา <br /> 00:09:22
                    </div>
                    <div className="box-countdown-lotto-bottom">ကျန်ရှိသောအချိန်</div>
                  </div>
                </div>
                <div className="box-btn-lotto1">
                  {/* <div> */}
                  <div className="btn-rule-lotto" onClick={handleShow}>
                    กติกา
                  </div>
                 <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                     
                </div>
                <div className="box-btn-lotto1">
                  <div className="btn-white-lotto" >
                    စည်းကမ်း
                  </div>
                  <div className="btn-white-lotto" >
                    ထီကစားပါ
                  </div>

                </div>
              </div>
              <div className="lottoHeight"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-text-lotto">
                  <div className="box-title-lotto">
                    <div className="flag-lotto">
                      <img alt="" className="flag-karean" src={ppf13} />
                    </div>
                    <div className="title-lotto">
                      HUAY STAR 
                      <div className="subtitle-lotto"><br />01/01/2566</div>
                    </div>
                  </div>
                  <div className="box-countdown-lotto">
                    <div className="box-countdown-lotto-top">
                      เหลือเวลา <br /> 00:09:22
                    </div>
                    <div className="box-countdown-lotto-bottom">ကျန်ရှိသောအချိန်</div>
                  </div>
                </div>
                <div className="box-btn-lotto1">
                  {/* <div> */}
                  <div className="btn-rule-lotto" onClick={handleShow}>
                    กติกา
                  </div>
                 <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                </div>
                <div className="box-btn-lotto1">
                  <div className="btn-white-lotto" >
                    စည်းကမ်း
                  </div>
                  <div className="btn-white-lotto" >
                    ထီကစားပါ
                  </div>

                </div>
              </div>
              <div className="lottoHeight"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-text-lotto">
                  <div className="box-title-lotto">
                    <div className="flag-lotto">
                      <img alt="" className="flag-karean" src={ppf14} />
                    </div>
                    <div className="title-lotto">
                      HUAY CROWN
                      <div className="subtitle-lotto"><br />01/01/2566</div>
                    </div>
                  </div>
                  <div className="box-countdown-lotto">
                    <div className="box-countdown-lotto-top">
                      เหลือเวลา <br /> 00:09:22
                    </div>
                    <div className="box-countdown-lotto-bottom">ကျန်ရှိသောအချိန်</div>
                  </div>
                </div>
                <div className="box-btn-lotto1">
                  {/* <div> */}
                  <div className="btn-rule-lotto" onClick={handleShow}>
                    กติกา
                  </div>
                 <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                </div>
                <div className="box-btn-lotto1">
                  <div className="btn-white-lotto" >
                    စည်းကမ်း
                  </div>
                  <div className="btn-white-lotto" >
                    ထီကစားပါ
                  </div>

                </div>
              </div>
              <div className="lottoHeight"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-text-lotto">
                  <div className="box-title-lotto">
                    <div className="flag-lotto">
                      <img alt="" className="flag-karean1" src={ppf15} />
                    </div>
                    <div className="title-lotto">
                      HUAY KAREN
                      <div className="subtitle-lotto"><br />01/01/2566</div>
                    </div>
                  </div>
                  <div className="box-countdown-lotto">
                    <div className="box-countdown-lotto-top">
                      เหลือเวลา <br /> 00:09:22
                    </div>
                    <div className="box-countdown-lotto-bottom">ကျန်ရှိသောအချိန်</div>
                  </div>
                </div>
                <div className="box-btn-lotto1">
                  {/* <div> */}
                  <div className="btn-rule-lotto" onClick={handleShow}>
                    กติกา
                  </div>
                 <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                </div>
                <div className="box-btn-lotto1">
                  <div className="btn-white-lotto" >
                    စည်းကမ်း
                  </div>
                  <div className="btn-white-lotto" >
                    ထီကစားပါ
                  </div>

                </div>
              </div>
              <div className="lottoHeight"></div>
            </>
            <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>

                    </Modal.Footer>
                  </Modal>
            <>

              <div className="box-btn-lotto">
                <div className="btn-play-lotto">CHARITY LOTTERY</div>
              </div>

              <div className="lottoHeight2"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={Cat} className="charity" />
                    <div className="box-btn-lotto">

                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>

                    </div>
                  </div>
                  <div>
                    <img alt="" src={Dog} className="charity" />
                    <div className="box-btn-lotto">
                   <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Cheetah} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Penguin} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={elephant} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Bee} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Fish} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Monkey} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={panda} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={turtle} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={Bull} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={cow} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={fox} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={hippopotamus} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={ladybug} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={bear} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={dragon} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={lion} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={rhinoceros} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={snake} className="charity" />
                    <div className="box-btn-lotto">
                     <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={durian} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={grape} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={mangosteen} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={orange} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={watermelon} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={banana} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={greenapple} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={mango} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={papaya} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={redapple} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={cherry} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={coconut} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={lemon} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={pineapple} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={strawberry} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={cake} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={chocolate} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={hamburger} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={pizza} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={sausage} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={baseball} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={basketball} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={bowling} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={football} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={rugby} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={equipment} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={hammer} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={pencil} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={ruler} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={scissors} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={candlestick} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={hanginglamp} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={match} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={tablelamp} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={torch} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={coin} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>
            <>
              <div className="container-lotto">
                <div className="box-animal-lotto">
                  <div>
                    <img alt="" src={crown} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={diamond} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={gold} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>
                  <div>
                    <img alt="" src={treasurechest} className="charity" />
                    <div className="box-btn-lotto">
                      <div className="btn-play-lotto" onClick={onClickSubmit}>แทงหวย</div>
                      <div className="btn-white-lotto font-size-12">ထီကစားပါ</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="lottoHeight1"></div>
            </>


          </div>

        </div>
      </div>
    </div>
  )
}

export default ListLotto
