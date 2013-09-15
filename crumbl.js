/*!
 * @preserve Qwery - A Blazing Fast query selector engine
 * https://github.com/ded/qwery
 * copyright Dustin Diaz 2012
 * MIT License
 */

/*!
 * @preserve Crumbl - A lightweight javascript framework
 * https://github.com/glennnaessens/crumbl
 * copyright Glenn Naessens 2013
 * MIT License
 */

(function(w, d, undefined) {
  'use strict';

  window.qwery = (function() {
    var doc = document,
      html = doc.documentElement,
      byClass = 'getElementsByClassName',
      byTag = 'getElementsByTagName',
      qSA = 'querySelectorAll',
      useNativeQSA = 'useNativeQSA',
      tagName = 'tagName',
      nodeType = 'nodeType',
      select, // main select() method, assign later
      id = /#([\w\-]+)/,
      clas = /\.[\w\-]+/g,
      idOnly = /^#([\w\-]+)$/,
      classOnly = /^\.([\w\-]+)$/,
      tagOnly = /^([\w\-]+)$/,
      tagAndOrClass = /^([\w]+)?\.([\w\-]+)$/,
      splittable = /(^|,)\s*[>~+]/,
      normalizr = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
      splitters = /[\s\>\+\~]/,
      splittersMore = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
      specialChars = /([.*+?\^=!:${}()|\[\]\/\\])/g,
      simple = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
      attr = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
      pseudo = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
      easy = new RegExp(idOnly.source + '|' + tagOnly.source + '|' + classOnly.source),
      dividers = new RegExp('(' + splitters.source + ')' + splittersMore.source, 'g'),
      tokenizr = new RegExp(splitters.source + splittersMore.source),
      chunker = new RegExp(simple.source + '(' + attr.source + ')?' + '(' + pseudo.source + ')?')

      var walker = {
        ' ': function(node) {
          return node && node !== html && node.parentNode
        },
        '>': function(node, contestant) {
          return node && node.parentNode == contestant.parentNode && node.parentNode
        },
        '~': function(node) {
          return node && node.previousSibling
        },
        '+': function(node, contestant, p1, p2) {
          if (!node) return false
          return (p1 = previous(node)) && (p2 = previous(contestant)) && p1 == p2 && p1
        }
    }

      function cache() {
        this.c = {}
      }
    cache.prototype = {
      g: function(k) {
        return this.c[k] || undefined
      },
      s: function(k, v, r) {
        v = r ? new RegExp(v) : v
        return (this.c[k] = v)
      }
    }

    var classCache = new cache(),
      cleanCache = new cache(),
      attrCache = new cache(),
      tokenCache = new cache()

      function classRegex(c) {
        return classCache.g(c) || classCache.s(c, '(^|\\s+)' + c + '(\\s+|$)', 1)
      }

      // not quite as fast as inline loops in older browsers so don't use liberally

      function each(a, fn) {
        var i = 0,
          l = a.length
        for (; i < l; i++) fn(a[i])
      }

      function flatten(ar) {
        for (var r = [], i = 0, l = ar.length; i < l; ++i) arrayLike(ar[i]) ? (r = r.concat(ar[i])) : (r[r.length] = ar[i])
        return r
      }

      function arrayify(ar) {
        var i = 0,
          l = ar.length,
          r = []
        for (; i < l; i++) r[i] = ar[i]
        return r
      }

      function previous(n) {
        while (n = n.previousSibling)
          if (n[nodeType] == 1) break;
        return n
      }

      function q(query) {
        return query.match(chunker)
      }

      // called using `this` as element and arguments from regex group results.
      // given => div.hello[title="world"]:foo('bar')
      // div.hello[title="world"]:foo('bar'), div, .hello, [title="world"], title, =, world, :foo('bar'), foo, ('bar'), bar]

      function interpret(whole, tag, idsAndClasses, wholeAttribute, attribute, qualifier, value, wholePseudo, pseudo, wholePseudoVal, pseudoVal) {
        var i, m, k, o, classes
        if (this[nodeType] !== 1) return false
        if (tag && tag !== '*' && this[tagName] && this[tagName].toLowerCase() !== tag) return false
        if (idsAndClasses && (m = idsAndClasses.match(id)) && m[1] !== this.id) return false
        if (idsAndClasses && (classes = idsAndClasses.match(clas))) {
          for (i = classes.length; i--;)
            if (!classRegex(classes[i].slice(1)).test(this.className)) return false
        }
        if (pseudo && qwery.pseudos[pseudo] && !qwery.pseudos[pseudo](this, pseudoVal)) return false
        if (wholeAttribute && !value) { // select is just for existance of attrib
          o = this.attributes
          for (k in o) {
            if (Object.prototype.hasOwnProperty.call(o, k) && (o[k].name || k) == attribute) {
              return this
            }
          }
        }
        if (wholeAttribute && !checkAttr(qualifier, getAttr(this, attribute) || '', value)) {
          // select is for attrib equality
          return false
        }
        return this
      }

      function clean(s) {
        return cleanCache.g(s) || cleanCache.s(s, s.replace(specialChars, '\\$1'))
      }

      function checkAttr(qualify, actual, val) {
        switch (qualify) {
          case '=':
            return actual == val
          case '^=':
            return actual.match(attrCache.g('^=' + val) || attrCache.s('^=' + val, '^' + clean(val), 1))
          case '$=':
            return actual.match(attrCache.g('$=' + val) || attrCache.s('$=' + val, clean(val) + '$', 1))
          case '*=':
            return actual.match(attrCache.g(val) || attrCache.s(val, clean(val), 1))
          case '~=':
            return actual.match(attrCache.g('~=' + val) || attrCache.s('~=' + val, '(?:^|\\s+)' + clean(val) + '(?:\\s+|$)', 1))
          case '|=':
            return actual.match(attrCache.g('|=' + val) || attrCache.s('|=' + val, '^' + clean(val) + '(-|$)', 1))
        }
        return 0
      }

      // given a selector, first check for simple cases then collect all base candidate matches and filter

      function _qwery(selector, _root) {
        var r = [],
          ret = [],
          i, l, m, token, tag, els, intr, item, root = _root,
          tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr)),
          dividedTokens = selector.match(dividers)

          if (!tokens.length) return r

          token = (tokens = tokens.slice(0)).pop() // copy cached tokens, take the last one
          if (tokens.length && (m = tokens[tokens.length - 1].match(idOnly))) root = byId(_root, m[1])
          if (!root) return r

          intr = q(token)
          // collect base candidates to filter
          els = root !== _root && root[nodeType] !== 9 && dividedTokens && /^[+~]$/.test(dividedTokens[dividedTokens.length - 1]) ?
            function(r) {
              while (root = root.nextSibling) {
                root[nodeType] == 1 && (intr[1] ? intr[1] == root[tagName].toLowerCase() : 1) && (r[r.length] = root)
              }
              return r
          }([]) :
            root[byTag](intr[1] || '*')
          // filter elements according to the right-most part of the selector
          for (i = 0, l = els.length; i < l; i++) {
            if (item = interpret.apply(els[i], intr)) r[r.length] = item
          }
        if (!tokens.length) return r

        // filter further according to the rest of the selector (the left side)
        each(r, function(e) {
          if (ancestorMatch(e, tokens, dividedTokens)) ret[ret.length] = e
        })
        return ret
      }

      // compare element to a selector

      function is(el, selector, root) {
        if (isNode(selector)) return el == selector
        if (arrayLike(selector)) return !!~flatten(selector).indexOf(el) // if selector is an array, is el a member?

        var selectors = selector.split(','),
          tokens, dividedTokens
        while (selector = selectors.pop()) {
          tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr))
          dividedTokens = selector.match(dividers)
          tokens = tokens.slice(0) // copy array
          if (interpret.apply(el, q(tokens.pop())) && (!tokens.length || ancestorMatch(el, tokens, dividedTokens, root))) {
            return true
          }
        }
        return false
      }

      // given elements matching the right-most part of a selector, filter out any that don't match the rest

      function ancestorMatch(el, tokens, dividedTokens, root) {
        var cand
        // recursively work backwards through the tokens and up the dom, covering all options

          function crawl(e, i, p) {
            while (p = walker[dividedTokens[i]](p, e)) {
              if (isNode(p) && (interpret.apply(p, q(tokens[i])))) {
                if (i) {
                  if (cand = crawl(p, i - 1, p)) return cand
                } else return p
              }
            }
          }
        return (cand = crawl(el, tokens.length - 1, el)) && (!root || isAncestor(cand, root))
      }

      function isNode(el, t) {
        return el && typeof el === 'object' && (t = el[nodeType]) && (t == 1 || t == 9)
      }

      function uniq(ar) {
        var a = [],
          i, j;
        o: for (i = 0; i < ar.length; ++i) {
          for (j = 0; j < a.length; ++j)
            if (a[j] == ar[i]) continue o
          a[a.length] = ar[i]
        }
        return a
      }

      function arrayLike(o) {
        return (typeof o === 'object' && isFinite(o.length))
      }

      function normalizeRoot(root) {
        if (!root) return doc
        if (typeof root == 'string') return qwery(root)[0]
        if (!root[nodeType] && arrayLike(root)) return root[0]
        return root
      }

      function byId(root, id, el) {
        // if doc, query on it, else query the parent doc or if a detached fragment rewrite the query and run on the fragment
        return root[nodeType] === 9 ? root.getElementById(id) :
          root.ownerDocument &&
          (((el = root.ownerDocument.getElementById(id)) && isAncestor(el, root) && el) ||
          (!isAncestor(root, root.ownerDocument) && select('[id="' + id + '"]', root)[0]))
      }

      function qwery(selector, _root) {
        var m, el, root = normalizeRoot(_root)

          // easy, fast cases that we can dispatch with simple DOM calls
          if (!root || !selector) return []
          if (selector === window || isNode(selector)) {
            return !_root || (selector !== window && isNode(root) && isAncestor(selector, root)) ? [selector] : []
          }
        if (selector && arrayLike(selector)) return flatten(selector)
        if (m = selector.match(easy)) {
          if (m[1]) return (el = byId(root, m[1])) ? [el] : []
          if (m[2]) return arrayify(root[byTag](m[2]))
          if (hasByClass && m[3]) return arrayify(root[byClass](m[3]))
        }

        return select(selector, root)
      }

      // where the root is not document and a relationship selector is first we have to
      // do some awkward adjustments to get it to work, even with qSA

      function collectSelector(root, collector) {
        return function(s) {
          var oid, nid
          if (splittable.test(s)) {
            if (root[nodeType] !== 9) {
              // make sure the el has an id, rewrite the query, set root to doc and run it
              if (!(nid = oid = root.getAttribute('id'))) root.setAttribute('id', nid = '__qwerymeupscotty')
              s = '[id="' + nid + '"]' + s // avoid byId and allow us to match context element
              collector(root.parentNode || root, s, true)
              oid || root.removeAttribute('id')
            }
            return;
          }
          s.length && collector(root, s, false)
        }
      }

    var isAncestor = 'compareDocumentPosition' in html ?
        function(element, container) {
          return (container.compareDocumentPosition(element) & 16) == 16
      } : 'contains' in html ?
        function(element, container) {
          container = container[nodeType] === 9 || container == window ? html : container
          return container !== element && container.contains(element)
      } :
        function(element, container) {
          while (element = element.parentNode)
            if (element === container) return 1
          return 0
      }, getAttr = function() {
        // detect buggy IE src/href getAttribute() call
        var e = doc.createElement('p')
        return ((e.innerHTML = '<a href="#x">x</a>') && e.firstChild.getAttribute('href') != '#x') ?
            function(e, a) {
              return a === 'class' ? e.className : (a === 'href' || a === 'src') ?
                e.getAttribute(a, 2) : e.getAttribute(a)
          } :
            function(e, a) {
              return e.getAttribute(a)
          }
      }(),
      hasByClass = !! doc[byClass]
      // has native qSA support
      ,
      hasQSA = doc.querySelector && doc[qSA]
      // use native qSA
      ,
      selectQSA = function(selector, root) {
        var result = [],
          ss, e
        try {
          if (root[nodeType] === 9 || !splittable.test(selector)) {
            // most work is done right here, defer to qSA
            return arrayify(root[qSA](selector))
          }
          // special case where we need the services of `collectSelector()`
          each(ss = selector.split(','), collectSelector(root, function(ctx, s) {
            e = ctx[qSA](s)
            if (e.length == 1) result[result.length] = e.item(0)
            else if (e.length) result = result.concat(arrayify(e))
          }))
          return ss.length > 1 && result.length > 1 ? uniq(result) : result
        } catch (ex) {}
        return selectNonNative(selector, root)
      }
      // no native selector support
      , selectNonNative = function(selector, root) {
        var result = [],
          items, m, i, l, r, ss
          selector = selector.replace(normalizr, '$1')
          if (m = selector.match(tagAndOrClass)) {
            r = classRegex(m[2])
            items = root[byTag](m[1] || '*')
            for (i = 0, l = items.length; i < l; i++) {
              if (r.test(items[i].className)) result[result.length] = items[i]
            }
            return result
          }
          // more complex selector, get `_qwery()` to do the work for us
        each(ss = selector.split(','), collectSelector(root, function(ctx, s, rewrite) {
          r = _qwery(s, ctx)
          for (i = 0, l = r.length; i < l; i++) {
            if (ctx[nodeType] === 9 || rewrite || isAncestor(r[i], root)) result[result.length] = r[i]
          }
        }))
        return ss.length > 1 && result.length > 1 ? uniq(result) : result
      }, configure = function(options) {
        // configNativeQSA: use fully-internal selector or native qSA where present
        if (typeof options[useNativeQSA] !== 'undefined')
          select = !options[useNativeQSA] ? selectNonNative : hasQSA ? selectQSA : selectNonNative
      }

    configure({
      useNativeQSA: true
    })

    qwery.configure = configure
    qwery.uniq = uniq
    qwery.is = is
    qwery.pseudos = {}

    return qwery
  })();

  var readyfn = [],
    loadedfn = [],
    domready = false,
    pageloaded = false;

  // Fire any function calls on ready event

  function fireReady() {
    var i;
    domready = true;

    for (i = 0; i < readyfn.length; i += 1) {
      readyfn[i]();
    }
    readyfn = [];
  }

  // Fire any function calls on loaded event

  function fireLoaded() {
    var i;
    pageloaded = true;

    // For browsers with no DOM loaded support
    if (!domready) {
      fireReady();
    }

    for (i = 0; i < loadedfn.length; i += 1) {
      loadedfn[i]();
    }
    loadedfn = [];
  }

  // Check DOM ready, page loaded
  if (d.addEventListener) {
    // Standards
    d.addEventListener('DOMContentLoaded', fireReady, false);
    w.addEventListener('load', fireLoaded, false);
  } else if (d.attachEvent) {
    // IE
    d.attachEvent('onreadystatechange', fireReady);
    // IE < 9
    w.attachEvent('onload', fireLoaded);
  } else {
    // Anything else
    w.onload = fireLoaded;
  }

  // Loop through node array
  function nodeLoop(fn, nodes) {
    var i;

    // Good idea to walk up the DOM
    for (i = nodes.length - 1; i >= 0; i -= 1) {
      fn(nodes[i]);
    }
  }

  // Handle standard method value returns
  function returnValues(values) {
    values = values.reverse();

    // Return string for singles
    if (values.length === 1) {
      values = values[0];
    }

    return values;
  }

  // Event handler
  function manageEvent(event, handler, remove, nodes) {
    nodeLoop(function(elm) {
      if (d.addEventListener) {
        if (remove) {
          elm.removeEventListener(event, elm[event], false);
        } else {
          elm.addEventListener(event, handler, false);
        }
      } else if (d.attachEvent) {
        if (remove) {
          elm.detachEvent('on' + event, elm[event]);
        } else {
          elm.attachEvent('on' + event, handler);
        }
      }

      if (remove) {
        elm[event] = null;
      } else {
        elm[event] = handler;
      }
    }, nodes);
  }

  function manageClass(classes, action, nodes) {
    var values = [],
      classarray, l, classname, search, has, i, get, item;

    if (classes) {
      // Trim any whitespace
      classarray = classes.split(/\s+/);
      l = classarray.length;

      nodeLoop(function(elm) {
        classname = elm.className;

        if (action === 'add') {
          elm.className = classname + " " + classes;
        } else {
          has = true;

          for (i = 0; i < l; i += 1) {
            item = classarray[i];
            search = new RegExp('\\b' + item + '\\b', 'g');

            if (action === "has") {
              if (!classname.match(search)) {
                has = false;
              }
            } else if (action === "toggle") {
              elm.className = (elm.className.match(search)) ? elm.className.replace(search, '') : elm.className + " " + item;
            } else { // remove
              elm.className = elm.className.replace(search, '');
            }
          }

          if (action === "has") {
            values.push(has);
          }
        }

        // remove spaces
        elm.className = elm.className.replace(/^\s+|\s+$/g, '');
      }, nodes);

      if (values.length > 0) {
        return returnValues(values);
      }
    }
  }

  function manageAttributes(name, value, remove, nodes) {
    var values = [];

    nodeLoop(function(elm) {
      if (name) {
        name = name.toLowerCase();

        if (remove) {
          elm.removeAttribute(name);
        } else if (value) {
          elm.setAttribute(name, value);
        } else if (elm.getAttribute(name)) {
          values.push(elm.getAttribute(name));
        } else {
          values.push(null);
        }
      }
    }, nodes);

    if (values.length > 0) {
      return returnValues(values);
    }
  }

  function insertIntoDOM(method, subject, nodes) {
    var children = [],
        l;

    if (subject.nodes && subject.nodes !== 0) {
      children = subject.nodes;
    } else if (subject.nodeType && subject.nodeType === 1) {
      children.push(subject);
    }

    l = children.length;

    if (method === 'append') {
      nodeLoop(function(elm) {
        for (var i = 0; i < l; i++) {
          elm.appendChild(children[i]);
        }
      }, nodes);
    } else {
      nodeLoop(function(elm) {
        for (var i = 0; i < l; i++) {
          elm.insertBefore(children[i], elm.firstChild);
        }
      }, nodes);
    }
  }

  function traverse(to, nodes) {
    if (to) {
      var temp = [],
        i, c = nodes.length;

      switch (to) {
        case 'children':
        case 'siblings':
          for (i = 0; i < c; i++) {
            var node = (to === 'siblings' ? nodes[i].parentNode.firstChild : nodes[i].firstChild),
              skipSelf = nodes[i];

            do {
              if (node && node.nodeType === 1 && node !== skipSelf) {
                temp.push(node);
              }
              node = node.nextSibling;
            } while (node);
          }
          break;

        case 'parent':
          for (i = 0; i < c; i++) {
            temp.push(nodes[i].parentNode);
          }
          break;

        case 'next':
          for (i = 0; i < c; i++) {
            var next = nodes[i];
            do {
              next = next.nextSibling;
            } while (next && next.nodeType !== 1);
            temp.push(next);
          }
          break;

        case 'previous':
          for (i = 0; i < c; i++) {
            var prev = nodes[i];
            do {
              prev = prev.previousSibling;
            } while (prev && prev.nodeType !== 1);
            temp.push(prev);
          }
          break;
      }

      nodes = temp;
    }

    return nodes;
  }

  // The actual crumbl. Use qwery to gather the requested elements and return crumbl

  function crumbl(selector) {
    return new crumbl.methods.init(selector);
  }


  // The crumble object prototype

  crumbl.methods = crumbl.prototype = {
    init: function(selector, context){
      var nodes = [],
          context = context || d,
          q = null,
          c = 0,
          i,
          oneResultSet = false;

      if (selector) {
        if (selector.nodeType && selector.nodeType === 1) {
          // return node as crumbl object
          nodes = [selector];
        } else if (selector.constructor && selector.call && selector.apply) {
          //the selector is a function -> execute on dom ready
          readyfn.push(selector);
        } else if (selector instanceof Array) {
          //the nodes have been passed to instantiate a new crumbl object from a
          //nodes-altering function
          nodes = selector;
        } else if (typeof selector === 'string') {
          if (selector.match(/<\/*[a-z][^>]+?>/gi)) {
            // selector is an html tag: create the element, add to nodes
            var container = document.createElement('div');
            container.innerHTML = selector;
            nodes.push(container.firstChild);

          } else {
            //normal behavior: use qwery to find the selector and return nodes

            // context can be
              // nothing, -> document
              // a string (a selector)
              // a node
              // Array of nodes (when passed through .find())

            if (context === d) {
              q = qwery(selector);
              c = q.length;
              oneResultSet = true;

            } else if (typeof context === 'string') {
              q = qwery(selector);
              c = q.length;
              oneResultSet = true;

            } else if ((context.nodeType && context.nodeType === 1) || (context instanceof Array && context.length === 1)) {
              q = qwery(selector, (context[0] || context));
              c = q.length;
              oneResultSet = true;

            } else if (context instanceof Array) {
              var contextcount = context.length,
                  contexti;

              for (contexti = 0; contexti < contextcount; contexti++) {
                q = qwery(selector, context[contexti]);
                c = q.length;

                for (i = 0; i < c; i++) {
                  nodes.push(q[i]);
                }
              }
            }

            if (oneResultSet) {
              for (i = 0; i < c; i++) {
                nodes.push(q[i]);
              }
            }
          }
        }
      }

      this.nodes = nodes;
      this.length = i;

      return this;
    },


    // Fire on DOM ready

    ready: function(fn) {
      if (fn) {
        if (domready) {
          fn();
        } else {
          readyfn.push(fn);
        }
      }
    },


    // Fire on page loaded

    loaded: function(fn) {
      if (fn) {
        if (pageloaded) {
          fn();
        } else {
          loadedfn.push(fn);
        }
      }
    },


    // Perform an action on every node

    each: function(fn) {
      if (typeof fn === "function") {
        nodeLoop(function(elm) {
          return fn.apply(elm, arguments);
        }, this.nodes);
      }

      return this;
    },


    // Find selector in element chilren

    find: function(s) {
      // return a new crumbl object with qwery return results

      return new crumbl.methods.init(s, this.nodes);
    },


    // Traversing

    children: function() {
      return new crumbl.methods.init(traverse('children', this.nodes));
    },

    siblings: function() {
      return new crumbl.methods.init(traverse('siblings', this.nodes));
    },

    parent: function() {
      return new crumbl.methods.init(traverse('parent', this.nodes));
    },

    next: function() {
      return new crumbl.methods.init(traverse('next', this.nodes));
    },

    prev: function() {
      return new crumbl.methods.init(traverse('previous', this.nodes));
    },


    // Filtering

    first: function() {
      if (this.nodes.length > 0) {
        return new crumbl.methods.init([this.nodes.shift()]);
      }
    },

    last: function() {
      if (this.nodes.length > 0) {
        return new crumbl.methods.init([this.nodes.pop()]);
      }
    },


    // Appending elements to the DOM

    append: function(elm) {
      insertIntoDOM('append', elm, this.nodes);
    },

    prepend: function(elm) {
      insertIntoDOM('prepend', elm, this.nodes);
    },


    // Remove all children

    empty: function() {
      nodeLoop(function(elm) {
        while (elm.hasChildNodes()) {
          elm.removeChild(elm.lastChild);
        }
      }, this.nodes);

      return this;
    },


    // Remove node

    remove: function() {
      nodeLoop(function(elm) {
        // Catch error in unlikely case elm has been removed
        try {
          elm.parentNode.removeChild(elm);
        } catch (e) {}
      }, this.nodes);

      // Clear nodes after remove
      this.nodes = [];

      return this;
    },


    // Cloning elements

    clone: function(deep) {
      //default to true
      deep = ((deep === true || deep === undefined) ? true : false);

      var temp = [];

      nodeLoop(function(elm) {
        if(elm.nodeType || elm.nodeType === 1){
          temp.push(elm.cloneNode(deep));
        }
      }, this.nodes);

      return new crumbl.methods.init(temp);
    },


    // CSS Class Management

    hasClass: function(c) {
      return manageClass(c, 'has', this.nodes);
    },

    addClass: function(c) {
      manageClass(c, 'add', this.nodes);

      return this;
    },

    removeClass: function(c) {
      manageClass(c, 'remove', this.nodes);

      return this;
    },

    toggleClass: function(c) {
      manageClass(c, 'toggle', this.nodes);

      return this;
    },


    // Get/Set innerHTML optionally before/after

    html: function(value, location) {
      var values = [],
          tmpnodes,
          tmpnode;

      nodeLoop(function(elm) {
        if (location) {
          // No insertAdjacentHTML support for FF < 8 and IE doesn't allow insertAdjacentHTML table manipulation, so use this instead
          // Convert string to node. We can't innerHTML on a document fragment
          tmpnodes = d.createElement('div');
          tmpnodes.innerHTML = value;

          while ((tmpnode = tmpnodes.lastChild) !== null) {
            // Catch error in unlikely case elm has been removed
            try {
              if (location === 'before') {
                elm.parentNode.insertBefore(tmpnode, elm);
              } else if (location === 'after') {
                elm.parentNode.insertBefore(tmpnode, elm.nextSibling);
              }
            } catch (e) {
              break;
            }
          }
        } else {
          if (value) {
            elm.innerHTML = value;
          } else {
            values.push(elm.innerHTML);
          }
        }
      }, this.nodes);

      if (values.length > 0) {
        return returnValues(values);
      }
    },


    // Get/Set/remove HTML attributes

    attr: function(name, value) {
      if (name) {
        if (value) {
          manageAttributes(name, value, false, this.nodes);

          return this;
        } else {
          return manageAttributes(name, false, false, this.nodes);
        }
      }
    },

    removeAttr: function(name) {
      manageAttributes(name, false, true, this.nodes);

      return this;
    },


    // Get/Set form element values

    val: function(replacement) {
      var radiogroup = [],
        values = [],
        i, j, grouped, active;

      if (typeof replacement === 'string') {
        replacement = [replacement];
      }

      nodeLoop(function(elm) {

        if (replacement) {
          switch (elm.nodeName) {
            case 'SELECT':
              for (i = 0; i < elm.length; i += 1) {
                // Multiple select
                for (j = 0; j < replacement.length; j += 1) {
                  elm[i].selected = '';

                  if (elm[i].value === replacement[j]) {
                    elm[i].selected = 'selected';
                    break;
                  }
                }
              }
              break;

            case 'INPUT':
              switch (elm.type) {
                case 'checkbox':
                case 'radio':
                  elm.checked = '';

                  for (i = 0; i < replacement.length; i += 1) {
                    if (elm.value === replacement[i]) {
                      elm.checked = 'checked';
                      break;
                    }
                  }

                  break;
                default:
                  elm.value = replacement[0];
              }

              break;

            case 'TEXTAREA':
            case 'BUTTON':
              elm.value = replacement[0];
              break;
          }

        } else {
          switch (elm.nodeName) {
            case 'SELECT':

              active = values.length;

              values.push([]);

              for (i = 0; i < elm.length; i += 1) {
                if (elm[i].selected) {
                  values[active].push(elm[i].value);
                }
              }

              switch (values[active].length) {
                case 0:
                  values[active] = null;
                  break;

                case 1:
                  values[active] = values[active][0];
                  break;
              }

              break;

            case 'INPUT':
              switch (elm.type) {
                case 'checkbox':
                  if (elm.checked) {
                    values.push(elm.value);
                  } else {
                    values.push(null);
                  }
                  break;

                case 'radio':

                  grouped = false;

                  for (i = 0; i < radiogroup.length; i += 1) {
                    if (radiogroup[i][0] === elm.name) {
                      if (elm.checked) {
                        values[radiogroup[i][1]] = elm.value;
                      }
                      grouped = true;
                    }
                  }

                  if (!grouped) {
                    radiogroup.push([elm.name, values.length]);

                    if (elm.checked) {
                      values.push(elm.value);
                    } else {
                      values.push(null);
                    }
                  }

                  break;
                  // Everything else including shinny new HTML5 input types
                default:
                  values.push(elm.value);
              }

              break;

            case 'TEXTAREA':
            case 'BUTTON':
              values.push(elm.value);
              break;
          }
        }

      }, this.nodes);

      if (values.length > 0) {
        return returnValues(values);
      }
    },


    // Event handlers

    on: function(event, handler) {
      manageEvent(event, handler, false, this.nodes);

      return this;
    },

    off: function(event) {
      manageEvent(event, null, true, this.nodes);

      return this;
    }
  };

  crumbl.methods.init.prototype = crumbl.methods;

  // Make crumbl globally available with $ for easy use.
  w.$ = crumbl;

})(window, document);