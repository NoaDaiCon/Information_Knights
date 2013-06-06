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
		ques[2] = "quelle planète vivons-nous en?";
		ques[3] = "Combien de gram est un nuton?";
		ques[4] = "Quel pressus est que les chauve souris utiliser pour le navigation?";
		ques[5] = "Est la lumière invisible quand il se déplace?";
		ques[6] = "qui est une machine simple?";
		ques[7] = "Pour quoi est que il n'y a pas de son dans l'espace?";
	}
	else if(level == 3)
	{
		ques[0] = "où sont les baguettes de?";
		ques[1] = "ILS de Sont masculin, et Elles de Sont?";
		ques[2] = "où est la Tour Eiffel?";
		ques[3] = "Quelle est la capitale du Québec?";
		ques[4] = "Qu'est-ce 'roi' signifie en anglais?";
		ques[5] = "Qu'est-ce 'chapeau' signifie en anglais?";
		ques[6] = "Qu'est-ce 'cheval' signifie en anglais?";
		ques[7] = "Qu'est-ce 'souris' signifie en anglais?";
	}
	else if(level == 4)
	{
		ques[0] = "Lequel des énoncés suivants est un groupe alimentaire?";
		ques[1] = "de quelle couleur est une orange?";
		ques[2] = "l'exercice est bon pour vous?";
		ques[3] = "quand faut-il se laver les mains?";
		ques[4] = "combien de portions de viande devriez-vous avoir?";
		ques[5] = "Combien de repas faut-il manger par jour?";
		ques[6] = "Qui voyez-vous quand vous êtes malade?";
		ques[7] = "si vous êtes malade:";
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
		sciAns[4] = "Son";
		sciAns[5] = "faux";
		sciAns[6] = "Poulie";
		sciAns[7] = "pas de gaz";
	}
	else if(level == 3)
	{
		sciAns[0] = "France.";
		sciAns[1] = "Féminin";
		sciAns[2] = "Paris";
		sciAns[3] = "Ville de Québec";
		sciAns[4] = "king";
		sciAns[5] = "hat";
		sciAns[6] = "horse";
		sciAns[7] = "mouse";
	}
	else if(level == 4)
	{
		sciAns[0] = "Fruits/Légumes";
		sciAns[1] = "d'orange";
		sciAns[2] = "oui";
		sciAns[3] = "souvent";
		sciAns[4] = "1-2";
		sciAns[5] = "3";
		sciAns[6] = "le médecin";
		sciAns[7] = "rester à la maison";
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