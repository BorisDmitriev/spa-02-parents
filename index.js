// your code here
let cite = document.querySelector('cite')

const getParentTagNames = () => {
    let citeChildNodes = []
    while(cite){
        citeChildNodes.unshift(cite.tagName);
        cite = cite.parentElement 
    }
    return citeChildNodes;
}

console.log( getParentTagNames().join(' > ').toLowerCase() );



