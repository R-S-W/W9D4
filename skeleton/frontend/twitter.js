const FollowToggle = require('./follow_toggle');

console.log('testing 1');

$( function () {
    console.log('testing 2');
    let $followToggle = $('.follow-toggle');
    let ft = new FollowToggle($followToggle);
    let ftList = [];
    $followToggle.each(function(i, el) {
        ftList.push(new FollowToggle(el));
    });
})

