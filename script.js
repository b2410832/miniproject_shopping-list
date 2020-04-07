var input = document.getElementById ("inputNewStuff");
var button = document.querySelector ("button");
var ul = document.querySelector ("ul");
var li = document.getElementsByTagName ("li");

function appendNewList(){
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));
	ul.appendChild(newLi);
	input.value = "";
	
	// 新增的new list後也要有可點擊的button
	var listBtn = document.createElement("button");
	listBtn.appendChild(document.createTextNode("delete"));
	newLi.appendChild(listBtn);
	listBtn.onclick = removeParent;
}

function clickAddList(){
	if (input.value.length>0) {
		appendNewList();
	}
}

function pressAddList(event){
	if (input.value.length>0 && event.keyCode === 13) {
		appendNewList();
	}
}



button.addEventListener("click", clickAddList);
input.addEventListener("keydown", pressAddList);


// 點擊後toggle刪除線css於觸發event的DOM物件上//
function doneList(){
	var theTarget = event.target;
	theTarget.classList.toggle("done");
}

ul.addEventListener("click", doneList);



// 新增按鈕於原本的list後，點擊按鈕時remove觸發event的parentNode//
function deleteBtn(){
	var listBtn = document.createElement("button");
	listBtn.appendChild(document.createTextNode("delete"));
	li[i].appendChild(listBtn);
	listBtn.onclick = removeParent;
}
	
function removeParent(event){
	event.target.parentNode.remove();
}


// 不管li多長都要重複執行deleteBtn??//
for (i = 0; i < li.length; i++) {
	deleteBtn();
}






