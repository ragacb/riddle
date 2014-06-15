// JavaScript Document
var score;
var answer='jackfruit';
var i;
var initial=100;
score=initial; 
var list = document.querySelectorAll('.cover');

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



function easy()
{
	if(document.getElementById('clue').clicked==true);
   {
   list.item(5).style.visibility='hidden';
   decrease;
   }
   if(document.getElementById('clue').clicked==true);
   {
   list.item(6).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(7).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(8).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(9).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(10).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(11).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(12).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(4).style.visibility='hidden';
   decrease;
   }if(document.getElementById('clue').clicked==true);
   {
   list.item(3).style.visibility='hidden';
   decrease;
   }
	 
	
	document.getElementById('ok').onclick=check;
		/*if(document.getElementById('clue').clicked == true)
		{
			easy_reveal;
		}*/
}

function medium()
{
   if(document.getElementById('clue').clicked==true);
   {
   list.item(5).style.visibility='hidden';
   decrease;
   }
}


function start()
{
	if(document.getElementById('easy').clicked==true) {easy;}
	if(document.getElementById('medium').clicked==true) {medium;}
	if(document.getElementById('hard').clicked==true) {hard;}
}

$(document).ready(function(){
  start();
});
