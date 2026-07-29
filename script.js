emailjs.init("u8GJCdmWlp6JkUzYT");

const form = document.getElementById("contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_3rm6guj",

"template_8nt7ydd",

this

)

.then(function(){

alert("✅ Thank you! Your message has been sent.");

form.reset();

})

.catch(function(error){

alert("❌ Something went wrong.");

console.log(error);

});

});

}