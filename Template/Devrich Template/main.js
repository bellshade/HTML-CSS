// modal content
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const btnDemo = document.querySelector('.demo-modal');
btnDemo.addEventListener('click', function() {
  modal.classList.add("open-modal");
});

const btnDownload = document.querySelector('.download_btn');
btnDownload.addEventListener('click', function() {
  modal.classList.add("open-modal");
});

modalBtn.addEventListener("click", function() {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function() {
  modal.classList.remove("open-modal");
});

//modal content 2
const modalBtn1 = document.querySelector(".modal1-btn");
modalBtn1.addEventListener('click', function() {
  modal.classList.add("open-modal");
})


//warning sign up form 
const btnSubmit = document.querySelector('.submit-btn');
const showWarning = document.getElementById('warning');

const text = "Can't register because this is just a display"; 

btnSubmit.addEventListener('click', function() {
  showWarning.innerHTML = text;
});


//Counter Up
$(document).ready(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 1200
  })
})    
//testimonial

//img ke dua
const Imgbtn1 = document.getElementById('img-1');
//img ke dua
const Imgbtn = document.getElementById('img-2');
//img ke tiga
const Imgbtn3 = document.getElementById('img-3');

const result = document.getElementById('result-clients');

const text1 =  `
  <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi <br> dicta unde error quisquam reiciendis nesciunt dolore dolor illum vero omnis.</blockquote>
`;
const text2 = `
  <blockquote>A est vitae ut nemo et placeat ab veniam possimus iusto, doloribus, <br> debitis fugit perspiciatis neque suscipit, dolorum earum soluta cumque iste.</blockquote>
`;
const text3 = `
  <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore <br> eligendi velit iure libero repudiandae expedita hic nulla maiores ipsum excepturi.</blockquote>
` ;
//function img ke dua
Imgbtn.addEventListener('click', function() {
  result.innerHTML = text2;
});
//function img ke 1
Imgbtn1.addEventListener('click', function() {
  result.innerHTML = text1;
});
//function img ke 3
Imgbtn3.addEventListener('click', function() {
  result.innerHTML = text3;
});

//contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'
const form = document.forms['contact-my-website']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnDAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit di klik 
// tampilkan tombol loading , hilangkan tombol kirim
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim , hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    // tampilkan alert
    btnDAlert.classList.toggle('d-none');
    // reset tulisan input form nya
    form.reset()
    console.log('Success!', response)})
  .catch(error => console.error('Error!', error.message))
})






=======
// modal content
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const btnDemo = document.querySelector('.demo-modal');
btnDemo.addEventListener('click', function() {
  modal.classList.add("open-modal");
});

const btnDownload = document.querySelector('.download_btn');
btnDownload.addEventListener('click', function() {
  modal.classList.add("open-modal");
});

modalBtn.addEventListener("click", function() {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function() {
  modal.classList.remove("open-modal");
});

//modal content 2
const modalBtn1 = document.querySelector(".modal1-btn");
modalBtn1.addEventListener('click', function() {
  modal.classList.add("open-modal");
})


//warning sign up form 
const btnSubmit = document.querySelector('.submit-btn');
const showWarning = document.getElementById('warning');

const text = "Can't register because this is just a display"; 

btnSubmit.addEventListener('click', function() {
  showWarning.innerHTML = text;
});


//Counter Up
$(document).ready(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 1200
  })
})    
//testimonial

//img ke dua
const Imgbtn1 = document.getElementById('img-1');
//img ke dua
const Imgbtn = document.getElementById('img-2');
//img ke tiga
const Imgbtn3 = document.getElementById('img-3');

const result = document.getElementById('result-clients');

const text1 =  `
  <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi <br> dicta unde error quisquam reiciendis nesciunt dolore dolor illum vero omnis.</blockquote>
`;
const text2 = `
  <blockquote>A est vitae ut nemo et placeat ab veniam possimus iusto, doloribus, <br> debitis fugit perspiciatis neque suscipit, dolorum earum soluta cumque iste.</blockquote>
`;
const text3 = `
  <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore <br> eligendi velit iure libero repudiandae expedita hic nulla maiores ipsum excepturi.</blockquote>
` ;
//function img ke dua
Imgbtn.addEventListener('click', function() {
  result.innerHTML = text2;
});
//function img ke 1
Imgbtn1.addEventListener('click', function() {
  result.innerHTML = text1;
});
//function img ke 3
Imgbtn3.addEventListener('click', function() {
  result.innerHTML = text3;
});

//contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'
const form = document.forms['contact-my-website']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnDAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit di klik 
// tampilkan tombol loading , hilangkan tombol kirim
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim , hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    // tampilkan alert
    btnDAlert.classList.toggle('d-none');
    // reset tulisan input form nya
    form.reset()
    console.log('Success!', response)})
  .catch(error => console.error('Error!', error.message))
})
