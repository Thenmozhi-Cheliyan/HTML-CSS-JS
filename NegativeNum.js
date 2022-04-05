

document.getElementById("button").addEventListener("click",negativeNumber)
function negativeNumber()
{
	var size=t1.value;
	var numbers=new numbers[size];
	for(var i=0;i<size;i++)
	{
		numbers[i]=t2.value;
	}
		//document.write("The Negative Numbers are: <br>");
	for(i=0;i<size;i++)
	{
		if(numbers[i]<0)
			{
				t3.value=numbers[i];
			}
	}
}
