
$(document).ready(function(){
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
						searchPopUp.click();
					}
				});
		});
			function buttonUp(){
				var inputVal = $('.search__input').val();
				inputVal = $.trim(inputVal).length;
				if( inputVal !== 0){
					$('.search__popup_invisible').css('display','none');
				} else {
					$('.search__input').val('');
					$('.search__popup_invisible').css('display','block');
				}
			}
