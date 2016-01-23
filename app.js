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
    //renderBlock();
});

/**
 * Render new div's with outside style param's
 * <div id = "tempDiv"></div> required in html
 * @param positParams
 * @param base
 */
function renderBlock(positParams, base){
    var baseArr = base;
    for (var i = 0; i < baseArr[0].length; i++){
        $('#tempDiv').append(baseArr[0][i]);
        var newDiv = document.getElementById(baseArr[1][i]);
        newDiv.style.position = positParams.position;
        newDiv.style.left = positParams.left;
        newDiv.style.top = positParams.top;
        newDiv.style.border = positParams.border;
        newDiv.style.height = positParams.height;
        newDiv.style.width = positParams.width;
    }
}