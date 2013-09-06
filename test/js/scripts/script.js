/*
Author: Able Sense Media
Web: ablesense.com
Date of creation: 01/04/2013
*/

var APP = function () {
	var me = {},
		console = $('#console');

	me.report = function(val){
		console.val(console.val() + '\n' + val);
		console.nodes[0].scrollTop = console.nodes[0].scrollHeight;
	};

	return me;
};

$(function(){
	var lab = new APP();

	///////////// Event Handlers ///////////
	var testbutton = $('.event-handlers .lab button'),
		attach = $('.event-handlers .attach'),
		detach = $('.event-handlers .detach');
	// console.log(testbutton);
	// console.log(attach);
	attach.on('click', function(){
		testbutton.on('click', function(){
			lab.report('Button was pressed.');
		});
		testbutton.val('Button that does something');
		lab.report('Event Attached');
	});

	detach.on('click', function(){
		testbutton.off('click');
		testbutton.val('Button that doesn\'t do anything');
		lab.report('Event Detached');
	});

	///////////// Class Handlers ///////////
	var testp = $('.class-handlers p'),
		colorradio = $('.class-handlers input[name=color]'),
		add = $('.class-handlers .add'),
		remove = $('.class-handlers .remove'),
		toggle = $('.class-handlers .toggle'),
		has = $('.class-handlers .has');

	add.on('click', function(){
		testp.addClass(colorradio.val());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});
		lab.report('Paragraph class: ' + classes);
	});

	remove.on('click', function(){
		testp.removeClass(colorradio.val());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});
		lab.report('Paragraph class: ' + classes);
	});

	toggle.on('click', function(){
		testp.toggleClass(colorradio.val());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});
		lab.report('Paragraph class: ' + classes);
	});

	has.on('click', function(){
		if(testp.hasClass(colorradio.val())){
			lab.report('Yes, the paragraph has the "' + colorradio.val() + '" class.');
		}else{
			lab.report('No, the paragraph does not have the "' + colorradio.val() + '" class.');
		}
	});

	///////////// Traversing ///////////
	var source = $('.traversing .source'),
		next = $('.traversing .next'),
		previous = $('.traversing .previous'),
		siblings = $('.traversing .siblings'),
		parent = $('.traversing .parent'),
		children = $('.traversing .children');

	next.on('click', function(){
		source.next().addClass('highlighted');
		lab.report('Next Element Highlighted');
	});

	previous.on('click', function(){
		source.previous().addClass('highlighted');
		lab.report('Previous Element Highlighted');
	});

	siblings.on('click', function(){
		source.siblings().addClass('highlighted');
		lab.report('Sibling Elements Highlighted');
	});

	parent.on('click', function(){
		source.parent().addClass('highlighted');
		lab.report('Parent Element Highlighted');
	});

	children.on('click', function(){
		source.children().addClass('highlighted');
		lab.report('Child Elements Highlighted');
	});


	///////////// Filtering ///////////
	var collection = $('.filtering .lab li'),
		first = $('.filtering .first'),
		last = $('.filtering .last'),
		even = $('.filtering .even'),
		odd = $('.filtering .odd');

	first.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('first').addClass('highlighted');
		lab.report('First Element Highlighted');
	});

	last.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('last').addClass('highlighted');
		lab.report('Last Element Highlighted');
	});

	even.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('even').addClass('highlighted');
		lab.report('Even Elements Highlighted');
	});

	odd.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('odd').addClass('highlighted');
		lab.report('Odd Elements Highlighted');
	});

	///////////// Finding ///////////
	var selected = null,
		select = $('.finding .makeselection'),
		spansindivs = $('.finding .spans'),
		redspansindivs = $('.finding .redspans');

	select.on('click', function(){
		selected = $('.finding .lab div');
		lab.report('Grabbed the divs');
	});

	spansindivs.on('click', function(){
		selected.find('span').addClass('highlighted');
		lab.report('Spans in divs Highlighted');
	});

	redspansindivs.on('click', function(){
		selected.find('span.red').addClass('highlighted');
		lab.report('Red spans in divs Highlighted');
	});
});
