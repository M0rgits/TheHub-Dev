

function goFrame(url) {
    localStorage.setItem("huframesrc", url + '/index.html');
    window.location.href = '/s'
}

function goToUrl(url, stealth, nolag) {
    if (stealth) {
        goFrame(url, nolag);
    } else {
        window.location.href = url;
    }
}

//ONLY IO GAMES!

var shooter = [
    { name: "ZombsRoyale-io", path: "zombs/", img: "zombs.png", description: "Zombs Royale is a multiplayer survival game set in a Battle Royale arena. As with many Battle Royale games, you join the deadly battlefield via parachute and scramble around looking for resources and comradery with other players." },
    { name: "Krunker-io", path: "krunker/", img: "krunker.png", description: "Krunker.io is a fast-paced pixelated first-person shooter. In this browser game, players drop into a pixelated world and fight against other players from around the world." },
    { name: "Shell Shockers", path: "shell-shockers/", img: "shellshockers.png", description: "Shell Shockers (Shellshock.io) is a multiplayer .io FPS game featuring eggs armed with guns. You control one of these weapon-wielding eggs in one of four online game modes where the aim is to shatter your opponents with bullets and bombs." },
   { name: "Bullet Force", path: "bullet-force/", img: "bulletforce.png", description: "Bullet Force is an amazing multiplayer FPS game with great 3D graphics. Create a room or join one and start shooting." }
];

var glist = document.getElementById("glist");

for (let item of shooter) {
    let a = document.createElement("a");
    a.href = "#";
    var img = document.createElement("img");
    img.src = "/assets/img/h5g/" + item.img;
    a.appendChild(img);
    var title = document.createElement("h3");
    title.textContent = item.name;
    a.appendChild(title);
    var desc = document.createElement("p");
    desc.textContent = item.description;
    if (item.credits == "itch") desc.innerHTML += '<br>Credits: Game can be found <a target="_blank" href="https://itch.io">here</a>.';
    if (item.credits == "nowgg") desc.innerHTML += '<br>Credits: Game can be found <a target="_blank" href="https://now.gg">here</a>.';
    a.appendChild(desc);
    a.onclick = function(e) {
        if (e.target == a || e.target.tagName != "A") {
            e.preventDefault();
            item.custom ? goProx[item.custom](true) : goFrame("/assets/g/archive/g/" + item.path, item.nolag);
        }
    }

    glist.appendChild(a);
}

module.exports = { shooter };