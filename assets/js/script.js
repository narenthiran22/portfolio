$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle')
}
);
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

    $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if (top > offset && top < offset + height) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    });
});

var typed = new Typed(".typing-text", {
    strings: ['Full-Stack Developer', 'Freelancer', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1000,
    reset: true
});
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .whatsapp', { interval: 600 });
srtop.reveal('.home .facebook', { interval: 600 });
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .img', { delay: 100 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

const right = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 1000,
    reset: true
});
right.reveal('.about .content h3', { delay: 200 });
right.reveal('.about .content .tag', { delay: 200 });
right.reveal('.about .content p', { delay: 200 });
right.reveal('.about .content .box-container', { delay: 200 });
right.reveal('.about .content .resumebtn', { delay: 200 });
right.reveal('.work .box', { interval: 200 });
right.reveal('.contact .container', { delay: 400 });
right.reveal('.contact .container .form-group', { delay: 400 });
right.reveal('.skills .container .row .info', { delay: 450 });


const bottom = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    reset: true
});
bottom.reveal('.skills .container', { interval: 200 });
bottom.reveal('.about .row .image', { delay:200 });




const left = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1000,
    reset: true
});
left.reveal('.about .content h4', { delay: 200 });
left.reveal('.education .box', { interval: 200 });
left.reveal('.skills .container .row', { delay: 400 });

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var message = event.target.message.value;

    // Prepare the email parameters
    var templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_3kngpgc', 'template_qkbcxxl', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          title: 'Success!',
          text: 'Email sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }, function (error) {
        console.log('FAILED...', error);
        Swal.fire({
          title: 'Success!',
          text: 'Email sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      });
  });

  document.getElementById('code-btn1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    Swal.fire({
      title: 'Coming Soon!',
      text: 'The code will be updated soon.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });

  document.getElementById('demo-btn1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    Swal.fire({
      title: 'Coming Soon!',
      text: 'The demo will be updated soon.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });
  document.getElementById('code-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    Swal.fire({
      title: 'Coming Soon!',
      text: 'The code will be updated soon.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });

  document.getElementById('demo-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    Swal.fire({
      title: 'Coming Soon!',
      text: 'The demo will be updated soon.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });