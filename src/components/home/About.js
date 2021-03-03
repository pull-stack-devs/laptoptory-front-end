import React from 'react';
// import './style.css';

export default function AboutUs() {
    return (
        <>
 <header>
                <nav class="nav" id="nav">
                    <div id="iconsNav">
                        <a href="#" class="active"><i class="fa fa-home"></i> Home</a>
                        <a href="#"><i class="fa fa-gear"></i> Service</a>
                        <a href="#"><i class="fa fa-phone"></i> Contact</a>
                        <a href="#"><i class="fa fa-user"></i> About</a>
                        <a href="#"><i class="fa">&#xf090;</i>Sign In</a>
                    </div>
                </nav>
            </header>
            
     <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2> Our Team</h2>
            <p>PULL STACK DEVS</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-6">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" /></div>
                <div class="member-info">
                  <h4>AbdelRahman Al-Janabi</h4>
                  <span>Full Stack Dev</span>
                  <p></p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Hussam Ajour</h4>
                  <span>Computer Engineer</span>
                  <p></p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" /></div>
                <div class="member-info">
                  <h4>Aisha Sattouf</h4>
                  <span>Full Stack Developer</span>
                  <p></p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt="" /></div>
                <div class="member-info">
                  <h4>Aseel Mesmar</h4>
                  <span>Developer</span>
                  <p></p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
      

      <footer class="site-footer">
                <div class="container">

                    <div class="grid-container">
                        <div class="grid-item" id="logo">

                            {/* <img src="../../img/logo.png"/> */}

                        </div>

                        <div class="grid-item inner-grid-container">

                            <div class="grid-item"><a href="">About Us</a></div>
                            <div class="grid-item"><a href="">Our Services</a></div>
                            <div class="grid-item"><a href="">Pricing</a></div>
                            <div class="grid-item"><a href="">Blog</a></div>
                            <div class="grid-item"><a href="">Contact us</a></div>
                            <div class="grid-item"><a href="">Finance</a></div>
                            <div class="grid-item"><a href="">Cookie Policy</a></div>
                            <div class="grid-item"><a href="">Jobs</a></div>


                        </div>

                        <div class="grid-item">
                            <div class="social-buttons">
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-linkedin"></a>
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                            </div>
                        </div>
                    </div>

                    <p>Copyrights Reserver ℗ </p>
                </div>
            </footer>
        </>
    )
}