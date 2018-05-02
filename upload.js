var http = require('http');
var fs = require('fs')
var formidable = require('formidable');

http.createServer(function(req, res){
    if (req.url == '/upload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.myPic.path;
            var newpath = 'C:/Users' +files.myPic.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
            res.write('File uploaded and moved!');
            res.end()
            //console.log('peter');
            })
        })
    }
    else{

    fs.readFile('index.html' , function(err, upload){

        if(err){
            res.write("Error, No Image Uploaded. Deposit More Bitcoins");
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(upload)
            res.end();
        }
    })
}
}).listen(8080)
