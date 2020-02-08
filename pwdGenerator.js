
const generatePasswordForUser = () => { 

    let wordInfo = document.getElementById('favWord').value;
    let cityInfo = document.getElementById('favCity').value;
    let foodInfo = document.getElementById('favFood').value;
    const specialSymbols = ['!','?','#','$','%','^','&','*'];
    const randomNumber = Math.floor(Math.random() * 999);
    let setOfCharacters = [];
    const phrase = 'doNotForgetAboutInputValue';
    
    let words =  wordInfo || cityInfo || 
    foodInfo ? wordInfo.concat(cityInfo,foodInfo) : phrase;

    let wordCheck = words.match(/^[a-zA-Z]+$/) ? words : phrase;

    let wordSet = wordCheck.split('');
    
    for ( i = Math.floor(Math.random() * wordSet.length); i < wordSet.length; i++ ) {
        for ( j = Math.floor(Math.random() * specialSymbols.length); j < specialSymbols.length; j++ ) {
            setOfCharacters.push(wordSet[i]);
            setOfCharacters.push(specialSymbols[j]);
        }
    }

    let suitablePassword = setOfCharacters.slice(0,8).join('');
    
    document.getElementById('showGeneratedPassword').innerHTML = suitablePassword + randomNumber;    
};
