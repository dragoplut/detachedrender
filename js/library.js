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
        //id: option.ID,
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

    this.locked = false;


    var elemTemplate = '<div class="btn-group" style="float: right">'+
            '<button class="btn-lock btn btn-xs btn-default" title="lock" value="unlock">'+
                '<i class="fa fa-unlock"></i>'+
            '</button>'+
            '<button class="btn-move btn btn-xs btn-default" title="move">'+
                '<i class="fa fa-arrows"></i>'+
            '</button>'+
            '<button class="btn-remove btn btn-xs btn-default" title="remove">'+
                '<i class="fa fa-close"></i>'+
            '</button>'+
        '</div>'+
        '<div class="container-fluid" style="text-align: center">'+
            '<h7 class="panel-title">{{name}}</h7>'+
        '</div>'+
        '<div class="btn-group btn-clone-center">'+
            '<button class="btn-clone btn btn-sm btn-default" title="clone">Clone '+
                '<i class="fa fa-clone"></i>'+
            '</button>'+
        '</div>'+
        '<div class="btn-group move-arrows">'+
            '<button class="btn-left btn btn-sm btn-default" title="left">'+
                '<i class="fa fa-arrow-left"></i>'+
            '</button>'+
            '<button class="btn-right btn btn-sm btn-default" title="right">'+
                '<i class="fa fa-arrow-right"></i>'+
            '</button>'+
            '<button class="btn-top btn btn-sm btn-default" title="up">'+
                '<i class="fa fa-arrow-up"></i>'+
            '</button>'+
            '<button class="btn-bottom btn btn-sm btn-default" title="down">'+
                '<i class="fa fa-arrow-down"></i>'+
            '</button>'+
        '</div>';

    var template = Handlebars.compile(elemTemplate);

    var html = template({name: this.option.title});

    this.$elem.append(html);

    option.$parent.append(this.$elem[0]);

    var self = this;

    $('.btn-clone', this.$elem).on('click', function () {
        self.clone();
    });

    $('.btn-lock', this.$elem).on('click', function () {
        self.lock();
    });

    $('.btn-move', this.$elem).on('mousedown', function (e) {
        self.move(e);
    });

    $('.btn-left', this.$elem).on('click', function () {
        self.left();
    });

    $('.btn-right', this.$elem).on('click', function () {
        self.right();
    });

    $('.btn-top', this.$elem).on('click', function () {
        self.top();
    });

    $('.btn-bottom', this.$elem).on('click', function () {
        self.bottom();
    });

    $('.btn-remove', this.$elem).on('click', function () {
        self.removeObj();
    });


};

Block.prototype.clone = function(){
    var lastPosition = parseInt(blockList.length) - 1;
    var newId = parseInt(blockList[lastPosition].option.ID) + 1;
    blockList.push(new Block(this.option));
    var newBlock = blockList[lastPosition + 1];
    newBlock.option.ID = newId;
    newBlock.$elem[0].style.top = (parseInt(this.$elem.position().top) + parseInt(this.$elem[0].style.height)) + 'px';
    console.info(blockList);
};

Block.prototype.lock = function() {
    var iLock = '';
    console.info(this.locked);
    if (this.locked){
        console.info('unlock');
        iLock = '<i class="fa fa-unlock"></i>';
        this.locked = false;
        $('.btn-lock', this.$elem).html(iLock);
    }else if (!this.locked){
        console.info('lock');
        iLock = '<i class="fa fa-lock"></i>';
        this.locked = true;
        $('.btn-lock', this.$elem).html(iLock);
    }
};

Block.prototype.move = function(e) {
    console.info(e.clientX, e.clientY);
    if (!this.locked) {
        this.$elem[0].style.left = e.clientX + 'px';
        this.$elem[0].style.top = e.clientY + 'px';
    }
};

Block.prototype.left = function() {
    if (!this.locked) {
        var styleLeft = this.$elem.position().left - 10;
        this.$elem[0].style.left = styleLeft + 'px';
    }
};

Block.prototype.right = function() {
    if (!this.locked) {
        var styleRight = this.$elem.position().left + 10;
        this.$elem[0].style.left = styleRight + 'px';
    }
};

Block.prototype.top = function() {
    if (!this.locked) {
        var styleTop = this.$elem.position().top - 10;
        this.$elem[0].style.top = styleTop + 'px';
    }
};

Block.prototype.bottom = function() {
    if (!this.locked) {
        var styleBottom = this.$elem.position().top + 10;
        this.$elem[0].style.top = styleBottom + 'px';
    }
};

Block.prototype.removeObj = function() {
    if (!this.locked) {
        this.$elem[0].remove();
        for (var i = 0; i < blockList.length; i++){
            if (this.option.ID == blockList[i].option.ID){
                blockList.splice(i, 1);
            }
        }
        console.info(this.option.ID);
        console.info(blockList);
    }
};