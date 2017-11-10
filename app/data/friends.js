// DATA
// Below data will hold all of the friend data

// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
//

var allFriends = [
    {
        name: 'Alicia',
        photo: 'picture',
        scores: [ '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = allFriends;