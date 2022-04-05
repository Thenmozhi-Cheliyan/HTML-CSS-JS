
document.getElementById("btn").addEventListener("click",clickDemo);
function clickDemo()
	{
		alert("Successfully Submited by CLICK");
	}

document.getElementById("btn1").addEventListener("dblclick",dblclickDemo);
function dblclickDemo()
	{
		alert("Successfully Submited by DOUBLECLICK");
	}

document.getElementById("btn").addEventListener("mouseover",mouseoverDemo);
function mouseoverDemo()
	{
		alert("Successfully Submited by MOUSEOVER");
	}

document.getElementById("btn2").addEventListener("mousemove",mousemoveDemo);
function mousemoveDemo()
	{
		alert("Successfully Submited by MOUSEMOVE");
	}



document.getElementById("car1").addEventListener("change",changeDemo1);
function changeDemo1()
{
	if(this.checked)
	{
		alert("KIA");
	}
	else
	{
		alert("Deselected KIA");
	}
}

document.getElementById("car2").addEventListener("change",changeDemo2);
function changeDemo2()
{
	if(this.checked)
	{
		alert("HYUNDAI");
	}
	else
	{
		alert("Deselected HYUNDAI");
	}
}

document.getElementById("car3").addEventListener("change",changeDemo3);
function changeDemo3()
{
	if(this.checked)
	{
		alert("HONDA");
	}
	else
	{
		alert("Deselected HONDA");
	}
}

document.getElementById("car4").addEventListener("change",changeDemo4);
function changeDemo4()
{
	if(this.checked)
	{
		alert("MARUTI");
	}
	else
	{
		alert("Deselected MARUTI");
	}
}


