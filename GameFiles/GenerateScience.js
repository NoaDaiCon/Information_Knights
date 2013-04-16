var ques = new array();
var ans = new array();
var random;

function generate()
{
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
	return ans[random];
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
	ans[0] = "C'est plus facile";
	ans[1] = "Cire";
	ans[2] = "Tu peut utiliser ton crops";
	ans[3] = "100";
	ans[4] = "Son";
	ans[5] = "Conique, dent droit, vis son fin, et cremaillere";
	ans[6] = "Poulie, Rone et l'axe, lever, vis , et plan incline";
	ans[7] = "Parce que il n'y a paas de gas";
}