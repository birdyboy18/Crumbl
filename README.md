<h1>Crumbl</h1>

<p>A tiny Javascript framework that focusses on separation of content, presentation and logic.</p>

<p>Crumbl was written to be as small as possible by leaving all the unnecessary functionality behind. Using <a href="https://github.com/ded/qwery">Dustin Diaz's qwery</a>, Crumbl allows you to select the DOM elements you want to work with fast and easy. Crumbl aims to stick to the very essence of what Javascript is for. CSS property-manipulation and transitions are left for CSS to deal with.</p>

<h2>Documentation</h2>
<p>Crumbl can help you with selecting and creating DOM elements, manipulating the DOM, managing element classNames, manage element attributes, manage events and set element values and inside HTML.</p>

<h3>Selecting elements</h3>

<p><em>from qwery's GitHub page:</em></p>

<div class="highlight"><pre><span class="c">/* basic */</span>
<span class="nf">#foo</span> <span class="p">{}</span> <span class="c">/* id */</span>
<span class="nc">.bar</span> <span class="p">{}</span> <span class="c">/* class */</span>
<span class="nt">a</span><span class="nf">#foo</span><span class="nc">.bar</span> <span class="p">{}</span> <span class="c">/* element attribute combinations */</span>

<span class="c">/* attributes */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">href</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* simple */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">href</span><span class="o">=</span><span class="nt">bar</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* attribute values */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">lang</span><span class="o">|=</span><span class="nt">en</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* subcodes */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">title</span><span class="o">~=</span><span class="nt">hello</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* attribute contains */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">href</span><span class="o">^=</span><span class="s2">"http://"</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* attribute starts with */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">href</span><span class="err">$</span><span class="o">=</span><span class="nt">com</span><span class="o">]</span> <span class="p">{}</span> <span class="c">/* attribute ends with */</span>
<span class="nf">#foo</span> <span class="nt">a</span><span class="o">[</span><span class="nt">href</span><span class="o">*=</span><span class="nt">twitter</span><span class="o">]</span> <span class="c">/* {} attribute wildcards */</span>

<span class="c">/* descendants */</span>
<span class="nf">#foo</span> <span class="nt">a</span> <span class="p">{}</span> <span class="c">/* all descendants */</span>
<span class="nt">ul</span><span class="nf">#list</span> <span class="o">&gt;</span> <span class="nt">li</span> <span class="p">{}</span> <span class="c">/* direct children */</span>

<span class="c">/* siblings */</span>
<span class="nt">span</span> <span class="o">~</span> <span class="nt">strong</span> <span class="p">{}</span> <span class="c">/* all adjacent */</span>
<span class="nt">p</span> <span class="o">+</span> <span class="nt">p</span> <span class="p">{}</span> <span class="c">/* immediate adjacent */</span>

<span class="c">/* combos */</span>
<span class="nt">div</span><span class="o">,</span><span class="nt">p</span> <span class="p">{}</span>

<span class="c">/* variations */</span>
<span class="nf">#foo</span><span class="nc">.bar.baz</span> <span class="p">{}</span>
<span class="nt">div</span><span class="nf">#baz</span><span class="nc">.thunk</span> <span class="nt">a</span><span class="o">[</span><span class="nt">-data-info</span><span class="o">*=</span><span class="s2">"hello world"</span><span class="o">]</span> <span class="nt">span</span> <span class="o">+</span> <span class="nt">strong</span> <span class="p">{}</span>
<span class="nf">#thunk</span><span class="o">[</span><span class="nt">title</span><span class="err">$</span><span class="o">=</span><span class="s1">'huzza'</span><span class="o">]</span> <span class="p">{}</span>
</pre></div>

<p>Each query can optionally pass in a context</p>

<div class="highlight"><pre><span class="nx">qwery</span><span class="p">(</span><span class="s1">'div'</span><span class="p">,</span> <span class="nx">node</span><span class="p">);</span> <span class="c1">// existing DOM node or...</span>
<span class="nx">qwery</span><span class="p">(</span><span class="s1">'div'</span><span class="p">,</span> <span class="s1">'#foo'</span><span class="p">);</span> <span class="c1">// another query</span>
</pre></div>

<h3>Creating DOM elements</h3>

<p><em>Create a DOM element from the given markup.</em></p>
<p><strong>Returns:</strong> A new Crumbl object with the given markup as a node.</p>

<div class="highlight"><pre>$('<div><p><a href="http://google.com"></a></p></div>');</pre></div>
