//remove keys along with values from object if values are N/A or undefined or empty, if an array remove empty element in arrat
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  resp.setEncoding('utf-8')
  let data = '';

  // parse json data here...
  resp.on('data', (d) => {
    data +=d
  })

  resp.on('end', ()=> {
    console.log(recurse(JSON.parse(data)))
  })
});
function recurse(data){
    for(let key in data){
            if(data[key] instanceof Object){
                if(Object.keys(data[key]).length == 0){
                    delete data[key];
                } else {
                    recurse(data[key]);
                }
            } else if(data[key] === '' || 
            data[key] === 'null' || 
            data[key] == 'N/A' || 
            data[key] === null || 
            data[key] === '-' || 
            typeof data[key] === 'undefined' || 
            (
              data[key] instanceof Object 
              && 
              Object.keys(data[key]).length == 0)
            ){
                delete data[key];
            }
            if(Array.isArray(data[key])){
              for(let i=0; i<data[key].length; i++){
                if(data[key] === '' || 
                data[key] === 'null' || 
                data[key] == 'N/A' || 
                data[key] === null || 
                data[key] === '-' || 
                typeof data[key] === 'undefined' ||
                !data[key][i]
                ){
                  data[key].splice(i,1)
                }
              }
            }
        }
        
    return JSON.stringify(data);
    }