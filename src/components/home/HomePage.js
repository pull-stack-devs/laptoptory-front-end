import React, { useEffect } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import hero from './img/hero.jpg';
import whyus from '../../img/whyus.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo1 from '../../img/logo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        marginLeft: '15%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        paddingLeft: 20
    },
    

}));

export default function HomePage() {
    
    useEffect(() => {
        AOS.init();

    }, [])
    const classes = useStyles();
    return (
        <>
<header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div className="container"><img src={logo1} alt="" width="15%" height="15%"/>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
            <section id="hero" class="d-flex align-items-center">
                {/* <img src={hero} alt="img"/> */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h2>Better Solutions For Your Business</h2>
                            <h3>We are team of talented dvelopers to easy your life</h3>
                        </div>
                    </div>
                </div>
            </section>



            <main id="main">


                <section id="what-we-do"
                >
                    <div class="section-title" >
                        <h2>Our Services</h2>
                    </div>
                    <div class="container-fluid" data-aos="fade-up" data-aos-duration="3000">
                        {/* <h2 class="section-title mb-2 h1">What we do</h2>
                        <p class="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p> */}
                        <div class="row mt-5">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-1">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-2">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-3">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-4">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-5">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div class="card">
                                    <div class="card-block block-6">
                                        <h3 class="card-title">Special title</h3>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* </section> */}


                <section id="why-us" class="why-us section-bg" >
                    <div class="section-title">
                        <h2>Why Us ?</h2>
                        <div class="container" >

                            <p class="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                            </br> Proin varius purus suscipit, consectetur metus eu, consectetur sem. <br>
                                </br>Cras at neque augue. Vestibulum id nisl lacus. Morbi vel egestas eros.
  <br></br> Sed at ultricies ipsum, eget aliquam lectus. Nulla lacus erat, euismod <br>
                                </br>sed varius nec, mollis at nibh. In sit amet enim tristique ex pellentesque <br>
                                </br>porttitor. Mauris vehicula interdum quam a varius.</p>
                        </div>
                    </div>
                    <img src={whyus} alt="whyus" class="img" width="40%" height="40%" />

                </section>

                <section class="slider">

                    <div class="section-title">
                        <h2>Feedback</h2>
                        <p></p>
                    </div>
                    <div class="container">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="carousel-caption">
                                        <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" />
                                        <div id="image-caption">Nick Doe</div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-caption">
                                        <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/QptVdsp.jpg" class="img-fluid" />
                                        <div id="image-caption">Cromption Greves</div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-caption">
                                        <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/jQWThIn.jpg" class="img-fluid" />
                                        <div id="image-caption">Harry Mon</div>
                                    </div>
                                </div>
                            </div> <a class="carousel-control-prev" href="#demo" data-slide="prev">   </a> <a class="carousel-control-next" href="#demo" data-slide="next">  </a>
                        </div>
                    </div>

                </section>


                <div class="section-title">
                    <h2>PROS </h2>
                </div>
                <section class="table-section">
                    <table >
                        <thead>
                            <tr>
                                <th>Our Specifications</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Fully Hosted</strong></td>
                                <td>Maintain your store's files and data in the cloud</td>
                            </tr>
                            <tr>
                                <td><strong>Low Price</strong></td>
                                <td>Our Prices Are Low And Affordable</td>
                            </tr>
                            <tr>
                                <td><strong>High Security</strong></td>
                                <td>Our App Will Provide You With High Security </td>
                            </tr>
                            <tr>
                                <td><strong>Easy To Use </strong></td>
                                <td>Easy And Right-forward</td>
                            </tr>
                            <tr>
                                <td><strong>Testing Period</strong></td>
                                <td> We Provide You With A Testing Period To Check Our App.</td>
                            </tr>
                            <tr>
                                <td><strong>ellipsis</strong></td>
                                <td>Set to true to enable the ellipsis</td>
                            </tr>
                            <tr>
                                <td><strong>title</strong></td>
                                <td>Set to true to show the full data on hover</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="faq" class="faq section-bg">
                    <div class="section-title">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
          </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
          </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Accordion 3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
          </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>

                </section>
            </main>


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
