// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require rails.validations
//= require_tree .



var tabs = {
	"master" : {
	},
	
	"branch 1": {
	},
	
	"branch 2": {
	},
	
	"branch 3" : {
	},
	
	"last branch": {
	}
}

var totalTabs;
$(document).ready(function(){
	totalTabs=0;
	$.each(tabs,function(){totalTabs++;})
	

	$('#feedWidget').show().mouseleave(function(){
		$('.dropDownList').remove();
		$('#activeTab').removeClass('hover');
	}).mouseenter(function(){
		if(totalTabs>1) $('#activeTab').addClass('hover');
	});

	$('#activeTab').click(showDropDown);

	$('.dropDownList div').live('click',function(){
		showDropDown();
		showTab($(this).text());
		$('#activeTab').removeClass('hover');
	});
	
	showTab('master');
});


function showTab(key)
{
	var obj = tabs[key];
	if(!obj) return false;

	$('#activeTab').text(key);
}

function showDropDown()
{
	if(totalTabs<2) return false;
	
	if($('#feedWidget .dropDownList').length)
	{
		$('.dropDownList').slideUp('fast',function(){ $(this).remove(); })
		return false;
	}
	
	var activeTab = $('#activeTab');
	
	var offsetTop = (activeTab.offset().top - $('#feedWidget').offset().top )+activeTab.outerHeight() - 5;
	
	var dropDown = $('<div>').addClass('dropDownList').css({

			'top'	: offsetTop,
			'width'	: activeTab.width()
	
	}).hide().appendTo('#feedWidget')
	
	$.each(tabs,function(j){
		if(j==activeTab.text()) return true;
		
			$('<div>').text(j).appendTo(dropDown);
	})
	
	dropDown.slideDown('fast');
}