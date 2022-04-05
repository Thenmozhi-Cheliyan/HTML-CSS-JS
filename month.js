document.getElementById("submit").addEventListener("click",getmonth);
function getmonth()
 {
 	var mlist=["January","February","March","April","May","June","July","August","Septemper","October","November","December"];
	var dt=new Date(date.value);
	t1.value=mlist[dt.getMonth()];
	var days= new Date(dt.getFullYear(), dt.getMonth()+1, 0);
	t2.value=days.getDate();
}