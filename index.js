var PubSub = require('./pubsub');

var mySubscriber = function( msg, data ){
    console.log( msg, data );
};

var token = PubSub.subscribe( 'MY TOPIC', mySubscriber );

PubSub.publish( 'MY TOPIC', 'hello world!' );
