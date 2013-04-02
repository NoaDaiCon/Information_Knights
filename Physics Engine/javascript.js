
function f()
{
		var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),

		width = 600,
		height = 400,
		
		player = {
		x : 100,
		y : height - 350,
		width : 225,
		height : 350,
		speed: 1000,
		jump : 30,
		velX: 0,
		velY: 0,
		dead : false,
		jumping: false
		};
		
		object = {
		x : 500,
		y : height-100,
		width : 100,
		height : 100,
		speed: 15
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
		animation = "main walk cycle000";
		falling = false;
		colour = "blue";
		deadTimer = 0;
		curTime = Date.now()
		checkSecond = Date.now();
		deltaTime2 = 1;
		
		image = new Image();
		xPos = 0;
		yPos = 0;
		index = 0;
		numFrames = 7;
		
	canvas.width = width;
	canvas.height = height;
	document.body.appendChild(canvas);
	loadImages();
	update();	
	
	function update()
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
		if (keys[38] || keys[32])
		{
		//u[p
			
			if(!player.jumping)
			{
				player.jumping = true;
				player.velY = -player.jump;
				index = 1;
			}
		}
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
		object.x = object.speed+500;
			
		ctx.clearRect(0,0,width,height);
		ctx.fillStyle = "red";
		
		ctx.fillStyle = colour;
		ctx.fillRect(object.x, object.y, object.width, object.height);
		walk();
		requestAnimationFrame(update);
	}
	
	document.body.addEventListener("keydown", function(e)
	{
		keys[e.keyCode] = true;
	});
	document.body.addEventListener("keyup", function(e){
		keys[e.keyCode] = false;
	});
	
	function walk()
	{
		if(frameSkipper >= 4)
		{
		xPos += player.width;
		index++;
		frameSkipper = 0;
		}
		frameSkipper++;
		if(index >= numFrames)
		{
			xPos = 0;
			yPos = 0;
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
		ctx.drawImage(imageArray[animation+(index+1)], 0, 0, player.width, player.height, player.x+20, player.y+10, player.width, player.height);
		prevTime = curTime;
		curTime = Date.now();
		deltaTime = curTime - prevTime;
		if(curTime - 1000 >= checkSecond)
		{
			checkSecond = curTime;
			deltaTime2 = checkSecond - prevTime;
			ctx.fillStyle = "12px, Black";
		}
			ctx.fillText(1000/deltaTime2, 100, 100);
	}
	function processCollisions()
		{
			var collision = false;
			
			if(player.x >= width-player.width)
			{
				player.x = width-player.width;
			}
			else if(player.x <= 0)
			{
				player.x = 0;
			}
			if(player.y >= height-player.height)
			{
				player.y = height - player.height;
				player.jumping = false;
			}
			
			if((hitbox.x+hitbox.width)>=(object.x)&&hitbox.x<=(object.x+object.width))
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
					colour = "black";
					animation = "dead";
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
		if(deadTimer >= 60)
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
		ctx.drawImage(imageArray[animation+(index+1)], 0, 0, player.width, player.height, player.x+20, player.y+10, player.width, player.height);
	}
	function loadImages()
	{
		imageArray = [];
		var counter = 1;
		animation = "main walk cycle000";
		for(var i = 0; i < 20; i++)
		{
			if(i < 7)
			{
				imageArray["walk"+(counter)] = new Image();
				imageArray["walk"+(counter)].src = "images/"+animation+(counter)+".PNG";
			}
			else
			{
				if(i >= 13)
				{
					animation = "Dead000";
					imageArray["dead"+(counter)] = new Image();
					imageArray["dead"+(counter)].src = "images/"+animation+(counter)+".PNG";
				}
				else
				{
					animation = "Jump000";
					imageArray["jump"+(counter)] = new Image();
					imageArray["jump"+(counter)].src = "images/"+animation+(counter)+".PNG";
				}
			}
			counter++;
			if(i == 6 || i == 13)
			{
				counter = 1;
			}
		}
	}
	function parallax()
	{
		
	}
}