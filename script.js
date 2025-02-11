//Function to fetch data from Github API (WIP)
async function getGithubData(){
  const response = await fetch('https://api.github.com/users/zianoz/repos');
  const data = await response.json();  
  
  const title = document.querySelector('#project-title');
  const about = document.querySelector('#project-about');

  title.textContent = data[7].name;
  about.textContent = data[7].description;
  
  console.log(data);
}

getGithubData();

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    navbarMenu.classList.toggle('active');
});

const easterEgg = document.querySelector('.copyright');
let clickCount = 0;

easterEgg.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 5) {
 
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      document.body.style.transition = 'transform 0.5s ease-in-out';
      clickCount = 0;
    }
});

  let keySequence = '';
  const secretCode = '42069';
  const modal = document.getElementById('easterEggModal');
  const closeButton = document.querySelector('.close');
  
  document.addEventListener('keydown', function(event) {
    keySequence += event.key;
    
    keySequence = keySequence.slice(-secretCode.length);
  
    if (keySequence === secretCode) {
      modal.style.display = 'block';
      keySequence = '';
    }
});
  
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
});
