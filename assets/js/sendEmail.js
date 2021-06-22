$('.ui.form')
    .form({
        fields: {
            name: {
                identifier: 'from_name',
                rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter your name'
                }
                ]
            },
            email: {
                identifier: 'from_email',
                rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter your email'
                }
                ]
            },
            message: {
                identifier: 'message',
                rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter your message'
                }
                ]
            },
        }
    });

    // if( $('.ui.form').form('is valid', 'email')) {
    // // email is valid
    // 	console.log("valid email--------");
    // }

    var
        $form = $('.ui.form form'),					
        fname = $form.form('get value', 'from_name'),
        email = $form.form('get value', 'from_email'),
        message = $form.form('get value', 'message');
                            
        console.log(fname);
        console.log(email);
        console.log(message);
    

        window.onload = function() {
            emailjs.init("user_P1uyuwBbgzFz4afB7QMvF");	
            document.getElementById('myForm').addEventListener('submit', function(event) {
                event.preventDefault();              

                // emailjs.sendForm('service_jyqlb78', 'template_wxnqq8d', '#myForm')
                // 	.then(function(response) {
                // 	console.log('SUCCESS!', response.status, response.text);
                // 	}, function(error) {
                // 	console.log('FAILED...', error);
                // 	});

                const formElem = document.querySelector('form');
                // construct a FormData object, which fires the formdata event
            
                // Get the form data from the event object
                let data = new FormData(formElem);							
                // for (var value of data.values()) {
                // 	// console.log(value);
                // 	alert(value)
                // }
                from_name1 = document.getElementById("txtname").value
                from_email1 = document.getElementById("txtemail").value
                message1 = document.getElementById("txtmessage").value
                
                var templateParams = {						

                    from_name:from_name1,
                    from_email:from_email1,
                    to_name:"Botswana Safaris",
                    message:message1,								
                };
                // var templateParams1 = {						

                // 	from_name:"cigi111234",
                // 	from_email:"cigisebastine@gmail.com",
                // 	to_name:"nicole111234",
                // 	message:"ddddddddddddddd234",								
                // };
                if(from_name1 != "" && from_email1 != "" && message != ""){
                    emailjs.send('service_jyqlb78', 'template_wxnqq8d', templateParams)
                        .then(function(response) {
                            // alert("success")
                            document.getElementById("successmsg").style.display = "block"
                            document.getElementById("successmsg").innerHTML = "Email send successfully"
                            document.getElementById("txtname").value = ""
                            document.getElementById("txtemail").value = ""
                            document.getElementById("txtmessage").value = ""
                        //console.log('SUCCESS!', response.status, response.text);
                        }, function(error) {
                            console.log('FAILED...', error);
                        });
                }
            });
        }

 		
