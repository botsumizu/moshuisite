const body=document.querySelector('body')
const sidebar=body.querySelector('nav')
const toggle=body.querySelector('.toggle')
const modeSwitch=body.querySelector('.toggle-switch')
const modeText=body.querySelector('.mode-text')


toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})
modeSwitch.addEventListener('click',()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        modeText.innerText="Light mode"
    }else{
        modeText.innerText="Dark mode"
    }
})