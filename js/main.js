$(document).ready(function(){

    //Slider

    if(window.location.href.indexOf('index')>-1){

        $('.galeria').bxSlider({
            auto: true,
            speed: 800,
            pager: true,
            slideWidth: 1200,
            controls:false,
            pager:false,
            autoControls:true,
            pause:1800
          });
    }
    

    //Posts
    if(window.location.href.indexOf('index')>-1){
        var posts = [
            {
                title: 'Prueba de Titulo 1',
                date: 'Publicado el dia '+ moment().format('dddd')+ ' de '+moment().format('MMMM')+' del '+moment().format('YYYY') ,
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam.'
            },
            {
                title: 'Prueba de Titulo 2',
                date: 'Publicado el dia '+ moment().format('dddd')+ ' de '+moment().format('MMMM')+' del '+moment().format('YYYY')   ,
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam.'
        
            },
            {
                title: 'Prueba de Titulo 3',
                date: 'Publicado el dia '+ moment().format('dddd')+ ' de '+moment().format('MMMM')+' del '+moment().format('YYYY') ,
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam.'
        
            },
            {
                title: 'Prueba de Titulo 4',
                date: 'Publicado el dia '+ moment().format('dddd')+ ' de '+moment().format('MMMM')+' del '+moment().format('YYYY') ,
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate molestias pariatur laborum nisi excepturi magni asperiores autem aspernatur delectus.  Quaerat blanditiis, provident et architecto aliquid quam suscipit quo aperiam.'
        
            },
        ];
        
        posts.forEach((item)=>{
            var post = `

            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}
            </p>
            <a href="#" class="button-more">Leer Mas</a>
            </article>       
            `;

            $('#posts').append(post)
        })
    }
    //Selector de temas 
    var theme = $('#theme')
    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css');
    })
    $('#to-red').click(function(){
    theme.attr('href', 'css/red.css');
    })

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css');
    })


    //Scroll hacia arriba
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    });

    //Login Falso
    if(window.location.href.indexOf('index')>-1){

                
        $("#form_user").validate({
            rules: {
            name : {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },

            },
            messages : {
                name: {
                required:'El campo no puede estar vacio',
                minlength: "Completa con tu nombre y minimo 3 lineas"
                },
                email:{
                    required: "El campo no puede estar vacio",
                    email:'Escribe un email correcto'
            }
            }
        });

        $('#login form').submit(function(e){
        var form_name= $('#form_name').val();



        localStorage.setItem('form_name', form_name);
        });



        var form_name = localStorage.getItem('form_name')

        if(form_name != null & form_name != 'undefined' & form_name.length != 0){
       
            var about_parrafo =  $('#about p');
            $('#about p').html('bienvenido,'+'<strong>'+  form_name+'</strong>');
    
            about_parrafo.append(' <br> <a href="#" id="logout">Cerrar Sesion </a>')
    
            $('#login form').hide();
    
    
            $('#logout').click(function(){
                 localStorage.clear();
                 location.reload();
            })
          
        }


    }



    if(window.location.href.indexOf('about')>-1){
    $('#acordeon').accordion();
    }

    //reloj
    if(window.location.href.indexOf('reloj')>-1){


        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);  
        },1000);
   

    }

    if(window.location.href.indexOf('contacto')>-1){


        
        $("#form_contact").validate({
            rules: {
              name : {
                required: true,
                minlength: 3
              },
              surname: {
                required: true,
                
               
              },
              email: {
                required: true,
                email: true
              },
              date: {
                required: true,
                date:true
              },
              years: {
                required: true,
                number: true,
                min: 18
              },
            },
            messages : {
                name: {
                  required:'El campo no puede estar vacio',
                  minlength: "Completa con tu nombre y minimo 3 lineas"
                },
                surname: {
                  required: "El campo no puede estar vacio",
                  number: "Please enter your age as a numerical value",
                  min: "You must be at least 18 years old"
                },
                email:{
                    required: "El campo no puede estar vacio",
                    email:'Escribe un email correcto'
                },
                years: {
                  required: "El campo no puede estar vacio",
                  min: "Debe ser mayor a 18 años"

                },
                date: {
                    required:'El campo no puede estar vacio',
                    date: "Indica la fecha"
                }
              }
          });
       

    }
    

});