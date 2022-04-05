document.getElementById("submit").addEventListener("click",even);
function even()
 {
	let lb=t1.value;
	let up=t2.value;
	for(let i=lb;i<=up;i++)
	{
		if(i%2==0)
			{
				t3.value=i;
			}
	}
}