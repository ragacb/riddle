// JavaScript Document
var score;
var answer='jackfruit';
var i;
var initial=100;
score=initial; 
list=document.querySelectorAll('.cover');

function check()
{   
	var given=document.getElementById('tarea').value;
	given=given.toLowerCase();
	if(given==answer)
	{
		document.getElementById('number').value=score;
		alert('Right Answer!Check your score!');
	}
	else
	{
		alert('Wrong Answer');
	}
}

$("#ok").click(function(){
	check();
});
	