const googleSearch = require('./script');

dbMock = [
   'cats.com',
   'chihuahua.com',
   'disney.com',
   'dogs.com',
   'palotom.com'
];

describe('googleSearch', () => {
   test('is searching google', () => {
      expect(googleSearch('notindb', dbMock)).toEqual([]);
      expect(googleSearch('chihuahua', dbMock)).toEqual(['chihuahua.com']);
   })

   test('work with undefined and null input', () => {
      expect(googleSearch(undefined, dbMock)).toEqual([]);
      expect(googleSearch(null, dbMock)).toEqual([]);
   })

   test('does not return more than 3 matches', () => {
      expect(googleSearch('.com', dbMock).length).toEqual(3);
   })
})