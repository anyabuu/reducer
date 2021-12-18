function reducer (string, action) {


    switch (action) {
        case 'capitalize':
            return capitalize(string);
            break;

        case 'upperCase':
            return upperCase(string);
            break;

        case 'lowerCase':
            return lowerCase(string);
            break;

        default:
            console.log('Error action')

    }
}  


const string = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

console.log(reducer(string, 'capitalize'));


function capitalize() {
    let strArray = string.split(' ');
    
    let changeArray = strArray.map(function (word) {
       return `${word[0].toUpperCase()}${word.slice(1)}`;
    })

    return changeArray.join(' ');
}

function upperCase() {
    let strArray = string.split(' ');

    let changeArray = strArray.map(function (word) {
        return word.toUpperCase()
    })

    return changeArray.join(' ');
}

function lowerCase() {
    let strArray = string.split(' ');

    let changeArray = strArray.map(function (word) {
        return word.toLowerCase()
    })

    return changeArray.join(' ');
}