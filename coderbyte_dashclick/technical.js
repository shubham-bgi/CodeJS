// Input1: ‘./home/folder1’
// Output1: ‘/home/folder1’

// Input2: ‘./home/././././folder1’
// Output2: ‘/home/folder1’

// Input3: ‘./home/././folder1/folder2/../folder3’
// Output3: ‘/home/folder1/folder3’

function fixSting(str){ 
    return str.replace(/\./g, '').replace(/\/+/g,'/');
}

console.log(fixSting('./home/././folder1/folder2/../folder3'));