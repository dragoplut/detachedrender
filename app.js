/**
 * Created by oleksandr on 22.01.16.
 */

/**
 * Listen click event of any button with id "buttonRender"
 * takes left & top value's from input's with id: "inputLeft", "inputTop"
 * call function renderBlock(param, param)
 */
document.getElementById('buttonRender').addEventListener('click', function(){
    var leftParam = document.getElementById('inputLeft').value + 'px';
    var topParam = document.getElementById('inputTop').value + 'px';
    renderBlock(leftParam, topParam);
});

var count = 1;

/**
 * Render new div's with outside style param's
 * <div id = "tempDiv"></div> required
 * @param leftParam
 * @param topParam
 */
function renderBlock(leftParam, topParam){
    console.log(leftParam, ' - left, ', topParam, ' - top');
    var block = '<div id="' + count + '"></div>';
    $('#tempDiv').append(block);
    var newDiv = document.getElementById(count);
    newDiv.style.position = 'absolute';
    newDiv.style.left = leftParam;
    newDiv.style.top = topParam;
    newDiv.style.border = '3px outset gray';
    newDiv.style.height = '100px';
    newDiv.style.width = '100px';
    count += 1;
    console.log('<div> ', count-1, ' done!')
}