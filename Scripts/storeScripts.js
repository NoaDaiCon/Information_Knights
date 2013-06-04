
function storeInit()
{
	if(!localStorage.coins)
	{
		localStorage.coins="0";
	}
	if(!localStorage.hearts)
	{
		localStorage.hearts="0";
	}
	if(!localStorage.swords)
	{
		localStorage.swords="0";
	}
	if(!localStorage.shields)
	{
		localStorage.shields="0";
	}
	if(!localStorage.drinks)
	{
		localStorage.drinks="0";
	}
}

function getCoins()
{
	return localStorage.coins;
}

function setCoins(x)
{
	localStorage.coins = x;
}

function addHeart()
{
	if(localStorage.coins > 60)
	{
		localStorage.hearts++;
		alert("You have bought a life!");
	}
	else
	{
		alert("You don't have enough coins for a life!");
	{
}

function addSword()
{
	if(localStorage.coins > 100)
	{
		localStorage.swords++;
		alert("You have bought a sword!");
	}
	else
	{
		alert("You don't have enough coins for a sword!");
	{
}

function addShield()
{
	if(localStorage.coins > 80)
	{
		localStorage.shields++;
		alert("You have bought a sword!");
	}
	else
	{
		alert("You don't have enough coins for a shield!");
	{
}

function addDrink()
{
	if(localStorage.coins > 1000)
	{
		localStorage.drinks++;
		alert("You have bought a drink!");
	}
	else
	{
		alert("You don't have enough coins for a drink!");
	{
}
