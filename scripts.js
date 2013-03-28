function check()
{
	if($("#ans").val()=="Hello")
	{
		$("#nextPanel").panel( "open" );
		document.getElementById("nextPanel.rightWrong").innerHTML="Correct!";
		$( "#mypanel" ).trigger( "updatelayout" );
	}
	else
	{
		document.getElementById("q").html=$("#ans").val();
	}

}

function createQuestion()
{
	var first==Math.floor(Math.random()*101);
	var sec==Math.floor(Math.random()*101);
	var type=Math.floor(Math.random()*5);
	var ans;
	var ques;
	
	if(type==0)
	{
		ans = first + sec;
		ques = first + "+" + sec + "= ?";
	}
}