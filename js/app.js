/**
 * Created by oleksandr on 23.01.16.
 */
var block1 = {
    ID: 1,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 25,
    top: 25,
    margin: 10,
    padding: 5,
    title: "Block 1",
    height: 180,
    width: 180
};

var block2 = {
    ID: 2,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 230,
    top: 25,
    margin: 10,
    padding: 5,
    title: "Block 2",
    backgroundColor: "#8FBC8F",
    height: 180,
    width: 180
};

var block3 = {
    ID: 3,
    $parent: $('#mainDiv'),
    border: '1px solid black',
    left: 450,
    top: 25,
    margin: 10,
    padding: 5,
    title: undefined,
    height: 180,
    width: 180
};

var options = [];
options.push(block1);
options.push(block2);
options.push(block3);

var blockList = [];

for(var i = 0; i < options.length; i++) {
    blockList.push(new Block(options[i]))
}


$('.btn-arrange-row').on('click', function () {
    arrangeRow(blockList);
});

$('.btn-arrange-column').on('click', function () {
    arrangeColumn(blockList);
});

$('.btn-all-stack').on('click', function () {
    allStack(blockList);
});

$('.btn-remove-all').on('click', function () {
    removeAllBlocks(blockList);
});


function arrangeRow (allBlocks){
    var startLeft = 25;
    var startTop = 25;
    var marginBetweenBlocks = 200;
    for (var i = 0; i < allBlocks.length; i++){
        var left = startLeft + (marginBetweenBlocks * i);
        if (!allBlocks[i].locked) {
            allBlocks[i].$elem[0].style.top = startTop + 'px';
            allBlocks[i].$elem[0].style.left = left + 'px';
        }
    }
}

function arrangeColumn (allBlocks){
    var startLeft = 25;
    var startTop = 25;
    var marginBetweenBlocks = 200;
    for (var i = 0; i < allBlocks.length; i++){
        var top = startLeft + (marginBetweenBlocks * i);
        if (!allBlocks[i].locked) {
            allBlocks[i].$elem[0].style.top = top + 'px';
            allBlocks[i].$elem[0].style.left = startLeft + 'px';
        }
    }
}

function allStack (allBlocks){
    var startLeft = 25;
    var startTop = 25;
    for (var i = 0; i < allBlocks.length; i++) {
        if (!allBlocks[i].locked) {
            allBlocks[i].$elem[0].style.left = startLeft + 'px';
            allBlocks[i].$elem[0].style.top = startTop + 'px';
        }
    }
}

function removeAllBlocks (allBlocks){
    for (var i = 0; i < allBlocks.length; i++) {
        if (!allBlocks[i].locked) {
            allBlocks[i].removeObj();
            blockList.splice(i, 1);
        }
    }
}