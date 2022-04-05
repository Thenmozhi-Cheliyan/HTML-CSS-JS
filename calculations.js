document.getElementById("submit").addEventListener("click",clickCalculate);
function clickCalculate()
{
	if(unit1.value=="METER" && unit2.value=="MILES")
	{	
		t2.value=parseFloat(t1.value)*0.00062137;
	}	
	else if(unit1.value=="METER" && unit2.value=="FEET")
	{
		t2.value=parseFloat(t1.value)*3.2808;
	}
	else if(unit1.value=="METER" && unit2.value=="INCHES")
	{
		t2.value=parseFloat(t1.value)*39.370;
	}
	else if(unit1.value=="METER" && unit2.value=="CENTIMETER")
	{
		t2.value=parseFloat(t1.value)/0.01;
	}
	else if(unit1.value=="METER" && unit2.value=="YARDS")
	{
		t2.value=parseFloat(t1.value)*1.0936;
	}
	else
	{
		t2.value=parseFloat(t1.value)/1000;
	}


}