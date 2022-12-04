var themeButton = document.getElementById("themeButton");
var modeButton = document.getElementById("modeButton");
var zoomInButton = document.getElementById("zoomInButton");
var zoomOutButton = document.getElementById("zoomOutButton");
var fontButton = document.getElementById("fontButton");
var settingButton = document.getElementById("settingButton");
var lever = 0;
var colorMode = 0;
var fontSwitch = 0;
var fontDefaultSize = 1;
var themeSwitch = 0; 

	settingButton.onclick = function () 
		{
            lever++;
			
			switch (lever)
			    {
			
			case 1:
			themeButton.style.display = "none";
			modeButton.style.display = "none";
			zoomInButton.style.display = "none";
			zoomOutButton.style.display = "none";
			fontButton.style.display = "none";
			break;
			
			case 2:
			themeButton.style.display = "";
			modeButton.style.display = "";
			zoomInButton.style.display = "";
			zoomOutButton.style.display = "";
			fontButton.style.display = "";
			lever = 0;
			
				}
		}
		
		
		modeButton.onclick = function () 
		{
            colorMode++;
			
			switch (colorMode)
			    {
			
			case 1:
			document.body.style.backgroundColor = "#000000";
			document.body.style.color = "#ffffff";
			break;
			
			case 2:
			document.body.style.backgroundColor = "#ffffff";
			document.body.style.color = "#000000";
			colorMode = 0;
			
				}
		}
		
		
		fontButton.onclick = function () 
		{
            fontSwitch++;
			
			switch (fontSwitch)
			    {
			
			case 1:
			document.body.style.fontFamily = "monospace";
			break;
			
			case 2:
			document.body.style.fontFamily = "Bahnschrift";
			break;
			
			case 3:
			document.body.style.fontFamily = "Open Sans";
			break;
			
			case 4:
			document.body.style.fontFamily = "Harrington";
			fontSwitch = 0;
			
			
				}
		}
		
		zoomInButton.onclick = function () 
		{
			if(fontDefaultSize>2.0)
			{
				fontDefaultSize = 0.5;
				document.body.style.fontSize = fontDefaultSize + "em";
				
			}
			
			else{
			fontDefaultSize += 0.05;
			document.body.style.fontSize = fontDefaultSize + "em";
			}
			
			
		}
		
		zoomOutButton.onclick = function () 
		{
			if(fontDefaultSize < 0.4)
			{
				document.body.style.fontSize = fontDefaultSize + "em";
				fontDefaultSize = 1.2;
			}
			
			else{
			fontDefaultSize  -= 0.05;
			document.body.style.fontSize = fontDefaultSize + "em";
			}
			
			
		}
		
		themeButton.onclick = function ()
		{
			themeSwitch++;
			
			switch (themeSwitch)
			    {
			
			case 1:
			document.body.style.backgroundColor = "#000000";
			document.body.style.color = "#ffffff";
			document.body.style.fontFamily = "Bank Gothic";
			break;
			
			case 2:
			document.body.style.backgroundColor = "#222247";
			document.body.style.color = "#ffffff";
			document.body.style.fontFamily = "Georgia";
			break;
			
			case 3:
			document.body.style.backgroundColor = "#00e02f";
			document.body.style.color = "#ffffff";
			document.body.style.fontFamily = "Courier";
			break;
			
			case 4:
			document.body.style.backgroundColor = "#d9a066";
			document.body.style.color = "#663931";
			document.body.style.fontFamily = "Bookman Old Style";
			themeSwitch = 0;
			
			
				}
			
			
	    }


function openNav() {
  document.getElementById("navSidepanel").style.width = "250px";
  document.getElementById("navbar").style.marginLeft = "250px";
  document.getElementById("frameLoad").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navSidepanel").style.width = "0";
  document.getElementById("navbar").style.marginLeft = "0";
  document.getElementById("frameLoad").style.marginLeft = "0";
}

