import React, { Component } from "react";
import Chart from "react-apexcharts";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

class ChartCop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: 'donut',
          height: 600,
          animations: {
            enabled: true,
            easing: 'easein',
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 250
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '50%',
              expandOnClick: true
            },labels: {
              show: true,
              name: {
                show:true
              },total:{
                show:true
              }
            }
          }
        },
        theme: {
          palette: 'palette3',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, 
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        series: [this.props.data.data0, this.props.data.data1, this.props.data.data2],
        labels: ['Students Not Granteded Laptops','Students Granted Laptops','Students Did not Return Laptops']
      },
      
    }

  }
  

componentWillMount=()=>{
  setTimeout(() => {
    this.setState({
      series: [this.props.data.data0, this.props.data.data1, this.props.data.data2],
    })
    
  },2000)
  AOS.init();
}

  render() {
    return (
      <div data-aos="flip-right" className="donut" style={{width:"45%",height:"500px",marginLeft:"0px" , boxShadow: '5px 8px 10px 7px #BDC4C5',paddingTop:"5px",borderRadius:"15px",textAlign:"center",position:"absolute",marginRight:"0px"}}>
        <h4>Students Statistics</h4>
        <hr style={{width:"50%",height:"2px",backgroundColor:"#6F5F95"}}></hr>
        <Chart  options={this.state.options} series={this.state.options.series} type="donut" width="80%" />
      </div>
    );

  }
}


export default ChartCop;
// ,height:"500px",marginLeft:"0px" , boxShadow: '5px 8px 10px 7px #BDC4C5',paddingTop:"5px",borderRadius:"15px",textAlign:"center"