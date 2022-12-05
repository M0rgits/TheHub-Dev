const crazygames = document.getElementById('crazygames');
const coolmathgames = document.getElementById('coolmathgames');
const geforce = document.getElementById('geforcenow');



function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

async function registerSW() {
  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register("sw.js", {
    scope: __uv$config.prefix,
  });
}

crazygames.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    throw err;
  }
  let url = 'crazygames.com'
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

coolmathgames.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    throw err;
  }
  let url = 'coolmathgames.com'
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

geforce.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    throw err;
  }
  let url = 'play.geforcenow.com'
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});