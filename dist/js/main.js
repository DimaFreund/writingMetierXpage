$( document ).ready(function(){
    var body = document.body,
        timer;
    var height_window = window.innerHeight;
    var width_window = window.innerWidth;
    var height_header = document.querySelector('header').clientHeight;
    var btnToTop = document.querySelector('.btn-to-top');
    var infItemBgImg = document.querySelectorAll('.colored-desc-inf .inf-item-bgImg');
    var burgerBtn = document.querySelector('.burger');
    var mainMenuSection = document.querySelector('.main-menu-section');

    var popupFormSection = document.querySelector('.popupFormSection');
    var openPopupBtns = document.querySelectorAll('.open-popup');
    var overflow = document.querySelector('.overflowDark');



    // general functions
    function scroll_to_top(speed) {
        $('body, html').animate({scrollTop: 0}, speed);
    }

    function toogleClass(elem, className){
        elem.classList.toggle(className);
    }

    //coordinats element
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    //coordinats element end

    // general functions _end



    //popupFormSection style
    function positionpopupFormSection(height_window, width_window, popupFormSection){
        var height_popupFormSection = popupFormSection.offsetHeight;
        var width_popupFormSection = popupFormSection.offsetWidth;

        popupFormSection.style.top = (height_window/2) - (height_popupFormSection/2) - 30 + 'px';

        if((height_popupFormSection + 60) > height_window){
            popupFormSection.style.top = '30px';
            popupFormSection.style.maxHeight = height_window - 60 + 'px';
            popupFormSection.style.overflow = 'auto';
        }
        else {
            popupFormSection.style.maxHeight = 'none';
            popupFormSection.style.overflow = 'visible';
        }

        popupFormSection.style.left = (width_window/2) - (width_popupFormSection/2) + 'px';
    }
    //popupFormSection style end

    //open popup form
    function tooglePopup(){
        toogleClass(overflow, 'open');
        toogleClass(body, 'not-scrolling');
        toogleClass(popupFormSection, 'open');
    }
    if(openPopupBtns.length>0){
        for(i=0; i<openPopupBtns.length; i++){
            openPopupBtns[i].addEventListener('click', function(){
                tooglePopup();
                positionpopupFormSection(height_window, width_window, popupFormSection);
            });
        }
    }

    if(overflow){
        overflow.addEventListener('click', function(){
            tooglePopup();
        });
    }
    //open popup form end




    //padding for sidebar on order registration page
    if(document.querySelector('.orderRegistration-page-content .tabs-title') && document.querySelector('.orderRegistration-page-content .sidebar')){

        var orderRegistrationSidebar = document.querySelector('.orderRegistration-page-content .sidebar');
        var tabsTitle = document.querySelector('.orderRegistration-page-content .tabs-title');
        var tabsTitleTop = getCoords(tabsTitle).top;

        if(width_window > 1025){
            orderRegistrationSidebar.style.paddingTop = (tabsTitleTop - height_header - 75) + 'px';
        }
        else if(width_window > 601) {
            orderRegistrationSidebar.style.paddingTop = '30px';
        }
        else {
            orderRegistrationSidebar.style.paddingTop = 0;
        }
    }



    //show menu
    burgerBtn.addEventListener('click', function(){
        this.classList.toggle('close');
        mainMenuSection.classList.toggle('show');
        var height_header = document.querySelector('header').offsetHeight;
        mainMenuSection.style.top = height_header + 'px';
    });
    //show menu end


    //bg img position in colored section infographic
    function infItemBgImgStyle(width_window){
        if(width_window <= 770){
            for(var i = 0; i < infItemBgImg.length; i++){
                infItemBgImg[i].style.backgroundPosition = 'center';
            }
        }
    }
    infItemBgImgStyle(width_window);
    //bg img position in colored section infographic _end


    //back to top page btn
    btnToTop.addEventListener('click', function(e){
        scroll_to_top(350);
    });
    //back to top page btn _end


    //add attribute disabled
    if(document.querySelector('.radioBtn-group li')){
        var radioBtnGroupLi = document.querySelectorAll('.radioBtn-group li');

        for(i = 0; i < radioBtnGroupLi.length; i++){
            if(radioBtnGroupLi[i].className == 'inactive-item'){
                radioBtnGroupLi[i].querySelector('input').setAttribute('disabled', 'disabled');
            }else {
                radioBtnGroupLi[i].querySelector('input').removeAttribute('disabled');
            }
        }
    }
    //add attribute disabled end


    //accordion
    // if(document.querySelector('.title-collapse-item')){
    //     var titleBtn = document.querySelectorAll('.title-collapse-item');
    //
    //     // titleBtn.forEach(function(item){
    //     //     item.addEventListener('click', function(e){
    //     //         var itemParent = item.closest('.collapse-item');
    //     //         itemParent.classList.toggle('active-item');
    //     //
    //     //
    //     //         if(item.closest('.content-collapse-item')){
    //     //             var itemSiblings = item.closest('.content-collapse-item').children;
    //     //             var itemSiblingsArr = [];
    //     //             for(var i = 0; i < itemSiblings.length; i++){
    //     //                 itemSiblingsArr.push(itemSiblings[i]);
    //     //             }
    //     //         }
    //     //     });
    //     // });
    //
    //     for(i = 0; i < titleBtn.length; i++){
    //         titleBtn[i].addEventListener('click', function(e){
    //             var itemParent = this.closest('.collapse-item');
    //             itemParent.classList.toggle('active-item');
    //         });
    //     }
    // }


    if($('.title-collapse-item')){
        $('.title-collapse-item').each(function(idx){
            var thatElem = $(this);
            thatElem.click(function () {
                var itemParent = thatElem.parent('.collapse-item');
                itemParent.toggleClass('active-item');
            });
        });
    }

    //accordion end




    //registration-page
    if(document.querySelector('.returnedCustomer')){
        var returnedCustomer = document.querySelector('.returnedCustomer');
        var newCustomer = document.querySelector('.newCustomer');
        var confirmPassword = document.querySelector('.confirmPassword');

        returnedCustomer.addEventListener('click', function(e){
            confirmPassword.style.display = 'none';
            this.classList.add('active-item');
            newCustomer.classList.remove('active-item');
        });
        newCustomer.addEventListener('click', function(e){
            confirmPassword.style.display = 'flex';
            this.classList.add('active-item');
            returnedCustomer.classList.remove('active-item');
        });
    }
    //registration-page end


    //counter calculator
    function catalogItemCounter(field){

        var fieldCount = function(el) {

            var
                // Мин. значение
                min = el.data('min') || false,

                // Макс. значение
                max = el.data('max') || false,

                // Кнопка уменьшения кол-ва
                dec = el.prev('.dec'),

                // Кнопка увеличения кол-ва
                inc = el.next('.inc');

            function init(el) {
                if(!el.attr('disabled')){
                    dec.on('click', decrement);
                    inc.on('click', increment);
                }

                // Уменьшим значение
                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if(!min || value >= min) {
                        el[0].value = value;
                    }
                }

                // Увеличим значение
                function increment() {
                    var value = parseInt(el[0].value);

                    value++;

                    if(!max || value <= max) {
                        el[0].value = value++;
                    }
                }

            }

            el.each(function() {
                init($(this));
            });
        };

        $(field).each(function(){
            fieldCount($(this));
        });
    }

    catalogItemCounter('.fieldCount');
    catalogItemCounter('.fieldCountSources');
    //counter calculator end


    //orders page - see more order details
    if(document.querySelector('.orderIem-section')){
        var orderIemSection = document.querySelectorAll('.orderIem-section');
        for(var i = 0; i < orderIemSection.length; i++){
            clickBtn(orderIemSection[i]);
        }
    }

    function clickBtn(row){
        var moreDetailsBtn = row.querySelector('.moreDetailsBtn');
        var orderDetailsSection = row.querySelector('.order-details-section');
        moreDetailsBtn.addEventListener('click', function(e){
            toogleClass(orderDetailsSection, 'openSection');
            console.log(moreDetailsBtn, orderDetailsSection);
        });
    }
    //orders page - see more order details end


    //orderStatusList
    if(document.querySelector('.select-section .allVariants')){
        var inProgressElem = document.querySelectorAll('.rowInProgress .statusCell');
        var canceledElem = document.querySelectorAll('.rowCanceled .statusCell');
        var doneElem = document.querySelectorAll('.rowDone .statusCell');
        chacngeContent (width_window);
    }

    function chacngeContent (widthWindow){
        var allVariants = document.querySelector('.select-section .allVariants');
        if(widthWindow <= 600){
            allVariants.innerHTML = 'All';
            addImg(inProgressElem, 'dots.svg', '20', '7');
            addImg(canceledElem, 'close.svg', '13', '13');
            addImg(doneElem, 'done.svg', '13', '14');
        }
        else {
            allVariants.innerHTML = 'Status';
            removeImg(inProgressElem, 'active');
            removeImg(canceledElem, 'unpaid');
            removeImg(doneElem, 'completed');
        }
    }


    function addImg(elem, imgName, imgW, imgH) {

        for(i = 0; i < elem.length; i++){
            elem[i].innerHTML = '';
            var img = document.createElement('img');
            img.setAttribute('src', 'images/' + imgName);
            img.setAttribute("width", imgW);
            img.setAttribute("height", imgH);
            elem[i].appendChild(img);
        }
    }
    function removeImg(elem, text) {
        for(i = 0; i < elem.length; i++){
            if(elem[i].querySelector('img')){
                elem[i].querySelector('img').remove();
            }
            elem[i].innerHTML = text;
        }
    }
    //orderStatusList end


    // cut str topicCell
    if(document.querySelector('.rowOrder .topicCell')){
        var topicCellAll = document.querySelectorAll('.rowOrder .topicCell');
        lengthTopicCell(topicCellAll);
    }

    function lengthTopicCell(elem){
        for(i = 0; i < elem.length; i++){
            var strItem = elem[i].innerHTML;
            var arrItem = strItem.split('');

            if(arrItem.length > 40){
                arrItem.splice(40);
                arrItem.push(' ...');
            }

            var newStr = arrItem.join('');
            elem[i].innerHTML = newStr;
        }
    }
    // cut str topicCell end



    // resize window
    window.addEventListener('resize', function(e){
        var width_window = window.innerWidth;
        var height_window = window.innerHeight;
        var popupFormSection = document.querySelector('.popupFormSection');

        infItemBgImgStyle(width_window);

        //padding for sidebar on order registration page
        if(document.querySelector('.orderRegistration-page-content .tabs-title') && document.querySelector('.orderRegistration-page-content .sidebar')){
            var orderRegistrationSidebar = document.querySelector('.orderRegistration-page-content .sidebar');
            var tabsTitle = document.querySelector('.orderRegistration-page-content .tabs-title');
            var tabsTitleTop = getCoords(tabsTitle).top;
            var height_header = document.querySelector('header').clientHeight;

            if(width_window > 1025){
                orderRegistrationSidebar.style.paddingTop = (tabsTitleTop - height_header - 75) + 'px';
            }
            else if(width_window > 601) {
                orderRegistrationSidebar.style.paddingTop = '30px';
            }
            else {
                orderRegistrationSidebar.style.paddingTop = 0;
            }
        }
        //padding for sidebar on order registration page end

        //orderStatusList
        if(document.querySelector('.select-section .allVariants')){
            chacngeContent (width_window);
        }
        //orderStatusList end

        // cut str topicCell
        if(document.querySelector('.rowOrder .topicCell')){
            var topicCellAll = document.querySelectorAll('.rowOrder .topicCell');
            lengthTopicCell(topicCellAll);
        }
        // cut str topicCell end

        if(popupFormSection){
            positionpopupFormSection(height_window, width_window, popupFormSection);
        }
    });
    // resize window end


    //scroll animate elements
    if ($(window).width() >= 1025) {
        var movingToTop = document.querySelectorAll('.movingToTop');
        var movingToBottom = document.querySelectorAll('.movingToBottom');
        if (movingToTop.length > 0) {
            var boxesToTop = [];
            for (i = 0; i < movingToTop.length; i++) {
                boxesToTop[i] = {
                    element: movingToTop[i],
                    top: getCoords(movingToTop[i]).top
                };
                boxesToTop[i].element.style.transform = 'translateY(70px)';
            }
            window.addEventListener('scroll', function (e) {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                for (i = 0; i < movingToTop.length; i++) {
                    if (boxesToTop[i].top > $(window).height()) {
                        var k1 = 250 - (scrolled / 7);
                    } else {
                        var k1 = 50 - (scrolled / 7);
                    }
                    boxesToTop[i].element.style.transform = 'translateY(' + k1 + 'px)';
                }
            });
        }
        if (movingToBottom.length > 0) {
            for (i = 0; i < movingToBottom.length; i++) {
                var ElemToBottom = movingToBottom[i];
                var positionTop_ElemToBottom = getCoords(ElemToBottom).top;

                if (positionTop_ElemToBottom > $(window).height()) {
                    var start = positionTop_ElemToBottom - $(window).height(); // 690
                    // var end = positionTop_ElemToBottom + $(window).height() - 900;

                    ElemToBottom.style.transform = 'translateY(-70px)';

                    window.addEventListener('scroll', function (e) {
                        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                        if (scrolled >= start) {
                            var k2 = -130 + (scrolled / 10);
                            ElemToBottom.style.transform = 'translateY(' + k2 + 'px)';
                        }
                    });
                }

            }
        }
    }
    // //scroll animate elements end



    //scrolling window
    window.addEventListener('scroll', function(e){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        //scroll animate elements
        //scroll animate elements end
        // show/hide btn-to-top
        if(scrolled > height_window){
            btnToTop.classList.add('active-item');
        } else {
            btnToTop.classList.remove('active-item');
        }
        // show/hide btn-to-top
    });
    window.addEventListener('scroll', function() {
        clearTimeout(timer);
        if(!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover')
        }

        timer = setTimeout(function(){
            body.classList.remove('disable-hover')
        },500);
    }, false);
    // scrolling window end

    //move elem

    //move elem end
  $('.n_footer_expand_list_btn').on('click', function(){
    $(this).siblings('ul').children('.n_footer_expand_list_item').removeClass('n_footer_expand_list_item_disabled');
    $(this).addClass('n_footer_expand_list_btn_disabled');
    $(this).parent('.n_footer_expand_list').siblings('.n_footer_expand_list').children('.n_footer_expand_list_btn').removeClass('n_footer_expand_list_btn_disabled');
$(this).parent('.n_footer_expand_list').siblings('.n_footer_expand_list').find('.n_footer_expand_list_item:gt(1)').addClass('n_footer_expand_list_item_disabled');

  });
  function topSubmenu(){
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll){
           $("header").addClass('header_minified');
       } else {
          $("header").removeClass('header_minified');
       }
       previousScroll = scroll;
    });
  };
  if( $(window).width() >= 1024 ){
    $(window).scroll(topSubmenu());
  }
  if( $(window).width() < 1024){
    if( $('header').hasClass('header_minified') ){
      $("header").removeClass('header_minified');
    }
  }
//  $(window).resize(function(){
//    if( $(window).width() >= 1024 ){
//      $(window).scroll(topSubmenu());
//    }
//    if( $(window).width() < 1024){
//      if( $('header').hasClass('header_minified') ){
//        $("header").removeClass('header_minified');
//      }
//    }
//  });
  $('.n_title-collapse-item').click(function(){
    $(this).siblings('.n_content-collapse-item').toggleClass('n_content-collapse-item_active');
    $(this).toggleClass('n_title-collapse-item_active');
  });
  function validateRegForm(){
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var mail = $('#registration_form_email');
    var errorSpan = $('.reg_form_block span');
    mail.on('change',function(){
    if(mail.val() != ''){
      if(mail.val().search(pattern) == 0){
        errorSpan.removeClass('reg_form_error_email');
        $('.reg_form button').attr('disabled', false);
        mail.removeClass('reg_form_error_for_input');
      }else{
        errorSpan.addClass('reg_form_error_email');
        $('.reg_form button').attr('disabled', true);
        mail.addClass('reg_form_error_for_input');
      }
    }else{
      errorSpan.addClass('reg_form_error_email');
      $('.reg_form button').attr('disabled', true);
      mail.addClass('reg_form_error_for_input');
    }
    });
  }
  validateRegForm();
  $('.col input').focusin(function(){
    $(this).siblings('.animated_label').addClass('animated_label_active');
  });
   $('.col input').focusout(function(){
     if($(this).val() == ''){
      $(this).siblings('.animated_label').removeClass('animated_label_active');
     }else{
      $(this).siblings('.animated_label').addClass('animated_label_active');
    }
   });
  $('.orders_switch_btn').click(function(){
    $(this).addClass('orders_switch_btn_active');
    $(this).siblings().removeClass('orders_switch_btn_active');
  });
  $('.header_bonus_close').click(function(){
    $('header').removeClass('header_bonus_above');
    $('.header_bonus').addClass('header_bonus_disabled')
  });
  $('.c_order_topic .btn-transp-withoutBorder').click(function(){
    $(this).siblings('.c_order_topic_wrapper').addClass('c_order_topic_wrapper_full');
    $(this).css({'display':"none"});
  });
  $('.cwb_wrapper .btn-transp-withoutBorder').click(function(){
    $(this).siblings('.cwb_uploaded_files').toggleClass('cwb_uploaded_files_active');

  });
  $('.hideMoreFiles').click(function(){
    $(this).text(function(i, v){
       return v === 'Show more files' ? 'hide' : 'Show more files';
    })
  });
//   	var time = 7200000;
//   	function getTime(time){
//        //var four_hours = 14400000; // 4 часа
////        if (time == 0) {
////           document.getElementById("countdown_timer_text_11629").style.opacity = "0";
////        };
//        var countDownDate = new Date().getTime() + time;// нынешнее время + 4 часа
//        var my_interval = setInterval(Clock,1000);// запускаем таймер
//        function Clock(){
//          var now = new Date().getTime();// нынешнее время
//          var distance = countDownDate - now;//
//          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//
//          if (hours < 10) {
//            hours = '0'+ hours;
//          };
//          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));//
//          if (minutes < 10) {
//            minutes = '0'+ minutes;
//          };
//          var seconds = Math.floor((distance % (1000 * 60)) / 1000);//
//          if (seconds < 10) {
//            seconds = '0'+ seconds;
//          };
//          document.getElementById("timer_hours").innerHTML = hours ;//
//          document.getElementById("timer_minutes").innerHTML = minutes ;
//          document.getElementById("timer_seconds").innerHTML = seconds ;
////          if (distance < 3000) {
////            countDownDate = new Date().getTime() + four_hours_11629;//обновляем переменную даты
////          };
//        } 
//   	}
//   	getTime(time);
   
  
  
  
  
});


// init map
// function initMap() {
//     var uluru = {lat: 50.418488, lng: 30.428053};
//     var map = new google.maps.Map(document.getElementById('map-wrapper'), {
//         zoom: 14,
//         center: uluru,
//         scrollwheel: false
//     });
//
//     var image = 'images/maps_marker.svg';
//     var beachMarker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         icon: image
//     });
//
// }
// init map end