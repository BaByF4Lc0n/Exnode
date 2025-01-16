import React from 'react'
import '../Transaction/Transaction.css'
import '../index/index.css';
import Navbar from '../Navigationbar/navbar';
import image_logo from '../assets/Logo_exnode.png';
import riseUp from '..//assets/riseUp.png';
import ToDown from '..//assets/ToDown.png';
function transaction() {
  return (
    <>
      <div className='main-containerOutside z-1'>
            <div className='container-outside h-[auto] bg-[#C8FFE1]'>
              <div className='container-large_header flex justify-center'>
                <h1 className='heading_name text-[150px] font-black opacity-[30%] mt-[-50px] color-[#000]'>EXNODE</h1>
                <img src={image_logo} alt='logo-inside' className='logo_exnode-outside absolute w-[100px] mt-[15px]'></img>
                 {/* layer-content */}
              </div>
                <div className='layout-content flex justify-center z-2' >
                  <div className='Layer-Content w-[80%]' id='expand'>
                  <Navbar className='z-2'/>
                  <div className='content-transaction w-[100%] h-[800px] bg-gradient-to-t from-[#9DDF99] to-[#CCFFE3] to-[#C7FBD0]'>
                    <div className='container-content-transaction flex justify-center pt-[60px]'>
                      <div className='content-transaction-1 w-[900px] h-[400px]rounded-[10px]'>
                      <div className='layout_section_2'>
            <center>
            <div className='container-heading-section_2 flex justify-center'>
              <div className='heading-section_2_sub_1'>
                <div className='container-totalBalance'>
                  <img src={riseUp} className='icon-totalBalance'></img>
                  <h3 className='text-totalBalance'>Total Balance</h3>
                </div>
                <div className='count-totalBalance'>
                  <strong>0 THB</strong>
                </div>
              </div> 
              <div className='spacer'>
              </div> 
              <div className='heading-section_2_sub_1'>
                <div className='container-totalBalance'>
                  <img src={ToDown} className='icon-totalBalance'></img>
                  <h3 className='text-totalBalance'>Total Balance</h3>
                </div>
                <div className='count-totalBalance'>
                  <strong>0 THB</strong>
                </div>
              </div>  
            </div>  
            <div className='container_buttonCalculate'>
              <a href="#"><div className='buttonCalculate'>
                <p id='text-buttonCalculate'>เริ่มคำนวณ</p>
              </div>
              </a>
            </div>
            </center>
          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default transaction
