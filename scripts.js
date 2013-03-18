function check()
{
	if($("#ans").val()=="Hello")
	{
		$("#nextPanel").panel( "open" );
		document.getElementById("rightWrong").innerHTML="Correct!";
		$( "#mypanel" ).trigger( "updatelayout" );
	}
	else
	{
		document.getElementById("question").html=$("#ans").val();
	}

}