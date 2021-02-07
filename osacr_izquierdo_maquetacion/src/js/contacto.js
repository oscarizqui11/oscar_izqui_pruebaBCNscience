// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            event.preventDefault()
            showMessage()
          }
          
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function showMessage() {

    let name = document.getElementById("validationCustom01").value;
    document.getElementById("respuesta-text").replaceWith("Hi " + name + "!")
    
    document.getElementById("respuesta-custom").style.display = "flex";
  }