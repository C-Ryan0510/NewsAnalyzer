console.log("insert javascript executed");
var post = document.getElementsByClassName("_5pcp _5lel _2jyu _232_");
var btn = [post.length];

controlFrame.style.display = "none";
for (var i = 0; i <= post.length - 1; i++) {
	btn[i] = document.createElement("BUTTON")
    btn[i].innerHTML = "CLICK ME";                   // Insert text
    ifrm[i] = document.createElement("iframe");
    ifrm[i] = setAttribute("src", "http://google.com/");
    btn[i].onclick = toggleOnOff(); 
}

for (var i = 0; i <= post.length - 1; i++){
	post[i].append(btn[i]);     // Append button to div
    console.log("button"+i+"created");
}
var num = post.length - 1;

post.length.addEventListener("change", autoappend);

function autoappend(){
	for (; num <= post.length - 1; i++){
		post[i].append(btn[num]);     // Append button to div
		console.log("button"+num+"created");
	}
	num = post.length - 1;
}

function toggleOnOff() {
    var controlFrame = ifrm[num];
    if (controlFrame.style.display === "block") {
      controlFrame.style.display = "none";
    } else {
      controlFrame.style.display = "block";
    }
  }
