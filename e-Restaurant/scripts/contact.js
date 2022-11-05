

function validateForm() 
	{
		//Validation of name and surname values.
		var name_surname = document.forms['form1'][0].value;
		if (name_surname==null ||name_surname=="")
		{
			alert("The Name-Surname field cannot be left blank.");
			return false;
		}
	
		
		//Validation of Email value.
		var email = document.forms['form1'][1].value;
		if (email==null ||email=="")
		{
			alert("The Email field cannot be left blank.");
			return false;
		}
		
        //Title field
        var title = document.forms['form1'][2].value;
		if (title==null || title=="")
		{
			alert("The Title field cannot be left blank.");
			return false;
		}

         //Content field
         var content = document.forms['form1'][3].value;
         if (content==null || content=="")
         {
             alert("The Content field cannot be left blank.");
             return false;
         }
		
	}