var pi = 3.14159;

function alcCircleArea(r)
{
	if( r == null || r == 0)
	{
		alert('Enter a value for radius');
	}
	else
	{
		var area = pi*r*r;
		document.getElementById('data_result').innerHTML = "The Area of the Circle with radius " +r+ " is " +area;
	}

}