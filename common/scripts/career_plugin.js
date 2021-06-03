// JavaScript Document

$(document).ready(function()
{
	$("#fragment-1").click(function()
	{
		$("#apply_detail").fadeOut("slow");
		$("#md_detail").fadeOut("slow");
		$("#pm_detail").fadeOut("slow");
		$("#sa_detail").fadeOut("slow");
		$("#gd_detail").show("slow");
	});
	$("#fragment-2").click(function()
	{
		$("#apply_detail").fadeOut("slow");
		$("#gd_detail").fadeOut("slow");
		$("#pm_detail").fadeOut("slow");
		$("#sa_detail").fadeOut("slow");
		$("#md_detail").show("slow");
	});
	$("#fragment-3").click(function()
	{
		$("#apply_detail").fadeOut("slow");
		$("#gd_detail").fadeOut("slow");
		$("#md_detail").fadeOut("slow");
		$("#sa_detail").fadeOut("slow");
		$("#pm_detail").show("slow");
	});
	$("#fragment-4").click(function()
	{
		$("#apply_detail").fadeOut("slow");
		$("#gd_detail").fadeOut("slow");
		$("#md_detail").fadeOut("slow");
		$("#pm_detail").fadeOut("slow");
		$("#sa_detail").show("slow");
	});
});


$(document).ready(function () {
  "use strict";
  $("#scroll_area").perfectScrollbar();
});

