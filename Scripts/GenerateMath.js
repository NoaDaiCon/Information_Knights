
var first;
var sec;
var type
var ans;

function generate()
{
	first=Math.floor(Math.random()*101);
	sec=Math.floor(Math.random()*101);
	type=Math.floor(Math.random()*4);	
	
	if(type==0)
	{
		ans=first+sec;
	}
	
	else if(type==1)
	{
		ans=first-sec;
	}
	
	else if(type==2)
	{
		ans=first*sec;
	}
	
	else if(type==3)
	{
		ans=first/sec;
	}
	
	else
	{
	}
}


function getQuestion()
{
	
	if(type==0)
	{
		return(first + "+" + sec + "=");
	}
	
	else if(type==1)
	{
		return(first + "-" + sec + "=");
	}
	
	else if(type==2)
	{
		return(first + "*" + sec + "=");
	}
	
	else if(type==3)
	{
		return(first + "/" + sec + "=");
	}
	
	else
	{
		return("Error");
	}
	
	
}

function getAnswer()
{
	return(ans);
}

function checkAnswer(input)
{
	if(input==ans)
	{
		return true;
	}
	else
	{
		return false;
	}
}
