/**
 * Created by oleksandr on 23.01.16.
 */
var block1 = {
    ID: 1,
    $parent: $('#mainDiv'),
    left: 10,
    top: 10,
    title: "Block 1",
    height: 100,
    width: 100
};

var block2 = {
    ID: 2,
    $parent: $('#mainDiv'),
    left: 130,
    top: 10,
    title: "Block 2",
    backgroundColor: "#ff0000",
    height: 100,
    width: 100
};

var block3 = {
    ID: 3,
    $parent: $('#mainDiv'),
    left: 250,
    top: 10,
    title: undefined,
    height: 100,
    width: 100
};

var options = [];
options.push(block1);
options.push(block2);
options.push(block3);

for(var i = 0; i < options.length; i++) {
    render(options[i]);
}