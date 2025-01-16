import React, { useState } from 'react'; 
import './index.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// assets
import image_logo from '../assets/Logo_exnode.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import IconApplication from '../assets/LogoApplicationIcon.png';

// assets mobilePage
import mobile_index from '../assets/mobile_img/mobiile_pageMain_1.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import mobile_transactionPage from '../assets/mobile_img/mobile_transaction_.png';
import mobile_catagory from '../assets/mobile_img/mobile_pageCatagory.png';
// component
import Footer from '../Footer/footer';
import Navbar from '../Navigationbar/navbar';

function index() {
  // scripts Animation Landing Page
    {/* scripts Animation */}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  // changeWidth scripts
  function changeWidth() {
    var scroll = (window.pageYOffset / 5);
    var width = scroll;
    // var width = Math.min(100 - scroll);

    document.getElementById('expand').style.width = width + '%';
  }

  window.addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
  })

  // scroll animation
  const ZoomInScrollOut = batch(FadeIn(),FadeOut());FadeOut();
  const FadeUp = batch(Fade(), MoveIn(-100));
  const ZoomInScrollOut_1 = batch(ZoomIn(100), MoveOut(100), StickyOut());
  const FadeUpMobile = batch(FadeIn(),ZoomIn(), MoveIn());
  return (
    <>
    <div className='main-containerOutside z-1 '>
      <div className='container-outside h-[auto] bg-[#C8FFE1]'>
        <div className='container-large_header flex justify-center'>
          <h1 className='heading_name text-[150px] font-black opacity-[30%] mt-[-50px] color-[#000]'>EXNODE</h1>
          <img src={image_logo} alt='logo-inside' className='logo_exnode-outside absolute w-[100px] mt-[15px]'></img>
        </div>
        {/* layer-content */}
        <div className='layout-content flex justify-center z-2' >
          <div className='Layer-Content expanded w-[80%]' id='expand'>
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
          {/* end-banner */}
          <ScrollContainer>
          <ScrollPage>
          <section className='container-contentSection_2 h-[1000px] p-[100px]'>
            <div className='main_contentSection_2'>
                <Animator animation={ZoomInScrollOut}>
                <div className='heading_contentSection_2 flex justify-center w-[100%]'>
                  <h1 className='heading_1 text-[60px]'>Application จัดการภาษี & วิเคราะห์การใช้จ่าย</h1>
                </div>
                </Animator>
                <div className='layout_content_Product_Page1'>
                  <div className='container_content_Product_Page1 flex justify-between'>
                    <Animator animation={FadeUpMobile}>
                    <div className='card_content card_1 w-[400px] text-[#000]'>
                      <h2 className='card_title font-bold text-[40px] text-[#1DCB42]'>เพียงปลายนิ้ว</h2>
                      <p>คุณก็จะสามารถจัดการระบบภาษีในชีวิตประจำวันและยังสามารถช่วยวิเคราะห์คำนวณการจัดภาษีต่างๆได้โดยเพียงแค่ปลายนิ้ว</p>
                    </div>
                    </Animator>
                    <Animator animation={FadeUpMobile}>
                    <div className='card_content card_2'>
                      <img src={mobile_index} className='mobile_index hidden w-[400px]'></img>
                    </div>
                    </Animator>
                    <Animator animation={FadeUpMobile}>
                    <div className='card_content card_3'>
                      <img src={IconApplication} alt='iconApplication' className='iconApplication_onInsert hidden w-[200px]'></img>
                    </div>
                    </Animator>
                  </div>
                </div>
            </div>
          </section>
          </ScrollPage>
          {/* //section_3 */}
          <section className='container-contentSection_3 h-[1000px] p-[100px]'>
            <div className='main_contentSection_3'>
                <div className='layout_content_Product_Page1'>
                  <div className='container_content_Product_Page1 flex justify-between'>
                    <Animator animation={FadeUp}>
                    <div className='card_content card_1 w-[400px] text-[#000]'>
                      <h2 className='card_title font-bold text-[40px] text-[#1DCB42]'>เพียงปลายนิ้ว</h2>
                      <p>คุณก็จะสามารถจัดการระบบภาษีในชีวิตประจำวันและยังสามารถช่วยวิเคราะห์คำนวณการจัดภาษีต่างๆได้โดยเพียงแค่ปลายนิ้ว</p>
                    </div>
                    </Animator>
                    <Animator animation={FadeUp}>
                    <div className='card_content card_2'>
                      <img src={mobile_index} className='mobile_index w-[400px]'></img>
                    </div>
                    </Animator>
                    <Animator animation={FadeUp}>
                    <div className='card_content card_3'>
                      <img src={IconApplication} alt='iconApplication' className='iconApplication_onInsert w-[200px]'></img>
                    </div>
                    </Animator>
                  </div>
                </div>
            </div>
          </section>
          </ScrollContainer>
          <Footer/>
          </div>
        </div>
        {/* end of layer-content */}
      </div>
    </div>
    </>
  )
}



export default index
