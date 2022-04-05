document.getElementById("submit").addEventListener("click",countVowels);
function countVowels()
{
	var str=t1.value;
	var vowels=/[aeiou]/g;
	var count=str.match(vowels);
	t2.value=count.length;
}