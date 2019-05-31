//welcome section lookup

function welcomeLookUp(val) {


  // Only change code below this line
  var lookup =  {
 "about": '{"name":"Creative Problem solver for all types of business.Based in the Essex I am always willing to assist business with online issues from the surrounding areas at a discounted cost.However if you are from a bit further lets chat online and see how best I can help", "color":"#663399", "background":"#e0ebe8"}',
"how":  '{"name":"After our initial meeting online or face to face I will come up with a mockup and of your solution for you to view online. This wont be the finished solution but will give you an idead of what im sthinking", "color":"red", "background":"green"}',

 "what":  '{"name":"Front end , CSS, javascript", "color":"pink", "background":"lightblue"}',
 "skills":  '{"name":"All sites start out with HTML, CSS, javascript", "color":"pink", "background":"lightblue"}'


  };
  var result = JSON.parse(lookup[val]);

  document.getElementById("welcome-section").style.background = result.background;
  document.getElementById("wrapper").style.background = result.color;
  document.getElementById("aboutTxt").textContent = result.name;
}
