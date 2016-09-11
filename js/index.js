window.onload=function(){



// ---------------图片轮播----------------------------------
var Index=0;
var timeInterval=3000; 
var arr=new Array(); 
var obj=document.getElementById("img1"); 
arr[0]="1.jpg"; 
arr[1]="2.jpg"; 
arr[2]="3.jpg"; 
arr[3]="4.jpg"; 
arr[4]="5.jpg"; 

setInterval(changeImg,timeInterval); 

function changeImg() 
{ 

if (Index==arr.length-1) 
{ 
Index=0; 
} 
else 
{ 
Index+=1; 
} 
obj.src="img/banner"+arr[Index]; 
} 
//
var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
var a3=document.getElementById("a3");
var a4=document.getElementById("a4");
var a5=document.getElementById("a5");

a1.onclick=function(){
	  
	  obj.src="img/banner"+arr[0];
	 
//	  alert(00)
}

a2.onclick=function(){
	  obj.src="img/banner"+arr[1]; 
	  
}
a3.onclick=function(){
	  obj.src="img/banner"+arr[2]; 
}
a4.onclick=function(){
	  obj.src="img/banner"+arr[3]; 
}
a5.onclick=function(){
	  obj.src="img/banner"+arr[4]; 
}


// ------------------无缝滚动-----------------------------------------  


$('#element_id').cxScroll({
  direction: 'left',
  speed:'1000',
  time:'500'
});



}