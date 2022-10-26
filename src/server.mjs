import http from 'http';
import path from 'path';
import express from 'express';
import fs from 'fs';
const __dirname = path.resolve();
const port = process.env.PORT || 8080;
const app = express();
const router = express.Router();
const server = http.createServer(app);



app.use(router);


app.use(express.static(path.normalize(__dirname + '/views/')));



//Main Page
router.get('/', async(req, res) => res.sendFile('html/games/gpage.html', {root: './views/'}));


//Games
routerget('/g', 'html/games/gpage.html');
routerget('/h', 'html/games/html5.html');
routerget('/el', 'html/games/emulators.html');
routerget('/m', 'html/games/emulib.html');
routerget('/f', 'html/games/flash.html');
routerget('/fg', 'assets/games/gfiles/flash/index.html');
routerget('/eg', 'assets/games/gfiles/rarch/index.html');
routerget('/s', 'html/games/frame.html');
routerget('/q', 'html/games/html5.html');
routerget('/li', 'html/links.html');

server.listen(port);


async function routerget(x, y){
  router.get(x, function (req, res) {
    res.sendFile(y, {root: './views/'})
  })
}



