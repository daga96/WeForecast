var options = {
    grid: {
        show: false,
    },
   
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
      }
    },

    markers:{
        size: 3,
        colors: "1B1B1B",
        strokeColors: "#50C7EB",
        strokeWidth: 2,
        shape: "circle",
        },
    
    tooltip: {
        enabled: false,
        },
    
    dataLabels: {
    formatter: function(value, { seriesIndex }) {
            return value +"°C"
    },
      enabled: true,
      offsetY: -8,
      offsetX: 1,
      style: {
        fontSize: '10px',
        fontWeight: 100,
        colors:["#FFFFFF","#FFFFFF"],
        fontFamily: 'Helvetica, Arial, sans-serif',
    },
      background: {
        enabled: false,
      }
    },
    
    series: [
      {
        name: "Temperature",
        data: [20,21,18,17,16,16,15],
      }
    ],
    stroke: {
        show: true,
        curve: 'straight',
        colors: ["#50C7EB"],
        width: 2,
      },

    fill: {
      type: "gradient",
      colors: "#50C7EB",
      gradient: {
        shade: 'dark',
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.2,
        stops: [0,100],
      }
    },
    
    xaxis: {
       
     
      categories: [
        "8 am",
        "9 am",
        "10 am",
        "12 am",
        "1 pm",
        "2 pm",
        "3 pm",
      ]
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render()

  var options1 = {
    grid: {
        show: false,
    },
   
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
      }
    },

    markers:{
        size: 3,
        colors: "1B1B1B",
        strokeColors: "#50C7EB",
        strokeWidth: 2,
        shape: "circle",
        },
    
    tooltip: {
        enabled: false,
        },
    
    dataLabels: {
    formatter: function(value, { seriesIndex }) {
            return value +"%"
    },
      enabled: true,
      offsetY: -8,
      offsetX: 1,
      style: {
        fontSize: '10px',
        fontWeight: 100,
        colors:["#FFFFFF","#FFFFFF"],
        fontFamily: 'Helvetica, Arial, sans-serif',
    },
      background: {
        enabled: false,
      }
    },
    
    series: [
      {
        name: "Temperature",
        data: [0,0,15,30,0,0,0],
      }
    ],
    stroke: {
        show: true,
        curve: 'straight',
        colors: ["#50C7EB"],
        width: 2,
      },

    fill: {
      type: "gradient",
      colors: "#50C7EB",
      gradient: {
        shade: 'dark',
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.2,
        stops: [0,100],
      }
    },
    
    xaxis: {
       
     
      categories: [
        "8 am",
        "9 am",
        "10 am",
        "12 am",
        "1 pm",
        "2 pm",
        "3 pm",
      ]
    }
  };
  

  var chart1 = new ApexCharts(document.querySelector("#chartPer"), options1);
  
  chart1.render();
    


  var options3= {
    grid: {
        show: false,
    },
   
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
      }
    },

    markers:{
        size: 3,
        colors: "1B1B1B",
        strokeColors: "#50C7EB",
        strokeWidth: 2,
        shape: "circle",
        },
    
    tooltip: {
        enabled: false,
        },
    
    dataLabels: {
    formatter: function(value, { seriesIndex }) {
            return value +"km/h"
    },
      enabled: true,
      offsetY: -8,
      offsetX: 1,
      style: {
        fontSize: '10px',
        fontWeight: 100,
        colors:["#FFFFFF","#FFFFFF"],
        fontFamily: 'Helvetica, Arial, sans-serif',
    },
      background: {
        enabled: false,
      }
    },
    
    series: [
      {
        name: "Temperature",
        data: [0,0,4,4,4,7,7],
      }
    ],
    stroke: {
        show: true,
        curve: 'straight',
        colors: ["#50C7EB"],
        width: 2,
      },

    fill: {
      type: "gradient",
      colors: "#50C7EB",
      gradient: {
        shade: 'dark',
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.2,
        stops: [0,100],
      }
    },
    
    xaxis: {
       
     
      categories: [
        "8 am",
        "9 am",
        "10 am",
        "12 am",
        "1 pm",
        "2 pm",
        "3 pm",
      ]
    }
  };
  

  var chart2 = new ApexCharts(document.querySelector("#chartWind"), options3);
  
  chart2.render();