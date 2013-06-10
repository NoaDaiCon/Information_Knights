function storeInit() 
{
	if(localStorage.getItem("coins") === null)
	{
		localStorage.coins=0;
	}
	if (localStorage.getItem("hearts") === null)
	{
		localStorage.hearts=0;
	}
	if (localStorage.getItem("swords") === null)
	{
		localStorage.swords=0;
	}
	if (localStorage.getItem("shields") === null)
	{
		localStorage.shields=0;
	}
	if (localStorage.getItem("drinks") === null)
	{
		localStorage.drinks=0;
	}
}

function addHeart()
{
	if(localStorage.coins >= 60)
	{
		localStorage.hearts++;
		localStorage.coins -=60;
		alert("You bought a Heart! Hearts: " + localStorage.hearts + "Coins: " + localStorage.coins);
	}
	else
	{
		alert("You don't have enough coins for that!");
	}
}

function addSword()
{
	if(localStorage.coins >= 100)
	{
		localStorage.swords++;
		localStorage.coins -=100;
		alert("You bought a Sword! Swords: " + localStorage.swords + "Coins: " + localStorage.coins);
	}
	else
	{
		alert("You don't have enough coins for that!");
	}
}

function addShield()
{
	if(localStorage.coins >= 80)
	{
		localStorage.shields++;
		localStorage.coins -=80;
		alert("You bought a Shield! Coins: " + localStorage.coins);
	}
	else
	{
		alert("You don't have enough coins for that!");
	}
}
function addDrink()
{
	if(localStorage.coins >= 1000)
	{
		localStorage.drinks++;
		localStorage.coins -=1000;
		alert("You bought a Drink! Coins: " + localStorage.coins);
	}
	else
	{
		alert("You don't have enough coins for that!");
	}
}

function test1()
{
	alert("Coins "+localStorage.coins + " Hearts " + localStorage.hearts + " Swords " + localStorage.swords + " Shields " + localStorage.shields + " drinks " + localStorage.drinks);
}

function resetAll()
{
	localStorage.coins=0;
	localStorage.hearts=0;
	localStorage.swords=0;
	localStorage.shields=0;
	localStorage.drinks=0;
}


function displayCoins()
{
	alert("You have " + localStorage.coins + " coins!");
}


