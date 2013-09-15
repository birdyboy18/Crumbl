<h1>Crumbl</h1>

<p>A tiny Javascript framework that focusses on separation of content, presentation and logic.</p>

<p>Crumbl was written to be as small as possible by leaving all the unnecessary functionality behind. Using <a href="https://github.com/ded/qwery">Dustin Diaz's qwery</a>, Crumbl allows you to select the DOM elements you want to work with fast and easy. Crumbl aims to stick to the very essence of what Javascript is for, CSS property-manipulation and transitions are left for CSS to deal with.</p>

<h2>Documentation</h2>
<p>Crumbl can help you with selecting and creating DOM elements, manipulating the DOM, managing element classNames, manage element attributes, manage events and set element values and inside HTML.</p>

<h3>Selecting elements</h3>

<p><em>from qwery's GitHub page:</em></p>

...snippet from qwery readme

<h3>Creating DOM elements</h3>

<p><em>Create a DOM element from the given markup.</em></p>
<p><strong>Returns:</strong> A new Crumbl object with the given markup as a node.</p>

<div class="highlight"><pre>$('<div><p><a href="http://google.com"></a></p></div>');</pre></div>
