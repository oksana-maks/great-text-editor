// При кліку на іконки задаємо:
$('header div i').click(function (event) {
    // жирність 
    if ($(event.target).hasClass('fa-bold')) {
        $('.box_text p').toggleClass('bold');
    }
    //курсивність 
    else if ($(event.target).hasClass('fa-italic')) {
        $('.box_text p').toggleClass('italic');
    }
    //підкресленість 
    else if ($(event.target).hasClass('fa-underline')) {
        $('.box_text p').toggleClass('underline');
    }
    //закресленість 
    else if ($(event.target).hasClass('fa-strikethrough')) {
        $('.box_text p').toggleClass('line_through');
    }
    //вирівнювання по лівому краю
    else if ($(event.target).hasClass('fa-align-left')) {
        $('.box_text p').removeClass("center right").addClass("left");
    }
    //вирівнювання по центру
    else if ($(event.target).hasClass('fa-align-center')) {
        $('.box_text p').removeClass("left right").addClass("center");
    }
    //вирівнювання по правому краю
    else if ($(event.target).hasClass('fa-align-right')) {
        $('.box_text p').removeClass("center left").addClass("right");
    }
});


// При кліку на певну іконку з'являється блок з родовідом шрифта або його розміром
$('.display_blok').click(function () {
    $(this).next('div').css("display", "block")
})

// Задаємо тексту родовід шрифта 
$('.fonts').click(function (event) {
    let font_family = $(event.target).css("font-family");
    $('.box_text p').css("font-family", font_family);
    $('.fonts').css("display", "none");
})

// Задаємо тексту розмір 
$('.size').click(function (event) {
    let font_size = $(event.target).css("font-size");
    $('.box_text p').css("font-size", font_size);
    $('.size').css("display", "none");
})

// Задаємо тексту колір 
$('.big_box_for_color').click(function (event) {
    let color_text = $(event.target).css("background-color");
    $('.box_text p').css("color", color_text);
})

// Задаємо body картинку фону 
$('#profile').click(function (event) {
    let image_background = $(event.target).css("background-image");
    $('body').css("background", image_background);
})

// Задаємо body колір фону 
$('#home').click(function (event) {
    let color_background = $(event.target).css("background-color");
    $('body').css("background", color_background);
})

// Задаємо body картинку фону вибраної з наших файлів
$('#file').change(function onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = function () {
        $('body').css("background-image", "url(" + this.result + ")");
    }
})

//Кнопка відкриває випадаюче меню в якому вибирається колір тексту
$('.fa-palette').click(function () {
    $('.choose_text_color').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.choose_text_color').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

// Кнопка відкриває випадаюче меню в якому вибирається колір фону, або картинка на фон, або можна загрузити картинку вибравши її на комп’ютері;
$('.fa-image').click(function () {
    $('.choose_background_color').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.choose_background_color').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

// Кнопка відкриває модальне вікно з логінуванням
$('.fa-lock').click(function () {
    $('.log').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.log').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

let reg_login = /^[a-zA-Z]{4,16}$/;
let reg_password = /^[a-zA-Z0-9_\-.]{4,16}$/;

$('#bt').click(function () {
    if ($('.log input[type="text"]').val() == '') {
        $('.log input[type="text"]').addClass('error');
        $('.log input[type="text"]').css("border-color", "rgb(218, 6, 6)");          
        $('#error').css("display", "block");
        $('.log').css("height", "250px");
    }
    else if (reg_login.test(log.login.value) && reg_password.test(log.password.value)) {
        $('.log').css("display", "none");
        $('.log input[type="text"]').val('');
        $('.fa-lock').removeClass('fa-lock').addClass('fa-unlock-alt');
        $('.code button').prop("disabled", false);
    }
    else {
        $('#error').css("display", "none");
        $('#error_two').css("display", "block");
        $('.log').css("height", "250px");
    }
})

//Кнопка відкриває блок виходу з логінування
$('header div i').click(function (event) {
    if ($(event.target).hasClass('fa-unlock-alt')) {
        $('.log').css("display", "none");
        $('#exit').css({
            display: 'flex',
            boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
        })
        $('#exit').animate({
            top: '200px',
        }, 500, "easeInOutSine")
    }
})

$('#cancel').click(function () {
    $('#exit').css("display", "none");
})

$('#sing_out').click(function () {
    $('#exit').css("display", "none");
    $('.fa-unlock-alt').removeClass('fa-unlock-alt').addClass('fa-lock');
    $('.code button').prop("disabled", true);
})

//Кнопка відкриває блок редагування з можливістю змінки тексту, а також добавлення списку та таблиці
$('.code button').click(function () {
    $('.header_one').css("display", "none");
    $('.box_text').css("display", "none");
    $('.header_two').css("display", "flex");
    $('#text_editing').css("display", "block");
    $('#text_editing').text($('.box_text').html());
})

// Кнопка збрегірає всі зміни в блоку редагування і переходить назад в блок стилізування
$('.fa-save').click(function () {
    $('.header_one').css("display", "flex")
    $('.box_text').css("display", "block")
    $('.header_two').css("display", "none")
    $('#text_editing').css("display", "none")
    $('.box_text').html($('#text_editing').val());
    $('.code button').prop("disabled", false);
})

//Кнопка відкриває модальне вікно з можливістю добавлення таблиці
$('.fa-table').click(function () {
    $('.create_table').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.create_table').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

let change_type = 0;
$('.choose_type').change(function () {
    $(this).find(":selected").each(function () {
        change_type = 1;
    });
});

let change_color = 0;
$('.choose_color').change(function () {
    $(this).find(":selected").each(function () {
        change_color = 1;
    });
});

let reg_value = /^[^0][0-9]{0,1}$/;
let invalid = 0;

$('#create_table').click(function () {
    if (change_type == 0) {
        invalid++;
        $('.choose_type').addClass('error');
        $('.choose_type').css("border-color", "rgb(218, 6, 6)");
    }
    if (change_color == 0) {
        invalid++;
        $('.choose_color').addClass('error');
        $('.choose_color').css("border-color", "rgb(218, 6, 6)");
    }
    $('.create_table').find('input').each(function () {
        if ($(this).val() == '' || reg_value.test($(this).val()) == false) {
            invalid++;
            $(this).addClass('error');
            $(this).css("border-color", "rgb(218, 6, 6)");
            $('#error_invalid_value').css("display", "block");
        }
    })
    
    if (invalid == 0) {
        create_table = document.forms.create_table;
        border = create_table.width_of_border.value + 'px' + ' ' + create_table.type_of_border.value + ' '
            + create_table.color_of_border.value;

        Create_my_table(create_table.TR.value, create_table.TD.value, border, create_table.width_of_TD.value, create_table.height_of_TD.value);

        $('#text_editing').css({
            display: 'block',
            width: '95vw',
            height: '90vh',
            lineHeight: '20px',
            padding: '10px'
        })
    }

    $('.create_table').on('input', function (event) {
        $(event.target).removeClass('error');
        $(event.target).css("border-color", "");
        invalid = 0;
    });
})

//Кнопка очищає поля форми
$('#reset').click(function () {
    $(this).closest('form').find('input[type=text], select').val('');
    $(this).closest('form').find('.choose_type').val('Choose style');
    $(this).closest('form').find('.choose_color').val('Choose color');
})

//Кнопка відкриває модальне вікно з можливістю добавлення нумерованого списку
$('.fa-list-ol').click(function () {
    $('.create_OL').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.create_OL').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

let change_type_mark = 0;
$('.choose_type_mark').change(function () {
    $(this).find(":selected").each(function () {
        change_type_mark = 1;
    });
});

$('#create_list').click(function () {
    invalid = 0;
    $('.create_OL').find('input').each(function () {
        if ($(this).val() == '' || reg_value.test($(this).val()) == false) {
            invalid++;
            $(this).addClass('error');
            $(this).css("border-color", "rgb(218, 6, 6)");
            $('.error_invalid_value').css("display", "block");
        }
    });
    $('.create_OL').on('input', function (event) {
        $(event.target).removeClass('error');
        $(event.target).css("border-color", "");
    });
    if (change_type_mark == 0) {
        invalid++;
        $('.choose_type_mark').addClass('error');
        $('.choose_type_mark').css("border-color", "rgb(218, 6, 6)");
    }
    if (invalid == 0) {
        $('.error_invalid_value').css("display", "none");

        Create_my_list(list.count_li.value, list.type_mark_list.value, mylist, true, false);

        $('#text_editing').css({
            display: 'block',
            width: '95vw',
            height: '90vh',
            lineHeight: '20px',
            padding: '10px'
        })
    }
})

$('#reset_list').click(function () {
    $(this).closest('form').find('input[type=text], select').val('');
    $(this).closest('form').find('.choose_type_mark').val('Choose OL type mark');
})

//Кнопка відкриває модальне вікно з можливістю добавлення маркованого списку
$('.fa-list-ul').click(function () {
    $('.create_UL').css({
        display: 'block',
        boxShadow: '0px 100px 100px 1000px rgba(0, 0, 0, 0.5)',
    })
    $('.create_UL').animate({
        top: '50px',
    }, 500, "easeInOutSine")
})

let change_type_mark_ul = 0;
$('.choose_type_mark').change(function () {
    $(this).find(":selected").each(function () {
        change_type_mark_ul = 1;
    });
});

$('#create_list_ul').click(function () {
    invalid = 0;
    $('.create_UL').find('input').each(function () {
        if ($(this).val() == '' || reg_value.test($(this).val()) == false) {
            invalid++;
            $(this).addClass('error');
            $(this).css("border-color", "rgb(218, 6, 6)");
            $('#error_invalid_value_list_ul').css("display", "block");
        }
    });
    $('.create_UL').on('input', function (event) {
        $(event.target).removeClass('error');
        $(event.target).css("border-color", "");
    });
    if (change_type_mark_ul == 0) {
        $('.create_UL .choose_type_mark').addClass('error');
        $('.create_UL .choose_type_mark').css("border-color", "rgb(218, 6, 6)");
    }
    else {
        Create_my_list(list_ul.count_li.value, list_ul.type_mark_list.value, mylist, false, true);
        $('#text_editing').css({
            display: 'block',
            width: '95vw',
            height: '90vh',
            lineHeight: '20px',
            padding: '10px'
        })
    }
})

$('#reset_list_ul').click(function () {
    $(this).closest('form').find('input[type=text], select').val('');
    $(this).closest('form').find('.choose_type_mark').val('Choose UL type mark');
})

//Закриваємо елемент при кліку на хрестик
$('.fa-times').click(function (event) {
    $(event.target).closest('.exit').css("display", "none").animate({
        top: '0px',
    })
})

// Функція для створення списку
let mylist = '';
function Create_my_list(count_li, type_of_marks, mylist, ol_type, ol_style) {
    if (ol_type)
        mylist += `<ol type= "${type_of_marks}">`;
    if (ol_style)
        mylist += `<ol style="list-style-type: ${type_of_marks}">`;
    for (let j = 1; j <= count_li; j++) {
        mylist += `<li>` + 'item ' + j + `</li>`;
    }
    mylist += `</ol>`;
    form_text.text_editing.textContent = document.querySelector('.box_text').innerHTML + mylist;
}

// Функція для створення таблиці
let create_table;
let mytable = '';
function Create_my_table(rows, cols, border, width_of_TD, height_of_TD) {
    mytable += `<table>`;
    for (let i = 0; i <= rows; i++) {
        mytable += `<tr>`;
        for (let j = 0; j <= cols; j++) {
            mytable += `<td style="width: ${width_of_TD}px; height: ${height_of_TD}px; border: ${border}">` + "TD" + `</td>`;
        }
        mytable += `</tr>`;
    }
    mytable += `</table>`;
    form_text.text_editing.textContent = document.querySelector('.box_text').innerHTML + mytable;
}

