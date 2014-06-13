// JavaScript Document
var score;
var answer;
var given;
var i;
var initial=100;
score==initial;

function check()
{
	given=document.getElementById('tarea').value;
	if(given==answer)
	{
		document.getElementById('value').value=score;
	}
	else
	{
		alert('Wrong Answer');
	}
}
function decrease()
{
	score=score-4.8;
	document.getElementById('value').innerhtml=score;
}
function easy()
{
	for(i=0;i<=48;i++)
	{
	if($("#clue").click)
	{
	decrease;	
	}
	}
}

/*var document.getElementById('tarea')*/

