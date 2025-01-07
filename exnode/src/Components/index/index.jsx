import React ,{ useState, useEffect } from 'react'; 
import './index.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// assets
import image_logo from '../assets/Logo_exnode.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import IconApplication from '../assets/LogoApplicationIcon.png';
import image_logo from '../assets/Logo_exnode.png';
import image_logo_navigation from '../assets/logo_exnode_No-tect.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import '../assets/Fonts/fonts.css';
import IconApplication from '../assets/LogoApplicationIcon.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import mobile_pageMain from '../assets/mobile_img/mobiile_pageMain_1.png';
import graph_img_1 from '../assets/graph_img_1.png';
import graph_img_2 from '../assets/graph_img_2.png';
import mobile_transaction from '../assets/mobile_img/mobile_transaction_.png';
import catagory_image from '../assets/catagory_image.png';
import facebook_logo from '../assets/facebook_logo.png';
import instargram_logo from '../assets/Instagram_icon.png';
import twitter_logo from '../assets/logo_twitter.webp';

// assets mobilePage
import mobile_index from '../assets/mobile_img/mobiile_pageMain_1.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import mobile_transactionPage from '../assets/mobile_img/mobile_transaction_.png';
import mobile_catagory from '../assets/mobile_img/mobile_pageCatagory.png';
// component
import Footer from '../Footer/footer';
import Navbar from '../Navigationbar/navbar';

function index() {
  {/* scripts Animation */}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
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
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(-100), ZoomIn());
  const FadeUp = batch(Fade(), MoveIn(-100));
  const ZoomInScrollOut_1 = batch(ZoomIn(100), MoveOut(100), StickyOut());
  return (
    <>
    <div className='main-containerOutside z-1'>
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
          {/* section_2 */}
        <div className='container-insert_2'>
          <div className='conatainer-sub-insert_2'>
          <div className='sub-container-insert'>
            <div className='container-inside-insert'>
            <div className='container-graph_image_section_2'>
              <img src={graph_img_1} alt='graph_image_2' id='graph_image_1' className='hidden imageGraph graphImage_1'></img>
              <br></br>
              <img src={graph_img_2} alt='graph_image_2' id='graph_image_2' className='hidden imageGraph graphImage_2'></img>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_anaylisePage} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container_applicationIcon hidden'>
              <p id='text-detail-insert_2'>สามารถแสดงกราฟออกมาเป็น
              กิจกรรม รายวัน รายสัปดาห์ รายเดือน รายปี</p>
            </div>
          </div>
          </div>
          </div>
        </div>
        {/* section_3 */}
        <div className='container-insert_3'>
          <div className='conatainer-sub-insert_2'>
          <div className='sub-container-insert'>
            <div className='container-inside-insert'>
            <div className='container-detail_section_3'>
              <h1 id='heading_section_3' className='hidden'>รายรับรายจ่ายรายวัน</h1>
              <br></br>
              <p id='text-detail-insert_3' className='hidden'>แสดงผลการรายรับรายจ่าย พร้อมการคำนวณค่าภาษีที่ต้องจ่าย</p>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_transaction} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container_applicationIcon'>
              {/* nothing is space side */}
            </div>
          </div>
          </div>
          </div>
        </div>
        {/* section -4 */}
        <div className='container-insert_4'>
          <div className='conatainer-sub-insert_2'>
          <div className='sub-container-insert'>
            <div className='container-inside-insert'>
            <div className='container-graph_image_section_4'>
              <img src={catagory_image} alt='graph_image_2' id='graph_image_3' className='hidden imageGraph graphImage_3'></img>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_anaylisePage} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container-text_section_4'>
              <div className='sub-container-heading_section_4'>
                <div className='container-heading_section_4'>
                  <h1 className='heading_section_4'  cl>หมวดหมู่การใช้จ่าย</h1>
                </div>
                <div className='container-text_detail_section_4'>
                  <p className='text_section_4'>สามารถแยกหมวดหมู่การใช้จ่ายได้มากมาย</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </ScrollContainer>
          {/* <Footer/> */}
          </div>
        </div>
        {/* end of layer-content */}
      </div>
    </div>
    </>
  )
}



export default index
