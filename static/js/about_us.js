//my account dropdown
$(document).ready(function(){
    $(".drop").click(function(){
        $(".dropdown").toggle()
    });
});

// side dropdown
$(document).ready(function(){
    $(".side").click(function(){
        $(".side_dropdown").toggle()
    });
});

//image slider
var index=0;
var images=['../images/about_us_image1.jpg','../images/about_us_image2.jpg','../images/about_us_image3.jpg','../images/about_us_image4.jpg','../images/about_us_image5.jpg']
function slideshow(){
    document.slider.src=images[index];
    if(index<images.length-1){
        index++;
    }
    else{
        index=0
    }
    setTimeout("slideshow()",500);
}
window.onload=slideshow

// autocomplete search

$(document).ready(function() {
    var data = [
        {label: 'art & photography', value: 'art_&_photography'},
        {label: 'Biographies & Memoirs', value: 'Biographies_&_Memoirs'},
        {label: 'Dictionaries & Language', value: 'Dictionaries_&_Language'},
        {label: 'Fiction', value: 'Fiction'},
        {label: 'Society', value: 'Society'},
        {label: 'law', value: 'law'},
        {label: 'medicine', value: 'medicine'},
        {label: 'new arrivals', value: 'new_arrivals'},
        {label: 'box sets', value: 'box_sets'},
        {label: 'best seller', value: 'best_seller'},
        {label: 'fiction books', value: 'fiction_books'},
        {label: 'award winners', value: 'award_winning'},
        {label: 'featured authors', value: 'featured_authors'},
        {label: 'todays deals', value: 'todays_deals'}
    ];
    

    $("input#autocomplete").autocomplete({
        source: data,
        focus: function (event, ui) {
            $(event.target).val(ui.item.label);
            return false;
        },
        select: function (event, ui) {
            $(event.target).val(ui.item.label);
            var url = '/' + ui.item.value.replace(/ /g, '_');
            window.location.href = url;
            return false;
        }
    });
    $("#searchButton").on("click", function() {
        var searchValue = $("#autocomplete").val();
        var url = '/' + searchValue.replace(/ /g, '_');
        window.location.href = url;
    });
});