var postingsTable = document.getElementById('postingsTable'); 
var postings = postingsTable.getElementsByTagName('a'); 
for (var i = 0; i < postings.length; i++){
	if(postings[i].hasAttribute('onclick') && postings[i].getAttribute('onclick').includes('orbisApp.buildForm')){
		var end = postings[i].getAttribute('onclick').lastIndexOf("'"); 
		postings[i].setAttribute('onclick',postings[i].getAttribute('onclick').slice(0, end) + '_blank' + postings[i].getAttribute('onclick').slice(end, postings[i].getAttribute('onclick').length))
	}
}
