"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const imgs = ['1.jpg','1.gif','2.jpg','2.gif','3.jpg','3.gif','4.jpg','5.jpg','6.jpg'];



export default function Page() {
    const [data, setData] = useState([]);
    const router = useRouter();
    const [targetUrl, setTargetUrl] = useState('');
    const [weburl, setWeburl] = useState('');

    useEffect(() => {
        

        
        setTargetUrl(process.env.NEXT_PUBLIC_TARGET_URL);
    }, []);


    const Clickitem = (e) => {
        if (targetUrl) {
            window.open(weburl, '_blank');
        } else {
            console.error('Target URL is not set');
        }
    }


   

   useEffect(() => {

    const weburls = process.env.NEXT_PUBLIC_API_URLA;

    setWeburl(weburls);
   })













  return (
    <>
 
            
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2"></i>โทรศัพท์ PG v9</small>
                <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
                </div>
                <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a className="text-body ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-twitter"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                 <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
               <img src="/img/logo.png" width={70} alt="" />
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="/shop">
                        <small className="fa fa-search text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="/img">
                        <small className="fa fa-user text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-shopping-bag text-body"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>

                

{/* --------------------------------------------------------------------------------- */}


 
<header id='header'>
    <button onClick={Clickitem} className='Clickitem'>
        <div className="item">
            {imgs.map((item) => (
                <div key={item}>
                    <img src={`${weburl}/img/img/${item}`} alt={item} />
                </div>
            ))}
        </div>
    </button>
</header>


 
  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="img/about.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">โทรศัพท์มือถือ  PGเว็บตรง100%</h1>
                    <p className="mb-4"> โทรศัพท์มือถือราคา
โทรศัพท์มือถือระบบแอนดรอยด์
ร้านขายโทรศัพท์มือถือราคาถูก </p>
                    <p><i className="fa fa-check text-primary me-3"></i>PG เว็บตรง จากต่างประเทศ 100%</p>
                    <p><i className="fa fa-check text-primary me-3"></i>โทรศัพท์มือถือPGเว็บตรง100%</p>
                    <p><i className="fa fa-check text-primary me-3"></i>โทรศัพท์มือถือ PG </p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>



{/* --------------------------------------------------------------------------------- */}


<div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <h1 className="display-5 mb-3">PG เว็บตรง ช่วงโปรโมชั่น</h1>
                <p>หน้าจอ ความกว้างหน้าจอ 6 นิ้ว
ความละเอียดหน้าจอ HD
ร้านขายโทรศัพท์ราคาถูกที่สุดPG</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-1.jpg" alt=""/>
                        <h4 className="mb-3">PG เว็บตรง จากต่างประเทศ 100%</h4>
                        <p className="mb-4">เล่นเกมลื่นไม่มีสะดุดแบตอึดทน
PG เว็บตรง ช่วงโปรโมชั่น
PG เว็บตรงเว็บไซต์จากสิงค์โปร</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                        <h4 className="mb-3">PG เว็บตรง ช่วงโปรโมชั่นแรงๆ</h4>
                        <p className="mb-4">ร้านขายโทรศัพท์ราคาถูกที่สุดPG
เว็บตรง ช่วงโปรโมชั่นแรงๆ
ปลดล็อคหน้าจอด้วยระบบสแกนหน้า</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-3.jpg" alt=""/>
                        <h4 className="mb-3">PG เว็บตรง ช่วงโปรโมชั่น</h4>
                        <p className="mb-4">ร้านขายโทรศัพท์ราคาถูกที่สุดPG ปลดล็อคหน้าจอด้วยระบบสแกนหน้า</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s"  >
                        <h1 className="display-5 mb-3">Our Products</h1>
                        <p>สมาร์ทโฟน 4G
หน้าจอ ความกว้างหน้าจอ 6 นิ้ว
ความละเอียดหน้าจอ HD</p>
                    </div>
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                        </li>
                        <li className="nav-item me-0">
                            <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                     <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">


                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>


                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">฿3,324</span>
                                    <span className="text-body text-decoration-line-through">฿3,924</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/* --------------------------------------------------------------------------------- */}

<div className="container-fluid bg-primary bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-white mb-3">โทรศัพท์มือถือระบบแอนดรอยด์</h1>
                    <p className="text-white mb-0">ร้านขายโทรศัพท์มือถือราคาถูก
PG เว็บตรง จากต่างประเทศ 100%
โทรศัพท์มือถือPGเว็บตรง100%
โทรศัพท์มือถือ PG
สมาร์ทโฟน 4G
หน้าจอ ความกว้างหน้าจอ 6 นิ้ว
ความละเอียดหน้าจอ HD</p>
                </div>
                <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  >
                <h1 className="display-5 mb-3">ข้อมูลจำเพาะของสินค้า
                </h1>
                <p>ร้านขายโทรศัพท์ราคาถูกที่สุดPG
เว็บตรง ช่วงโปรโมชั่นแรงๆ
ปลดล็อคหน้าจอด้วยระบบสแกนหน้า
เล่นเกมลื่นไม่มีสะดุดแบตอึดทน
PG เว็บตรง ช่วงโปรโมชั่น
PG เว็บตรงเว็บไซต์จากสิงค์โปร  
มือถือ RAM 4 GB รุ่นแรก เริ่มต้นกันด้วย Motorola One Action ที่ออกมาเพื่อคนที่ชื่นชอบในการถ่ายภาพเอาท์ดอร์ ถึงแม้ตัวเครื่องอาจจะไม่ได้อึดหรือกันน้ำอะไรมาก แต่มือถือรุ่นนี้ก็มีจุดเด่นที่ไม่เหมือนใครด้วยกล้องมุมกว้างพิเศษความละเอียด 16 ล้านพิกเซล เก็บภาพได้กว้างสุด 117 องศา มีเทคโนโลยี Pixel-Binning และระบบกันสั่น EIS ที่มีฟีเจอร์ถ่ายวีดีโอแนวตั้งแต่สามารถแสดงผลในแนวนอนได้ ทำให้ใช้งานสะดวกแต่ฟีเจอร์นี้ไม่สามารถใช้ได้กับภาพนิ่ง

</p>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">PG เว็บตรง เรามีโปรโมชั่นมากมาย โทรศัพท์มือถือ PG รุ่น R1 PRO สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว ใช้ได้ 2 ซิม รองรับ 3G/4G</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">โทรศัพท์มือถือ PG สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว รองรับ 2 ซิม 4G ร้านขายโทรศัพท์ราคาถูกที่สุด PG เว็บตรง ช่วงโปรโมชั่น แรงๆ ปลดล็อคหน้าจอด้วยระบบสแกนหน้า</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">เล่นเกมลื่นไม่มีสะดุดแบตอึดทน PG เว็บตรง ช่วงโปรโมชั่น แรงๆ PG เว็บตรง เว็บไซต์ จากสิงค์โปร

</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">หน้าจอ ความกว้างหน้าจอ 6 นิ้ว ความละเอียดหน้าจอ HD 480x960pixels กล้อง กล้องหน้า 8 ล้านพิกเซล กล้องหลัง 13 ล้านพิกเซล มีโหมด Face Beauty </p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  >
                <h1 className="display-5 mb-3">Latest Blog</h1>
                <p>ถ่ายภาพหน้าชัดหลังเบลอได้รองรับการปลดล็อคหน้าจอด้วยระบบสแกนใบหน้า ระบบปฏิบัติการแอนดรอยด์ 9.0 หน่วยความจำเครื่อง RAM 3 ROM 32</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">โทรศัพท์มือถือราคาถูก (สินค้าใหม่) สมาร์ทโฟน PG v9</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">โทรศัพท์มือถือราคาถูก</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">โทรศัพท์มือถือราคาถูก PG v9</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold text-primary mb-4">F<span className="text-secondary">oo</span>dy</h1>
                    <p>ระบบประมวลผล CPU MTK 6739 1.3 GHz แบตเตอรี่ 3000mAh การรับประกันสินค้า : 1 ปี (เงื่อนไขเป็นไปตามบริษัทกำหนด) PG รุ่น R1 PRO สีทอง PG รุ่น R1 PRO สีแดง PG รุ่น R1 PRO สีเขียว</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>หน้าจอ ความกว้างหน้าจอ 6 นิ้ว ความละเอียดหน้าจอ HD</p>
                    <div className="position-relative mx-auto" >
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">ปฏิบัติการแอนดรอยด์ 9.0</a>,หน่วยความจำเครื่อง RAM 3 ROM
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>



{/* --------------------------------------------------------------------------------- */}









    </>
  )
}
