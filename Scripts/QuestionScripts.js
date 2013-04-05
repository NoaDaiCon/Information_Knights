
function createQuestion()
{
	
	
	var first=Math.floor(Math.random()*101);
	var sec=Math.floor(Math.random()*101);
	var type=Math.floor(Math.random()*4);
	var ans;
	var ques;
	
	
	if(type==0)
	{
		ans=first+sec;
		document.write(first + "+" + sec + "=" + ans);
	}
	
	else if(type==1)
	{
		ans=first-sec;
		document.write(first + "-" + sec + "=" + ans);
	}
	
	else if(type==2)
	{
		ans=first*sec;
		document.write(first + "*" + sec + "=" + ans);
	}
	
	else if(type==3)
	{
		ans=first/sec;
		document.write(first + "/" + sec + "=" + ans);
	}
	
	else
	{
		document.write("Error");
	}
	
	
}

