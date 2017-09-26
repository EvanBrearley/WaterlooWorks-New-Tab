// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Significantly modified version of an example on https://developer.chrome.com/extensions/samples



function click(e) {
  
	chrome.tabs.executeScript(null,
 {
		code:"var postingsTable = document.getElementById('postingsTable'); var postings = postingsTable.getElementsByTagName('a'); for (var i = 0; i < postings.length; i++){if(postings[i].hasAttribute('onclick') && postings[i].getAttribute('onclick').includes('orbisApp.buildForm') && !postings[i].getAttribute('onclick').includes('_blank')){var end = postings[i].getAttribute('onclick').lastIndexOf(\x22'\x22); postings[i].setAttribute('onclick',postings[i].getAttribute('onclick').slice(0, end) + '_blank' + postings[i].getAttribute('onclick').slice(end, postings[i].getAttribute('onclick').length))}}"
	});
  
	window.close();
}


document.addEventListener('DOMContentLoaded', function () {
  
	var divs = document.querySelectorAll('div');
  
	divs[0].addEventListener('click', click);
});
