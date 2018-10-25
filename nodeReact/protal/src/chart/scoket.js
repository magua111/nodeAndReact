import io from 'socket.io-client';
const socket = io.connect('http://localhost:1111/myChart');
function scoketFun(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('scoketFun', 1000);
}

export default scoketFun;