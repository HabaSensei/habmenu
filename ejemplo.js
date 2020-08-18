(function(){ 
	contenidoempleado();
	contenidoplato3();
	titulos();
	contenidoblog();
	contenidocarrucel();
	
})();

function titulos()
{
	$.ajax({
			url: '/Titulos/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				var html = '';
				//console.log(response.data);
				let tituloconocenos = document.querySelector('.titulo-conocenos');
				let subtituloconocenos = document.querySelector('.subtitulo-conocenos');
				let descripcionconocenos = document.querySelector('.descripcion-conocenos');
				let titulochefs = document.querySelector('.titulo-chefs');
				let subtitulochefs = document.querySelector('.subtitulo-chefs');
				let reservatitulo = document.querySelector('.reserva-titulo');
				let direccion = document.querySelector('.direccion');
				let ciudad = document.querySelector('.ciudad');
				let horainicio = document.querySelector('.horainicio');
				let horafin = document.querySelector('.horafin');
				let tlf1 = document.querySelector('.tlf1');
				let tlf2 = document.querySelector('.tlf2');

				tituloconocenos.textContent  = response.data[0].titulo_conocenos;
				subtituloconocenos.textContent  =response.data[0].subtitulo_conocenos;
				descripcionconocenos.textContent  =response.data[0].descripcion_conocenos;
				titulochefs.textContent  =response.data[0].titulo_chefs;
				subtitulochefs.textContent  = response.data[0].subtitulo_chefs;
				reservatitulo.textContent  =response.data[0].reserva_titulo;
				
				direccion.textContent  =response.data[0].direccion;
				ciudad.textContent  =response.data[0].ciudad;
				horainicio.textContent  =response.data[0].horainicio;
				horafin.textContent  =response.data[0].horafin;
				tlf1.textContent = response.data[0].tlf1;
				tlf2.textContent = response.data[0].tlf2;
			}
		}).then(function(){
		});
}

function contenidoblog()
{	
	$.ajax({
			url: '/Blog/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				var html = '';
				console.log(response.data);
				if(response.data.length>0)
				{
					let data = response.data;
					for(var reg in data)
					{
						if(reg==0){
							html += '<div class="carousel-item active">';
								html += '<div class="col-12 post mx-auto pb-3">';
									html += '<div class="row" style="max-height: 250px; min-height: 250px;overflow:hidden;"><img src="'+data[reg].foto+'" alt=""></div>';
									html += '<div class="row pt-3">';
										html += '<div class="col-xl-8 col-xs-12"><p class="blog-titulo text-left">'+data[reg].titulo+"</p></div>";
										html += '<div class="col-xl-4 col-xs-12"><p class="blog-meta text-left"><strong>'+data[reg].fecha+"</strong> / LIMA - PERÚ</p></div>";
									html += "</div>";
									html += '<div class="row">';
										html += '<p class="col-12 blog-texto">'+data[reg].texto+'</p>';
									html += "</div>";
								html += '</div>';
							html += '</div>';
						} else {
							html += '<div class="carousel-item">';
								html += '<div class="col-12 post mx-auto pb-3">';
									html += '<div class="row" style="max-height: 250px; min-height: 250px;overflow:hidden;"><img src="'+data[reg].foto+'" alt=""></div>';
									html += '<div class="row pt-3">';
										html += '<div class="col-xl-8 col-xs-12"><p class="blog-titulo text-left">'+data[reg].titulo+"</p></div>";
										html += '<div class="col-xl-4 col-xs-12"><p class="blog-meta text-left"><strong>'+data[reg].fecha+"</strong> / LIMA - PERÚ</p></div>";
									html += "</div>";
									html += '<div class="row">';
										html += '<p class="col-12 blog-texto">'+data[reg].texto+'</p>';
									html += "</div>";
								html += '</div>';
							html += '</div>';
						}
					}
		            $('#innerblog').append(html);
				}else{
					html += '<div class="m-0 p-0 col-12" style="position:absolute;top:40%;">';
					html += '<h1 class="mx-auto mont-h-font verde-brand-sploo">PROXIMAMENTE</h1>';
					html += '</div>';
		            $('#innerblog').append(html);
				}
			}
		}).then(function(){
			
		});
}

function contenidocarrucel()
{	
	$.ajax({
			url: '/Carrucel/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				var html = '';
				//console.log(response.data);
				if(response)
				{
					let data = response;
					let anchodepantalla = document.querySelector('html').scrollWidth;
					
					var imagenes = response.length;  
					
					if(anchodepantalla>=1500)
					{
						if(imagenes%4==0)
						{
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carrucelprincial carousel-item active">';
								for(var fila in data)
								{
									if (fila<4) {
										html += '<img class="d-block col-sm-3 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
									}
								}
								html += '</div>';
								if(imagenes>4)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>4 && fila<8) {
											html += '<img class="d-block col-sm-3 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}	
							html += '</div>';
						} else if(imagenes==3)
						{
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var fila in data)
								{
									html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
								}
								html += '</div>';
							html += '</div>';
						}
						console.log(html);
					}
					else if(anchodepantalla>=1000 && anchodepantalla<1500)
					{
						if(imagenes%3==0){
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var fila in data)
								{
									if (fila<3) {
										html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
									}
								}
								html += '</div>';
								if(imagenes>3 && imagenes>=6)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>2 && fila<6) {
											html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
								if(imagenes>6 && imagenes>=9)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>5 && fila<9) {
											html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}else if(imagenes%3!=0){
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var fila in data)
								{
									if (fila<3) {
										html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
									}
								}
								html += '</div>';
								if(imagenes>6)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>2 && fila<6) {
											html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
								if(imagenes>6)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>5 && fila<9) {
											html += '<img class="d-block col-sm-4 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}
					}
					else if(anchodepantalla>=500 && anchodepantalla<1000)
					{
						if(imagenes%2==0){
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var fila in data)
								{
									if (fila<2) {
										html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
									}
								}
								html += '</div>';
								if(imagenes>2)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>1 && fila<4) {
											html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
								if(fila>3)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>3 && fila<6) {
											html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}else if(imagenes%2!=0){
							html += '<div class="carrucelprincipal carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var fila in data)
								{
									if (fila<2) {
										html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
									}
								}
								html += '</div>';
								if(imagenes>2)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>1 && fila<4) {
											html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
								if(imagenes>4)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>3 && fila<6) {
											html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
								if(imagenes>6)
								{
									html += '<div class="carousel-item">';
									for(var fila in data)
									{
										if (fila>5 && fila<9) {
											html += '<img class="d-block col-sm-6 col-xs-6 float-right m-0 p-0" src="'+data[fila].foto+'">';
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}
					}
					else if(anchodepantalla<500)
					{
						html += '<div class="carrucelprincipal carousel-inner">';
							
							for(var fila in data)
							{
								if (fila<1) {
									html += '<div class="carousel-item active">';
								
									html += '<img class="d-block col-sm-12 col-xs-12 float-right m-0 p-0" src="'+data[fila].foto+'">';
								
									html += '</div>';
								}
							}
							for(var fila in data)
							{
								if (fila>0 && fila<5) {
									html += '<div class="carousel-item">';
								
									html += '<img class="d-block col-sm-12 col-xs-12 float-right m-0 p-0" src="'+data[fila].foto+'">';
								
									html += '</div>';
								}
							}
							
						html += '</div>';
					}
					console.log(html);
		            $('#carouselExampleSlidesOnly').append(html);
				}
			}
		}).then(function(){
			onloadLoad();
			let btn_reserva = document.querySelector('#btn-reserva');
			let nav_sploo_movil = document.querySelector('.sploo-nav-movil');
			let nav_sploo = document.querySelector('.nav-sploo');
			let nav_section_right = document.querySelector('.nav-section-right');
			let nav_section_left = document.querySelector('.nav-section-left');
			let nav_img_banner = document.querySelector('.ubicacion');
			let reserva_nav_section_right = document.querySelector('.reserva-nav-section-right');
			let reserva_nav_section_left = document.querySelector('.reserva-nav-section-left');
			let nav_banner = document.querySelector('.basico');
			let nav_brand = document.querySelector('.brand-sploo');

			btn_reserva.setAttribute('class', 'btn btn-reserva position-fixed btn-reserva-fixed z-index-1000');
			nav_sploo_movil.setAttribute('class', 'rosa-brand-sploo col-12 sploo-nav-movil sm-height');
			nav_sploo.setAttribute('class', 'rosa-brand-sploo nav-sploo bg-none col-12');
			nav_img_banner.setAttribute('class', 'hidden ubicacion nav-section-banner col-4 offset-1 float-left text-center px-0');
			nav_banner.setAttribute('class', ' basico nav-section-banner col-4 offset-1 float-left text-center px-0');
			nav_section_right.setAttribute('class', 'nav-section-right col-4 float-right px-0');
			nav_section_left.setAttribute('class', 'nav-section-left col-3 float-left text-center px-0');
			reserva_nav_section_right.setAttribute('class', 'hidden reserva-nav-section-right col-4 float-right px-0');
			reserva_nav_section_left.setAttribute('class', 'hidden reserva-nav-section-left col-3 float-left text-center px-0');
			nav_brand.setAttribute('class', 'brand-sploo text-center');
		});
}

function contenidoempleado()
{	
	if($('.chef-cards')){ $('.chef-cards').remove() }
	$.ajax({
			url: '/Empleado/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				var html = '';
				console.log(response);
				let data = response;
				let anchodepantalla = document.querySelector('html').scrollWidth;
				
				var fotos = response.length;  
				if(data.length>0)
				{
					html += '<div class="chef-cards col-12 mx-auto px-2 pt-2">';
					html += '<div id="carrucelempleados" class="carousel slide col-12 m-0 p-0"data-ride="carousel">';
					if(anchodepantalla>=1400)
					{
						if(fotos%4==0)
						{
							html += '<div class="carrucelempleado carousel-inner col-12">';
								html += '<div class="carousel-item active">';
								for(var reg in data)
								{
									if (reg<4) {
										html += '<div class="chef-card p-3 col-3">';
										html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
										html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
										if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
										html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
										html += "</div>";
									}
								}
								html += '</div>';
								if(fotos>4)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>4 && reg<8) {
											html += '<div class="chef-card p-3 col-3">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}	
							html += '</div>';
						} else if(fotos==3)
						{
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';

								for(var reg in data)
								{
									html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								}

								html += '</div>';
							html += '</div>';
						} else if(fotos==2)
						{
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								html += '<div class="col-9 mx-auto d-flex">';

								for(var reg in data)
								{
									html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								}
								html += '</div>';
								html += '</div>';
							html += '</div>';
						}else if(fotos==1)
						{
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								html += '<div class="col-9 mx-auto d-flex">';

								for(var reg in data)
								{
									html += '<div class="chef-card p-3 col-xl-6 col-md-6 col-sm-6 col-xs-10 mx-auto">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								}
								html += '</div>';
								html += '</div>';
							html += '</div>';
						}
						console.log(html);
					}
					else if(anchodepantalla>=1000 && anchodepantalla<1400)
					{
						if(fotos%3==0 && fotos!==2){
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var reg in data)
								{
									if (reg<3) {
										html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
									}
								}
								html += '</div>';
								if(fotos>3 && fotos>=6)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>2 && reg<6) {
											html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
								if(fotos>6 && fotos>=9)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>5 && reg<9) {
											html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}
						else if(fotos==1)
						{
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								html += '<div class="col-9 mx-auto d-flex">';

								for(var reg in data)
								{
									html += '<div class="chef-card p-3 col-xl-6 col-md-6 col-sm-6 col-xs-10 mx-auto">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								}
								html += '</div>';
								html += '</div>';
							html += '</div>';
						}
						else if(fotos%3!=0 && fotos!==2){
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var reg in data)
								{
									if (reg<3) {
										html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
									}
								}
								html += '</div>';
								if(fotos>6)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>2 && reg<6) {
											html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
								if(fotos>6)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>5 && reg<9) {
											html += '<div class="chef-card p-3 col-4">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
							html += '</div>';
						} else if(fotos==2)
						{
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								html += '<div class="col-9 mx-auto d-flex">';

								for(var reg in data)
								{
									html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								}
								html += '</div>';
								html += '</div>';
							html += '</div>';
						}
					}
					else if(anchodepantalla>=500 && anchodepantalla<1000)
					{
						if(fotos%2==0){
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var reg in data)
								{
									if (reg<2) {
										html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
									}
								}
								html += '</div>';
								if(fotos>2)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>1 && reg<4) {
											html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
								if(reg>3)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>3 && reg<6) {
											html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}else if(fotos%2!=0){
							html += '<div class="carrucelempleado carousel-inner">';
								html += '<div class="carousel-item active">';
								for(var reg in data)
								{
									if (reg<2) {
										html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
									}
								}
								html += '</div>';
								if(fotos>2)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>1 && reg<4) {
											html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
								if(fotos>4)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>3 && reg<6) {
											html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
								if(fotos>6)
								{
									html += '<div class="carousel-item">';
									for(var reg in data)
									{
										if (reg>5 && reg<9) {
											html += '<div class="chef-card p-3 col-6">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
										}
									}
									html += '</div>';
								}
							html += '</div>';
						}
					}
					else if(anchodepantalla<500)
					{
						html += '<div class="carrucelempleado carousel-inner">';
							
							for(var reg in data)
							{
								if (reg<1) {
									html += '<div class="carousel-item active">';
								
									html += '<div class="chef-card p-3 col-12">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								
									html += '</div>';
								}
							}
							for(var reg in data)
							{
								if (reg>0 && reg<5) {
									html += '<div class="carousel-item">';
								
									html += '<div class="chef-card p-3 col-12">';
											html += '<img src="'+data[reg].foto+'" class="col-10 mx-auto p-0"></td>';
											html += '<p class="chef-name col-10 mx-auto">'+data[reg].nombre+' '+data[reg].apellido+"</p>";
											if(data[reg].titulo!=null){html += '<p class="chef-title col-10 mx-auto">'+data[reg].titulo+"</p>";}
											html += '<p class="chef-description col-10 mx-auto">'+data[reg].descripcion+"</p>";
											html += "</div>";
								
									html += '</div>';
								}
							}
							
						html += '</div>';
					}
					html += '</div>';
					html += '<a class="carousel-control-prev" href="#carrucelempleados" role="button" data-slide="prev">';
				    html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
				    html += '<span class="sr-only">Previous</span>';
					html += '</a>';
					html += '<a class="carousel-control-next" href="#carrucelempleados" role="button" data-slide="next">';
					html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
					html += '<span class="sr-only">Next</span>'
					html += '</a>';
					html += '</div>';
					console.log(html);
		            $('.chef-container').append(html);
				}else{
					html += '<div class="m-0 p-0 col-12" style="position:absolute;top:40%;">';
					html += '<h1 class="mx-auto mont-h-font verde-brand-sploo">PROXIMAMENTE</h1>';
					html += '</div>';
		            $('.chef-container').append(html);
				}
			}
		}).then(function(){

		});
}

function contenidoplato()
{	
	if($('.principal-body')){ $('.principal-body').remove() }
	if($('.entradas-body')){ $('.entradas-body').remove() }
	if($('.fondos-body')){ $('.fondos-body').remove() }
	if($('.guarniciones-body')){ $('.guarniciones-body').remove() }
	if($('.postres-body')){ $('.postres-body').remove() }
	if($('.piqueos-body')){ $('.piqueos-body').remove() }
	$.ajax({
			url: '/Plato/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				var html = '';
				var html2 = '';
				var html3 = '';
				var html4 = '';
				var html5 = '';
				var html6 = '';
				console.log(response.data);
				if(response.data.length>0)
				{

					let data = response.data;
					html += '<p class="menu-principal">MENU BANDRA</p>'
					html += '<div class="m-0 p-0 col-12 principal-body">';
					
					html2 += '<div class="m-0 p-0 col-12 entradas-body">';
					html2 += '<p class="menu-titulo">ENTRADAS</p>';

					html3 += '<div class="m-0 p-0 col-12 fondos-body">';
					html3 += '<p class="menu-titulo">FONDOS</p>';

					html4 += '<div class="m-0 p-0 col-12 guarniciones-body">';
					html4 += '<p class="menu-titulo">GUARNICIONES</p>';

					html5 += '<div class="m-0 p-0 col-12 postres-body">';
					html5 += '<p class="menu-titulo">POSTRES</p>';

					html6 += '<div class="m-0 p-0 col-12 piqueos-body">';
					html6 += '<p class="menu-titulo">PIQUEOS</p>';

					for(var reg in data)
					{
						if(data[reg].categoria=='PRINCIPAL')
						{
							html += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						} else if(data[reg].categoria=='ENTRADA'){
							html2 += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html2 += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html2 += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						} else if(data[reg].categoria=='FONDO'){
							html3 += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html3 += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html3 += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						} else if(data[reg].categoria=='GUARNICIONES'){
							html4 += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html4 += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html4 += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						} else if(data[reg].categoria=='POSTRES'){
							html5 += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html5 += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html5 += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						} else if(data[reg].categoria=='PIQUEOS'){
							html6 += '<p class="upper menu-texto">'+data[reg].nombre+"</p>";
							if(data[reg].descripcion!=null){html6 += '<p class="upper menu-descripcion">'+data[reg].descripcion+"</p>";}
							html6 += '<p class="upper menu-texto">S/. '+data[reg].precio+"</p>";
						}
					}
					html += '</div>';
					html2 += '</div>';
					html3 += '</div>';
					html4 += '</div>';
					html5 += '</div>';
					html6 += '</div>';

		            $('.principal').append(html);
		            $('.entradas').append(html2);
		            $('.fondos').append(html3);
		            $('.guarniciones').append(html4);
		            $('.postres').append(html5);
		            $('.piqueos').append(html6);
				}else{
					html += '<div class="m-0 p-0 col-12" style="position:absolute;top:40%;">';
					html += '<h1 class="mx-auto mont-h-font verde-brand-sploo">PROXIMAMENTE</h1>';
					html += '</div>';
		            $('.block-menu').append(html);
				}
			}
		}).then(function(){
		});
}

function contenidoplato2()
{	
	$('#menucomidaprincial').html('');
	let html = '';
	$.ajax({
			url: '/Categoria/Index',
			method: "GET",
			data:$(this).serialize(),
			success:function(response)
			{
				console.log(response);
				if(response)
				{

					let data = response;
					for(var reg in response)
					{

						let categoria = {
							id: data[reg].id,
							descripcion: data[reg].descripcion,
							platos: []
						}
						menu.push(categoria);
						ids.push(categoria.id);
					}
					console.log(menu);
					//$('#menucomidaprincial').append(html);

				}else{
					html += '<div class="m-0 p-0 col-12" style="position:absolute;top:40%;">';
					html += '<h1 class="mx-auto mont-h-font verde-brand-sploo">PROXIMAMENTE</h1>';
					html += '</div>';
		            $('.block-menu').append(html);
				}
			}
		}).then(function(){
			buscarplatos();
		});
}


function verfotoplato(nombre,foto)
{
	let titulo  = document.querySelector('#platosmodaltitle');
	let imagen  = document.querySelector('#fotoplatos');

	let data = foto.replace('images','images\\');
	console.log(data);
	titulo.innerHTML = nombre;
	let html = '<img src="'+data+'" width="100%">';
	imagen.innerHTML = html;
}

var menu = [];

var ids = [];

function pintarmenu() {
	
	$('#menucomidaprincial').html('');
	let html = '';
	html = '';
	let row;
	for(let categoria in menu){
		html += '<h1 class="color-white">'+menu[categoria].descripcion+'</h2>';
		row = menu[categoria].platos;
		for(let i=0;i<row.length;i++)
		{
			html += '<p style="color: red;">'+row[i].nombre+'</p>';
		}
	}
	$('#menucomidaprincial').html(html);
	console.log(html);
}

function contenidoplato3() {
	let html = '';
	let html2 = '';
	$('#menucomidaprincial').html('');
	$.ajax({
		url: '/Categoria/Index',
		method: "GET",
		data:$(this).serialize(),
		success:function(response)
		{
			console.log(response);
			if(response)
			{
                html += '<p class="menu-principal">MENU BANDRA</p>'
                 
				for(var reg in response)
				{
                    
                    html += '<div class="col-md-12"><span class="menu-titulo" style=" color: #ffe0d6; text-decoration: underline white; display: table-row-group; font-weight: 600;font-size: 33px; text-align: center; font-family: "Mont-Heavy";">'+response[reg].descripcion+'</span>  ';
                    html += '<div class="row" style="padding-top: 41px;" id="sploo'+response[reg].id+'"></div>';
                    //html2 += '<option value="'+response[reg].id+'">'+response[reg].descripcion+'</option>';
                     
                }
               
               
				$('#menucomidaprincial').append(html);
				//$('#menucomidaprincial').append(html);
				$('#categoriadelivery').append(html2);
                
			}else{
				html += '<div class="m-0 p-0 col-12" style="position:absolute;top:40%;">';
				html += '<h1 class="mx-auto mont-h-font verde-brand-sploo">PROXIMAMENTE</h1>';
				html += '</div>';
				$('.block-menu').append(html);
			}
		}
	}).then(function(){
		buscarplatos();
		showplatosdelivery();
	});
}


let puntero = 0;
function buscarplatos() {
	html = '';
	$.ajax({
		url: '/Plato/Show',
		method: "GET",
		success:function(response)
		{
		    console.log("----AQUI ES----");
            console.log(response);
            
			for (var reg in response){
                 
                html += '<div class="col-md-4" >';
				html += '<p class="upper menu-texto">'+response[reg].nombre+'</p>';
				if(response[reg].foto !== ""  )
				{
				    html += '<img style="width: 200px;border-radius: 12px;margin-bottom: 19px;" src="'+response[reg].foto+'" style="width:100px"/>';    
                }else {
                    html += '<img style="width: 200px;border-radius: 12px;margin-bottom: 19px;" src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" style="width:100px"/>'; 
                } 
                
                


				if(response[reg].descripcion == null){
				  
				}else {
					html += '<p class="upper menu-texto">'+response[reg].descripcion+'</p>';
				}
				if(response[reg].precio == null){
				    
				} else {
					html += '<p class="upper menu-texto"> S/. '+response[reg].precio+'</p>';
				}
				html += ' </div>';
				$('#sploo'+response[reg].idcategoria).append(html);
				
                html = '';
                html += ' </div>';
                
			} 

		}
	}).then(function(){

	});

}

function showplatosdelivery() {
	//<div class="card card-cascade wider"></div>
	let deliverydetalle = document.querySelector('#deliverydetalle');
	let deliveryinfo = document.querySelector('#deliveryinfo');

	let categoria = document.querySelector('#categoriadelivery').value;
	let html = '';
	$('#deliverycontainer').html('');
	$.ajax({
		url: '/Plato/Delivery',
		method: "GET",
		data:{
			id: categoria
		},
		success:function(response)
		{
			for(var reg in response)
			{	
			    let foto;
				let data;
			    if(response[reg].foto)
				{
				 foto = response[reg].foto;
				 data = foto.replace('images','images\\');
				}
				html += '<div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 px-2 py-4">';
				html += '<div class="card card-cascade narrower">';
				if(response[reg].foto)
				{
				    html += '<div class="view view-cascade overlay complemento">';
						html += '<img class="card-img-top" src="'+data+'" alt="Card image cap">';
						html += '<a><div class="mask rgba-white-slight"></div></a>';
					html += '</div>';
				}
					
					html += '<div class="card-body card-body-cascade">';
						html += '<h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i>'+response[reg].nombrecategoria+'</h5>';
						html += '<h4 class="font-weight-bold card-title">'+response[reg].nombre+'</h4>';
						if(response[reg].descripcion)
						{
						    html += '<p class="card-text">'+response[reg].descripcion+'</p>';
						}
						
						html += '<a class="btn btn-unique"'+'onclick="agregarproducto('+"'"+response[reg].nombre+"','"+response[reg].precio+"'"+')">AGREGAR AL PEDIDO</a>';
					html += '</div>';
					html += '<div class="card-footer text-muted text-center mt-4">';
					if(response[reg].precio)
					{
					    html += 'S/. ' + response[reg].precio;
					}else
					{
					    html += 'Gratuito';
					}
						
					html += '</div>';
				html += '</div>';
				html += '</div>';
			}

			$('#deliverycontainer').html(html);
		}
	}).then(function(){

	})
}

var pedido = {
	cliente: '',
	direccion: '',
	telefono: '',
	foto: '',
	metodo: '',
	total: 0,
	direccion: '',
	cantidad: 0,
	productos: []
}

function agregarproducto(nombre,precio) {
	let producto = {
		nombre: nombre,
		precio: precio,
		cantidad: 1
	}
	let flag = false;

	let array = pedido.productos;
	let cantidad = array.length;
	if(cantidad==0){
		pedido.productos.push(producto);
	}
	else {
		for (let i = 0; i < cantidad; i++) {
			if(array[i].nombre === producto.nombre)
			{
				flag = false;
				array[i].cantidad += 1;
				break;
			}
			else 
			{
				flag = true;
			}
		}
		if(flag==true){
			array.push(producto);
		}
	}
	console.log(producto);
	console.log(pedido);
	calculartotales()
}

function calculartotales() {
	let array = pedido.productos;
	let total = 0;
	let cantidad = array.length;
	let productos = 0;
	for (let i = 0; i < cantidad; i++) {
		total += array[i].precio * array[i].cantidad;
		productos += array[i].cantidad;
	}
	pedido.total = total;
	pedido.cantidad = productos;
	pintarpedido()
}

function quitarproducto(nombre) {
	//let flag = false;

	let array = pedido.productos;
	let cantidad = array.length;
	if(cantidad==0){
		
	}
	else {
		for (let i = 0; i < cantidad; i++) {
			if(array[i].nombre === nombre)
			{
				//flag = false;
				if(array[i].cantidad>1)
				{
					array[i].cantidad = array[i].cantidad - 1;
					break;
				}else
				{
					array.splice(i,1);
					break;
				}
				
			}
			/*else 
			{
				flag = true;
			}*/
		}
		/*if(flag==true){
			array.splice(array[i]);
		}*/
		calculartotales();
	}
}

/*<li class="list-group-item justify-content-between">
Cras justo odio
<span class="badge badge-primary badge-pill">14</span>
</li>

<div class="col-12">
	<span class="badge badge-primary badge-pill">S/. 14</span>
	<div class="btn-group" role="group" aria-label="Basic example">
		<button class="btn btn-danger btn-sm"><i class="fas fa-minus"></i></button>
		<button class="btn btn-success btn-sm"><i class="fas fa-plus"></i></button>
	</div>
</div>

*/

function pintarpedido() {
	
	let container = document.querySelector('#pedidoproductos');
	let total = pedido.total;
	let cantidad = pedido.cantidad
	let array = pedido.productos;
	let html = '';
	for (let i = 0; i < array.length; i++) {
		html += '<li class="list-group-item justify-content-between d-flex px-1">';
			html += '<div class="col-8 d-flex px-1" style="align-items: center;">';
				html += array[i].nombre + ' X ' + array[i].cantidad;
			html += '</div>';
			html += '<div class="col-4 d-flex px-1">';
				html += '<div class="col-6 text-center d-flex px-0" style="align-items: center;">';
					html += '<span class="badge badge-primary badge-pill">'+'S/. '+(array[i].precio*array[i].cantidad)+'</span>';
				html += '</div>';
				html += '<div class="col-6 text-center d-flex px-0" style="align-items: center;">';
					html += '<button class="btn btn-xs btn-danger"'+'onclick="quitarproducto('+"'"+array[i].nombre+"'"+')"><i class="fas fa-trash"></i></button>';
				html += '</div>';
			html += '</div>';
		html += '</li>';
	}
	container.innerHTML = html;
	let cantidadpedido = document.querySelector('#cantidadpedido');
	cantidadpedido.innerHTML = cantidad;
	let totalpedido = document.querySelector('#totalpedido');
	totalpedido.innerHTML = 'TOTAL : S/. ' + total;
}

function enviarpedidocorreo() {
	$.ajax({
		url: '/Plato/Mail',
		type: 'POST',
		data : pedido,
		success: function(data){
		    
		},
		error: function(e){
			document.querySelector('#pagomsg').innerHTML='OCURRIO ALGUN ERROR AL ENVIAR LA INFORMACION PORFAVOR COMUNICATE CON NOSOTROS AL 941241590, TE ATENDEREMOS AL INSTANTE.';
		}
	}).done(function(){
		document.querySelector('#pagomsg').innerHTML='GRACIAS POR COMPRAR EN BANDRA CORROBORAREMOS EL PAGO Y NOS COMUNICAREMOS CONTIGO';
	});
}