 // accordian menu action code here 
$(function() {
    var Accordion = function(el, multiple) {
        console.log('test log');
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }   

    var accordion = new Accordion($('#accordion'), false);
});


// A $( document ).ready() block.
$( document ).ready(function() {



    // tooltip for focuse code here
    $(function() {

        $('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
        $('.tooltip_n').tipsy({trigger: 'focus', gravity: 'n',fade:true});
        $('.tooltip_e').tipsy({trigger: 'focus', gravity: 'e',fade:true});
        $('.tooltip_w').tipsy({trigger: 'focus', gravity: 'w',fade:true});

     });



    // scrollbar code here
    $(function(){
      $('.scrollbarHolder').slimscroll({
        height: '250px',
        railVisible: true,
        alwaysVisible: true
      });

    });





    // Custome dropdown code here
    $(document).delegate(".csDropdown",'click',function() {    
        $(this).find('ul').slideToggle("fast");
        
    });

    //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
    $(".csDropdown ul li a").click(function() {
        var text = $(this).html();
         // $(".csDropdown .selected").html(text);

         $(this).parent().parent().parent().find("a.selected").html(text);


        // $(this).parent(".csDropdown").find("a.selected").text());
        // $(this).find('a').addClass('active');
        // $(this).siblings().find('a').removeClass('active');
       
        // $(this).parent(".csDropdown").find("a.selected").text());
        // $(this).parent().children("span").text());
        // $(".csDropdown ul").slideToggle("fast");
    }); 


    //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("csDropdown"))
            $(".csDropdown ul").slideUp("fast")
    });
});




// datepicker language set code here 
// ;(function ($) { $.fn.datepicker.language['en'] = {
//     days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
//     months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
//     monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     today: 'Today',
//     clear: 'Clear',
//     dateFormat: 'mm/dd/yyyy',
//     timeFormat: 'hh:ii aa',
//     firstDay: 0
// }; })(jQuery);








