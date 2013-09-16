Crumbl 
-----

A tiny Javascript framework that focusses on separation of content, presentation and logic.

Crumbl was written to be as small as possible by leaving all the unnecessary functionality behind. Using [Dustin Diaz's qwery](https://github.com/ded/qwery), Crumbl allows you to select the DOM elements you want to work with fast and easy. Crumbl aims to stick to the very essence of what Javascript is for, CSS property-manipulation and transitions are left for CSS to deal with.

##Documentation

Crumbl can help you with selecting and creating DOM elements, manipulating the DOM, managing element classNames, manage element attributes, manage events and set element values and inside HTML.

###Selecting elements

You can pass a variety of CSS selectors to Crumbl. You get a Crumbl object back with all nodes that match your selector.

``` js
// basic
$('#foo') //ID
$('.bar') //class
$('a#foo.bar') //combination of tag, ID and class

// attributes
#foo a[href] {} /* simple */
#foo a[href=bar] {} /* attribute values */
#foo a[lang|=en] {} /* subcodes */
#foo a[title~=hello] {} /* attribute contains */
#foo a[href^="http://"] {} /* attribute starts with */
#foo a[href$=com] {} /* attribute ends with */
#foo a[href*=twitter] /* {} attribute wildcards */

/* descendants */
#foo a {} /* all descendants */
ul#list > li {} /* direct children */

/* siblings */
span ~ strong {} /* all adjacent */
p + p {} /* immediate adjacent */

/* combos */
div,p {}

/* variations */
#foo.bar.baz {}
div#baz.thunk a[-data-info*="hello world"] span + strong {}
#thunk[title$='huzza'] {}
```

Contexts
-------
Each query can optionally pass in a context

``` js
$('div', node); // existing DOM node or...
$('div', '#foo'); // another query
```


###Creating DOM elements

<p><em>Create a DOM element from the given markup.</em></p>
<p><strong>Returns:</strong> A new Crumbl object with the given markup as a node.</p>

<div class="highlight"><pre>$('<div><p><a href="http://google.com"></a></p></div>');</pre></div>
