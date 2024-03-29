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
		testbutton.html('Button that does something');

		console.log('Event Attached');
		console.log('Affected elements: ' + testbutton.count);
		console.warn(testbutton);
	});

	detach.on('click', function(){
		testbutton.off('click');
		testbutton.html('Button that doesn\'t do anything');

		console.log('Event Detached');
		console.log('Affected elements: ' + testbutton.count);
		console.warn(testbutton);
	});

	///////////// Class Handlers ///////////
	var testp = $('.class-handlers p'),
		colorradio = $('.class-handlers input[name=color]'),
		add = $('.class-handlers .add'),
		remove = $('.class-handlers .remove'),
		toggle = $('.class-handlers .toggle'),
		has = $('.class-handlers .has');

	function getSelectedClass(){
		if(colorradio.nodes[0].checked){
			return 'red';
		}
		return 'green';
	}

	add.on('click', function(){
		testp.addClass(getSelectedClass());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});

		console.log('Paragraph class: ' + classes);
		console.log('Affected elements: ' + testp.count);
		console.warn(testp);
	});

	remove.on('click', function(){
		testp.removeClass(getSelectedClass());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});

		console.log('Paragraph class: ' + classes);
		console.log('Affected elements: ' + testp.count);
		console.warn(testp);
	});

	toggle.on('click', function(){
		testp.toggleClass(getSelectedClass());
		var classes = '';
		testp.each(function(el){
			classes += ' ' + el.className;
		});

		console.log('Paragraph class: ' + classes);
		console.log('Affected elements: ' + testp.count);
		console.warn(testp);
	});

	has.on('click', function(){
		console.log(testp.hasClass(getSelectedClass()));
		if(testp.hasClass(getSelectedClass())){
			console.log('Yes, the paragraph has the "' + getSelectedClass() + '" class.');
		}else{
			console.log('No, the paragraph does not have the "' + getSelectedClass() + '" class.');
		}
		console.log('Affected elements: ' + testp.count);
		console.warn(testp);
	});

	///////////// Traversing ///////////
	var source = $('.traversing .source'),
		next = $('.traversing .next'),
		previous = $('.traversing .previous'),
		siblings = $('.traversing .siblings'),
		parent = $('.traversing .parent'),
		children = $('.traversing .children');

	next.on('click', function(){
		var affected = source.next().addClass('highlighted');

		console.log('Next Element Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	previous.on('click', function(){
		var affected = source.prev().addClass('highlighted');

		console.log('Previous Element Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	siblings.on('click', function(){
		var affected = source.siblings().addClass('highlighted');

		console.log('Sibling Elements Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	parent.on('click', function(){
		var affected = source.parent().addClass('highlighted');

		console.log('Parent Element Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	children.on('click', function(){
		var affected = source.children().addClass('highlighted');

		console.log('Child Elements Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	///////////// Finding ///////////
	var selected = null,
		select = $('.finding .makeselection'),
		spansindivs = $('.finding .spans'),
		redspansindivs = $('.finding .redspans');

	select.on('click', function(){
		selected = $('.finding .lab div');

		console.log('Grabbed the divs');
		console.log('Affected elements: ' + selected.count);
		console.warn(selected);
	});

	spansindivs.on('click', function(){
		var affected = selected.find('span').addClass('highlighted');

		console.log('Spans in divs Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	redspansindivs.on('click', function(){
		var affected = selected.find('span.red').addClass('highlighted');

		console.log('Red spans in divs Highlighted');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});


	///////////// Creation ///////////
	var creationlab = $('.creation .lab'),
		createa = $('.creation .createa'),
		createinput = $('.creation .createinput');

	createa.on('click', function(){
		var a = $('<a href="http://google.com/">Test link to google</a>');
		creationlab.append(a);

		console.log('link created');
		console.log('Affected elements: ' + a.count);
		console.warn(a);
	});

	createinput.on('click', function(){
		var input = $('<input type="text" value="testbox" />');
		creationlab.append(input);

		console.log('input created');
		console.log('Affected elements: ' + input.count);
		console.warn(input);
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
		console.log('Affected elements: ' + clones.count);
		console.warn(clones);
	});

	clonedeep.on('click', function(){
		var clones = subjects.clone();
		clones.addClass('highlighted');
		clonelab.append(clones);

		console.log('Elements cloned deep');
		console.log('Affected elements: ' + clones.count);
		console.warn(clones);
	});


	///////////// DOM insertion ///////////
	var el = document.createElement('li'),
		text = document.createTextNode('New list item'),
		newli = null,
		ul = $('.append .lab > ul'),
		appendli = $('.append .appendli'),
		prependli = $('.append .prependli');

	el.appendChild(text);
	newli = $(el);

	appendli.on('click', function(){
		var clone = newli.clone();
		ul.append(clone);

		console.log('Li inserted at end of ul');
		console.log('Affected elements: ' + clone.count);
		console.warn(clone);
	});

	prependli.on('click', function(){
		var clone = newli.clone();
		ul.prepend(clone);

		console.log('Li inserted at beginning of ul');
		console.log('Affected elements: ' + clone.count);
		console.warn(clone);
	});


	///////////// Empty ///////////
	var emptylab = $('.empty .lab'),
		emptypbutton = $('.empty .emptyp'),
		emptylabbutton = $('.empty .emptylab');

	emptypbutton.on('click', function(){
		var affected = emptylab.find('p').empty();

		console.log('paragraph was emptied');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	emptylabbutton.on('click', function(){
		var affected =  emptylab.empty();

		console.log('Lab area was emptied');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	///////////// Remove ///////////
	var removelab = $('.remove .lab'),
		removepbutton = $('.remove .removep'),
		removeoddlisbutton = $('.remove .removeoddlis');

	removeoddlisbutton.on('click', function(){
		var affected = removelab.find('li:nth-child(odd)').remove();

		console.log('Odd list items were removed');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	removepbutton.on('click', function(){
		var affected = removelab.find('p').remove();

		console.log('paragraph was removed');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	///////////// Get/Set HTML ///////////
	var htmllab = $('.html .lab'),
		htmlnewlibutton = $('.html .newli'),
		htmlgethtmlbutton = $('.html .gethtml');

	htmlnewlibutton.on('click', function(){
		var lis = '<li>1</li><li>2</li><li>3</li><li>4</li>';
		var affected = htmllab.find('ul').html(lis);

		console.log('list items were changed');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	htmlgethtmlbutton.on('click', function(){
		var h = htmllab.find('p a').html();

		console.log('paragraph link html: ' + h);
		console.log('Affected elements: ' + h.count);
		console.warn(h);
	});

	///////////// Attributes ///////////
	var attrlab = $('.attr .lab'),
		setvaluebutton = $('.attr .setvalue'),
		disableallbutton = $('.attr .disableall'),
		enablebutton = $('.attr .enable'),
		getemailbutton = $('.attr .getemail');

	setvaluebutton.on('click', function(){
		var affected = attrlab.find('input:first-child').attr('value', 'Kitten');

		console.log('New value of first box set');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	disableallbutton.on('click', function(){
		var affected = attrlab.find('input').attr('disabled', 'true');

		console.log('All boxes disabled');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	enablebutton.on('click', function(){
		var affected = attrlab.find('input').removeAttr('disabled');

		console.log('All boxes enabled');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	getemailbutton.on('click', function(){
		var email = attrlab.find('input#email');

		//console.clear();
		console.log('The email address in the email box: ' + email.attr('value'));
		console.log('Affected elements: ' + email.count);
		console.warn(email);
	});

	///////////// Looping ///////////
	var eachlab = $('.each .lab'),
		loopone = $('.each .loopone'),
		looptwo = $('.each .looptwo');

	loopone.on('click', function(){
		var affected = eachlab.children().each(function(n){
			n.style.backgroundColor = 'red';
		});

		console.log('All elements are now red');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	looptwo.on('click', function(){
		var affected = eachlab.children().each(function(n){
			console.log(n);
			var c = $(n).clone();
			eachlab.append(c);
		});

		console.log('All elements have been cloned');
		console.log('Affected elements: ' + affected.count);
		console.warn(affected);
	});

	/////////////////////////////////
	////////////// Crumbs ///////////
	/////////////////////////////////

	////////////// Ajax /////////////
	var ajaxlab = $('.ajax .lab'),
		ajaxrequest = $('.ajax .ajaxrequest'),
		ajaxpost = $('.ajax .ajaxpost'),
		ajaxjsonp = $('.ajax .ajaxjsonp');

	ajaxrequest.on('click', function(){
		console.log('Ajax Request Sent');
		$.ajax('resources/ajax.php', function(data, status) {
			console.log('Ajax GET came back with status code: ' + status);
			ajaxlab.find('.receiver').html(data);
		});
	});

	ajaxpost.on('click', function(){
		console.log('Ajax Post Sent');
		$.ajax('resources/ajax.php', function(data, status) {
			console.log('Ajax POST came back with status code: ' + status);
			ajaxlab.find('.receiver').html(data);
		}, 'POST', true, 'postvalue=' + $('.postvalue').only().value);
	});

	ajaxjsonp.on('click', function(){
		console.log('Ajax JSONP Sent');
		$.ajax('http://dev.crumbljs.com/jsonp.php?message=' + $('.postvalue').only().value, function(data, status) {
			console.log('Ajax JSONP came back with status code: ' + status);
			ajaxlab.find('.receiver').html(data.message);
		});
	});
});
