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
		document.getElementById('appear').innerHTML='Right answer!!Check your score!';
	}
	else
	{
		document.getElementById('appear').innerHTML='Sorry..Try again';
	}
}

$("#ok").click(function(){
	check();
});
	