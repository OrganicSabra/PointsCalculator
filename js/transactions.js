$(function() {
	// Make This All one Dynamic Function Later
	
	// January
	var ji = 0;
	$('#jan-r .record span').each(function() {
		ji++;
	});
	var janrec = ' ('+ji+')';
	$('#jan-t').append(janrec);
	
	// February
	var fi = 0;
	$('#feb-r .record span').each(function() {
		fi++;
	});
	var febrec = ' ('+fi+')';
	$('#feb-t').append(febrec);
	
	// March
	var mi = 0;
	$('#mar-r .record span').each(function() {
		mi++;
	});
	var marrec = ' ('+mi+')';
	$('#mar-t').append(marrec);
	
});