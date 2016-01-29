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
    height: 180,
    width: 180
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
    height: 180,
    width: 180
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
    var left = 25;
    var top = 25;
    var marginBetweenBlocks = 200;
    for (var i = 0; i < allBlocks.length; i++){
        left += marginBetweenBlocks * i;
        allBlocks[i].$elem[0].style.top = top + 'px';
        allBlocks[i].$elem[0].style.left = left + 'px';
    }
}

function arrangeColumn (allBlocks){
    for (var i = 0; i < allBlocks.length; i++){
        if (allBlocks[i].$elem[0].lock != 'locked'){
            allBlocks[i].$elem[0].style.left = allBlocks[0].$elem[0].style.left;
            if (i != 0){
                var prevBlock = allBlocks[i-1].$elem[0].style.top;
                var styleTop = parseInt(allBlocks[i].$elem[0].style.top) + 200 + parseInt(prevBlock);
                console.info(styleTop);
                allBlocks[i].$elem[0].style.top = styleTop + 'px';
            }
        }
    }
}

function allStack (allBlocks){
    for (var i = 0; i < allBlocks.length; i++) {
        if (allBlocks[i].$elem[0].lock != 'locked') {
            allBlocks[i].$elem[0].style.left = allBlocks[0].$elem[0].style.left;
            allBlocks[i].$elem[0].style.top = allBlocks[0].$elem[0].style.top;
        }
    }
}

function removeAllBlocks (allBlocks){
    for (var i = 0; i < allBlocks.length; i++) {
        if (allBlocks[i].$elem[0].lock != 'locked') {
            allBlocks[i].removeObj();
            blockList = null;
        }
    }
}