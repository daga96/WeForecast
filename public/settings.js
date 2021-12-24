function getUnits1(){ 

    var unit= document.querySelector('#imperial').innerHTML
        sessionStorage.setItem("unitValue", unit);

        const currentText = document.querySelector('#imperial');

        currentText.classList.toggle('imperial--active');
        document.querySelector('#metric').setAttribute("class", "button")
}

function getUnits2(){ 

    var unit= document.querySelector('#metric').innerHTML
    sessionStorage.setItem("unitValue", unit);
    const currentText = document.querySelector('#metric');
    currentText.classList.toggle('metric--active');
    document.querySelector('#imperial').setAttribute("class", "button")

  
}



function getHour1(){ 

        var hours= document.querySelector('#h12').innerHTML
        sessionStorage.setItem("hoursValue", hours);

        const currentText = document.querySelector('#h12');

        currentText.classList.toggle('h12--active');
        document.querySelector('#h24').setAttribute("class", "button")
}

function getHour2(){ 

    var hours= document.querySelector('#h24').innerHTML
    sessionStorage.setItem("hoursValue", hours);

    const currentText = document.querySelector('#h24');
    currentText.classList.toggle('h24--active');
    document.querySelector('#h12').setAttribute("class", "button")

  
}

