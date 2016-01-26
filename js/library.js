
var elements = [];

function render(option) {
    // render block and insert it to parent block
    if (option.$parent === undefined || option.top === undefined || option.left === undefined){
        throw new Error('Necessarilly parameter absent!');
    }
    if (option.backgroundColor === undefined){
        option.backgroundColor = '#FFFFF0';
    }
    if (option.margin === undefined){
        option.margin = 10;
    }
    if (option.padding === undefined){
        option.padding = 5;
    }
    if (option.title === undefined){
        option.title = 'Default.';
    }

    var $elem = $( "<div/>", {
        id: option.ID,
        "class": "panel panel-body",
        title: option.title
    });

    $elem[0].style.backgroundColor = option.backgroundColor;
    $elem[0].style.border = option.border;
    $elem[0].style.left = option.left + 'px';
    $elem[0].style.top = option.top + 'px';
    $elem[0].style.margin = option.margin + 'px';
    $elem[0].style.padding = option.padding + 'px';
    $elem[0].style.position = 'absolute';
    $elem[0].style.height = option.height + 'px';
    $elem[0].style.width = option.width + 'px';

    var arrowsBlock = '<div class="btn-group" style="left: 5px; top: 55px"><button data-id="' + option.ID + '" class="btn-left btn btn-sm btn-default"><i class="fa fa-arrow-left"></i></button><button data-id="' + option.ID + '" class="btn-right btn btn-sm btn-default"><i class="fa fa-arrow-right"></i></button><button data-id="' + option.ID + '" class="btn-up btn btn-sm btn-default"><i class="fa fa-arrow-up"></i></button><button data-id="' + option.ID + '" class="btn-bottom btn btn-sm btn-default"><i class="fa fa-arrow-down"></i></button></div>';
    var titleBlock = '<div class="panel-heading" style="text-align: center"><h7 class="panel-title">' + option.title + '</h7></div>';
    var closeBtn = '<div class="btn-group" style="float: right"><button data-id="' + option.ID + '" class="btn-remove btn btn-xs btn-default"><i class="fa fa-close"></i></button></div>';
    $elem.append(closeBtn, titleBlock, arrowsBlock);

    console.log($elem, elements[option.ID]);
    elements[option.ID] = $elem;

    option.$parent.append($elem);
}


function left(id) {
    console.info('left', id);

    var $elem = elements[id];
    var styleLeft = parseInt($elem.style.left) - 10;
    $elem.style.left = styleLeft + 'px';
}

function right(id) {
    console.info('right', id);

    var $elem = elements[id];
    var styleLeft = parseInt($elem.style.left) - 10;
    $elem.style.left = styleLeft + 'px';
}

//Changed fom 'top()' to 'up()' because of error 'top' attribute in 'render'
function up(id) {
    console.info('up', id);

    var $elem = elements[id];
    var styleLeft = parseInt($elem.style.left) - 10;
    $elem.style.left = styleLeft + 'px';
}

function bottom(id) {
    console.info('bottom', id);

    var $elem = elements[id];
    var styleLeft = parseInt($elem.style.left) - 10;
    $elem.style.left = styleLeft + 'px';
}

/**
 * Removing is not working correct after removing one element
 * Difference between obj ID in arr & obj id in HTML lead to removing wrong object!
  * @param id
 */
function remove(id) {
    console.info('remove', id);
    elements[id].remove();
    elements.splice(id, 1);
    console.info(elements, ' after remove');
}


/**
 * Track's click on any point of <div id="#mainDiv"></div>
 * Parse id of <div>, parent to click'ed object.
 * Required target id format: TTTTNNNNNN, Example: someText12345. Error if: 123some45Text
 * Required format id of <div>: NNNNNN. Exambpe: 12345
 * Change left/top style param of 'id' holder
 * Remove html element of 'id' holder
 */
$(document).ready(function(){

    $('.btn-left').on('click', function(){
        console.info('btn-left click');
        var id = this.dataset.id;
        left(id);
    });

    $('.btn-right').on('click', function(){
        console.info('btn-right click');
        var id = this.dataset.id;
        right(id);
    });

    $('.btn-top').on('click', function(){
        console.info('btn-up click');
        var id = this.dataset.id;
        up(id);
    });

    $('.btn-buttom').on('click', function(){
        console.info('btn-bottom click');
        var id = this.dataset.id;
        bottom(id);
    });

    $('.btn-remove').on('click', function(){
        console.info('btn-remove click');
        var id = this.dataset.id;
        remove(id);
    });


//     $('#mainDiv').click(function(){
//         console.log(event.target.id);
//         var targetId = event.target.id;
//         var posit = parseInt(targetId);
//         var ID = targetId.slice(targetId.indexOf(posit));
//         var $elem = document.getElementById(ID);
//         if (targetId.indexOf('leftAr') > -1){
//             var styleLeft = parseInt($elem.style.left) - 10;
//             $elem.style.left = styleLeft + 'px';
//         } else if (targetId.indexOf('rightAr') > -1){
//             var styleRight = parseInt($elem.style.left) + 10;
//             $elem.style.left = styleRight + 'px';
//         } else if (targetId.indexOf('upAr') > -1){
//             var styleUp = parseInt($elem.style.top) - 10;
//             $elem.style.top = styleUp + 'px';
//         } else if (targetId.indexOf('downAr') > -1){
//             var styleDown = parseInt($elem.style.top) + 10;
//             $elem.style.top = styleDown + 'px';
//         } else if (targetId.indexOf('closeBtn') > -1){
//             $elem.remove();
//         }
//     });
});
