import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import hero from './img/hero.jpg';
import whyus from './img/whyus.PNG';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function HomePage() {

    const classes = useStyles();
    return (
        <>

            <div class="bs-example">
                <nav class="navbar navbar-expand-md navbar-light bg-light">
                    <a href="#" class="navbar-brand">
                        <img src="" height="28" alt="CoolBrand" />
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav">
                                <a href="#" class="nav-item nav-link active">Home</a>
                                <a href="#" class="nav-item nav-link">Profile</a>
                                <a href="#" class="nav-item nav-link">Messages</a>
                                <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                            </div>
                            <div class="navbar-nav ml-auto">
                                <a href="#" class="nav-item nav-link">Login</a>
                            </div>
                        </div>
                </nav>
         </div>

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
                    {/* <section id="services"  data-aos="fade-up"
data-aos-duration="1000">
    <div class="section-title">
        <h2>Our Services</h2>
    </div> */}
                    <section id="what-we-do" >
                        <div class="container-fluid">
                            <h2 class="section-title mb-2 h1">What we do</h2>
                            <p class="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
                            <div class="row mt-5">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="card">
                                        <div class="card-block block-1">
                                            <h3 class="card-title">Special title</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="card">
                                        <div class="card-block block-2">
                                            <h3 class="card-title">Special title</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="card">
                                        <div class="card-block block-3">
                                            <h3 class="card-title">Special title</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
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
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="card">
                                        <div class="card-block block-5">
                                            <h3 class="card-title">Special title</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div class="card">
                                        <div class="card-block block-6">
                                            <h3 class="card-title">Special title</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="https://www.fiverr.com/share/qb8D02" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* </section> */}


                    <section id="why-us" class="why-us section-bg"  >
                        <div class="section-title">
                            <h2>Why Us ?</h2>
                            <p></p>
                        </div>
                        <img src={whyus} alt="whyus" class="img" width="40%" height="35%" />

                    </section>


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
                            </div> <a class="carousel-control-prev" href="#demo" data-slide="prev"> <i class='fas fa-arrow-left'></i> </a> <a class="carousel-control-next" href="#demo" data-slide="next"> <i class='fas fa-arrow-right'></i> </a>
                        </div>
                    </div>




                    <div class="section-title">
                        <h2>PROS </h2>
                    </div>
<div class="table">
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
                    </div>

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
                            <div class="grid-item">

                                <iframe class="logo-img" src="https://www.google.jo/maps/place/%D9%83%D9%84%D9%8A%D8%A9+%D9%84%D9%88%D9%85%D9%8A%D9%86%D9%88%D8%B3+%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9+%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+-+(Luminus+Technical+University+College+(LTUC%E2%80%AD/@31.897932,35.8710084,17z/data=!3m1!4b1!4m5!3m4!1s0x151ca7e4aee722d5:0x8693a9183825010b!8m2!3d31.897932!4d35.8688197 " class="logo-img"></iframe>

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


                    </div>
                    </footer>

</>

    )
}
