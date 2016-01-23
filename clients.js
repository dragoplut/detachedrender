var clients = [];
var fnASC = 'fnASC';
var fnDESC = 'fnDESC';
var lnASC = 'lnASC';
var lnDESC = 'lnDESC';
var numOnPage = 7;
var pageValue = 0;
var sortDirect = 'lnASC';
var searchOption = 'lastName';

$(function(){
    sortClient();
});

function clientsLoaded(data){
    clients = data;
    var baseArr = renderHTML(clients);
    var positParams = {
        position: 'relative',
        left: '10px',
        top: '10px',
        border: '3px outset gray',
        height: '300px',
        width: '300px'
    };
    renderBlock(positParams, baseArr);
}

function renderHTML(clients){
    var baseArr = [];
    var blocks = [];
    var idArr = [];
    for (var i = 0; i < clients.length; i++){
        var template = '<div class="container fixMaxWith" id="' + clients[i].id + '"><img class="bigImg modal-content" src="' + clients[i].image + '"><h4 class="text-center">' + clients[i].lastName + ' ' + clients[i].firstName + ' ' + clients[i].middleName + '</h4><h5>Телефон: ' + clients[i].phone + '</h5><h5>Е-мейл: ' + clients[i].email + '</h5><h5>Адресса: ' + clients[i].address + '</h5><h5>Компанія: ' + clients[i].company + '</h5><br><p>Коротко про себе: ' + clients[i].description + '</p></div>';
        blocks.push(template);
        idArr.push(clients[i].id);
    }
    baseArr.push(blocks, idArr);
    console.log(baseArr);
    return baseArr;
}

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
                clientsLoaded(result);
            }
        }
    })
}