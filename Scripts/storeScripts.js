function storeInit() 
{
	displayCoins = document.getElementById("coinDisplay");
	displayHearts = document.getElementById("heartDisplay");
	displaySwords = document.getElementById("swordDisplay");
	displayShields = document.getElementById("shieldDisplay");
	displayDrinks = document.getElementById("drinkDisplay");
	
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
	
	document.getElementById("coinDisplay").innerHTML = "" + localStorage.coins;
}

function addHeart()
{
	if(localStorage.coins >= 60)
	{
		localStorage.hearts++;
		localStorage.coins -=60;
		alert("You bought a Heart! Coins: " + localStorage.coins + " Hearts: " + localStorage.hearts );
		displayCoins.innerHTML = localStorage.coins;
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
		alert("You bought a Sword! Coins: " + localStorage.coins + " Swords: " + localStorage.swords);
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
		alert("You bought a Shield! Coins: " + localStorage.coins + " Shields: " + localStorage.shields);
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
		alert("You bought a Drink! Coins: " + localStorage.coins + " Drinnks: " + localStorage.drinks);
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
	displayAll();
}

function displayAll()
{
	alert("C " + localStorage.coins +" H "+localStorage.hearts+" SW "+localStorage.swords+" SH "+localStorage.shields+" D "+localStorage.drinks);
}

function testCase()
{
	localStorage.coins = 2000;
	displayAll();
}



