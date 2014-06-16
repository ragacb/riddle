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
		document.getElementById('number').value=0;
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


function easy0()
{
	list.item(0).style.visibility="hidden";
	decrease();
	
}
function easy1()
{
	$("#clue").click(function(){
	list.item(1).style.visibility="hidden";
	decrease();
	});
}
function easy2()
{
	$("#clue").click(function(){
	list.item(2).style.visibility="hidden";
	decrease();
	});
}
function easy3()
{
	$("#clue").click(function(){
	list.item(3).style.visibility="hidden";
	decrease();
	});
}
function easy4()
{
	$("#clue").click(function(){
	list.item(4).style.visibility="hidden";
	decrease();
	});
}
function easy5()
{
	$("#clue").click(function(){
	list.item(5).style.visibility="hidden";
	decrease();
	});
}


function easy()
{

	/*$("#clue").click(function(){
			list.item(i).style.visibility="hidden";
			decrease();
			if(i<l)
		{   
			easy();
		}
		});*/
		if(document.getElementById('clue').clicked==true)
		{easy0();}
			
		easy1();
		easy2();	
		easy3();
		easy4();	
		easy5();
		
}

$("#easy").click(function(){
	easy();
});
