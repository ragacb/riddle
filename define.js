// JavaScript Document
var score;
var answer='jackfruit';
var i=0;
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


	
function easy()
{
	/*for(i=0;i<l;i++)
	{
		$("#clue").click(function(){
			list.item(l-i).style.visibility="hidden";
		});
		
	}
	*/
	$("#clue").click(function(){
			list.item(i).style.visibility="hidden";
			decrease();
		
		if(i<l)
		{easy();}
		});
		i++;
			
}

$("#easy").click(function(){
	easy();
});
