  
  
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type='text/javascript' src='assets/rs-slider/js/jquery.themepunch.tools.min.js'></script>
    <script type='text/javascript' src='assets/rs-slider/js/jquery.themepunch.revolution.min.js'></script>
    <script type='text/javascript'
        src='http://maps.google.com/maps/api/js?key=AIzaSyD3rVzWhxb6EGiqAD9HSrKb22gTo2HTqoA&amp;ver=1.0'></script>

    <script type='text/javascript' src='assets/js/modernizr.custom.js'></script>
    <script type='text/javascript' src='assets/js/jquery.animsition.min.js'></script>
    <script type='text/javascript' src='assets/js/superfish.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" integrity="sha512-CEiA+78TpP9KAIPzqBvxUv8hy41jyI3f2uHi7DGp/Y/Ka973qgSdybNegWFciqh6GrN2UePx2KkflnQUbUhNIA==" crossorigin="anonymous"></script>
    
    <script type='text/javascript' src='assets/js/jquery.mobilemenu.js'></script>
    <script type='text/javascript' src='assets/js/custom.js'></script>
    <script type='text/javascript' src='assets/js/custom-inline-js.js'></script>
    <script type='text/javascript' src='assets/js/jquery.isotope.min.js'></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    <script src="assets/js/lightbox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.7/uuid.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/pushbar.js@1.0.0/src/pushbar.min.js"></script>



    <script>
jQuery(document).ready(function($) {
    // $('select').val([1]);
    $('select').formSelect();
    $('select.select_all').siblings('ul').prepend('<li id=sm_select_all><span>Select All</span></li>');
    $('li#sm_select_all').on('click', function() {
        var jq_elem = $(this),
            jq_elem_span = jq_elem.find('span'),
            select_all = jq_elem_span.text() == 'Select All',
            set_text = select_all ? 'Select None' : 'Select All';
        jq_elem_span.text(set_text);
        jq_elem.siblings('li').filter(function() {
            return $(this).find('input').prop('checked') != select_all;
        }).click();
    });

    const pushbar = new Pushbar({
        blur:false,
        overlay:false,
      });
      
})
 
    </script>