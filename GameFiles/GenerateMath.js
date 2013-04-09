
var first;
var sec;
var type
var ans;
var ansNum;
function generate()
{
	first=Math.floor(Math.random()*101);
	sec=Math.floor(Math.random()*101);
	type=Math.floor(Math.random()*4);	
	ansNum=Math.floor((Math.random()*4)+1);
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
		return("What is " +first + " + " + sec );
	}
	
	else if(type==1)
	{
		return("What is " + first + " - " + sec );
	}
	
	else if(type==2)
	{
		return("What is " +first + " x " + sec );
	}
	
	else if(type==3)
	{
		return("What is " +first + " ÷ " + sec );
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
function getAnsNum()
{
	return(ansNum);
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
