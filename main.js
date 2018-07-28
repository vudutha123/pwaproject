// function Loadjson(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function()
//   {
//     if(xhr.readyState===4&&xhr.status=="200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
//   var data=JSON.parse(text);
//   console.log(data);
// basics(data.details);
// carrerinfo(data.carrerobject);
// Educational(data.Educational);
// Skills(data.Skills);
// Acheivements(data.Acheivements);
// }
// )
function Loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));

      }
    })
    })
  }
var newfile=Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
basics(data.details);
carrerinfo(data.carrerobject);
Educational(data.Educational);
Skills(data.Skills);
Acheivements(data.Acheivements);

})
var childa=document.querySelector(".child1");
function basics(det){
  var image=document.createElement("img")
  image.src=det.image;
  childa.appendChild(image);
  var name=document.createElement("h1");
  name.textContent=det.name;
  childa.appendChild(name);
  var phno=document.createElement("h2");
  phno.textContent=det.phno;
  childa.appendChild(phno);

  var email=document.createElement("a");
  email.href="mailto:vuduthaharshitha0@gmail.com";
  email.textContent=det.email;
  childa.appendChild(email);

  var add=document.createElement("h3");
  add.textContent="Address";
  childa.appendChild(add);
  var hr=document.createElement("hr");
  childa.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=det.Address;
  childa.appendChild(p);
}
var childb=document.querySelector(".child2");
function carrerinfo(info){
  var heading=document.createElement("h1");
  heading.textContent="CarrerObject";
  childb.appendChild(heading);
  var hr=document.createElement("hr");
  childb.appendChild(hr);
  var c=document.createElement("p");
  c.textContent=info.info;
  childb.appendChild(c);
}
function Educational(edu){

  var b=document.createElement("h1");
  b.textContent="Educational Qualification";
  childb.appendChild(b);
  var hr=document.createElement("hr");
  childb.appendChild(hr);
  var table1=document.createElement("table");
  table1.border="1";
  childb.appendChild(table1);
  tabledata="";
  for(i=0;i<edu.length;i++)
  {
    tabledata+="<tr><td>"+edu[i].Qualification+"</td><td>"+edu[i].yearofpass+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].institute+"</td></tr>";
  }
  table1.innerHTML=tabledata;
}
function Skills(skillsinfo){
  var d=document.createElement("h1");
d.textContent="Techinal Skills";
childb.appendChild(d);
var hr=document.createElement("hr");
childb.appendChild(hr);
for(i=0;i<skillsinfo.length;i++){

var title=document.createElement("h3");
title.textContent=skillsinfo[i].title;
childb.appendChild(title);
var eduul=document.createElement("ul");
var eduli=document.createElement("li");
eduli.textContent=skillsinfo[i].info;
eduul.appendChild(eduli);
childb.appendChild(eduul);
}
}
function Acheivements(acheive){
var g=document.createElement("h1");
g.textContent="Acheivements";
childb.appendChild(g);
var hr=document.createElement("hr");
childb.appendChild(hr);
for(i=0;i<acheive.length;i++){
  var title=document.createElement("h3");
  title.textContent=acheive[i].title;
  childb.appendChild(title);
  var eduul=document.createElement("ul");
  var eduli=document.createElement("li");
  eduli.textContent=acheive[i].info;
  eduul.appendChild(eduli);
  childb.appendChild(eduul);
}
}
function openpage(){
  window.open("second.html","_self",true);
}
