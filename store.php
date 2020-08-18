<?php
session_start();
include_once("library/db_connect.php");
include './components/links.php' ?>


<body class="home page-template page-template-template-home page-template-template-home-php page page-id-7 " >
    <div class=" global-wrapper">

        <?php include './components/menu.php' ?>


        <div class="container-wrapper ">
            <div class="page-bg" style=" background-image: url(./assets/upload/bg-pizza.jpg); "></div>
            <div id="container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <span class="page-title-icon flaticon-pizza-slice"></span>
                            <h1 class="page-title">Menu</h1>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>

                </div>
                <div class="clear"></div>
                <div class="page-title-wrapper" style="float: right; position: relative; top: -63px;">
                    <div class="page-title-outher">
                        <div class="page-title-inner"> <a href="javascript:" data-pushbar-target="mypushbar1">
                            <span class="page-title-icon"> <img width="38.5"
                                    src="./assets/images/add-to-cart.svg"></span>

                            <h1 class="page-title"><span class="total-count"></span> - Carrito</h1>

                        </div>
                        </a>
                    </div>

                </div>

                <div class="page-wrapper">
                    <div class="offer-menu-wrapper">
                        <ul id="filters" class="single-offer-category-filter option-set" data-option-key="filter">
                            <li class="filter-cat"><a class="selected" href="#filter"
                                    data-option-value=".cat1">Arepas</a></li>
                            <li class="filter-cat"><a href="#filter" data-option-value=".cat2">Empanadas</a></li>
                            <li class="filter-cat"><a href="#filter" data-option-value=".cat3">Pepitos</a></li>
                            <li class="filter-cat"><a href="#filter" data-option-value=".cat4">Hamburguesas</a></li>
                            <li class="filter-cat"><a href="#filter" data-option-value=".cat5">SalchiPapas</a></li>
                           
                        </ul>

                        <div class="offer-menu-items ">
                            <div class="single-offer-category-item isotope-item cat1 ">
                            <!-- aqui  -->
                            <div id="resp"></div>
                                <div class="single-offer-item simpleCart_shelfItem">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">

                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_1"
                                                    data-title="Reina Pepiada."><img class="example-image item_image"
                                                        width="413" height="413"
                                                        src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>


                                            </div>
                                           
                                            <div class="single-offer-title"> <span class="item_name">Reina
                                                    Pepiada</span>
                                                    
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                        
                                                            <a href="#" id="extra_necio" class="btn_cart add-to-cart"   data-name="Reina&nbsp;Pepiada"     data-price="0.5" title="Agregar"><i
                                                                    class="fa fa-cart-plus " ></i> Agregar   </a>
                                                        </div>
                                                          
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple   name="mySelect" id="mySelect"  onchange="myFunction(this, event)">
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price item_price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                 
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_2"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>



                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_3"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_4"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_5"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_6"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_7"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_8"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Reina Pepiada
                                                <div class="single-offer-content">
                                                    <p>Pollo mechado, aguacate majado y mayonesa</p>
                                                    <div class="row">
                                                        <div class="col s5" style=" padding: 0!important;">
                                                            <a href="#" class="btn_cart" title="Agregar"><i
                                                                    class="fa fa-cart-plus"></i> Agregar</a>
                                                        </div>
                                                        <div class="col s7" style="float: right; padding: 0!important;">
                                                            <select multiple>
                                                                <option selected disabled hide name="extras">Extras
                                                                </option>
                                                                <optgroup label="Cremas">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                                <optgroup label="Otros">
                                                                    <option value="mayonesa">Mayonesa</option>
                                                                    <option value="ajo">Ajo</option>
                                                                    <option value="ketchup">Ketchup</option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/12.00</div>
                                    <div class="clear"></div>
                                </div>
                                <!--  Fin   -->

                            </div>

                            <div class="single-offer-category-item isotope-item cat2 ">
                                <div class='carrito'>

                                    <p class="carrito-total">
                                        <span class="simpleCart_quantity">0</span> item(s) <span
                                            class="simpleCart_total">$0.00</span>
                                    </p>

                                    <div class="bolsa">
                                        <div class="simpleCart_items"></div>
                                        <div class="opciones">
                                            <a  class="boton simpleCart_empty" href="javascript:void(0)">Vaciar
                                                carrito</a>
                                            <a class="boton simpleCart_checkout" href="#">Checkout</a>
                                        </div>
                                    </div>

                                </div>
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg" data-lightbox="arepa_9"
                                                    data-title="Reina Pepiada."><img class="example-image" width="413"
                                                        height="413" src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Hawaii

                                                <div class="single-offer-content">

                                                    <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                                    <a href="#" class="btn_cart" title="Agregar"><i
                                                            class="fa fa-cart-plus"></i> Agregar</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/212.50</div>
                                    <div class="clear"></div>
                                </div>
                                <!-- aqui  -->
                            </div>

                            <div class="single-offer-category-item isotope-item cat3 ">
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg"
                                                    data-lightbox="arepa_10" data-title="Reina Pepiada."><img
                                                        class="example-image" width="413" height="413"
                                                        src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Hawaii

                                                <div class="single-offer-content">

                                                    <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                                    <a href="#" class="btn_cart" title="Agregar"><i
                                                            class="fa fa-cart-plus"></i> Agregar</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/212.50</div>
                                    <div class="clear"></div>
                                </div>
                                <!-- aqui  -->
                            </div>

                            <div class="single-offer-category-item isotope-item cat4 ">
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg"
                                                    data-lightbox="arepa_11" data-title="Reina Pepiada."><img
                                                        class="example-image" width="413" height="413"
                                                        src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Hawaii

                                                <div class="single-offer-content">

                                                    <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                                    <a href="#" class="btn_cart" title="Agregar"><i
                                                            class="fa fa-cart-plus"></i> Agregar</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/212.50</div>
                                    <div class="clear"></div>
                                </div>
                                <!-- aqui  -->
                            </div>

                            <div class="single-offer-category-item isotope-item cat5 ">
                                <!-- aqui  -->
                                <div class="single-offer-item ">
                                    <div class="single-offer-details ">
                                        <div style="display: inline-flex;">
                                            <div class="menu-post-img">
                                                <a class="example-image-link"
                                                    href="./assets/upload/menu/reinapepiada.jpg"
                                                    data-lightbox="arepa_12" data-title="Reina Pepiada."><img
                                                        class="example-image" width="413" height="413"
                                                        src="./assets/upload/menu/reinapepiada.jpg"
                                                        alt="reina-pepiada" /></a>
                                            </div>

                                            <div class="single-offer-title">Hawaii

                                                <div class="single-offer-content">

                                                    <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                                    <a href="#" class="btn_cart" title="Agregar"><i
                                                            class="fa fa-cart-plus"></i> Agregar</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="single-offer-price">S/212.50</div>
                                    <div class="clear"></div>
                                </div>
                                <!-- aqui  -->
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <!-- end page wrapper -->
            </div>
            <!-- end container -->
            <div class="clear"></div>
        </div>
        <!-- end container-wrapper -->


        <?php include './components/footer.php' ?>
    </div>




</body>


<?php include './components/scripts.php' ?>