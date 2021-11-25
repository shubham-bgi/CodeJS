const fs = require('fs');
const exec = require('child_process').exec; 

// create file called newfile.txt
// code goes here...
fs.writeFile('newfile.txt', 'New file content', function (err){
  if(err)
  throw err;
  //console.log('File is created succeddfully!');
});
// then print contents of directory according to instructions above
// code goes here...
exec('ls -m', (error, stdout, stderr) => {
  
  stdout = stdout.replace(/(\r\n|\n|\r)/gm,"jgfq1va43\r\n");
  stdout = stdout.replace(/(..)./g, "$1X");
  console.log(stdout);
  if(error !== null){
    console.log('exec error', error);
  }
})