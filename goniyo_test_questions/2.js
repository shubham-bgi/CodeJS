// Implement the isBalanced() function to take a string containing only curly {}, square [], and round () parentheses. The function should tell us if all the parentheses in the string are balanced. This means that every opening parenthesis will have a closing one. For example, {[]} is balanced, but {[}] is not.
// {[()]} True
// {[([({))]}} False
// (())() True

//{[(])} false

/*function isBalanced(str){
    let firstHalf = '';
    for(let i=0; i< str.length; i++){
        if(
            str[i] === '{' || 
            str[i] === '[' ||
            str[i] === '('
        ){
            firstHalf += str[i]
        } else if(str[i] === '}'){
            if(firstHalf[firstHalf.length - 1] = '{'){
                firstHalf = firstHalf.slice(0, firstHalf.length - 1);
            } else {
                return false;
            }
        }else if(str[i] === ']'){
            if(firstHalf[firstHalf.length - 1] = '['){
                firstHalf = firstHalf.slice(0, firstHalf.length - 1);
            } else {
                return false;
            }
        }else if(str[i] === ')'){
            console.log(firstHalf);
            if(firstHalf[firstHalf.length - 1] = '('){
                firstHalf = firstHalf.slice(0, firstHalf.length - 1);
            } else {
                return false;
            }
        }
    }
}*/

function isBalanced(str){
    let brackets = '{}[]()<>';
    let brackedIndex;
    let string1 = str;
    for(let i=0; i< string1.length; i++){
        
        if( string1[i] === '}' && string1[i-1] === '{' ){
            string1 = string1.slice(0, i-1) + string1.slice(i+1);
            i -= 2;
        }else if( string1[i] === ']' && string1[i-1] === '[' ){
            string1 = string1.slice(0, i-1) + string1.slice(i+1);
            i -=2;
        }else if( string1[i] === ')' && string1[i-1] === '(' ){
            string1 = string1.slice(0, i-1) + string1.slice(i+1);
            i -= 2;
        }
    }
    return string1.length == 0
}

//isBalanced('{[()]}');
console.log(isBalanced('{[(])}'));
