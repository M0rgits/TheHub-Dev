

//game request form send
function sendForm(type){
  var name = document.getElementById(type).value
  var uid = getCookie('uid');
  $.post("/request/gme", {type: type, name: name, uid: uid}, 
    function(data, status) {
    if(status === "success") {
      console.log("Post successfully created!")
    }
  },
"json")
}

//Proxy Url
async function uvsend(x){
  const encoded = btoa(x)
  const url = `https://ultraviolet-url-3.m0rgits.repl.co/?url=${encoded}`;
  window.location.href = url;
};

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function senduid(uid){
  var uid = getCookie('uid');
  $.post("/request/uid", {uid: uid}, function(data, status) {
    if(status === "success") {
      console.log("success");
    }
  },
  "json")
}

function uvsendform() {
  var url = document.getElementById('pr-url').value;
  uvsend(url);
}