
function f()
{
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
		speed: 1
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
		health = 3;
		level = 1;
		gaurdian = 1;
		background = 1;
		character = 4;
		
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
	answer = getAnsNum();
	update();	
	
	function update()
	{
			if(correctAnswers >= 4)
			{
				jump();
				if(player.y < 0-player.height)
				{
					level++;
					gaurdian++;
					background++;
					correctAnswers = 0;
				}
			}
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
		ctx.fillStyle = colour;
		walk();
		fps();
		requestAnimationFrame(update);
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
		answer = getAnsNum();
		if(y <= 100)
		{
			if(x <= width/4 && answer == 1)
			{
				alert("YOU ARE SUPER PLAYER");
				correctAnswers++;
				object.x = width+object.width;
				generate();
				answer = getAnsNum();
			}
			else if(x > width/4 && x < width/2 && answer == 2)
			{
				alert("YOU ARE SUPER PLAYER");
				correctAnswers++;
				object.x = width+object.width;
				generate();
				answer = getAnsNum();
			}
			else if(x > width/2 && x <= 3*width/4 && answer == 3)
			{
				alert("YOU ARE SUPER PLAYER");
				correctAnswers++;
				object.x = width+object.width;
				generate();
				answer = getAnsNum();
			}
			else if(x > 3*width/4 && x <= width && answer == 4)
			{
				alert("YOU ARE SUPER PLAYER");
				correctAnswers++;
				object.x = width+object.width;
				generate();
				answer = getAnsNum();
			}
			else
			{
				wrongAnswers++;
				health--;
				alert("ALRT: LOSER");
			}
			if(health <= 0)
			{
				alert("GAME OER");
			}
			if(correctAnswers >= 4)
			{
				alert("GAME UP");
			}
		}
		if(y>=height-50 && x <= 100)
		{
		window.location = "../index.html";
		}
			keys[38] = true;
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
		if(!collision)
		{
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
		for(var i = 0; i < 7; i++)
		{
			if(i < 7)
			{
				animation = "images/main walk cycle000";
				imageArray["walk"+(counter)] = new Image();
				imageArray["walk"+(counter)].src = animation+(counter)+".PNG";
			}
			if(i < 6)
			{
				animation = "images2/p";
		
				imageArray["p"+counter] = new Image();
				imageArray["p"+(counter)].src = animation+(counter)+".PNG";
			}
			if(i < 5)
			{
				animation = "images2/g";
				imageArray["g"+counter] = new Image();
				imageArray["g"+(counter)].src = animation+(counter)+".PNG";
			
			}
			if (i < 4)
			{
				animation = "images2/b";
				imageArray["b"+(counter)] = new Image();
				imageArray["b"+(counter)].src = animation+(counter)+".PNG";
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
		if(curTime - 1000 >= checkSecond)
		{
			checkSecond = curTime;
			deltaTime2 = checkSecond - prevTime;
			ctx.fillStyle = "12px, Black";
		}
		if(curTime - 500 >= checkSecond)
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
		ctx.fillText(1000/deltaTime2, 100, 100);
		if(showUI)
		{
			ctx.fillStyle = "black 20px";
			ctx.fillRect(0,height-50,100,50);
			ctx.fillText(getQuestion(), width/2, height-100);
			ctx.fillStyle = "red";
			ctx.fillRect(0,0,width/4,100);
			
			ctx.fillStyle = "blue";
			if(answer == 1)
			{
				ctx.fillText(getAnswer(),25, 25);
			}
			ctx.fillRect(0+width/4,0,width/4,100);
			ctx.fillStyle = "green";
			if(answer == 2)
			{
				ctx.fillText(getAnswer(),25+width/4, 25);
			}
			ctx.fillRect(0+width/2,0,width/4,100);
			ctx.fillStyle = "pink";
			if(answer == 3)
			{
				ctx.fillText(getAnswer(),25+width/2, 25);
			}
			ctx.fillRect(3*width/4,0,width/4,100);
			if(answer == 4)
			{
				ctx.fillStyle = "black";
				ctx.fillText(getAnswer(),25+3*width/4, 25);
			}
		}
	}
}