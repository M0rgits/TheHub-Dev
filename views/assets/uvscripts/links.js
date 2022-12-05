const youtube = document.getElementById('youtube');
const reddit = document.getElementById('reddit');
const netflix = document.getElementById('netflix');
const discordapp = document.getElementById('discordapp');
const instagram = document.getElementById('instagram');

async function registerSW() {
  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register("sw.js", {
    scope: __uv$config.prefix,
  });
}

youtube.addEventListener('click', async (event) => {
  event.preventDefault();
  try{
    await registerSW();
  }
  catch(err){
    throw err;
  }
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl('http://youtube.com');
})

reddit.addEventListener('click', async (event) => {
  event.preventDefault();
  try{
    await registerSW();
  }
  catch(err){
    throw err;
  }
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl('http://reddit.com');
})

netflix.addEventListener('click', async (event) => {
  event.preventDefault();
  try{
    await registerSW();
  }
  catch(err){
    throw err;
  }
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl('http://netflix.com');
})

discordapp.addEventListener('click', async (event) => {
  event.preventDefault();
  try{
    await registerSW();
  }
  catch(err){
    throw err;
  }
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl('http://discordapp.com');
})

instagram.addEventListener('click', async (event) => {
  event.preventDefault();
  try{
    await registerSW();
  }
  catch(err){
    throw err;
  }
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl('http://instagram.com');
})