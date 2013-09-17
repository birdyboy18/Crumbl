Crumbl 
-----

A tiny Javascript framework that focusses on separation of content, presentation and logic.

Crumbl was written to be as small as possible by leaving all the unnecessary functionality behind. Using [Dustin Diaz's qwery](https://github.com/ded/qwery), Crumbl allows you to select the DOM elements you want to work with fast and easy. Crumbl aims to stick to the very essence of what Javascript is for, CSS property-manipulation and transitions are left for CSS to deal with.

##Documentation

Crumbl can help you with selecting and creating DOM elements, manipulating the DOM, managing element classNames, manage element attributes, manage events and set element values and inside HTML.

###Selecting elements

####Querying elements

You can pass a variety of CSS selectors to Crumbl. You get a Crumbl object back with all nodes that match your selector.

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


###Page ready detection

*Detect when the DOM is ready for manipulation and fire a callback when this happens.*
**Expects:** A callback to be executed when the DOM is ready
**Returns:** null

``` js
$(function(){
	//all kinds of magic
});
```


###Creating DOM elements

*Create a DOM element from the given markup.*
**Expects:** A piece of valid markup
**Returns:** Crumbl with the given markup as a node.

``` js
$('<div><p><a href="http://google.com"></a></p></div>');
```


###Execute a function on the nodelist

*Loop over every element in the nodelist and execute a callback on that element.*
**Expects:** A function to be executed on every element
**Returns:** Crumbl

``` js
$('div').each(function(n) {
	n.scrollTop = n.scrollHeight - n.clientHeight;
});
```


###Finding children

*Find all descendants of the elements in the nodelist that match the given selector.*
**Expects:** A CSS selector
**Returns:** Crumbl with a new nodelist

``` js
$('div').find('p');
```


###Traversing

*A fast way to adjust the nodelist to contain immediate relatives to the elements in the nodelist.*
**Expects:** No parameters
**Returns:** Crumbl with a new nodelist

Return all direct children of each element in the nodelist
``` js
$('div').children();
```

Return all siblings of each element in the nodelist
``` js
$('div').siblings();
```

Return the parent of each element in the nodelist
``` js
$('div').parent();
```

Return the next sibling of each element in the nodelist
``` js
$('div').next();
```

Return the previous sibling of each element in the nodelist
``` js
$('div').prev();
```


###Cloning

*Clone all elements in the nodelist.*
**Expects:** a boolean that indicates wether or not the descendants of each element should be cloned as well. Default: true.
**Returns:** Crumbl with a new nodelist

``` js
$('div').clone();
```


###Appending elements

*Append the given element after all children of each element in the nodelist.*
**Expects:** an HTML element
**Returns:** Crumbl

``` js
var p = $('<p>An exciting paragraph</p>');
$('div').append(p);
```


###Prepending elements

*Prepend the given element in front of all children of each element in the nodelist.*
**Expects:** an HTML element
**Returns:** Crumbl

``` js
var p = $('<p>An very exciting paragraph</p>');
$('div').prepend(p);
```
