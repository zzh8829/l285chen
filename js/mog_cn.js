$("#mog_now").click(function(){
	var r = confirm("您确定要膜G吗？");
	if (r == true) {
		alert("恭喜你！G神的光芒照耀着你！");
	}
	else {
		$("#mog_now").hide();
		$("#mog_now").parent().find("img").show();
	}
})