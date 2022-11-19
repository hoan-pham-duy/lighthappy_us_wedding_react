import React from "react";
var createReactClass = require('create-react-class');

var App = createReactClass({
  render: function() {
    return (
      <div>
        {/*[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]*/}
        {/*[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]*/}
        {/*[if IE 8]>
<html class="no-js lt-ie9" lang="en"> <![endif]*/}
        {/*[if gt IE 8]><!*/}
        {/*<![endif]*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>LightHappy's Wedding</title>
        <meta name="description" content="We would like to invite you to our big day." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Ram & Antara getting hitched" />
        <meta property="og:description" content="We would like to invite you to our big day." />
        <meta property="og:image" content="https://wedding.ramswaroop.me/img/hero-min.jpg" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="manifest.json" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="./css/normalize.min.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <link rel="stylesheet" href="./css/jquery.fancybox.css" />
        <link rel="stylesheet" href="./css/flexslider.css" />
        <link rel="stylesheet" href="./css/styles.min.css" />
        <link rel="stylesheet" href="./css/queries.css" />
        <link rel="stylesheet" href="./css/animate.min.css" />
        <link rel="stylesheet" href="./css/font-awesome.min.css" />
        {/*[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]*/}
        <section className="hero">
          <section className="navigation">
            <header>
              <div className="header-content">
                {/* <div class="logo"><a href="#"><img src="img/logo.png" alt="Logo"></a></div> */}
                <div className="header-nav">
                  <nav>
                    <ul className="primary-nav">
                      <li><a href="#events-bride" style={{color: '#0681ea'}}>Nhà Gái</a></li>
                      <li><a href="#events-groom" style={{color: '#0681ea'}}>Nhà Trai</a></li>
                      <li><a href="#intro" style={{color: '#0681ea'}}>Chuyện Chúng Mình</a></li>
                      {/* <li><a href="#instagram">Instagram</a></li> */}
                      <li><a href="#eng-pics" style={{color: '#0681ea'}}>Những Tấm Hình</a></li>
                      {/* <li class="hidden-sm hidden-xs"><a href="#video-bg">Glimpse of the city</a></li> */}
                    </ul>
                    {/* <ul class="member-actions">
                            <li><a href="#map" class="login">Venue</a></li>
                            <li><a href="#rsvp" class="btn-white btn-small">RSVP</a></li>
                        </ul> */}
                  </nav>
                </div>
                <div className="navicon">
                  <a className="nav-toggle" href="#"><span /></a>
                </div>
              </div>
            </header>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="hero-content text-center">
                  {/*<h1>Ram and Antara</h1>*/}
                  {/* <img src="img/logo-lg.png"> */}
                  {/*<p class="intro">Ram & Antara are getting hitched!</p>*/}
                  {/*<a href="#" class="btn btn-fill btn-large btn-margin-right">Scroll Down</a> */}
                </div>
              </div>
            </div>
            {/* <div class="row">
            <div class="col-sm-4 hidden-xs"></div>
            <div class="col-sm-4 hidden-xs text-center"><a href="#rsvp"
                                                           class="btn btn-accent btn-large rsvp-btn">RSVP</a></div>
            <div class="col-sm-4 hidden-xs"></div>
        </div> */}
          </div>
          {/* <div class="down-arrow floating-arrow"><a href="#invitation"><i class="fa fa-angle-down"></i></a></div> */}
        </section>
        <section id="invitation" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3>Save The Date!</h3>
                <p>Chúng mình sẽ tổ chức đám cưới vào:<br />
                  23-24/12/2022 Dương Lịch <br />
                  1-2/12/2022 Âm Lịch <br />
                  Trân trọng kính mời bạn đến dự bữa tiệc chung vui mừng ngày chúng mình quyết định bên nhau trọn đời!</p>
                {/* <div class="share-bar"></div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="events" id="events-bride">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="header" style={{color: 'green', fontSize: '36px'}}>Nhà Gái</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p><strong>Địa Chỉ: Thôn 1 Hoành Sơn, Xã Thụy Văn, Huyện Thái Thụy, Tỉnh Thái Bình</strong></p>
              </div>
            </div>     
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                <div className="wp3">
                  <p><strong>23/12/2022 Dương Lịch</strong></p>
                  <h5>Tiệc Chung Vui <span className="time">5PM - 8PM</span></h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                <div className="wp4">
                  <p><strong>24/12/2022 Dương Lịch</strong></p>
                  <h5>Lễ Ăn Hỏi và Đưa Dâu <span className="time">9AM-10AM</span></h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {/* <p><a style="color: #0681ea;" href="https://www.google.com/maps/dir//20.582058,106.5223859/@20.5819711,106.5223393,237m/data=!3m1!1e3!4m2!4m1!3e2"
                target="_blank"><i class="fa fa-map-marker fa-2xl" style="font-size: 24px" style="color: #0681ea;"></i>Google Maps </a></p> */}
                <h3 className="header"><a style={{color: '#0681ea'}} href="https://www.google.com/maps/dir//20.582058,106.5223859/@20.5819711,106.5223393,237m/data=!3m1!1e3!4m2!4m1!3e2" target="_blank"><i className="fa fa-map-marker fa-2xl" style={{fontSize: '24px'}} />Google Maps</a></h3>
                <h3 className="header"><a style={{color: '#0681ea'}} href="tel:+84969469249"><i className="fa fa-phone" style={{fontSize: '24px'}} />Call</a></h3>
              </div>
            </div>
          </div>
        </section>
        <section className="events section-padding" id="events-groom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="header" style={{color: 'green', fontSize: '36px'}}>Nhà Trai</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p><strong>Địa Chỉ: Xóm Bắc, Thôn Song Động, xã Tân An, huyện Thanh Hà, tỉnh Hải Dương</strong></p>
              </div>
            </div>    
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                <div className="wp3">
                  <p><strong>23/12/2022 Dương Lịch</strong></p>
                  <h5>Tiệc Chung Vui <span className="time">4PM - 10PM</span></h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                <div className="wp4">
                  <p><strong>24/12/2022 Dương Lịch</strong></p>
                  <h5>Lễ Rước Dâu <span className="time">7AM-11:45AM</span></h5>
                  <h5>Lễ Thành Hôn <span className="time">11:45AM-12:30AM</span></h5>
                  <h5>Tiệc Chung Vui <span className="time">12:30PM</span></h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"> 
                <h3 className="header"><a style={{color: '#0681ea'}} href="https://www.google.com/maps/dir//Song+%C4%90%E1%BB%99ng,+T%C3%A2n+An,+Thanh+H%C3%A0,+Hai+Duong,+Vietnam/@20.9095323,106.3994975,77m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3135845361080477:0xad6c773dee8f20e2!2m2!1d106.3991788!2d20.9098662" target="_blank"><i className="fa fa-map-marker fa-2xl" style={{fontSize: '24px'}} />Google Maps</a></h3>
                <h3 className="header"><a style={{color: '#0681ea'}} href="tel:+84349482358"><i className="fa fa-phone fa-2xl" style={{fontSize: '24px'}} />Call</a></h3>
              </div>
            </div>
          </div>        
        </section>
        <section id="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="header">Chuyện Chúng Mình</h3>
              </div>
            </div>
            <div className="row">
              {/* <div class="col-md-3 hidden-sm hidden-xs"><img src="img/IMG_2317.jpg" class="wp1"></div> */}
              <div className="col-md-6">
                <p>
                  A lot of things to say here but we will keep them as secrete!
                </p>
              </div>
              {/* <div class="col-md-3 hidden-sm hidden-xs"><img src="img/DSD_0214.jpg" class="wp2"></div> */}
            </div>
            {/* <div class="row">
            <div class="col-sm-4 col-sm-push-2 col-xs-6 hidden-md hidden-lg"><img src="img/IMG_2317.jpg" class="wp8"></div>
            <div class="col-sm-4 col-sm-push-2 col-xs-6 hidden-md hidden-lg"><img src="img/DSD_0214.jpg" class="wp9"></div>
        </div> */}
          </div>
        </section>
        <section id="eng-pics" className="section-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="header">Những tấm hình</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/eiffel_1.jpeg">
                  <div className="img-wrap">
                    <div className="overlay">
                      <i className="fa fa-search" />
                    </div>
                    <img src="img/eng_pics/eiffel_1.jpeg" alt="" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/titlis.jpeg">
                  <div className="img-wrap">
                    <div className="overlay">
                      <i className="fa fa-search" />
                    </div>
                    <img src="img/eng_pics/titlis.jpeg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row hidden-lg hidden-md hidden-xs">
              <div className="col-xs-12 section-border section-padding" />
            </div>
          </div>
          {/*<div class="row">
        <div class="col-md-12">
            <div class="diamond floating-logo">
                <img src="img/sketch-logo.png" alt="Sketch Logo">
                <div class="ring"></div>
            </div>
        </div>
    </div>*/}
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center content">
                <span className="to-top-wrapper"><a href="#top" className="to-top"><i className="fa fa-angle-up" /></a></span>
                <p> Cảm ơn mọi người <span className="fa fa-heart pulse2" /></p>
              </div>
            </div>
          </div>
        </footer>
        {/*  */}
        {/* Google Analytics */}
      </div>
    );
  }
});

export default App;