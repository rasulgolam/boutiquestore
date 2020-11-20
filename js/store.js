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
	var footer = "\n\r<div class=\"org-wrapcens\">\n        <div id=\"org-footer\">\n            <!'+'-- ======= footer area start ======= --'+'>\n            <section class=\"footer-area section-padding\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"title-line\"><\/div>\n                        <\/div>\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"footer-widget logo-center\">\n                                <!'+'-- logo --'+'>\n                                <div class=\"logo footer-logo\">\n                                    <a href=\"https:\/\/www.ebay.com\/str\/okdeluxellc\"><img src=\"images\/logo.png\" alt=\"\"><\/a>\n                                <\/div>\n                                <!'+'-- \/. logo --'+'>\n                            <\/div>\n                        <\/div>\n\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"footer-widget\">\n                                <h3>QUICK LINKS<\/h3>\n                                <ul>\n                                    <li><a href=\"https:\/\/www.ebay.com\/str\/okdeluxellc\">shop products<\/a><\/li>\n                                    <li><a href=\"http:\/\/www.ebaystores.com\/okdeluxellc\/shipping.html\">shipping policy<\/a><\/li>\n                                    <li><a href=\"http:\/\/www.ebaystores.com\/okdeluxellc\/payment.html\">payment & return policy<\/a><\/li>\n                                    <li><a href=\"http:\/\/www.ebaystores.com\/okdeluxellc\/delivery.html\">delivery times<\/a><\/li>\n                                    <li><a href=\"http:\/\/www.ebaystores.com\/okdeluxellc\/feedback.html\">feedback<\/a><\/li>\n                                <\/ul>\n                            <\/div>\n                        <\/div>\n\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"footer-widget\">\n                                <h3>contact us<\/h3>\n                                <p>If you have any concerns or questions, please do not hesitate to contact us through ebay messages only.<\/p>\n                            <\/div>\n                        <\/div>\n\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"footer-widget\">\n                                <h3>newsletter<\/h3>\n                                <p>Add my Store to your Favorites and receive my email newsletters about new items and special promotions!<\/p>\n                                <a class=\"sub-btn\" href=\"https:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&rt=nc&sellerid=okdeluxe_usa&ssPageName=STRK%3AMEFS%3AADDSTR&AcceptSavedSeller=\" target=\"_blank\">Subscribe<\/a>\n                            <\/div>\n                        <\/div>\n                    <\/div>\n                <\/div>\n            <\/section>\n            <footer class=\"main-footer\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-center\">\n                            <div class=\"copy-right\">\n                                <p> Copyright 2018 | OKDeluxe LLC | ALL RIGHT RESERVED <\/p>\n                            <\/div>\n                        <\/div>\n                    <\/div>\n                <\/div>\n            <\/footer>\n            <!'+'-- ======= footer area end ======= --'+'>\n        <\/div>\n    <\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});