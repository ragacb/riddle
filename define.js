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
	if(score>=10)
	{
	score=score-10;
	$("#number").html(score);
	}
	else
	{
		document.getElementById('appear').innerHTML="Sorry...You can't get clues anymore.";
	}
}


function easy0()
{
	$("#clue").click(function(){
	list.item(4).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue1">Need a Clue?</button>');
	$(this).remove();
	easy1();
	});
}
function easy1()
{
	$("#clue1").click(function(){
	list.item(9).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue2">Need a Clue?</button>');
	$(this).remove();
	easy2();
	});
}
function easy2()
{
	$("#clue2").click(function(){
	list.item(10).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue3">Need a Clue?</button>');
	$(this).remove();
	easy3();
	});
}
function easy3()
{
	$("#clue3").click(function(){
	list.item(11).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue4">Need a Clue?</button>');
	$(this).remove();
	easy4();
	});
}
function easy4()
{
	$("#clue4").click(function(){
	list.item(5).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue5">Need a Clue?</button>');
	$(this).remove();
	easy5();
	});
}
function easy5()
{
	$("#clue5").click(function(){
	list.item(6).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue6">Need a Clue?</button>');
	$(this).remove();
	easy6();
	});
}
function easy6()
{
	$("#clue6").click(function(){
	list.item(7).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue7">Need a Clue?</button>');
	$(this).remove();
	easy7();
	});
}
function easy7()
{
	$("#clue7").click(function(){
	list.item(8).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue8">Need a Clue?</button>');
	$(this).remove();
	easy8();
	});
}
function easy8()
{
	$("#clue8").click(function(){
	list.item(3).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue9">Need a Clue?</button>');
	$(this).remove();
	easy9();
	});
}
function easy9()
{
	$("#clue9").click(function(){
	list.item(2).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue10">Need a Clue?</button>');
	$(this).remove();
	});
}


function medium0()
{
	$("#clue").click(function(){
	list.item(0).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue1">Need a Clue?</button>');
	$(this).remove();
	medium1();
	});
}
function medium1()
{
	$("#clue1").click(function(){
	list.item(11).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue2">Need a Clue?</button>');
	$(this).remove();
	medium2();
	});
}
function medium2()
{
	$("#clue2").click(function(){
	list.item(1).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue3">Need a Clue?</button>');
	$(this).remove();
	medium3();
	});
}
function medium3()
{
	$("#clue3").click(function(){
	list.item(10).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue4">Need a Clue?</button>');
	$(this).remove();
	medium4();
	});
}
function medium4()
{
	$("#clue4").click(function(){
	list.item(5).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue5">Need a Clue?</button>');
	$(this).remove();
	medium5();
	});
}
function medium5()
{
	$("#clue5").click(function(){
	list.item(6).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue6">Need a Clue?</button>');
	$(this).remove();
	medium6();
	});
}
function medium6()
{
	$("#clue6").click(function(){
	list.item(3).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue7">Need a Clue?</button>');
	$(this).remove();
	medium7();
	});
}
function medium7()
{
	$("#clue7").click(function(){
	list.item(9).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue8">Need a Clue?</button>');
	$(this).remove();
	medium8();
	});
}
function medium8()
{
	$("#clue8").click(function(){
	list.item(2).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue9">Need a Clue?</button>');
	$(this).remove();
	medium9();
	});
}
function medium9()
{
	$("#clue9").click(function(){
	list.item(4).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue10">Need a Clue?</button>');
	$(this).remove();
	});
}

function hard0()
{
	$("#clue").click(function(){
	list.item(0).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue1">Need a Clue?</button>');
	$(this).remove();
	hard1();
	});
}
function hard1()
{
	$("#clue1").click(function(){
	list.item(3).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue2">Need a Clue?</button>');
	$(this).remove();
	hard2();
	});
}
function hard2()
{
	$("#clue2").click(function(){
	list.item(8).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue3">Need a Clue?</button>');
	$(this).remove();
	hard3();
	});
}
function hard3()
{
	$("#clue3").click(function(){
	list.item(11).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue4">Need a Clue?</button>');
	$(this).remove();
	hard4();
	});
}
function hard4()
{
	$("#clue4").click(function(){
	list.item(5).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue5">Need a Clue?</button>');
	$(this).remove();
	hard5();
	});
}
function hard5()
{
	$("#clue5").click(function(){
	list.item(10).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue6">Need a Clue?</button>');
	$(this).remove();
	hard6();
	});
}
function hard6()
{
	$("#clue6").click(function(){
	list.item(2).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue7">Need a Clue?</button>');
	$(this).remove();
	hard7();
	});
}
function hard7()
{
	$("#clue7").click(function(){
	list.item(9).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue8">Need a Clue?</button>');
	$(this).remove();
	hard8();
	});
}
function hard8()
{
	$("#clue8").click(function(){
	list.item(4).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue9">Need a Clue?</button>');
	$(this).remove();
	hard9();
	});
}
function hard9()
{
	$("#clue9").click(function(){
	list.item(1).style.visibility="hidden";
	decrease();
	$(this).before('<button id="clue10">Need a Clue?</button>');
	$(this).remove();
	});
}


function easy()
{
		easy0();
		
}
function medium()
{
		medium0();
		
}
function hard()
{
		hard0();
		
}

$("#easy").click(function(){
	easy();
});
$("#medium").click(function(){
	medium();
});
$("#hard").click(function(){
	hard();
});

