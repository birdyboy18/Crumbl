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


	///////////// Creation ///////////
	var creationlab = $('.creation .lab'),
		createa = $('.creation .createa'),
		createinput = $('.creation .createinput');

	createa.on('click', function(){
		var a = $('<a href="http://google.com/">Test link to google</a>');
		creationlab.append(a);
		lab.report('link created');
	});

	createinput.on('click', function(){
		var input = $('<input type="text" value="testbox" />');
		creationlab.append(input);
		lab.report('input created');
	});

	///////////// Cloning ///////////
	var subjects = $('.cloning .subject'),
		clonelab = $('.creation .lab'),
		clone = $('.cloning .clone'),
		clonedeep = $('.cloning .clonedeep');

	clone.on('click', function(){
		var clones = subjects.clone();
		clones.addClass('highlighted');
		clonelab.append(clones);

		console.log(clones);

		lab.report('Elements cloned');
	});

	clonedeep.on('click', function(){
		var clones = subjects.clone(false);
		clones.addClass('highlighted');
		clonelab.append(clones);
		lab.report('Elements cloned deep');
	});


	///////////// DOM insertion ///////////
	var el = document.createElement('li'),
		text = document.createTextNode('New list item'),
		newli = null,
		ul = $('.append .lab ul'),
		appendli = $('.append .appendli'),
		prependli = $('.append .prependli');

	el.appendChild(text);
	newli = $( el);

	appendli.on('click', function(){
		var clone = newli.clone();
		ul.append(clone);
		lab.report('Li inserted at end of ul');
	});

	prependli.on('click', function(){
		ul.prepend(newli);
		lab.report('Li inserted at beginning of ul');
	});


	///////////// Empty ///////////
	var emptylab = $('.empty .lab'),
		emptypbutton = $('.empty .emptyp'),
		emptylabbutton = $('.empty .emptylab');

	emptypbutton.on('click', function(){
		emptylab.find('p').empty();
		lab.report('paragraph was emptied');
	});

	emptylabbutton.on('click', function(){
		emptylab.empty();
		lab.report('Lab area was emptied');
	});

	///////////// Remove ///////////
	var removelab = $('.remove .lab'),
		removepbutton = $('.remove .removep'),
		removeoddlisbutton = $('.remove .removeoddlis');

	removeoddlisbutton.on('click', function(){
		//removelab.find('li').filter('odd').remove(); //not working
		removelab.find('li:odd').remove();
		lab.report('Odd list items were removed');
	});

	removepbutton.on('click', function(){
		removelab.find('p').remove();
		lab.report('paragraph was removed');
	});

	///////////// Get/Set HTML ///////////
	var htmllab = $('.html .lab'),
		htmlnewlibutton = $('.html .newli'),
		htmlgethtmlbutton = $('.html .gethtml');

	htmlnewlibutton.on('click', function(){
		var lis = '<li>1</li><li>2</li><li>3</li><li>4</li>';
		htmllab.find('ul').html(lis);
		lab.report('list items were changed');
	});

	htmlgethtmlbutton.on('click', function(){
		var h = htmllab.find('p a').html();
		lab.report('paragraph link html: ' + h);
	});

	///////////// Attributes ///////////
	var attrlab = $('.attr .lab'),
		setvaluebutton = $('.attr .setvalue'),
		disableallbutton = $('.attr .disableall'),
		enablebutton = $('.attr .enable'),
		getemailbutton = $('.attr .getemail');

	setvaluebutton.on('click', function(){
		attrlab.find('input:first-child').attr('value', 'Kitten');
		lab.report('New value of first box set');
	});

	disableallbutton.on('click', function(){
		attrlab.find('input').attr('disabled', 'true');
		lab.report('All boxes disabled');
	});

	enablebutton.on('click', function(){
		attrlab.find('input').removeAttr('disabled');
		lab.report('All boxes enabled');
	});

	getemailbutton.on('click', function(){
		var email = attrlab.find('input[type="email').attr('value');
		lab.report('The email address in the email box: ' + email);
	});
});
