
var Txt = '{"name":"Creative Problem solver for all types of business.Based in the Essex I am always willing to assist business with online issues from the surrounding areas at a discounted cost.However if you are from a bit further lets chat online and see how best I can help", "color":"#663399", "background":"#e0ebe8"}'
var obj = JSON.parse(Txt);
document.getElementById("welcome-section").style.background = obj.background;
document.getElementById("wrapper").style.background = obj.color;
document.getElementById("aboutTxt").innerHTML = obj.name;

var how = document.getElementById('how');
how.onmouseover = function howiwork(){
  var howTxt = '{"name":"After our initial meeting online or face to face I will come up with a mockup and of your solution for you to view online. This wont be the finished solution but will give you an idead of what im sthinking", "color":"red", "background":"green"}'
  var howobj = JSON.parse(howTxt);
  document.getElementById("welcome-section").style.background = howobj.background;
  document.getElementById("wrapper").style.background = howobj.color;
  document.getElementById("aboutTxt").innerHTML = howobj.name;
};
