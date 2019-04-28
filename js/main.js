$(function () {

    $('.bxslider').bxSlider({
        mode:'fade',
        speed:1000
    });


    $('header .navbar .navbar-hamburger .hamburger').click(function () {
        $('header .navbar .main-list').slideToggle(200);
    });

    $('.navbar .main-list li a.nav-item').click(function (e) {
        e.preventDefault();
        let dataId = $(this).data("id");
        let subMenus = $(`.navbar .main-list .dropdown[data-drop=${dataId}]`);
        let menus = $(`.navbar .main-list .dropdown:not([data-drop=${dataId}])`);
        menus.fadeOut(200);
        subMenus.fadeToggle(200);
    });

    $('header .sidebar-icon').click(function (e) {
        e.preventDefault();
        let dataId = $(this).data('id');
        let sidebar = $(`aside .sidebar[data-drop=${dataId}]`);
        let notSidebar = $(`aside .sidebar:not([data-drop=${dataId}])`);
        notSidebar.fadeOut(500)
        sidebar.fadeIn(500)
        $('aside .control-button').click(function (e) {
            e.preventDefault();
            sidebar.fadeOut(500)
        })
    });
})