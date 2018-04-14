import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
// import torrentStream from 'torrent-stream';
import { parseMagnet, encodeMagnet } from 'parse-magnet-uri';
import WebTorrent from 'webtorrent';

const client = new WebTorrent();
const app = express();

const Port = 5000 || process.env;
// ==============================
let torrentId = "magnet:?xt=urn:btih:AE6C7870E48D1F7E1F03CBCB4BBCDEA70CE8AF9D&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337";

client.add(torrentId, function ontorrent(torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function (file) {
    file.name.endsWith('.mp4') ?  file.name : false
  })

  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  // console.log(file)
});
// console.log(client.add())
client.on('torrent', (torrent) => {
  var file = torrent.files.find((file) =>{
    if(file.name.endsWith('.mp4')) {
      console.log(file.infoHash)
      return console.log("file path:", file.path);
    }
  });
  // console.log(torrent);
});
// console.log(client.get(torrentId).client);


// load static files=============
app.use(express.static(path.resolve(__dirname, '../../client/public')));
// =============================
app.use(webpackMiddleware(webpack(webpackConfig)));
// =======================================

app.get('/movie/{movie}', (req, res) => res.send(req.params.magnetLink));

app.use(express.static(path.resolve(__dirname, '../../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/public/index.html'));
});
app.listen(Port, () => console.log('Example app listening on port '+ Port))
 