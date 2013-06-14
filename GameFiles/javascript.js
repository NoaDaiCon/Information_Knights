function f()
{
		var query = window.location.search.substring(1);
		var vars = query.split('=');
		character = decodeURIComponent(vars[1]);
		if(!(character > 1) || !(character < 7))
		{
			character = 1;
		}
		var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		width = 1000,
		height = 600,
		
		
		player = {
		x : 100,
		y : height - 350,
		width : 225,
		height : 350,
		speed: 1000,
		jump : 10,
		velX: 0,
		velY: 0,
		dead : false,
		jumping: false
		};
		
		object = {
		x : width,
		y : height-400,
		width : 200,
		height : 400,
		speed: 800
		}
		hitbox = {
		x : player.x + 55,
		y : player.y+10,
		width : 100,
		height : player.height-25
		}
		keys = [];
		friction = 0.9;
		gravity = 2;
		frameSkipper = 0;
		animation = "images/main walk cycle000";
		falling = false;
		colour = "blue";
		deadTimer = 0;
		curTime = Date.now()
		checkSecond = Date.now();
		deltaTime2 = 1;
		backgroundIndex = 1;
		backgroundSlower = 1;
		showUI = true;
		runonce = false;
		shake = 0;
		collision = false;
		correctAnswers = 0;
		wrongAnswers = 0;
		level = 1;
		gaurdian = 1;
		background = 1;
		metrics = ctx.measureText(getQuestion());
		length = metrics.width;
		numCoins = localStorage.coins;
		numCoins = parseInt(localStorage.coins);
		if(localStorage.hearts < 5)
		{
			localStorage.hearts = 5;
		}
		image = new Image();
		xPos = 0;
		yPos = 0;
		index = 0;
		numFrames = 7;
		
	canvas.width = width;
	canvas.height = height;
	document.body.appendChild(canvas);
	loadImages();
	generate();
	generateScience();
	answer = getAnsNum();
	update();	
	
	function update()
	{
			if(correctAnswers >= 3)
			{
				jump();
				if(player.y < 0-player.height)
				{
					level++;
						object.speed= object.speed/1.55;
						gaurdian++;
					if(level < 5)
					{
						background++;
						generateScience();
						answer = getSciAnsNum();
					}
						correctAnswers = 0;
				}
			}
		if(localStorage.hearts > 0 && level < 5)
		{
			if (keys[37])
			{
				if(player.velX > -player.speed)
				{
					player.velX--;
				}	
				else
				{
					player.velX++;
				}
			}
			//if (keys[38] || keys[32])
			//{
			//u[p
			//	jump();			
			//}
			if (keys[39])
			{
				if(player.velX < player.speed)
				{
					player.velX++;
				}
				else
				{
					player.velX--;
				}
			}
			player.velX *= friction;
			player.velY += gravity;
			
			if(player.velY >= 0)
			{
				falling = true;
			}
			else
			{
				falling = false;
			}
			player.x += player.velX;
			player.y += player.velY;
			processCollisions();
					
			hitbox.x = player.x + 55;
			hitbox.y = player.y+25;
				
			ctx.clearRect(0,0,width,height);
			ctx.fillStyle = "red";
			
			drawBackground();
			manageHealth();
			ctx.fillStyle = colour;
			walk();
			managePowerups();
			fps();
		}
		else if(level >= 5)
		{
			ctx.drawImage(imageArray["win"],0,0);
		}
		else
		{
			ctx.drawImage(imageArray["gameover"],0,0);
		}
		setTimeout(update, 1000/60);
	}
	
	document.body.addEventListener("keydown", function(e)
	{
		keys[e.keyCode] = true;
		if (keys[85])
		{
			if(showUI)
			{
				showUI = false;
			}
			else
			{
				showUI = true;
			}
		}
	});
	document.body.addEventListener("keyup", function(e){
		keys[e.keyCode] = false;
	});
	canvas.addEventListener("mousedown", function(e)
	{
			var x = e.clientX;
			var y = e.clientY;
			
		if(localStorage.hearts <= 0 || level >= 5)
		{
			window.location = "../index.html";
		}
		if(y <= 200 && y >= 150)
		{
			if(x <= 60 && x >= 10 && localStorage.drinks > 0)
			{
				localStorage.hearts = localStorage.hearts*2;
				localStorage.drinks--;
			}
			else if(x <= width-10 && x >= width-60 && localStorage.swords > 0)
			{
				correctAnswer();
				correctAnswers--;
				localStorage.swords--;
			}
		}
		else
		{
			if(y <= 100 && correctAnswers < 3)
			{
				if(x <= width/4 && answer == 1)
				{
					correctAnswer();
				}
				else if(x > width/4 && x < width/2 && answer == 2)
				{
					correctAnswer();
				}
				else if(x > width/2 && x <= 3*width/4 && answer == 3)
				{
					correctAnswer();
				}
				else if(x > 3*width/4 && x <= width && answer == 4)
				{
					correctAnswer();
				}
				else
				{
					wrongAnswers++;
					localStorage.hearts--;
				}
			}
			if(y>=height-50 && x <= 100)
			{
				window.location = "../index.html";
			}
				keys[38] = true;
		}
	});
	canvas.addEventListener("mouseup", function(e){
		keys[38] = false;
	});
	
	
	function walk()
	{
		if(frameSkipper >= 4)
		{
		index++;
		frameSkipper = 0;
		}
		if(dead)
		{
			animation = "dead";
		}
		frameSkipper++;
		if(index >= numFrames)
		{
			index = 0;
		}
		if(player.dead)
		{
			dead();
		}
		else
		{
			animation = "walk";
			if(player.jumping)
			{
				animation = "jump";
				if (index > 5)
				{
					index = 3;
				}
			}
		}
		ctx.drawImage(imageArray["p"+character], player.x+20+shake, player.y-30, player.width, player.height);
		if(player.dead)
		{
			ctx.drawImage(imageArray["g"+gaurdian], object.x + shake, object.y -150 + yPos*80, object.width, object.height );
		}
		else
		{	
			ctx.drawImage(imageArray["g"+gaurdian], object.x + shake, object.y -50 + yPos, object.width, object.height );
		}
	}
	function processCollisions()
		{
			collision = false;
			
			if(player.x >= width - player.width)
			{
				player.x = width - player.width;
			}
			else if(player.x <= 0)
			{
				player.x = 0;
			}
			if(player.y >= height - player.height)
			{
				player.y = height - player.height;
				player.jumping = false;
			}
			
			if((hitbox.x+hitbox.width) >= (object.x) && hitbox.x <= (object.x+object.width))
			{
				if((hitbox.y+hitbox.height)<=object.y+15&&hitbox.y+hitbox.height>=object.y && falling)
				{
					player.y = object.y-player.height;
					player.jumping = false;
					player.velY = 0;
					colour = "blue";
				}
				else if((hitbox.y+hitbox.height)>object.y)
				{
					collision = true;
					colour = "black";
					player.width = 350;
					player.height = 160;
					player.y = height - player.height;
					player.dead = true;
				}
			}
			
			if(object.x <= 0 - object.width)
			{
				object.x = width;
			}
		}
	function dead()
	{
		if(localStorage.shields <= 0)
		{
			localStorage.hearts = 0;
		}
		if(!collision)
		{
			localStorage.shields--;
			player.dead = false;
			player.width = 225;
			player.height = 350;
			player.width = 225;
			player.height = 350;
			
			deadTimer = 0;
		}
		if(index >= 6)
		{
			index = 0;
		}
		deadTimer++;
		//ctx.drawImage(imageArray[animation+(index+1)],player.x+20, player.y+10);
	}
	function loadImages(player, background, guardian)
	{
		imageArray = [];
				
		var counter = 1;
		var letter = "a";
		for(var i = 0; i < 7; i++)
		{
			switch (i)
			{
				case 0:
					letter = "a";
					break;
			
				case 1:
					letter = "b";
					break;		
			
				case 2:
					letter = "c";
					break;		
			
				case 3:
					letter = "d";
					break;
				
				case 4:
					letter = "e";
					break;
					
				case 5:
					letter = "f";
					break;
					
				case 6:
					letter = "g";
					break;
			}
			if(i < 1)
			{
				animation = "images2/ansButton";
				imageArray["button"] = new Image();
				imageArray["button"].src = animation+".PNG";
				
				animation = "images2/heart";
				imageArray["heart"] = new Image();
				imageArray["heart"].src = animation+".PNG";
				
				animation = "images2/skull";
				imageArray["skull"] = new Image();
				imageArray["skull"].src = animation+".PNG";
				
				animation = "images2/potion";
				imageArray["potion"] = new Image();
				imageArray["potion"].src = animation+".PNG";
				
				animation = "images2/sword";
				imageArray["sword"] = new Image();
				imageArray["sword"].src = animation+".PNG";
				
				animation = "images2/shield";
				imageArray["shield"] = new Image();
				imageArray["shield"].src = animation+".PNG";
				
				animation = "images2/coin";
				imageArray["coin"] = new Image();
				imageArray["coin"].src = animation+".PNG";
				
				animation = "images2/gameover";
				imageArray["gameover"] = new Image();
				imageArray["gameover"].src = animation+".PNG";
				
				animation = "images2/win";
				imageArray["win"] = new Image();
				imageArray["win"].src = animation+".PNG";
			}
			if(i < 6)
			{
				animation = "images2/p";
		
				imageArray["p"+counter] = new Image();
				imageArray["p"+(counter)].src = animation+(letter)+".PNG";
			}
			if(i < 5)
			{
				animation = "images2/g";
				imageArray["g"+counter] = new Image();
				imageArray["g"+(counter)].src = animation+(letter)+".PNG";
			
			}
			if (i < 4)
			{
				animation = "images2/b";
				imageArray["b"+(counter)] = new Image();
				imageArray["b"+(counter)].src = animation+(letter)+".PNG";
			}
			counter++;
		}
	}
	function drawBackground()
	{
		animation = "b1";
		ctx.drawImage(imageArray["b"+background],  0, 0+yPos);
	//	animation = "b2";
		//ctx.drawImage(imageArray[animation+(backgroundIndex)],  xPos, 0);
		//ctx.drawImage(imageArray[animation+(backgroundIndex)],  xPos+1000, 0);
		if(backgroundSlower == 6)
		{
		parallax();
		backgroundIndex++;
		backgroundSlower = 1;
		}
		if(backgroundIndex == 6)
		{
			backgroundIndex = 1;
		}
		backgroundSlower++;

	}
	function parallax()
	{
		xPos-= 2;
		if(xPos <= -1000)
		{
		 xPos = 0;
		}
	}
	function jump()
	{
			player.jumping = false;
			player.velY = -player.jump;
			index = 1;
	}
	function fps()
	{
		prevTime = curTime;
		curTime = Date.now();
		deltaTime = curTime - prevTime;
		if(curTime - object.speed >= checkSecond)
		{
			checkSecond = curTime;
			deltaTime2 = checkSecond - prevTime;
			ctx.fillStyle = "12px, Black";
		}
		if(curTime - object.speed/2 >= checkSecond)
		{
			yPos = 0;
			if(!runonce)
			{
				object.x -= 40;
				runonce = true;
			}
			if(shake == 0)
			{
				shake = 1; 
			}
			else
			{
				shake = 0;
			}
		}
		else
		{
			if(shake == 0)
			{
				shake = 1; 
			}
			else
			{
				shake = 0;
			}
			runonce = false;
			yPos = 1;
		}
		if(showUI)
		{
			if(level == 1)
			{
				ctx.fillStyle = "black";
				ctx.font="60px 'Bernard MT Condensed' ";
			
				metrics = ctx.measureText(getQuestion());
				length = metrics.width;
				ctx.drawImage(imageArray["button"], width-length-100, height-100, length+100, 100);
				
				ctx.fillText(getQuestion(),width-length-50,height-25);
				ctx.fillStyle = "white";
				ctx.font="60px 'Bernard MT Condensed' ";
				ctx.fillText(getQuestion(),width-length-48,height-25);
			}
			if(level >= 2)
			{
				ctx.fillStyle = "black";
				ctx.font="30px 'Bernard MT Condensed' ";
			
				metrics = ctx.measureText(getScienceQues());
				length = metrics.width;
				ctx.drawImage(imageArray["button"], width-length-100, height-100, length+100, 100);
				
				ctx.fillText(getScienceQues(),width-length-50,height-40);
				ctx.fillStyle = "white";
				ctx.font="30px 'Bernard MT Condensed' ";
				ctx.fillText(getScienceQues(),width-length-48,height-40);
			}
				
			ctx.fillStyle = "black 20px";
			
			ctx.drawImage(imageArray["button"], 0,height-50,100,50);
			ctx.fillStyle = "red";
			ctx.drawImage(imageArray["button"],0,0,width/4,100);
			
			ctx.fillStyle = "blue";
			
			ctx.fillStyle = "black";
			ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns1(),95, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns1(),35, 70);
			}
			
			ctx.fillStyle = "white";
			ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
			ctx.fillText(getAns1(),97, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns1(),37, 70);
			}
			
			ctx.drawImage(imageArray["button"],0+width/4,0,width/4,100);
			ctx.fillStyle = "green";
			
				ctx.fillStyle = "black";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns2(),95+width/4, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns2(),35+width/4, 70);
			}
				
				ctx.fillStyle = "white";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns2(),97+width/4, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns2(),37+width/4, 70);
			}
			ctx.drawImage(imageArray["button"],0+width/2,0,width/4,100);
			ctx.fillStyle = "pink";
			
				ctx.fillStyle = "black";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns3(),95+width/2, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns3(),35+width/2, 70);
			}
				ctx.fillStyle = "white";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns3(),97+width/2, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns3(),37+width/2, 70);
			}
			ctx.drawImage(imageArray["button"],3*width/4,0,width/4,100);
			
				ctx.fillStyle = "black";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns4(),95+3*width/4, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns4(),35+3*width/4, 70);
			}
				ctx.fillStyle = "white";
				ctx.font="60px 'Bernard MT Condensed' ";
			if(level == 1)
			{
				ctx.fillText(getAns4(),97+3*width/4, 70);
			}
			else if(level >= 2)
			{
				ctx.font="25px 'Bernard MT Condensed' ";
				ctx.fillText(getSciAns4(),37+3*width/4, 70);
			}
		}
		ctx.font="25px 'Bernard MT Condensed' ";
		ctx.fillText("Menu", 25, height-15);
	}
	function correctAnswer()
	{
		if(level == 1)
		{
			numCoins+=20;
		}
		else if(level == 2)
		{
			numCoins+=30;
		}
		else if(level == 3)
		{
			numCoins+=40;
		}
		else
		{
			numCoins+=50;
		}
		localStorage.coins = ""+numCoins;
		correctAnswers++;
		object.x = width+object.width;
		if(level == 1)
		{
			generate();
			answer = getAnsNum();
		}
		else if(level >= 2)
		{
			generateScience();
			answer = getSciAnsNum();
			ctx.fillText(answer,97+3*width/4, 370);
		}
	}
	function manageHealth()
	{
		for(var i = 0; i < localStorage.hearts; i++)
		{
			ctx.drawImage(imageArray["heart"], 10+(i*60), height-500, 50, 50);
		}
		for(var i = 0; i < 3-correctAnswers; i++)
		{
			ctx.drawImage(imageArray["skull"], width-60-(i*60), height-500, 50, 50);
		}
	}
	function managePowerups()
	{
		ctx.drawImage(imageArray["potion"], 10, 150, 50, 50);
		ctx.fillStyle = "black";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.drinks,60, 200);
		ctx.fillStyle = "white";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.drinks,62, 200);
		
		ctx.drawImage(imageArray["sword"], width-60, 150, 50, 50);
		ctx.fillStyle = "black";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.swords,width-70, 200);
		ctx.fillStyle = "white";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.swords,width-72, 200);
		
		if(localStorage.shields > 0)
		{
			ctx.drawImage(imageArray["shield"], player.x+125, player.y+50, 200, 200);
		}
		ctx.drawImage(imageArray["coin"], 100, height-35, 25,25);
		ctx.fillStyle = "black";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.coins,125, height-15);
		ctx.fillStyle = "white";
		ctx.font="20px 'Bernard MT Condensed' ";
		ctx.fillText(localStorage.coins,127, height-15);
	}
}