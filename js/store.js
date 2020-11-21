jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-background");
	$(".org-background table:eq(1)").addClass("org-content");
	$(".org-background table:eq(3)").addClass("content-middle");
	$(".v4stw").addClass("slider-content-middle");
	
	//Getting and Setting Store Categories
	if($("#org-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#org-categories").html($("#LeftPanel .lcat").html());
		}
		$("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $("#org-search #org-input").find("input[class=v4sbox]").val();
	$("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#org-search #org-submit").find("input").click(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
    
	//Footer
	var d = new Date();
	var footer = "\n\r";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});
