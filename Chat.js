

module.exports = function (data, socket){
                console.log('msg : '+data);
		socket.broadcast.emit('userReMessage',{
                	message : data
       	});
}


