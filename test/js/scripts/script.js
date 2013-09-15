/*
Author: Able Sense Media
Web: ablesense.com
Date of creation: 01/04/2013
*/

$(function(){
	///////////// Event Handlers ///////////
	var testbutton = $('.event-handlers .lab button'),
		attach = $('.event-handlers .attach'),
		detach = $('.event-handlers .detach');

	attach.on('click', function(){
		testbutton.on('click', function(){
			console.log('Button was pressed.');
		});
		testbutton.val('Button that does something');
		console.log('Event Attached');
	});

	detach.on('click', function(){
		testbutton.off('click');
		testbutton.val('Button that doesn\'t do anything');
		console.log('Event Detached');
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
		console.log('Paragraph class: ' + classes);
	});

	remove.on('click', function(){
		testp.removeClass(colorradio.val());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});
		console.log('Paragraph class: ' + classes);
	});

	toggle.on('click', function(){
		testp.toggleClass(colorradio.val());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});
		console.log('Paragraph class: ' + classes);
	});

	has.on('click', function(){
		if(testp.hasClass(colorradio.val())){
			console.log('Yes, the paragraph has the "' + colorradio.val() + '" class.');
		}else{
			console.log('No, the paragraph does not have the "' + colorradio.val() + '" class.');
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
		console.log('Next Element Highlighted');
	});

	previous.on('click', function(){
		source.prev().addClass('highlighted');
		console.log('Previous Element Highlighted');
	});

	siblings.on('click', function(){
		source.siblings().addClass('highlighted');
		console.log('Sibling Elements Highlighted');
	});

	parent.on('click', function(){
		source.parent().addClass('highlighted');
		console.log('Parent Element Highlighted');
	});

	children.on('click', function(){
		source.children().addClass('highlighted');
		console.log('Child Elements Highlighted');
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
		console.log('First Element Highlighted');
	});

	last.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('last').addClass('highlighted');
		console.log('Last Element Highlighted');
	});

	even.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('even').addClass('highlighted');
		console.log('Even Elements Highlighted');
	});

	odd.on('click', function(){
		collection = $('.filtering .lab li').removeClass('highlighted');
		collection.filter('odd').addClass('highlighted');
		console.log('Odd Elements Highlighted');
	});

	///////////// Finding ///////////
	var selected = null,
		select = $('.finding .makeselection'),
		spansindivs = $('.finding .spans'),
		redspansindivs = $('.finding .redspans');

	select.on('click', function(){
		selected = $('.finding .lab div');
		console.log('Grabbed the divs');
	});

	spansindivs.on('click', function(){
		selected.find('span').addClass('highlighted');
		console.log('Spans in divs Highlighted');
	});

	redspansindivs.on('click', function(){
		selected.find('span.red').addClass('highlighted');
		console.log('Red spans in divs Highlighted');
	});


	///////////// Creation ///////////
	var creationlab = $('.creation .lab'),
		createa = $('.creation .createa'),
		createinput = $('.creation .createinput');

	createa.on('click', function(){
		var a = $('<a href="http://google.com/">Test link to google</a>');
		creationlab.append(a);
		console.log('link created');
	});

	createinput.on('click', function(){
		var input = $('<input type="text" value="testbox" />');
		creationlab.append(input);
		console.log('input created');
	});

	///////////// Cloning ///////////
	var subjects = $('.cloning .subject'),
		clonelab = $('.cloning .lab'),
		clone = $('.cloning .clone'),
		clonedeep = $('.cloning .clonedeep');

	clone.on('click', function(){
		var clones = subjects.clone(false);
		clones.addClass('highlighted');
		clonelab.append(clones);

		console.log('Elements cloned');
	});

	clonedeep.on('click', function(){
		var clones = subjects.clone();
		clones.addClass('highlighted');
		clonelab.append(clones);
		console.log('Elements cloned deep');
	});


	///////////// DOM insertion ///////////
	var el = document.createElement('li'),
		text = document.createTextNode('New list item'),
		newli = null,
		ul = $('.append .lab ul'),
		appendli = $('.append .appendli'),
		prependli = $('.append .prependli');

	el.appendChild(text);
	newli = $(el);

	appendli.on('click', function(){
		var clone = newli.clone();
		ul.append(clone);
		console.log('Li inserted at end of ul');
	});

	prependli.on('click', function(){
		var clone = newli.clone();
		ul.prepend(clone);
		console.log('Li inserted at beginning of ul');
	});


	///////////// Empty ///////////
	var emptylab = $('.empty .lab'),
		emptypbutton = $('.empty .emptyp'),
		emptylabbutton = $('.empty .emptylab');

	emptypbutton.on('click', function(){
		emptylab.find('p').empty();
		console.log('paragraph was emptied');
	});

	emptylabbutton.on('click', function(){
		emptylab.empty();
		console.log('Lab area was emptied');
	});

	///////////// Remove ///////////
	var removelab = $('.remove .lab'),
		removepbutton = $('.remove .removep'),
		removeoddlisbutton = $('.remove .removeoddlis');

	removeoddlisbutton.on('click', function(){
		removelab.find('li').filter('odd').remove(); //not working
		console.log('Odd list items were removed');
	});

	removepbutton.on('click', function(){
		removelab.find('p').remove();
		console.log('paragraph was removed');
	});

	///////////// Get/Set HTML ///////////
	var htmllab = $('.html .lab'),
		htmlnewlibutton = $('.html .newli'),
		htmlgethtmlbutton = $('.html .gethtml');

	htmlnewlibutton.on('click', function(){
		var lis = '<li>1</li><li>2</li><li>3</li><li>4</li>';
		htmllab.find('ul').html(lis);
		console.log('list items were changed');
	});

	htmlgethtmlbutton.on('click', function(){
		var h = htmllab.find('p a').html();
		console.log('paragraph link html: ' + h);
	});

	///////////// Attributes ///////////
	var attrlab = $('.attr .lab'),
		setvaluebutton = $('.attr .setvalue'),
		disableallbutton = $('.attr .disableall'),
		enablebutton = $('.attr .enable'),
		getemailbutton = $('.attr .getemail');

	setvaluebutton.on('click', function(){
		attrlab.find('input:first-child').attr('value', 'Kitten');
		console.log('New value of first box set');
	});

	disableallbutton.on('click', function(){
		attrlab.find('input').attr('disabled', 'true');
		console.log('All boxes disabled');
	});

	enablebutton.on('click', function(){
		attrlab.find('input').removeAttr('disabled');
		console.log('All boxes enabled');
	});

	getemailbutton.on('click', function(){
		var email = attrlab.find('input[type="email').attr('value');
		console.log('The email address in the email box: ' + email);
	});

	///////////// VALUES ///////////
	var controls = $('.val .lab *'),
		testform = $('#testform'),
		setvaluesbutton = $('.val .setvalues'),
		getvaluesbutton = $('.val .getvalues');

	setvaluesbutton.on('click', function(){
		testform.find('#tomatoes').attr('checked', true); //is actually an attr but is needed to get values
		testform.find('#checky').attr('checked', true); //is actually an attr but is needed to get values

		testform.find('#name').val('Glenn Naessens');
		testform.find('#email').val('hello@glennnaessens.com');
		testform.find('#password').val('hardtoguess');
		testform.find('#testselect').val(3);
		testform.find('#submit').val('Submitted');
	});

	getvaluesbutton.on('click', function(){
		console.log(controls.val());
	});
});
