/*welcome section lookup
//
//function welcomeLookUp(val) {
//
//  var lookup =  {
 "about": '{"name":"Creative Problem solver for all types of business.Based in the Essex I am always willing to assist business with online issues from the surrounding areas at a discounted cost.However if you are from a bit further lets chat online and see how best I can help", "background":"#e0ebe8"}',
"how":  '{"name":"After our initial meeting online or face to face I will come up with a mockup and of your solution for you to view online. This wont be the finished solution but will give you an idead of what im sthinking", "background":"green"}',

 "what":  '{"name":"Front end , CSS, javascript", "background":"lightblue"}',
 "skills":  '{"name":"All sites start out with HTML, CSS, javascript", "background":"lightblue"}'


  };
  var result = JSON.parse(lookup[val]);

  document.getElementById("welcome-section").style.background = result.background;

  document.getElementById("aboutTxt").textContent = result.name;
}**/

//MENU
function classToggle() {  const navs = document.querySelectorAll('.Navbar__Items')
navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));}
document.querySelector('.Navbar__Link-toggle')  .addEventListener('click', classToggle);
