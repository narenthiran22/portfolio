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

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var name = event.target.name.value;
  var email = event.target.email.value;
  var phone = event.target.phone.value;
  var message = event.target.message.value;

  var templateParams = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

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
  event.preventDefault();
  Swal.fire({
    title: 'Coming Soon!',
    text: 'The code will be updated soon.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});

document.getElementById('demo-btn1').addEventListener('click', function (event) {
  event.preventDefault();
  Swal.fire({
    title: 'Coming Soon!',
    text: 'The demo will be updated soon.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});
document.getElementById('code-btn').addEventListener('click', function (event) {
  event.preventDefault();
  Swal.fire({
    title: 'Coming Soon!',
    text: 'The code will be updated soon.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});

document.getElementById('demo-btn').addEventListener('click', function (event) {
  event.preventDefault();
  Swal.fire({
    title: 'Coming Soon!',
    text: 'The demo will be updated soon.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});
