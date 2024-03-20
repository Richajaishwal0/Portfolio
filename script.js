let sections =document.querySelectorAll('section');
  let navlinks =document.querySelectorAll(' header nav a');
  window.onscroll=() => {
      sections.forEach(sec => {
          let top =window.scrollY;
          let offset = sec.offsetTop -150;
          let height =sec.offsetHeight;
          let id = sec.getAttribute('id');
         if (top >=offset && top<offset +height) {
          navlinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
  
          };
         })
      };
  
  function navigateTo(page) {
          window.location.href = page;
      }
      document.getElementById('showButton').addEventListener('click', function() {
          var content = document.getElementById('hiddenContent');
          if (content.style.display === 'none') {
            content.style.display = 'block';
          } else {
            content.style.display = 'none';
          }
        });
  
        document.getElementById('do').addEventListener('click', function() {
          var content = document.getElementById('end');
          if (content.style.display === 'none') {
            content.style.display = 'block';
           
           } else {
            content.style.display = 'none';
          }
        });