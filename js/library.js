'use strict';

var block = function(option) {

    if (option.$parent === undefined || option.top === undefined || option.left === undefined) {
        throw new Error('Necessarily parameter absent!');
    }

    console.info(this);
    this.option = option;
    this.option.prototype.title = 'No title.';
    this.option.prototype.backgroundColor = '#FFFFF0';
    this.option.prototype.margin = 10;
    this.option.prototype.padding = 5;
    this.option.prototype.position = 'absolute';

    this.$elem = $( "<div/>", {
        id: option.ID,
        "class": "panel panel-body",
        title: this.option.title
    });

    this.$elem[0].style.backgroundColor = this.option.backgroundColor;
    this.$elem[0].style.border = this.option.border;
    this.$elem[0].style.left = this.option.left + 'px';
    this.$elem[0].style.top = this.option.top + 'px';
    this.$elem[0].style.margin = this.option.margin + 'px';
    this.$elem[0].style.padding = this.option.padding + 'px';
    this.$elem[0].style.height = this.option.height + 'px';
    this.$elem[0].style.width = this.option.width + 'px';

    // we are going to handle click on these buttons in another way, we will use $('.btn-left', this.$elem).on()
    var arrowsBlock = '<div class="btn-group" style="left: 5px; top: 55px"><button class="btn-left btn btn-sm btn-default"><i class="fa fa-arrow-left"></i></button><button class="btn-right btn btn-sm btn-default"><i class="fa fa-arrow-right"></i></button><button class="btn-top btn btn-sm btn-default"><i class="fa fa-arrow-up"></i></button><button class="btn-bottom btn btn-sm btn-default"><i class="fa fa-arrow-down"></i></button></div>';
    var titleBlock = '<div class="panel-heading" style="text-align: center"><h7 class="panel-title">' + this.option.title + '</h7></div>';
    var closeBtn = '<div class="btn-group" style="float: right"><button class="btn-remove btn btn-xs btn-default"><i class="fa fa-close"></i></button></div>';

    this.$elem.append(closeBtn, titleBlock, arrowsBlock);
    // here we append HTML to the document
    option.$parent.append(this.$elem[0]);
    // and here we can write handlers for that buttons

    /* here we add second paramter this.$elem - it means we are going to find our button ONLY inside our block */
    /* when we use $('.btn-left') - this find ALL left buttons of ALL blocks  - but here we need to handle only OUR/current block*/
    /* Point only on button inside this.$elem HTML... - Yeah, correct */

    // here we save current 'this' to another variable (self it's just name, you can call it as you wish)
    var self = this;

    $('.btn-left', this.$elem ).on('click', function someInnerFunction() {
        // attention!
        // and here we need to call function left() and we must call this.left() BUT!
        // here 'this' !== this
        // here we located in other function someInnerFunction and this function has its own 'this'
        // that is why we can do next
        // and here we can use self insted of this
        self.left();
    });

};


//block.prototype.left = function() {
//    var styleLeft = this.$elem.position().left - 10;
//    this.$elem[0].style.left = styleLeft + 'px';
//};
//
//block.prototype.right = function() {
//    var styleRight = this.$elem.position().left + 10;
//    this.$elem[0].style.left = styleRight + 'px';
//};
//
//block.prototype.top = function() {
//    var styleTop = this.$elem.position().left + 10;
//    this.$elem[0].style.top = styleTop + 'px';
//};
//
//block.prototype.bottom = function() {
//    var styleBottom = this.$elem.position().left + 10;
//    this.$elem[0].style.top = styleBottom + 'px';
//};
//
//// This part is not finished.
//
//block.prototype.removeObj = function() {
//    this.$elem[0].ID.remove();
//    block.splice(this.$elem[0], 1, 0);
//};
