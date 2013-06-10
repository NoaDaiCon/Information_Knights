var ques = new Array();
var sciAns = new Array();
var random;
function generateScience()
{
	ansButton = Math.floor(Math.random()*4)+1;
	random=Math.floor(Math.random()*8);
	generateQuestions();
	generateAnswers();
}

function getScienceQues()
{
	
	return ques[random];
}
function getSciAnsNum()
{
	return ansButton;
}
function getScienceAns()
{
	return sciAns[random];
}

function generateQuestions()
{
	if(level == 2)
	{
		ques[0] = "C'est quoi l'advantage d'un poulie mouble?";
		ques[1] = "Q'est que notre orelle peut produce?";
		ques[2] = "Quelle planete vivons-nous en?";
		ques[3] = "Combien de gram est un nuton?";
		ques[4] = "Quel pressus est que les chauve souris utiliser pour le navigation?";
		ques[5] = "Est la lumiere invisible quand il se deplace?";
		ques[6] = "Qui est une machine simple?";
		ques[7] = "Pour quoi est que il n'y a pas de son dans l'espace?";
	}
	else if(level == 3)
	{
		ques[0] = "ou sont les baguettes de?";
		ques[1] = "ILS de Sont masculin, et Elles de Sont?";
		ques[2] = "Ou est la Tour Eiffel?";
		ques[3] = "Quelle est la capitale du Quebec?";
		ques[4] = "Qu'est-ce 'roi' signifie en anglais?";
		ques[5] = "Qu'est-ce 'chapeau' signifie en anglais?";
		ques[6] = "Qu'est-ce 'cheval' signifie en anglais?";
		ques[7] = "Qu'est-ce 'souris' signifie en anglais?";
	}
	else if(level == 4)
	{
		ques[0] = "Lequel des enonces suivants est un groupe alimentaire?";
		ques[1] = "De quelle couleur est une orange?";
		ques[2] = "Est l'exercice bon pour vous?";
		ques[3] = "Quand faut-il se laver les mains?";
		ques[4] = "Combien de portions de viande devriez-vous avoir?";
		ques[5] = "Combien de repas faut-il manger par jour?";
		ques[6] = "Qui voyez-vous quand vous etes malade?";
		ques[7] = "Si vous etes malade:";
	}
}

function generateAnswers()
{
	if(level == 2)
	{
		sciAns[0] = "C'est plus facile";
		sciAns[1] = "Cire";
		sciAns[2] = "Terre";
		sciAns[3] = "100";
		sciAns[4] = "Sonner";
		sciAns[5] = "Non";
		sciAns[6] = "Poulie";
		sciAns[7] = "Pas de gaz";
	}
	else if(level == 3)
	{
		sciAns[0] = "France";
		sciAns[1] = "Feminin";
		sciAns[2] = "Paris";
		sciAns[3] = "Ville de Quebec";
		sciAns[4] = "King";
		sciAns[5] = "Hat";
		sciAns[6] = "Horse";
		sciAns[7] = "Mouse";
	}
	else if(level == 4)
	{
		sciAns[0] = "Fruits/Legumes";
		sciAns[0] = "Fruits/Legumes";
		sciAns[1] = "D'orange";
		sciAns[2] = "Oui";
		sciAns[3] = "Souvent";
		sciAns[4] = "1-2";
		sciAns[5] = "3";
		sciAns[6] = "Le medecin";
		sciAns[7] = "Rester a la maison";
	}
	sciAns1 = Math.floor(Math.random()*8);
	sciAns2 = Math.floor(Math.random()*8);
	sciAns3 = Math.floor(Math.random()*8);
	sciAns4 = Math.floor(Math.random()*8);
	while(sciAns1 == sciAns2 || sciAns1 == sciAns3 || sciAns1 == random || sciAns1 == sciAns4 || sciAns1 == random)
	{
		sciAns1 = Math.floor(Math.random()*8);
	}
	while(sciAns2 == sciAns1 || sciAns2 == sciAns3 || sciAns2 == random || sciAns2 == sciAns4 || sciAns2 == random)
	{
		sciAns2 = Math.floor(Math.random()*8);
	}
	while(sciAns3 == sciAns2 || sciAns3 == sciAns1 || sciAns3 == random || sciAns3 == sciAns4 || sciAns3 == random)
	{
		sciAns3 = Math.floor(Math.random()*8);
	}
	while(sciAns4 == sciAns2 || sciAns4 == sciAns3 || sciAns4 == random || sciAns4 == sciAns1 || sciAns4 == random)
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
		return sciAns[sciAns2];
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
		return sciAns[sciAns3];
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
		return sciAns[sciAns4];
	}
}