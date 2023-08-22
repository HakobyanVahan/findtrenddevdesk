let button = document.getElementById('button-monthly');6
let circle = document.getElementById('circle')
let bool = true
button.addEventListener('click', function () {
  if(bool === true){
    button.style.paddingLeft = '61px'
    circle.style.backgroundColor = "#3d3d3d"
    bool = false
  }else if(bool === false){
    button.style.paddingLeft = '6px'
    circle.style.backgroundColor = "#87D322"
    bool = true
  }
})