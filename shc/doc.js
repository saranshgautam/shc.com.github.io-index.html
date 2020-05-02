function myfunction()
		{
			var x = document.getElementById('search').value;
			if(x=="bangalore")
			{
				document.getElementById("a").style.display = "block";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "none";
				document.getElementById("e").style.display = "none";
				document.getElementById("f").style.display = "none";
			}
			if(x == "chennai")
			{
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "block";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "none";
				document.getElementById("e").style.display = "none";
				document.getElementById("f").style.display = "none";
			}
			if(x == "delhi")
			{
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "block";
				document.getElementById("d").style.display = "none";
				document.getElementById("e").style.display = "none";
				document.getElementById("f").style.display = "none";
			}
			if(x == 'jaipur')
			{
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "block";
				document.getElementById("e").style.display = "none";
				document.getElementById("f").style.display = "none";
			}
			if(x == 'kolkata')
			{
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "none";
				document.getElementById("e").style.display = "block";
				document.getElementById("f").style.display = "none";
			}
			if(x == 'mumbai')
			{
				document.getElementById("a").style.display = "none";
				document.getElementById("b").style.display = "none";
				document.getElementById("c").style.display = "none";
				document.getElementById("d").style.display = "none";
				document.getElementById("e").style.display = "none";
				document.getElementById("f").style.display = "block";
			}
			document.getElementById("tell").style.display = "block";
		}
		function validate()
			{
				var x = document.forms["form"]["name"].value;
				if (x=="")
				{
					alert("Please enter your name\n");
					return false;
				}
				var y = document.forms["form"]["age"].value;
				if(y == 0)
				{
					alert("Please enter your age\n");
					return false;
				}
				else if((y<1)||(y>100))
				{
					alert ("Age must be between 1 and 100\n");
					return false;
				}
				var w = document.forms["form"]["email"].value;
				if (w == "")
				{
					alert("Enter email address\n");
					return false;
				}
				var z = document.forms["form"]["number"].value;
				if (z == 0)
				{
					alert("Please enter your mobile number\n");
					return false;
				}
				else if ((z < 1000000000) || (z > 10000000000))
				{
					alert("Please enter a valid mobile number\n");
					return false;
				}
				
				alert("Your details have been submitted\n");
				document.getElementsByTagName('form').reset();
				
			}