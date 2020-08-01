function rngRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}








// Modify classes for many elements at once
function modifyCSS(selector, property, value) {
	for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
		//Try add rule
		try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
		} catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
	}
}








// Modify classes for one specific element
cowID.classList.add('MyClass');
cowID.classList.remove('MyClass');
cowID.classList.toggle('MyClass');








// Don't use this unless you have to. Use CSS instead.
function opacityFade(id, targetOpacity, time) {
	id.style.opacity = targetOpacity;
	id.style.transition = 'opacity ' + time + 's ease';
}








function preventParentClick(e) {				// You need to pass the string 'event' as e or this won't work in Firefox
	if (!e) var e = window.event;
	if (e.stopPropagation) e.stopPropagation();	// Lots of redundancy here because I was trying to fix a bug in Transcend
	e.preventDefault();
	e.cancelBubble = true;
	e.returnValue = false;
	e.stopImmediatePropagation();
}








function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}








function moo() {
	console.log('moo');
}








function playAudioBasic(file) {
	var snd = new Audio(file); 					// Loads file. Remember to use folder paths
	snd.play();									// Plays file
}
playAudioBasic("Samples/test.wav")				// This begins file navigation fron the page's local directory
												// Some characters like # will break this








// Cheap not-unique UUID generator
// Use uuidv4.js instead
function cheapID() {
	return Math.random().toString(36).substr(2, 5);
}








// Not 100% certain this works
function preloadFiles() {
	function load(filename) {
		var xmlhttp;
		if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var q = document.createElement('span');	// Extra stuff to make IE happy. Fuck IE
				q.setAttribute('id', 'loadSound');		//
				q.setAttribute('class', 'invisible');	//
				document.body.appendChild(q);			//
				document.getElementById("loadSound").innerHTML = '<embed src="' + filename + '" controller="1" autoplay="0" autostart="0" />';
				//console.log(cow.filesPreloaded);
				cow.filesPreloaded++;
			}
		}
		xmlhttp.open("GET", filename, true);
		xmlhttp.send();
	}
	
	// Files go here
	load('Images/gear.png');
	load('Images/diamond.png');
}








// Creating an HTML object
var q = document.createElement('div');
q.setAttribute('width', '800px');
q.setAttribute('height', '600px');
q.id = 'cowID';
q.classList.add('cowClass');
body.appendChild(q);








// Load data from a REST API
// Note - Fetch is undefined in IE11
var url = 'https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h';

fetch(url).then(function(response) {
	response.json().then(function(data) {
		console.log(data);
	})
})
.catch(function(status) {
	alert(status);
});








// Do things to all elements with a certain class
var q = document.getElementsByClassName("cowClass");
for (var r=0; r<q.length; r++) {
	q[r].style.backgroundColor = "red";
}

// Delete all of a certain class
// The for loop iterates in reverse intentionally, or else only half the elements get deleted
// Because the array of elements updates mid-process
function deleteAllOfClass(q) {
	var q = document.getElementsByClassName(q);
	for (var r=q.length; r>0; r--) { q[0].remove(); }
}

// Same thing, but for tag names
function deleteAllOfTagName(q) {
	var q = document.getElementsByTagName(q);
	for (var r=q.length; r>0; r--) { q[0].remove(); }
}








// Round numbers to a target precision
function roundTo(input, target) { 
	return Math.round(input / target) * target; 
}








// Dynamic variable names
cow[variable + 'string'] = 20

var q = "string" + variable
window[q].classList.doStuff








// Fix for button onClick on iOS
// jQuery, so try a basic HTML touchstart first
$(document).ready(function(){
	$('.cowClass').on('click touchstart', function() {
		// do stuff
	});
});








function getfirstNWordsOfString( n, string ) {
	var q = string.replace(/\s+/g," ").split(/(?=\s)/gi).slice(0, n).join('')
	return q
}








function removeDuplicatesFromArray( q ) {
	// Hashtable - https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
	var seen = {}
		return q.filter(function(item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true)
		});
}








// Sort an array of numbers. array.sort() doesn't work correctly with numbers
function sortNumericArrayAscending( q ) {
	var output = q.sort((a, b) => a - b)
	return output
}
function sortNumericArrayDescending( q ) {
	var output = q.sort((a, b) => b - a)
	return output
}







// Toggle a boolean with one line of JS
q = !q
// Do something based on that boolean
var result = q ? 'Result 1' : 'Result 2'








// Keyboard controls
document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 192: 	doStuff(); break;		// `

		case 49: 	doStuff(); break;		// 1
		case 50: 	doStuff(); break;		// 2
		case 51: 	doStuff(); break;		// 3
		case 52: 	doStuff(); break;		// 4
		case 53: 	doStuff(); break;		// 5
		case 54: 	doStuff(); break;		// 6
		case 55: 	doStuff(); break;		// 7
		case 56: 	doStuff(); break;		// 8
		case 57: 	doStuff(); break;		// 9
		case 48: 	doStuff(); break;		// 0
		case 173: 	doStuff(); break;		// -
		case 61: 	doStuff(); break;		// =

		case 81: 	doStuff(); break;		// Q
		case 87: 	doStuff(); break;		// W
		case 69: 	doStuff(); break;		// E
		case 82: 	doStuff(); break;		// R
		case 84: 	doStuff(); break;		// T
		case 89: 	doStuff(); break;		// Y
		case 85: 	doStuff(); break;		// U
		case 73: 	doStuff(); break;		// I
		case 79: 	doStuff(); break;		// O
		case 80: 	doStuff(); break;		// P
		case 219: 	doStuff(); break;		// [
		case 221: 	doStuff(); break;		// ]
		case 220: 	doStuff(); break;		// \
		
		case 65: 	doStuff(); break;		// A
		case 83: 	doStuff(); break;		// S
		case 68: 	doStuff(); break;		// D
		case 70: 	doStuff(); break;		// F
		case 71: 	doStuff(); break;		// G
		case 72: 	doStuff(); break;		// H
		case 74: 	doStuff(); break;		// J
		case 75: 	doStuff(); break;		// K
		case 76: 	doStuff(); break;		// L
		case 59: 	doStuff(); break;		// ;
		case 222: 	doStuff(); break;		// '
		default: return;
	}
}








// Makes .remove() work in IE8-11
// https://stackoverflow.com/questions/8830839/javascript-dom-remove-element
(function () {					
	var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
		remove = function () {
			// The check here seems pointless, since we're not adding this
			// method to the prototypes of any any elements that CAN be the
			// root of the DOM. However, it's required by spec (see point 1 of
			// https://dom.spec.whatwg.org/#dom-childnode-remove) and would
			// theoretically make a difference if somebody .apply()ed this
			// method to the DOM's root node, so let's roll with it.
			if (this.parentNode != null) {
				this.parentNode.removeChild(this);
			}
		};

	for (var i=0; i<typesToPatch.length; i++) {
		var type = typesToPatch[i];
		if (window[type] && !window[type].prototype.remove) {
			window[type].prototype.remove = remove;
		}
	}
})();
















// http://jsfiddle.net/1t0heesf/1/
// Inverts hex colors

function invertCssColor(color) {
	var rgb = invertColor(hexColor2rgb(color));
	return rgb2hexColor(rgb);
}

function invertColor(rgb) {
	var yuv = rgb2yuv(rgb);
	var factor = 45;	// 90 is default. Results in stronger contrast.
	var threshold = 180;
	yuv.y = clamp(yuv.y + (yuv.y > threshold ? -factor : factor));
	return yuv2rgb(yuv);
}

function rgb2hexColor(rgb) {
	return '#' + dec2hex(rgb.r) + dec2hex(rgb.g) + dec2hex(rgb.b);
}

function hexColor2rgb(color) {
	color = color.substring(1); // remove #
	return {
		r: parseInt(color.substring(0, 2), 16),
		g: parseInt(color.substring(2, 4), 16),
		b: parseInt(color.substring(4, 6), 16)
	};
}

function dec2hex(n) {
	var hex = n.toString(16);
	if (hex.length < 2) {
		return '0' + hex;
	}
	return hex;
}

function rgb2yuv(rgb){
	var y = clamp(rgb.r *  0.29900 + rgb.g *  0.587   + rgb.b * 0.114);
	var u = clamp(rgb.r * -0.16874 + rgb.g * -0.33126 + rgb.b * 0.50000 + 128);
	var v = clamp(rgb.r *  0.50000 + rgb.g * -0.41869 + rgb.b * -0.08131 + 128);
	return {y:y, u:u, v:v};
}

function yuv2rgb(yuv){
	var y = yuv.y;
	var u = yuv.u;
	var v = yuv.v;
	var r = clamp(y + (v - 128) *  1.40200);
	var g = clamp(y + (u - 128) * -0.34414 + (v - 128) * -0.71414);
	var b = clamp(y + (u - 128) *  1.77200);
	return {r:r,g:g,b:b};
}

function clamp(n){
	if (n<0) { return 0;}
	if (n>255) { return 255;}
	return Math.floor(n);
}
















// See https://github.com/lgarron/clipboard-polyfill for a more robust solution.
function copyTextToClipboard(str) {
	function listener(e) {
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
};
















// Specialized code for displaying range slider progress colors on Webkit, where that feature is unsupported
// Note - Sliders must have an ID for this code to work
// https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html


function sliders() {
	var tracks = [
		'-webkit-slider-runnable-track',
	];

	var thumbs = [
		'-webkit-slider-thumb',
	];

	initSliders();
	var sliderGroups = document.querySelectorAll('section[data-type=slider-group]');
	for (var i=0;i<sliderGroups.length;i+=1) {
		initSliderGroup(sliderGroups[i]);
	}

	function initSliders() {
		var sliders = document.querySelectorAll('input[type=range]');
		var testAndWK = window.getComputedStyle(sliders[0],'::-webkit-slider-thumb').background;
		for (var i=0;i<sliders.length;i+=1) {
			if (!testAndWK) {
				sliders[i].style.WebkitAppearance = 'slider-horizontal';
			}

			// prepare a <style> tag that will be used by handleSlider()

			var st = document.createElement('style');
			st.id = 's' + sliders[i].id;
			document.head.appendChild(st);


			sliders[i].addEventListener('input',function () {handleSlider(this)},false);
			sliders[i].addEventListener('change',function () {handleSlider(this)},false);

			sliders[i].output = sliders[i].parentNode.querySelector('output');
			var dataSpan = sliders[i].parentNode.querySelector('span');
			if (dataSpan && dataSpan.getAttribute('data-labels')) {
				sliders[i].values = [];
				var values = dataSpan.getAttribute('data-labels').split(';');
				for (var j=0;j<values.length;j+=1) {
					sliders[i].values.push(values[j]);
				}
			}


			if (sliders[i].value*1) {
				handleSlider(sliders[i]);
			}
		}
	}

	function handleSlider(slider) {

		// this sets the gradient for one slider to the correct color stops
		// needs a prepared <style> tag created by initSliders()

		var gradValue = Math.round((slider.value/slider.getAttribute('max')*1)*100);
		var grad = 'linear-gradient(90deg,#FFFFFF ' + gradValue + '%,#903094 ' + (gradValue+1) + '%)';
		var rangeSelector = 'input[id="'+slider.id+'"]::';
		var styleString = '';
		var printedValue = (slider.values) ? slider.values[slider.value] : slider.value;
		slider.innerHTML = printedValue;
		for (var j=0;j<tracks.length;j+=1) {
			styleString += rangeSelector + tracks[j] + '{background: ' + grad + ';} ';
		}
		document.getElementById('s'+slider.id).textContent = styleString;
	}

	function initSliderGroup(parent) {
		var sliders = parent.querySelectorAll('input[type=range]');
		var max = parent.querySelector('div').getAttribute('data-total')*1;
		var groupRoster = [];
		var timeout;
		for (var i=0;i<sliders.length;i+=1) {
			groupRoster.push(sliders[i]);
			sliders[i].others = [];
			sliders[i].addEventListener('input',trackChange,false);
			sliders[i].addEventListener('change',trackChange,false);
		}
		for (var i=0;i<sliders.length;i+=1) {
			for (var j=0;j<groupRoster.length;j+=1) {
				if (groupRoster[j] !== sliders[i]) {
					sliders[i].others.push(groupRoster[j]);
				}
			}
		}

		function trackChange () {
			var that = this;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				setOtherSliders(that);
			},100);
		}

		function setOtherSliders(slider) {
			var currentTotal = calculateTotal();
			if (currentTotal > max) {
				var excess = currentTotal - max;
				var totalFromOthers = currentTotal - (slider.value*1);
				for (var j=0;j<slider.others.length;j+=1) {
					var newValue = Math.round(slider.others[j].value - ((slider.others[j].value/totalFromOthers)*excess));
					slider.others[j].value = newValue;
					handleSlider(slider.others[j]);
				}
			}
		}

		function calculateTotal () {
			var total = 0;
			for (var i=0;i<groupRoster.length;i+=1) {
				total += groupRoster[i].value*1;
			}
			return total;
		}

	}
}