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
    },
    {
        name: 'Jennifer',
        photo: 'picture',
        scores: [ '1', '3', '1', '9', '1', '5', '1', '1', '1', '1' ]
    }
];

//function bestMatch


function bestMatch(data){

    var results = [];
    var lowest;
    var name;

    for (var i =0; i < allFriends.length; i++){

        var difference = 0;

        for (var n =0; n < allFriends[i].scores.length; n++){
            //get difference
            difference = difference +  Math.abs(allFriends[i].scores[n] - data.scores[n]);
        }

        if (difference < lowest){
            lowest = difference;
            name = allFriends[i].name;
        }

        results.push(difference);

    }

    console.log("my results", results);

    allFriends.push(data);

}



// Note how we export the array. This makes it accessible to other files using require.
module.exports = bestMatch;

