// JavaScript Document
var score;
var answer='jackfruit';
var i;
var initial=100;
score=initial; 
var list=document.querySelectorAll('.cover');
var l=list.length;
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

function decrease()
{
	score=score-10;
	$("#number").html(score);
}

function easy_reveal()
{
	list.item(l-i).style.visibility="hidden";
	decrease();
}
	
function easy()
{
	for(i=0;i<l;i++)
	{
		$("#clue").click(function(){
			easy_reveal();
		});
	}
	
}

$("#easy").click(function(){
	easy();
});
