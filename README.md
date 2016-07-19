# Mine own Pub/Sub

Based on some other versions of pubsub methodology, this is a simplified, cut-down version for use in node apps primarily, but can be used anywhere really.

It's currently proving very useful in a React app I'm building where several unrelated components need to message each other.

**Example usage:**

```
var PubSub = require('./pubsub');

var mySubscriber = function(msg, data){
    console.log(msg, data);
};

var token = PubSub.subscribe('MY TOPIC', mySubscriber);

PubSub.publish('MY TOPIC', 'hello world!');
```

**ES2015:**

```
import PubSub from './pubsub';

let token = PubSub.subscribe('A TOPIC', this.dataSubscriber);

PubSub.publish('A TOPIC', 'G Day!');
```
