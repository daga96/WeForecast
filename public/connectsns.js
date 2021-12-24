function toggleSett()
{
    const parentContainer =  document.querySelector('.set-kakao');

    parentContainer.addEventListener('click', event=>{

    const current = event.target;
    console.log(current)

    var checkBox = document.getElementById("checkbox1");
    
    const currentText = document.querySelector('.addkakao');
    console.log(currentText)

    currentText.classList.toggle('addkakao--show');

})

  
}