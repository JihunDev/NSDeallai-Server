var inspect = require('util').inspect;

module.exports = {
    
    starInsert: function (data, socket, sql) {
        console.log('Insert Start! I am in insert socket right now!');
        var star = data;
        console.log('Insert start');
        sql.query('INSERT INTO PR_REVIEW (pr_id,o_id,p_id,u_id,pr_content,pr_star) VALUES(?,?,?,?,?,?)', [star.pr_id, star.o_id, star.p_id, star.u_id, star.pr_content, star.pr_star], function (err, res) {
            if (!err) {
                console.log('result : ' + res);
            }
        });
    },
    
    starUpdate: function (data, socket, sql) {
        console.log('Update Start! I am in Update socket right now!');
        var star = data;
        sql.query("UPDATE PR_REVIEW SET pr_content = '" + star.pr_content + "',pr_star = '" + star.pr_star + "' WHERE o_id='" + star.o_id + "';")
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
    
    starDelete: function (data, socket, sql) {
        console.log('Delete Start! I am in Delete socket right now!');
        var id = data;
        sql.query("DELETE FROM PR_REVIEW WHERE o_id='" + id + "'; ")
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
    
    starSelect: function (data, socket, sql) {
        console.log('Select Start! I am in Select socket right now!');
        var id = data;
        sql.query("SELECT * FROM PR_REVIEW WHERE p_id ='" + id + "';")
		.on("result", function (res) {
            res.on('row', function (row) {
                console.log('row : ' + inspect(row));
                //결과값 보내기
                socket.emit('res', row);
            }).on('error', function (err) {
                console.log('err: ' + inspect(err));
            }).on('end', function () {
                console.log('Query End');
            });
        });
    }
};
