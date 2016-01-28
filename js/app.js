/**
 * Created by oleksandr on 23.01.16.
 */
var block1 = {
    ID: 1,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 10,
    top: 10,
    margin: 10,
    padding: 5,
    title: "Block 1",
    height: 150,
    width: 150
};

var block2 = {
    ID: 2,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 230,
    top: 10,
    margin: 10,
    padding: 5,
    title: "Block 2",
    backgroundColor: "#8FBC8F",
    height: 150,
    width: 150
};

var block3 = {
    ID: 3,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 450,
    top: 10,
    margin: 10,
    padding: 5,
    title: undefined,
    height: 150,
    width: 150
};

var options = [];
options.push(block1);
options.push(block2);
options.push(block3);

for(var i = 0; i < options.length; i++) {
    new block(options[i]);
}