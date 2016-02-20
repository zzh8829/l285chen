$("#aspiring_intro").hover(function(){
	$("#god_quote").show();
},
function(){
	$("#god_quote").hide();
});

$("#reason_to_live").click(function(){
	$("#mog_img").find('span > img').fadeIn();
	$("#reason_to_live").replaceWith('<img src="img/mog1.jpg">');
})
