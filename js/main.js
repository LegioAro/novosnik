$(document).ready(function () {

    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //Выпадающие списки
    //Закрыть select по нажатию на область
    $(document).mouseup(function (e) {
        var container = $(".select");
        if (container.has(e.target).length === 0) {
            container.children('.select__list-wrapper,.select__list,.select__result').removeClass('active');
        }
    });
    // расскрытие select 
    $('.select__result').click(function () {
        if ($(this).hasClass('active')) {
            $('.select__list-wrapper,.select__list,.select__result').removeClass('active');
        } else {
            $('.select__list-wrapper,.select__list,.select__result').removeClass('active');
            $(this).closest('.select').children('.select__list-wrapper,.select__list,.select__result').addClass('active');
        }
    })
    //работа радиокнопки
    $('.select input[type="radio"]').on("change", function () {
        let inputValue = $(this).closest('.select').find('.select__input:checked').next().text();
        $(this).closest('.select').children('.select__result').children('p').text(inputValue);
        $(this).closest('.select').children('.select__list,.select__result,.select__list-wrapper').removeClass('active');
    });

    $('.search__form-wrapper').submit(function () {
        $('.defalt').prop("checked", true);
    })

    //работа checkbox
    $('.select input[type="checkbox"]').on("change", function () {

        if ($(this).closest('.select').find('.defalt').is(':checked')) {
            $(this).closest('.select').find('.select__input:checked').not('.defalt').prop('checked', false);
        } else {
            $(this).closest('.select').find('.select__input').not('.defalt').click(function () {
                $(this).closest('.select').find('.defalt').prop('checked', false);
            });
        }
        if ($(this).closest('.select').find('.select__input:checked').length < 1) {
            $(this).prop('checked', true);
        }


        let inputValue = $(this).closest('.select').find('.select__input:checked').next();
        let result = [];
        let a = [];
        for (let i = 0; i < inputValue.length; i++) {
            result.push(inputValue[i]);
        }
        for (let j = 0; j < result.length; j++) {
            let b = result[j];
            a.push(b.innerText);
        }
        $(this).closest('.select').children('.select__result').children('p').text(a);
    });


    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //slider


    $('.video__items').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.event__items').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.announcement__slider-list').slick({
        slidesToShow: 4,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.announcement__slider-big',
    });

    $('.announcement__slider-big').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.announcement__slider-list',
    });






})