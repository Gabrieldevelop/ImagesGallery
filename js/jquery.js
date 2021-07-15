$(document).ready(function(){

    $('.gallery .buttons .btn').click(function(){

        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        let filter = $(this).attr('data-filter');
        
        if(filter == 'all'){
            $('.gallery .row .box').show(400);
        }else{
            $('.gallery .row .box').not('.'+filter).hide(300);
            $('.gallery .row .box').filter('.'+filter).show(400);
        }
    });

    
});