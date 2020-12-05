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
	var footer = "\n\r<div class=\"org-wrapcens\">\r\n<div id=\"org-footer\">\r\n<div class=\"footer-area\">\r\n<div class=\"ftr-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-4\">\r\n<div class=\"ftr-widget\">\r\n<!-- Hdr Logo -->\r\n<div class=\"ftr-logo\">\r\n<a target=\"_blank\" href=\"https:\/\/www.ebay.co.uk\/str\/misshotshot\">\r\n<img src=\"images\/logo.png\" alt=\"\">\r\n<\/a>\r\n<\/div><!-- \/\/ End Hdr Logo -->\r\n<\/div>\r\n<\/div>\r\n<div class=\"col-lg-3 offset-lg-1\">\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">Quick Links<\/h4>\r\n<ul class=\"ql-widget\">\r\n<li><a target=\"_blank\" href=\"https:\/\/www.ebay.co.uk\/str\/misshotshot\">Shop Products<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"https:\/\/www.ebay.co.uk\/usr\/boutiquestoreuk\">About Us<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/feedback.ebay.co.uk\/ws\/eBayISAPI.dll?ViewFeedback2&userid=boutiquestoreuk&ftab=AllFeedback&myworld=true&rt=nc\">Feedback<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/my.ebay.co.uk\/ws\/eBayISAPI.dll?AcceptSavedSeller&mode=0&preference=0&ssPageName=STRK:MEFS:ADDMP&sellerid=boutiquestoreuk\">Add to my favourite<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/contact.ebay.co.uk\/ws\/eBayISAPI.dll?FindAnswers&requested=boutiquestoreuk&_trksid=p2545226.m2531.l4583&rt=nc\">Contact Us<\/a><\/li>\r\n<\/ul>\r\n<\/div>\r\n<\/div>\r\n<div class=\"col-lg-4\">\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">Newsletter<\/h4>\r\n<div class=\"newsletter-widget\">\r\n<p>Add my Store to your Favorites and receive my email newsletters about new items and special promotions!<\/p>\r\n<a href=\"http:\/\/my.ebay.co.uk\/ws\/eBayISAPI.dll?AcceptSavedSeller&mode=0&preference=0&ssPageName=STRK:MEFS:ADDMP&sellerid=boutiquestoreuk\">subscribe<\/a>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<div class=\"ftr-btm\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"copyright-txt text-center\">\r\nCopyright \u00a9 2020 Boutique Store. All rights reserved.\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});