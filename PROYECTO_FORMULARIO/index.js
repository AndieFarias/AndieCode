
          (function(){
              var formulario = document.getElementsByName('formulario')[0];
              elementos = formulario.elements,
              boton = document.getElementById('btn');

            var validarNombre = function(e){
                if (formulario.nombre.value == 0){
                    alert('Completa el campo Nombre');
                    e.preventDefault();
                }
            };
              var validar1 = function(e){
                  validarNombre(e);
              }

              var validarApellido = function(e){
                if (formulario.apellido.value == 0){
                    alert('Completa el campo Apellido');
                    e.preventDefault();
                }
            };
              var validar2 = function(e){
                  validarApellido(e);
              }


              var validarRadio = function(e){
                if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){                
                }else{
                    alert("Completa el campo de sexo");
                    e.preventDefault();
                }
              };

              var validar3 = function(e){
                  validarRadio(e);
              }

              var validarCheck = function(e){
                if(formulario.checkin.checked == true){                
                }else{
                    alert("Completa el check de Términos y Condiciones");
                    e.preventDefault();
                }
              };

              var validar4 = function(e){
                  validarCheck(e);
              }


              formulario.addEventListener("submit", validar1);
              formulario.addEventListener("submit", validar2);
              formulario.addEventListener("submit", validar3);
              formulario.addEventListener("submit", validar4);
          }())