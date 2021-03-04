// import ApexCharts from 'apexcharts'
// import React, { useEffect } from 'react'
import React, { Component } from "react";
import Chart from "react-apexcharts";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Loader from 'react-loader'

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
              // delay: 250
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
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
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
  
 
  // const dispatch=useDispatch();
  // dispatch(getNumData())

componentDidMount=()=>{
  setTimeout(() => {
    this.setState({
      series: [this.props.data.data0, this.props.data.data1, this.props.data.data2],
      
    })
    
  },2000)
  AOS.init();
}
  // const dispatch=useDispatch();
  // dispatch(getNumData())
  // componentDidAppear = () => {
  //   const newSeries = [];

  //   this.state.series.map((s,i) => {
  //     const data = s.data.map(() => {
  //       return this.props[`data${i}`]
  //     })
  //     newSeries.push({ data, name: s.name })
  //   })

  //   this.setState({
  //     series: newSeries
  //   })
    
  // }
  // componentWillEnter = () => {
  //   const newSeries = [];

  //   this.state.series.map((s,i) => {
  //     const data = s.data.map(() => {
  //       return this.props[`data${i}`]
  //     })
  //     newSeries.push({ data, name: s.name })
  //   })

  //   this.setState({
  //     series: newSeries
  //   })
  // }
  // componentDidEnter = () => {
  //   const newSeries = [];

  //   this.state.series.map((s,i) => {
  //     const data = s.data.map(() => {
  //       return this.props[`data${i}`]
  //     })
  //     newSeries.push({ data, name: s.name })
  //   })

  //   this.setState({
  //     series: newSeries
  //   })
  // }
  // componentDidLeave = () => {
  //   const newSeries = [];

  //   this.state.series.map((s,i) => {
  //     const data = s.data.map(() => {
  //       return this.props[`data${i}`]
  //     })
  //     newSeries.push({ data, name: s.name })
  //   })

  //   this.setState({
  //     series: newSeries
  //   })
  // }
  // componentWillLeave = () => {
  //   const newSeries = [];

  //   this.state.series.map((s,i) => {
  //     const data = s.data.map(() => {
  //       return this.props[`data${i}`]
  //     })
  //     newSeries.push({ data, name: s.name })
  //   })

  //   this.setState({
  //     series: newSeries
  //   })
  // }



  render() {
    return (
      <div data-aos="flip-left" className="donut" style={{width:"50%",height:"500px",marginLeft:"0px" , boxShadow: '5px 8px 10px 7px #BDC4C5',paddingTop:"5px",borderRadius:"15px",textAlign:"center"}}>
        <h4>Students Statistics</h4>
        <hr style={{width:"50%",height:"2px",backgroundColor:"#6F5F95"}}></hr>
        <Chart  options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>
    );

  }
}










// function Chart(props) {
//     const dispatch = useDispatch();
//     // useEffect(() => {
//       dispatch(getNumData());
//         var options = {
//             chart: {
//                 type:'donut',
//                 height:600,
//                 animations: {
//                     enabled: true,
//                     easing: 'easein',
//                     speed: 1000,
//                     animateGradually: {
//                         enabled: true,
//                         delay: 250
//                     },
//                     dynamicAnimation: {
//                         enabled: true,
//                         speed: 350
//                     }
//                 },
//                 dropShadow: {
//                     enabled: false,
//                     enabledOnSeries: undefined,
//                     top: 0,
//                     left: 0,
//                     blur: 3,
//                     color: '#000',
//                     opacity: 0.35
//                 }
//             },
//             plotOptions: {
//                 pie: {
//                   donut: {
//                     size: '50%',
//                     expandOnClick: true
//                   }
//                 }
//             },
//             theme: {
//                 palette: 'palette3',
//                 // monochrome: {
//                 //   enabled: true,
//                 //   color: '#F44336',
//                 //   shadeTo: 'light',
//                 //   shadeIntensity: 0.65
//                 // }
//               },
//               fill: {
//                 type: 'gradient',
//                 gradient: {
//                   shade: 'dark',
//                   type: "horizontal",
//                   shadeIntensity: 0.5,
//                   gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//                   inverseColors: true,
//                   opacityFrom: 1,
//                   opacityTo: 1,
//                   stops: [0, 50, 100],
//                   colorStops: []
//                 }
//               },
//             series: [props.stdwithLap, props.stdNotAssigned, props.stdNotReturned],
//             labels: ['assigned lptops','non-assigned laptops','students have laptops'],

//         }
//         var chart = new ApexCharts(document.querySelector("#chart"), options);
//         const fetch = async () => {
//             await chart.render();
//         }
//         fetch()
//     // })
//     return (
//         <>
//             <div id='chart'>{ }</div>
//         </>
//     )
// }
export default ChartCop;