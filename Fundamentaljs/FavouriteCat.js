const cats = ['Pete', 'Biggles', 'jasmine'];

let myFavoriteCats = 'My cats are called';

for (const cat of cats) {
    myFavoriteCats += ` ${cat},`
}

console.log(myFavoriteCats);