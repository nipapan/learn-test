const googleDatabase = [
   'cats.com',
   'souprecipes.com',
   'flowers.com',
   'dogs.com',
   'animals.com',
   'myfavoritecats.com'
];

const googleSearch = (searchInput, db) => {
   const matches = db.filter(website => {
      return website.includes(searchInput);
   })
   return matches.length > 3? matches.slice(0,3) : matches;
}

// console.log(googleSearch('dogs', db));

module.exports = googleSearch;