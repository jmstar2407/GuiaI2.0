// WIP - Don't hate! I don't know javascript.
$('#toggle3').click( function(){
    $(this).parent().toggleClass('width2');
    $(this).children().toggleClass( 'fa-chevron-circle-left3').toggleClass( 'fa-chevron-circle-right3');
});