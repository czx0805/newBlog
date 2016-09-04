function loadPage(type){
	location.href = "view/infoList.html?"+type;
}
$(function(){
	setTimeout(function(){
		$("header").css({"transform":"scale(1)","transition": "1s"});	
		$(".tag").css({transform: "translateY(0)"});
	},0);
	$(".tag").eq(0).click(function(){
		loadPage("work");
	});
	$(".tag").eq(1).click(function(){
		loadPage("blog");
	});
	$(".tag").eq(2).click(function(){
		loadPage("about");
	});
});