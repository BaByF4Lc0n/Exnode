import React ,{ useState, useEffect } from 'react'; 
import './index.css';
// assets
import image_logo from '../assets/Logo_exnode.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
// component
import Footer from '../Footer/footer';
import Navbar from '../Navigationbar/navbar';

function index() {
  return (
    <>
    <div className='main-containerOutside z-1'>
      <div className='container-outside h-[1500px] bg-[#C8FFE1]'>
        <div className='container-large_header flex justify-center'>
          <h1 className='heading_name text-[150px] font-black opacity-[30%] mt-[-50px] color-[#000]'>EXNODE</h1>
          <img src={image_logo} alt='logo-inside' className='logo_exnode-outside absolute w-[100px] mt-[15px]'></img>
        </div>
        {/* layer-content */}
        <div className='layout-content flex justify-center z-2'>
          <div className='Layer-Content w-[80%]'>
              <Navbar className='z-2'/>
              <div className='container-banner'>
                <div className='banner'>
                  <div className='container-heading'>
                    <div  className='container-heading-exnode'>
                        <h1 id='heading-exnode' className=';
                        text-[30px] font-bold'>APP จัดการธุรกรรมเกี่ยวกับภาษี</h1>
                        <p id='paragraph-exnode'>แอป EXNODE คำนวณภาษีเงินได้บุคคลธรรมดา วิเคราะห์ค่าใช้จ่ายได้เงินคืนภาษีสูงสุด</p>
                        <div className='container-downloadSection'>
                            <h2 id='heading-freedownload' className='font-bold'>ดาวน์โหลดฟรี</h2>
                            <div className='container-buttonDownload'>
                              {/* playStoreDownload */}
                              <a href='https://play.google.com/store/apps?hl=th' target='_blank'><div className='buttonDownload' alt='playstore'><img src={google_play} className='imageDownload'></img></div></a>
                              <span className='space'></span>
                              {/* AppStoreDownload */}
                              <a href='https://apps.apple.com/th/app/apple-store/id375380948?l=th' target='_blank'><div className='buttonDownload' alt='playstore'><img src={app_store} className='imageDownload'></img></div></a>
                            </div>
                        </div>
                    </div>
                  </div>
                    <div className='image_banner_icon'>
                      <div className='phone flex'>
                        <img src={mobile_anaylisePage} alt='Mobile_image' id='phone_imageBanner'></img>
                        <img src={macbook} alt='MacbookImgae' id='Macbook_image'></img>
                      </div>
                    </div>
                </div>
          </div>
          </div>
        </div>
        {/* end of layer-content */}
      </div>
    </div>
    </>
  )
}


export default index
