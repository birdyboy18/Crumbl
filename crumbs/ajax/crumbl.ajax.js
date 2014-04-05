/*!
* @preserve Crumbl - A lightweight javascript framework
* Ajax Crumb
* Version 1.0.0
* http://crumbljs.com/crumbs/#ajax
* copyright Glenn Naessens 2014
* MIT License
*/

$.ajax = function (url, callback, method, nocache, postdata) {
	var xhr,
		querystart = (url.indexOf('?') === -1) ? '?' : '&',
		hostregex = new RegExp('http[s]?://(.*?)/', 'gi'),
		domain = hostregex.exec(url),
		head = document.getElementsByTagName('head')[0],
		jsonpcallback = 'jsonp_callback_' + (new Date()).getTime(),
		timestamp = '',
		script;

	postdata = (postdata ? '&' + postdata : '');

	if (!nocache) {
		timestamp = 'nocache=' + (new Date()).getTime();
	}

	// JSONP if cross domain url
	if (domain && window.location.host !== domain[1]) {
		url += querystart + timestamp + postdata;

		// Replace jsonp ? with callback
		if (callback) {
			url += '&callback=' + jsonpcallback;

			console.log(url);
			window[jsonpcallback] = function (data) {
				try {
					callback(data, 200);
				} catch (e) {}

				// Clean up after execution
				window[jsonpcallback] = undefined;
			};
		}

		script = document.createElement('script');
		script.async = true;
		script.src = url;

		script.onload = function () {
			head.removeChild(script);
		};

		head.appendChild(script);
	} else {
		method = (method || 'GET').toUpperCase();

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}

		if (xhr) {
			if (method === 'GET') {
				url += querystart + timestamp + postdata;
				postdata = null;
			}

			xhr.open(method, url, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (callback) {
						callback(xhr.responseText, xhr.status);
					}
				}
			};

			if (method === 'POST') {
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			}

			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.send(postdata);
		}
	}
};
