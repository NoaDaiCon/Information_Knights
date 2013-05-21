var ques = new Array();
var sciAns = new Array();
var random;
function generateScience()
{
	ansButton = Math.floor(Math.random()*4)+1;
	generateQuestions();
	generateAnswers();
}

function getScienceQues()
{
	random=Math.floor(Math.random()*8);
	
	return ques[random];
}

function getScienceAns()
{
	return sciAns[random];
}

function generateQuestions()
{
	ques[0] = "C'est quoi l'advantage d'un poulie mouble?";
	ques[1] = "Q'est que notre orelle peut produce?";
	ques[2] = "C'est quoi l'advantage d'un poulie fixe?";
	ques[3] = "Combien de gram est un nuton?";
	ques[4] = "Quel pressus est que les chauve souris utiliser pour le navigation?";
	ques[5] = "C'est quoi les quatre type d'engrenages?";
	ques[6] = "C'est quoi les 5 different machine simple?";
	ques[7] = "Pour quoi est que il n'y a pas de son dans l'espace?";
}

function generateAnswers()
{
	sciAns[0] = "C'est plus facile";
	sciAns[1] = "Cire";
	sciAns[2] = "Tu peut utiliser ton crops";
	sciAns[3] = "100";
	sciAns[4] = "Son";
	sciAns[5] = "Conique, dent droit, vis son fin, et cremaillere";
	sciAns[6] = "Poulie, Rone et l'axe, lever, vis , et plan incline";
	sciAns[7] = "Parce que il n'y a paas de gas";
	sciAns1 = Math.floor(Math.random()*8);
	sciAns2 = Math.floor(Math.random()*8);
	sciAns3 = Math.floor(Math.random()*8);
	sciAns4 = Math.floor(Math.random()*8);
	while(sciAns1 == sciAns2 || sciAns1 == sciAns3 || sciAns1 == random || sciAns1 == sciAns4)
	{
		sciAns1 = Math.floor(Math.random()*8);
	}
	while(sciAns2 == sciAns1 || sciAns2 == sciAns3 || sciAns2 == random || sciAns2 == sciAns4)
	{
		sciAns2 = Math.floor(Math.random()*8);
	}
	while(sciAns3 == sciAns2 || sciAns3 == sciAns1 || sciAns3 == random || sciAns3 == sciAns4)
	{
		sciAns3 = Math.floor(Math.random()*8);
	}
	while(sciAns4 == sciAns2 || sciAns4 == sciAns3 || sciAns4 == random || sciAns4 == sciAns1)
	{
		sciAns4 = Math.floor(Math.random()*8);
	}
}
	function getSciAns1()
{
	if(ansButton == 1)
	{
		return(sciAns[random]);
	}
	else
	{
		return (sciAns[sciAns1]);
	}
}

function getSciAns2()
{
	if(ansButton == 2)
	{
		return(sciAns[random]);
	}
	else
	{
		return sciAns[sciAns1];
	}
}

function getSciAns3()
{
	if(ansButton == 3)
	{
		return(sciAns[random]);
	}
	else
	{
		return sciAns[sciAns1];
	}
}

function getSciAns4()
{
	if(ansButton == 4)
	{
		return(sciAns[random]);
	}
	else
	{
		return sciAns[sciAns1];
	}
}