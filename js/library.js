'use strict';

var Block = function(option) {

    this.option = option;

    if (option.$parent === undefined || option.top === undefined || option.left === undefined) {
        throw new Error('Necessarily parameter absent!');
    }
    if (option.title === undefined){
        this.option.title = 'No title.';
    }
    if (option.backgroundColor === undefined){
        this.option.backgroundColor = '#FFFFF0';
    }
    if (option.margin === undefined){
        this.option.margin = 10;
    }
    if (option.padding === undefined){
        this.option.padding = 5;
    }

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
    this.$elem[0].style.position = 'absolute';
    this.$elem[0].style.height = this.option.height + 'px';
    this.$elem[0].style.width = this.option.width + 'px';

    var arrowsBlock = '<div class="btn-group" style="left: 5px; top: 55px"><button class="btn-left btn btn-sm btn-default"><i class="fa fa-arrow-left"></i></button><button class="btn-right btn btn-sm btn-default"><i class="fa fa-arrow-right"></i></button><button class="btn-top btn btn-sm btn-default"><i class="fa fa-arrow-up"></i></button><button class="btn-bottom btn btn-sm btn-default"><i class="fa fa-arrow-down"></i></button></div>';
    var titleBlock = '<div class="panel-heading" style="text-align: center"><h7 class="panel-title">' + this.option.title + '</h7></div>';
    var closeBtn = '<div class="btn-group" style="float: right"><button class="btn-remove btn btn-xs btn-default"><i class="fa fa-close"></i></button></div>';

    this.$elem.append(closeBtn, titleBlock, arrowsBlock);

    option.$parent.append(this.$elem[0]);

    var self = this;

    $('.btn-left', this.$elem ).on('click', function () {
        self.left();
    });

    $('.btn-right', this.$elem ).on('click', function () {
        self.right();
    });

    $('.btn-top', this.$elem ).on('click', function () {
        self.top();
    });

    $('.btn-bottom', this.$elem ).on('click', function () {
        self.bottom();
    });

    $('.btn-remove', this.$elem ).on('click', function () {
        self.removeObj();
    });


};

Block.prototype.left = function() {
    var styleLeft = this.$elem.position().left - 10;
    this.$elem[0].style.left = styleLeft + 'px';
};

Block.prototype.right = function() {
    var styleRight = this.$elem.position().left + 10;
    this.$elem[0].style.left = styleRight + 'px';
};

Block.prototype.top = function() {
    var styleTop = this.$elem.position().top - 10;
    this.$elem[0].style.top = styleTop + 'px';
};

Block.prototype.bottom = function() {
    var styleBottom = this.$elem.position().top + 10;
    this.$elem[0].style.top = styleBottom + 'px';
};

Block.prototype.removeObj = function() {
    this.$elem[0].remove();
};
