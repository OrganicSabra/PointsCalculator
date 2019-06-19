$(function() {
	
	
	var monthCount = 0;
	
	var m1 = 0;
	var m2 = 0;
	var m3 = 0;
	
	$('.month').each(function() {
		var monthTotal = 0;
		monthCount = monthCount + 1;
		monthClass = 'div.month'+monthCount;
		resultClass = 'h4.month'+monthCount;
		
		$(monthClass + ' .record span').each(function() {
			
			var points50 = 0;
			var points100 = 0;
			
			var num = $(this).html().split('.');
			num = parseInt(num[0]);
			
			var num50 = 0;
			var num100 = 0;
			
			if(num > 50){
				// Add 1 points for every dollar greater than 50
				num50 = num-50;
				points50 = num50;
			}
			else {
				// Do Nothing
			}
			if(num > 100){
				// Add 1 points for every dollar greater than 50
				num100 = num-100;
				points100 = num100;
			}
			else {
				// Do Nothing
			}
			
			var curTotal = 0;
			
			curTotal = num50+num100;
			
			monthTotal = curTotal + monthTotal;
			
			if(monthCount == 1) {
				m1 = monthTotal;
			}
			if(monthCount == 2) {
				m2 = monthTotal;
			}
			if(monthCount == 3) {
				m3 = monthTotal;
			}
		});
		
		$(resultClass+' span').html(monthTotal);

	});
	
	// Overall Total
	var total = 0;
	
	total = m1 + m2 + m3;
	
	$('#total span').html(total);

});
