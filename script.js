
// const navbarIcon = document.querySelector('.navbar-toggler');
// navbarIcon.

// TANGGAL BERANGKAT
    // 1. Tanggal Pergi
const tglPrgi = document.getElementsByClassName('tanggalPergi');
for ( let i = 0; i < tglPrgi.length; i++ ){
    tglPrgi[i].valueAsDate = new Date();
}

    //2. Tanggal Pulang
const tglPlg = document.querySelectorAll('.tanggalPulang');
const date = new Date();
const checkboxTglPlg = document.querySelectorAll('.checkboxTglPlg')

for ( let i = 0; i < tglPlg.length; i++ ){
    date.setDate(date.getDate() + 5);
    tglPlg[i].valueAsDate = date;
}

checkboxTglPlg.forEach(function(checkbox){
    checkbox.addEventListener('click', function(e){
        if(this.checked) {
            tglPlg.forEach(function(tgl){
               tgl.removeAttribute('disabled')
            })
        } else {
            tglPlg.forEach(function(tgl){
                tgl.setAttribute('disabled', '');
             })
        }
    })
})


// NAVBAR
const navbar = document.getElementById('navbar-hero');
const navIsi = document.getElementsByClassName('nav-isi');
const navBrand = document.querySelector('.navbar-brand');
const navSearch = document.getElementById('nav-button');

    // Size Layar
const heroHeader = document.getElementById("hero-header");

  window.onload = function() {
    let checkScreenSize = window.matchMedia("(max-width: 600px)");
    hideElement(checkScreenSize); // Panggil fungsi saat halaman dimuat
    checkScreenSize.addListener(hideElement); // Panggil fungsi saat ukuran layar berubah
}

function hideElement(checkScreenSize) {
    if (checkScreenSize.matches) { // LAYAR KECIL (MOBILE) Jika lebar layar kurang dari atau sama dengan 600px
        heroHeader.removeAttribute('id', 'hero-header')
        heroHeader.classList.add('bg-success')
        navbar.classList.add('bg-success')
        navSearch.classList.replace('btn-success', 'btn-outline-light')
    }
    else{  // LAYAR BESAR (PC)
        window.onscroll = function() {
            if (document.documentElement.scrollTop != 0){
                navbar.classList.add('bg-light')
                navBrand.classList.replace('text-light', 'text-success')
                for( let i = 0 ; i < navIsi.length ; i++){
                    navIsi[i].classList.remove('text-light')
                }
                navSearch.classList.replace('btn-success', 'btn-outline-success')
            }
            else{
                navbar.classList.remove('bg-light')
                navBrand.classList.replace('text-success', 'text-light')
                for( let i = 0 ; i < navIsi.length ; i++){
                    navIsi[i].classList.add('text-light')
                }
                navSearch.classList.replace('btn-outline-success', 'btn-success')
            }
          };
    }

        // LOGIN/SIGN UP FORM
    const form = document.querySelector('#main');
    const loginBtn = document.getElementById('loginBtn')
    const bg = document.getElementById('overlay')
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');
    const closeBtnLogin = document.querySelectorAll('.closeBtn')


    closeBtnLogin.forEach(function(close){
        close.addEventListener('click', function(){
            form.classList.replace('d-lg-block','d-lg-none');
            bg.classList.replace('d-lg-block','d-lg-none');
        })
    })

    signUpButton.addEventListener('click', () => {
		main.classList.add("right-panel-active");
	});
	signInButton.addEventListener('click', () => {
		main.classList.remove("right-panel-active");
	});


    loginBtn.addEventListener('click', function(){
        // window.onload = function() {
            
            form.classList.replace('d-lg-none','d-lg-block');
            bg.classList.replace('d-lg-none','d-lg-block');
        // };
        // window.onload = function() {
        //     var loginForm = document.getElementById('loginForm');
        //     loginForm.classList.add('slide-up');
        // };
        // closeBtnLogin.addEventListener('click', function(){
           
    })
}

// SERVICES
const cardServices = document.querySelectorAll('.card-services');
const descServices = document.querySelectorAll('.desc-services');

for (let i = 0; i < cardServices.length; i ++){
    cardServices[i].addEventListener('click', function(e){
        // LOOP UNTUK BEDA CARD BEDA DESC
        for (let x = 0; x < cardServices.length; x ++){
            descServices[x].classList.replace('d-lg-block', 'd-lg-none')
            cardServices[x].classList.remove('active')
        }

        // (Tanggal Pulang) LOOP UNTUK BUG CHECKBOX DI CARD (1) AKTIF DI CARD LAIN 
        tglPlg.forEach(function(tgl){
            tgl.setAttribute('disabled', '');
        })
        checkboxTglPlg.forEach(function(checkbox){
            checkbox.checked = false
        })
            
        // UNTUK AKTIFKAN DESC YG DI KLIK
        if ( e.target.className == 'card-body' || 'icon-services'){
            descServices[i].classList.replace('d-lg-none', 'd-lg-block')
            cardServices[i].classList.add('active')
        }
    })
}
 

// DARKMODE
const darkmode = document.getElementById('switchDarkmode')
const dmIcon = document.querySelector ('.darkMode')

darkmode.addEventListener('click', function(){
    if(this.checked) {
        dmIcon.classList.replace('bi-moon-stars-fill', 'bi-brightness-high-fill');
        dmIcon.classList.replace('darkMode', 'lightMode');
    } else {
        dmIcon.classList.replace('bi-brightness-high-fill', 'bi-moon-stars-fill');
        dmIcon.classList.replace('lightMode', 'darkMode');
    }
})




// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     console.log('Username: ' + username);
//     console.log('Password: ' + password);
//     // Anda bisa menambahkan logika autentikasi Anda di sini
// });


// LOGIN/SIGN UP
