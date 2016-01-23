/**
 * Created by oleksandr on 23.01.16.
 */

/**
 * Render input param's
 * render 'arrow' & 'close' buttons
 * result: append rendered HTML obj to parent obj, destination: option.$parent
 * @param option
 */
function render(option) {
    // render block and insert it to parent block
    if (option.$parent == undefined || option.top == undefined || option.left == undefined){
        alert('Відсутній обовязковий параметр! Виконання припинено.');
        return;
    }
    if (option.title == undefined){
        option.title = 'Default.';
    }
    if (option.backgroundColor == undefined){
        option.backgroundColor = '#FFFFF0';
    }

    var $elem = $( "<div/>", {
        id: option.ID,
        "class": "panel panel-body",
        title: option.title
    });

    $elem[0].style.backgroundColor = option.backgroundColor;
    $elem[0].style.border = '1px solid black';
    $elem[0].style.left = option.left + 'px';
    $elem[0].style.top = option.top + 'px';
    $elem[0].style.margin = '10px';
    $elem[0].style.padding = '5px';
    $elem[0].style.position = 'absolute';
    $elem[0].style.height = option.height + 'px';
    $elem[0].style.width = option.width + 'px';

    var arrowsBlock = '<div class="btn-group" style="left: 5px; top: 55px"><button id="leftAr' + option.ID + '" class="btn btn-sm btn-default"><i class="fa fa-arrow-left"></i></button><button id="rightAr' + option.ID + '" class="btn btn-sm btn-default"><i class="fa fa-arrow-right"></i></button><button id="upAr' + option.ID + '" class="btn btn-sm btn-default"><i class="fa fa-arrow-up"></i></button><button id="downAr' + option.ID + '" class="btn btn-sm btn-default"><i class="fa fa-arrow-down"></i></button></div>';
    var titleBlock = '<div class="panel-heading" style="text-align: center"><h7 class="panel-title">' + option.title + '</h7></div>';
    var closeBtn = '<div class="btn-group" style="float: right"><button id="closeBtn' + option.ID + '" class="btn btn-xs btn-default"><i class="fa fa-close"></i></button></div>';
    $elem.append(closeBtn, titleBlock, arrowsBlock);

    console.log($elem);

    option.$parent.append($elem);
}

/**
 * Track's click on any point of <div id="#mainDiv"></div>
 * Parse id of <div>, parent to click'ed object.
 * Change left/top style param of 'id' holder
 * Remove html element of 'id' holder
 */
$(document).ready(function(){
    $('#mainDiv').click(function(){
        console.log(event.target.id);
        var targetId = event.target.id;
        var posit = parseInt(targetId);
        var ID = targetId.slice(targetId.indexOf(posit));
        var $elem = document.getElementById(ID);
        if (targetId.indexOf('leftAr') > -1){
            var styleLeft = parseInt($elem.style.left) - 10;
            $elem.style.left = styleLeft + 'px';
        } else if (targetId.indexOf('rightAr') > -1){
            var styleRight = parseInt($elem.style.left) + 10;
            $elem.style.left = styleRight + 'px';
        } else if (targetId.indexOf('upAr') > -1){
            var styleUp = parseInt($elem.style.top) - 10;
            $elem.style.top = styleUp + 'px';
        } else if (targetId.indexOf('downAr') > -1){
            var styleDown = parseInt($elem.style.top) + 10;
            $elem.style.top = styleDown + 'px';
        } else if (targetId.indexOf('closeBtn') > -1){
            $elem.remove();
        }
    });
});