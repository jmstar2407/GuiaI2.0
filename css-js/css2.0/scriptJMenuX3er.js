// WIP - Don't hate! I don't know javascript.
$('#toggle3er').click( function(){
    $(this).parent().toggleClass('width3');
    $(this).children().toggleClass( 'fa-chevron-circle-left3').toggleClass( 'fa-chevron-circle-right3');
});