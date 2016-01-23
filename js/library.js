/**
 * Created by oleksandr on 23.01.16.
 */
function render(option) {
    // render block and insert it to parent block
    if (option.$parent == undefined || option.top == undefined || option.left == undefined){
        alert('Відсутній обовязковий параметр! Виконання припинено.');
        return;
    }
    if (option.title == undefined){
        option.title = 'Заголовок відсутній.';
    }
    if (option.backgroundColor == undefined){
        option.backgroundColor = 'grey';
    }

    var $elem = $( "<div/>", {
        id: option.ID,
        "class": "",
        title: option.title
    });

    $elem[0].style.backgroundColor = option.backgroundColor;
    $elem[0].style.left = option.left + 'px';
    $elem[0].style.top = option.top + 'px';
    $elem[0].style.margin = '10px';
    $elem[0].style.padding = '5px';
    $elem[0].style.position = 'absolute';
    $elem[0].style.height = option.height + 'px';
    $elem[0].style.width = option.width + 'px';

    console.log($elem);

    option.$parent.append($elem);
}