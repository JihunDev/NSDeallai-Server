var inspect = require('util').inspect;

module.exports = {

    userInsert: function (data, socket, sql) {
        console.log(data);
        var user = data;
        sql.query('INSERT INTO USER (u_id, u_pwd, u_name, u_address, u_email, u_tel, u_img, u_isseller, u_dropout)' +
                 'VALUES (?,?,?,?,?,?,"a.jpg",?,"n")'
                     , [user.id
                     , user.pwd
                     , user.name
                     , user.addr
                     , user.email
                     , user.tel
                     , user.isseller], function (err, res) {
            if (!err) {
                console.log(inspect(res));
            }
        });
    },
    
    userUpdate: function (data, socket, sql) {
        console.log('android val : ' + inspect(data));
        sql.query("UPDATE USER SET u_pwd = '" 
                    + data.pwd + "',u_name = '" 
                    + data.name + "', u_tel = '" 
                    + data.tel + "', u_email = '" 
                    + data.eMail + "', u_address = '" 
                    + data.address + "' WHERE u_id='" 
                    + data.id + "';")
		.on("result", function (res) {
            res.on("error", function (err) {
                console.log('err : ' + inspect(err));
            }).on("end", function (info) {
                console.log('end : ' + inspect(info));
                console.log('result val End')
            }).on("end", function () {
                console.log('Query End');
            });
        });
    },

    userDelete: function (data, socket, sql) {
        console.log('android val : ' + data);
        var id = data;
        sql.query("UPDATE USER SET u_dropout ='y' WHERE u_id = '" + id + "';")
		.on("result", function (res) {
            res.on("error", function (err) {
                console.log('err : ' + inspect(err));
            }).on("end", function (info) {
                console.log('end : ' + inspect(info));
                console.log('result val End')
            }).on("end", function () {
                console.log('Query End');
            });
        });
    },

    userLogin: function (data, socket, sql) {
        console.log("android val : " + data);
        var id = data;
        sql.query("SELECT * FROM USER WHERE u_id ='" + id + "';")
		.on("result", function (res) {
            res.on('row', function (row) {
                console.log('row : ' + inspect(row));
                socket.emit("userLoginCheck", row);
            }).on('error', function (err) {
                console.log('err: ' + inspect(err));
            }).on('end', function (info) {
                console.log('info : ' + inspect(info));
                console.log('info.numRows : ' + inspect(info.numRows));
                if (inspect(info.numRows) == 0) {
                    var user = { u_id: 'fail', u_pwd: 'fail' };
                    socket.emit("userLoginCheck", user);
                }
                console.log('result val End');
            }).on('end', function () {
                console.log('Query End');
            });
        });
    }
};
