Crumbl 
-----

A tiny Javascript framework that focuses on separation of content, presentation and logic.

Crumbl was made to be as small as possible by leaving all the unnecessary functionality behind. Using [Dustin Diaz's qwery](https://github.com/ded/qwery), Crumbl allows you to select the Document Object Model (DOM) elements you want to work with quickly and easily. Crumbl sticks to the very essence of Javascript and leaves CSS property--manipulation and transitions for CSS.

##Documentation

Crumbl can help you select and create DOM elements, manipulate the DOM, manage element classNames, manage element attributes, manage events and set element values inside HTML.

###Selecting elements

####Querying elements

When you pass a CSS selector to Crumbl, you get a Crumbl object back with all nodes that match your selector.

``` js
// basic
$('#foo'); //ID
$('.bar'); //class
$('a#foo.bar'); //combination of tag, ID and class
$('div, p'); //combo

// attributes
$('#foo a[href]'); //has attribute
$('#foo a[href=bar]'); //attribute values
$('#foo a[lang|=en]'); //subcodes
$('#foo a[title~=hello]'); //attribute contains
$('#foo a[href^="http://"]'); //attribute starts with
$('#foo a[href$=com]'); //attribute ends with
$('#foo a[href*=twitter]'); //attribute wildcards

// descendants
$('#foo a'); //all descendants
$('ul#list > li'); //direct children

// siblings
$('span ~ strong'); //all adjacent
$('p + p {}'); //immediate adjacent
```


####Contexts

Each query can optionally pass in a context

``` js
$('div', node); // existing DOM node or...
$('div', '#foo'); // another query
```


###Page-ready detection

*Detect when the DOM is ready for manipulation and fire a callback when this happens.*

**Expects:** A callback to be executed when the DOM is ready

**Returns:** null

``` js
$(function(){
	//all kinds of magic
});
```


###Creating DOM elements

*Creates a DOM element from the given markup*

**Expects:** A piece of valid markup

**Returns:** Crumbl with the given markup as a node

``` js
$('<div><p><a href="http://google.com"></a></p></div>');
```


###Execute a function on the nodes list

*Executes a function on every element in the nodes list*

**Expects:** A function to be executed on every element

**Returns:** Crumbl

``` js
$('div').each(function(n) {
	n.scrollTop = n.scrollHeight - n.clientHeight;
});
```


###Finding children

*Finds all descendants of elements in the nodes list that match a given selector*

**Expects:** A CSS selector

**Returns:** Crumbl with a new nodes list

``` js
$('div').find('p');
```


###Traversing

*Quickly adjusts the nodes list to contain immediate relatives of the elements in the nodes list*

**Expects:** No parameters

**Returns:** Crumbl with a new nodes list

Returns all direct children of each element in the nodes list
``` js
$('div').children();
```

Returns all siblings of each element in the nodes list
``` js
$('div').siblings();
```

Returns the parent of each element in the nodes list
``` js
$('div').parent();
```

Returns the next sibling of each element in the nodes list
``` js
$('div').next();
```

Returns the previous sibling of each element in the nodes list
``` js
$('div').prev();
```


###Cloning elements

*Clones all elements in the nodes list*

**Expects:** A Boolean value that indicates whether or not the descendants of each element should also be cloned. Default: true

**Returns:** Crumbl with a new nodes list

``` js
$('div').clone();
```


###Appending elements

*Inserts a given element after all children of each element in the nodes list.*

**Expects:** An HTML element

**Returns:** Crumbl

``` js
var p = $('<p>An exciting paragraph</p>');
$('div').append(p);
```


###Prepending elements

*Prepends a given element before all children of each element in the nodes list.*

**Expects:** An HTML element

**Returns:** Crumbl

``` js
var p = $('<p>A very exciting paragraph</p>');
$('div').prepend(p);
```


###Empty elements

*Removes all elements from each element in the nodes list*

**Expects:** No parameters

**Returns:** Crumbl

``` js
$('div').empty();
```


###Remove elements

*Removes each element in the nodes list from the DOM*

**Expects:** No parameters

**Returns:** Crumbl

``` js
$('div p').remove();
```


###Class management

*Lets you apply, remove, toggle and check for classes on each element in the nodes list*

**Expects:** One or more space-seperated classes

**Returns:** Crumbl, except for .hasClass(), which returns a Boolean value

####Adds a class to each element in the nodes list
``` js
$('div').addClass('hidden');
```

####Removes a class from each element in the nodes list
``` js
$('div').removeClass('hidden');
```

####Toggles a class on each element in the nodes list
``` js
$('div').toggleClass('hidden');
```

####Checks for a given class on each element in the nodes list
``` js
$('div').hasClass('hidden');
```


###Get/Set all HTML of an element

*Gets or sets all HTML of each element in the nodes list*

**Expects:** A string of valid HTML when setting

**Returns:** An array with an HTML string for each element in the nodes list / Crumbl

``` js
var divHTML = $('div').html();
$('div').html('<p>A very exciting paragraph</p>');
```


###Attribute management

####Adds and updates attributes

*Gets or sets the given attribute on each element in the nodes list.*

**Expects:** An attribute name [and value when setting]

**Returns:** An array with a value for a given attribute for each element in the nodes list / Crumbl

``` js
var titles = $('div').attr('title');
$('div').attr('title', 'My contact information');
```

####Removing attributes

*Removes a given attribute from each element in the nodes list*

**Expects:** An attribute name

**Returns:** Crumbl

``` js
$('input').removeAttr('disabled');
```


###Event management

*Adds or removes an event handler from each element in the nodes list*

**Expects:** An event name and when adding, a callback function

**Returns:** Crumbl

``` js
$('button').on('click', function(e){
	e.preventDefault();
	alert('Hooray!');
});
$('button').off('click');
```


###Node iteration

*Executes a function on every element in the nodes list*

**Expects:** A function with one parameter (the node)

**Returns:** Crumbl

``` js
$('button').each(function(n){
	n.style.backgroundColor = 'red';
});
```