<!-- ====================================================================== MENU DESKTOP -->
<div id="header" class="header-wrapper ">
    <div class="logo">
        <a href="index.php" title="HABMENU | MULTI FASTFOOD PEDIDOS"><img class="logoImage"
                src="./assets/images/logo.png" alt="HABMENU | MULTI FASTFOOD PEDIDOS" /><img class="logoImageRetina"
                src="./assets/images/logo-retina.png" alt="HABMENU | MULTI FASTFOOD PEDIDOS" /></a>
        <div class="clear"></div>
    </div>
    <div class="menu-wrapper">
        <div class="main-menu">
            <div class="menu-main-nav-menu-container ">
                <ul id="menu-main-nav-menu" class="sf-menu">
                    <li class="menu-item menu-item-home"><a href="index.php" class="animsition-link">Inicio2</a></li>
                    <li class="menu-item"><a href="store.php" class="animsition-link">Tiendas - Bodegas</a></li>
                    <li class="menu-item"><a href="store.php">Hamburguesas</a></li>
                    <li class="menu-item"><a href="store.php">SalchiPapas</a></li>
                    <li class="menu-item"><a href="store.php">Empanadas</a></li>
                    <li class="menu-item"><a href="store.php">Broasters</a></li>
                    <li class="menu-item"><a href="store.php">Pepitos</a></li>
                    <li class="menu-item"><a href="store.php">Pizzas</a></li>
                </ul>
            </div>
        </div>
        <div class="menu-icons-inside">
            <div class="menu-icon menu-icon-mobile"><span class="menu-icon-create"></span></div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="footer">
        <div class="footer-socials">
            <ul class="socials-sh">
                <li>
                    <a class="fa sh-socials-url fa-twitter" href="#" title="Twitter" target="_blank"></a>
                </li>
                <li>
                    <a class="fa sh-socials-url fa-facebook" href="#" title="Facebook" target="_blank"></a>
                </li>
                <li>
                    <a class="fa sh-socials-url fa-linkedin" href="#" title="LinkedIn" target="_blank"></a>
                </li>
                <li>
                    <a class="fa sh-socials-url fa-google-plus" href="#" title="Google Plus" target="_blank"></a>
                </li>
            </ul>
        </div>
        <div class="footer-content">
            @ 2020 HABAMENU. Made by <a href="https://stampiza2.com/" title="Stampiza2">Stampiza2</a>.</div>
    </div>
</div>




<!-- ====================================================================== MENU MOBILE -->
<div class="mobile-menu-wrapper">
    <div class="menu-main-nav-menu-container">
        <ul id="menu-main-nav-menu-1" class="mobile-menu">
            <li class="menu-item menu-item-home"><a href="index.php">Inicio</a></li>
            <li class="menu-item"><a href="store.php">Tiendas - Bodegas</a></li>
            <li class="menu-item"><a href="store.php">Hamburguesas</a></li>
            <li class="menu-item"><a href="store.php">SalchiPapas</a></li>
            <li class="menu-item"><a href="store.php">Empanadas</a></li>
            <li class="menu-item"><a href="store.php">Broasters</a></li>
            <li class="menu-item"><a href="store.php">Pepitos</a></li>
            <li class="menu-item"><a href="store.php">Pizzas</a></li>
        </ul>
    </div>
</div>

<form method="post" id="formulario">
<div data-pushbar-id="mypushbar1" data-pushbar-direction="right">

    <div class="cart-sidebar-header">
        <h5 style="color: #323232!important;">
            My Cart
            <span class="text-success cart-content-count" style="color:#26a69a;">(<span class="total-count"></span>
                items)</span>
            <a data-pushbar-close class="float-right" href="#"><i class="fa fa-close icon_close_carrito"></i>
            </a>
        </h5>

    </div>
   
    <ul class="cart-sidebar-body woocommerce-mini-cart cart_list product_list_widget show-cart div">
    </ul>
    
    
    <a class="waves-effect waves-light btn-large  btn_carrito_total" >S/ <span class="total-cart"></span></a>
    <div class="row row_carrito">

        <div class="col s6 col_carrito" >
            <a class="waves-effect waves-light btn clear-cart btn_carrito"  >Limpiar</a>
        </div>
        <div class="col s6 col_carrito" >
            <a href="javascript:" id="btn-ingresar" class="waves-effect waves-light btn btn_carrito" >CheckOut</a>
        </div>
    </div>
    </form>


</div>