
function createQuestion()
{
	var first=Math.floor(Math.random()*101);
	var sec=Math.floor(Math.random()*101);
	var type=Math.floor(Math.random()*5);
	var ans;
	var ques;
	
		document.getElementById("firstVar").innerHtml(first);
		document.getElementById("secondVar").innerHtml(second);
		document.getElementById("typeVar").innerHtml(type);
	
	if(type==0)
	{
		ans = first + sec;
		ques = first + "+" + sec + "= ?";		
	}
}

