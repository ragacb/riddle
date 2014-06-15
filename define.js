// JavaScript Document
var score;
var answer='jackfruit';
var i;
var initial=100;
score=initial; 
var list=document.querySelectorAll('.cover');

function check()
{
	var given=document.getElementById('tarea').getAttribute('value');
	given=given.toLowerCase();
	if(given==answer)
	{
		document.getElementById('value').value=score;
		alert('Right Answer!Check your score!');
	}
	else
	{
		alert('Wrong Answer');
	}
}


function decrease()
{
	score=score-10;
	document.getElementById('value').innerhtml=score;
}

function easy_reveal()
{
list.item(i).style.visibility='hidden';
decrease;
}

function easy()
{
	for(i=0;i<list.length;i++)
	{
	 document.getElementById('clue').onclick=easy_reveal;
	}
	document.getElementById('ok').onclick=check;
		/*if(document.getElementById('clue').clicked == true)
		{
			easy_reveal;
		}*/
}


function start()
{
	if(document.getElementById('easy').clicked==true) easy;
	if(document.getElementById('medium').clicked==true) medium;
	if(document.getElementById('hard').clicked==true) hard;
}

/*$(document).ready(function(){
  $("#easy").click(function(){
    easy();
  });
});
*/
window.onload=start;