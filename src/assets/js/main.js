

var searchPopUp = $('.search__popup_invisible');
var inputBox = $('.search__input');
var isOpen = false;

searchPopUp.click(function(){
	if(isOpen == false){
		inputBox.addClass('search__input_opened');
		inputBox.focus();
		isOpen = true;
	} else {
		inputBox.removeClass('search__input_opened');
		inputBox.focusout();
	  	inputBox.val('');
		isOpen = false;
	}
});

searchPopUp.mouseup(function(){
		return false;
	});
inputBox.mouseup(function(){
		return false;
	});
$(document).mouseup(function(){
		if(isOpen == true){
			$('.search__popup_invisible').css('display','block');
			inputBox.removeClass('search__input_opened');
			inputBox.focusout();
			isOpen = false;
		}
	});

//when input has value, change toggler to a submit btn
$('.search__input').keyup(function(){
	var inputVal = $('.search__input').val();
	inputVal = $.trim(inputVal).length;
	if(inputVal !== 0){
		$('.search__popup_invisible').css('display','none');
	} else {
		$('.search__popup_invisible').css('display','block');
	};
});

//hide nav-bar toggler when click outside
$(document).mouseup(function(e){
	if ($(".navbar-collapse").hasClass("show")){
		var container = $(".navbar-collapse");
	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0){
			$(".navbar-toggler").trigger("click");
		}
	}
});