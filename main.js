$(document).ready(function(){
	$('#processInfoAsk').hide();
	$('#addProcesses').click(function(){
		$('#processInfoAsk').show(1000);
	});
	$('#submitButton').click(function(){
		$('#processInfoAsk').hide();
	});
});
var arr = [];
var processCount = 0;
function indexIncrement(){
	processCount++;
	document.getElementById('processIndex').innerHTML = processCount.toString();
}
function processSubmitted(argument) {
	let n = {
		processNumber : 0,
		burst_time : 0,
		arrival_time : 0,
	};
	n['processNumber'] = processCount;
	n['burst_time']=parseInt(document.forms['processInput']['burst_time'].value);
	n['arrival_time']=parseInt(document.forms['processInput']['arrival_time'].value);
	arr.push(n);
	console.log(arr);
}