/**
 * Processing var's
 * @type {Array}
 */
var clients = [];
var fnASC = 'fnASC';
var fnDESC = 'fnDESC';
var lnASC = 'lnASC';
var lnDESC = 'lnDESC';
var numOnPage = 7;
var pageValue = 0;
var sortDirect = 'lnASC';
var searchOption = 'lastName';

/**
 * Trigger func
 */
$(function(){
    sortClient();
});

/**
 * Render html after loading and sorting clients base
 * @param data
 */
function renderHTML(data){
    clients = data;
    var baseArr = preRender(clients);
    var positParams = {
        position: 'relative',
        left: '10px',
        top: '10px',
        border: '3px outset gray',
        height: '300px',
        width: '300px'
    };
    for (var i = 0; i < baseArr[0].blocks.length; i++) {
        renderBlock(positParams, baseArr[0].blocks[i], baseArr[1].idArr[i]);
    }
}

/**
 * Prepare arr for next processing
 * return: baseArr = [{blocks:[]},{idArr:[]}]
 * @param clients
 * @returns {Array}
 */
function preRender(clients){
    var baseArr = [];
    var tempBlocks = {blocks:[]};
    var tempIdArr = {idArr:[]};
    for (var i = 0; i < clients.length; i++){
        var template = [];
        template.push('<div class="container fixMaxWith" id="' + clients[i].id + '"><img class="bigImg modal-content" src="' + clients[i].image + '"><h4 class="text-center">' + clients[i].lastName + ' ' + clients[i].firstName + ' ' + clients[i].middleName + '</h4><h5>Телефон: ' + clients[i].phone + '</h5><h5>Е-мейл: ' + clients[i].email + '</h5><h5>Адресса: ' + clients[i].address + '</h5><h5>Компанія: ' + clients[i].company + '</h5><br><p>Коротко про себе: ' + clients[i].description + '</p></div>');
        tempBlocks.blocks.push(template);
        tempIdArr.idArr.push(clients[i].id);
    }
    baseArr.push(tempBlocks, tempIdArr);
    console.log(baseArr);
    return baseArr;
}

/**
 * Load & sort base from http://apishop.herokuapp.com/client
 * number of items set in; numOnPage, default: numOnPage = 7
 * Call: renderHTML(result)
 */
function sortClient(){
    var direction = '';
    if(sortDirect == "lnDESC"){
        direction = 'DESC';
        searchOption = 'lastName';
    }else if(sortDirect == "lnASC"){
        direction = 'ASC';
        searchOption = 'lastName';
    }else if(sortDirect == "fnDESC"){
        direction = 'DESC';
        searchOption = 'firstName';
    }else if(sortDirect == "fnASC"){
        direction = 'ASC';
        searchOption = 'firstName';
    }else{
        direction = 'ASC';
        searchOption = 'lastName';
        sortDirect = 'lnASC'
    }
    var skipInRequest =(numOnPage*(pageValue-1));
    var urlRequest = 'http://apishop.herokuapp.com/client?sort=' + searchOption + '%20' + direction + '&limit=' + numOnPage + '&skip=' + skipInRequest;
    $.ajax({
        url: urlRequest,
        success: function(result){
            if (result.length < 1){
                if (pageValue >= 1){
                    alert('Це була остання сторінка.');
                }else {
                    alert('Помилка запиту сортування.');
                }
            }else{
                renderHTML(result);
            }
        }
    })
}