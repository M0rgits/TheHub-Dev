
const domain = window.location.hostname;



async function uvsend(x){
  const encoded = btoa(x)
  const url = `https://ultraviolet-url-3.m0rgits.repl.co//?url=${encoded}`;
  window.location.href = url;
};

