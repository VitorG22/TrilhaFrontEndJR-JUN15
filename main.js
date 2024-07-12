const $switch = document.getElementById('switchCheckBox')
let $elementsList = document.getElementsByClassName('SwitchModeElement')
$elementsList = Array.from($elementsList)

$switch.addEventListener('change', (event)=>{
    switchLigthMode()
})


function switchLigthMode(){

    $elementsList.forEach(element =>{
        element.classList.toggle('light')
    })
}