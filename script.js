//your JS code here. If required.
let findLength=(str)=>{
	let n=str.length;
	return n;
}
let urlLength = findLength(window.location.href);
alert("The length of the URL is: " + urlLength);