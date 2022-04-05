document.getElementById("b1").addEventListener("click",stringPad);
function stringPad() 
{
	var str1=t1.value;
    var str2;
    if(p1.value=="Left")
    {
         str2=String(str1).padStart(12,'*');
    }
    else
    {
        str2=String(str1).padEnd(12,'*');
    }
    t3.value=str2;
}
