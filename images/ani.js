console.log("bhushanrunnig");
document.querySelector('.croos').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click" , ()=> {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.croos').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.croos').style.display = 'inline'
        } , 300);
    }
})
