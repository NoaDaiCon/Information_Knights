
var first;
var sec;
var type
var ans;
var ansNum;
var ans1;
var ans2;
var ans3;
var ans4;
function generate()
{
	type=Math.floor(Math.random()*4);	
	ansNum=Math.floor((Math.random()*4)+1);
	ans1 = Math.floor(Math.random()*101);
	ans2 = Math.floor(Math.random()*101);
	ans3 = Math.floor(Math.random()*101);
	ans4 = Math.floor(Math.random()*101);
	
	if(type==0)
	{
		first=Math.floor(Math.random()*101);
		sec=Math.floor(Math.random()*101);
		ans=first+sec;
	}
	
	else if(type==1)
	{
		first=Math.floor(Math.random()*101);
		sec=Math.floor(Math.random()*101);
		if(sec > first)
		{
			var temp = first;
			first = sec;
			sec = temp;
		}
		ans=first-sec;
	}
	
	else if(type==2)
	{
		first=Math.floor(Math.random()*10);
		sec=Math.floor(Math.random()*10);
		ans=first*sec;
	}
	
	else if(type==3)
	{
		first=Math.floor(Math.random()*10);
		sec=Math.floor((Math.random()*9)+1);
		first = first*sec;
		
		
		ans=Math.floor(first/sec);
	}
	
	else
	{
	}
	ans1 = ans;
	while(ans1 == ans)
	{
		ans1 = Math.floor(Math.random()*101);
	}
	while(ans2 == ans)
	{
		ans2 = Math.floor(Math.random()*101);
	}
	while(ans3 == ans)
	{
		ans3 = Math.floor(Math.random()*101);
	}
	while(ans4 == ans)
	{
		ans4 = Math.floor(Math.random()*101);
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
		return("What is " +first + " / " + sec );
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
	return ansNum;
}

function getAns1()
{
	if(ansNum == 1)
	{
		return(ans);
	}
	else
	{
		return ans1;
	}
}

function getAns2()
{
	if(ansNum == 2)
	{
		return(ans);
	}
	else
	{
		return ans2;
	}
}

function getAns3()
{
	if(ansNum == 3)
	{
		return(ans);
	}
	else
	{
		return ans3;
	}
}

function getAns4()
{
	if(ansNum == 4)
	{
		return(ans);
	}
	else
	{
		return ans4;
	}
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
