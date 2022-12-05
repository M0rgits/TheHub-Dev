//Imports
import http from 'http';
import path from 'path';
import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser'
import createBareServer from '@tomphttp/bare-server-node';

//Const
const __dirname = path.resolve();
const app = express();
const router = express.Router();
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const server = http.createServer(app);
const bareServer = createBareServer('/bare/', {
	logErrors: true,
	localAddress: undefined,
	maintainer: {
		email: 'tomphttp@sys32.dev',
		website: 'https://github.com/tomphttp/',
	},
});


//Var
var urlencodedparser = bodyParser.urlencoded({extended: false})
var port = process.env.PORT || 8080;
var myFuncCalls = 0;
var pages = [
  {path: 'html/games/gpage.html', route: '/g'},
  {path: 'html/games/html5.html', route: '/h'},
  {path: 'html/games/emulators.html', route: '/el'},
  {path: 'html/games/emulib.html', route: '/m'},
  {path: 'html/games/flash.html', route: '/f'},
  {path: 'assets/games/gfiles/flash/index.html', route: '/fg'},
  {path: 'assets/games/gfiles/rarch/index.html', route: '/eg'},
  {path: 'assets/games/gfiles/rarch/index.html', route: '/eg'},
  {path: 'html/games/frame.html', route: '/s'},
  {path: 'html/links.html', route: '/li'},
  {path: 'html/form.html', route: '/frm'},
  {path: 'html/changes.html', route: '/c'},
  {path: 'html/proxy/uv.html', route: '/uv'},
]



//Router
  //Get
router.get('/', function(req, res) {
  app.use(express.static(path.normalize(__dirname + '/views/')));
  res.sendFile('html/index.html', {root: './views/'})
  var agent = req.headers['user-agent']
  if (agent != 'curl/7.80.0'){
  count();
  }
})
for(let item of pages){
  routerget(item.route, item.path);
}
router.get('/sitemap', function(req, res) {
  res.download('./views/sitemap.xml')
})
  //Post
router.post('/request/gme', urlencodedparser, function(req, res) {
  var type = req.body.type;
  var name = req.body.name;
  var uid = req.body.uid;
  console.log(uid + ' requested ' + type + ' game [' + name + ']')
  if (name === ""){
    console.log('err: empty name');
    return;
  }
  else{
  fs.appendFileSync(`./forms/${type}.txt`, `${name}; ${uid}\n`)
  }
});

router.post('/request/uid', urlencodedparser, function(req, res) {
  res.sendStatus(200);
  var uid = req.body.uid;
  var data = fs.readFileSync('./forms/usr.txt', 'utf-8')
  if (data.includes(uid)){
    return;
  }
  else{
    fs.appendFileSync('./forms/usr.txt', `${uid}\n`);
    console.log(uid + 'Is A New User!');
  }
})

router.get('/request/changes', function(req, res) {
  var changelog = fs.readFileSync('./views/html/changes.html', 'utf-8');
  var changecheck = fs.readFileSync('./forms/changes.txt', 'utf-8');
  if(changecheck === changelog){
    res.sendStatus(200)
    return;
  }
  else if(changecheck != changelog){
    res.send('changed')
    return;
  }
})

//app.* stuff
app.use(router);
app.use('/', (req, res, next) => {
    if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
      return next()
	}
}); 
app.use(express.static(path.normalize(__dirname + '/views/')));

//Functions
function routerget(x, y){
  router.get(x, function (req, res) {
    res.sendFile(y, {root: './views/'})
  })
}
function count(){
    myFuncCalls++;
    console.log(today.toUTCString() + '; ' + myFuncCalls.toString())
}

server.listen(port);

