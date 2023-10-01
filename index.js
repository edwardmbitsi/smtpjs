function sendEmail() {

  //Define campos
  let fields = {
    name: document.querySelector("#name").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value
  };
  
  //Monta corpo da mensagem
  let body = '<br><b>Name:</b> ' + fields.name + '<br>' +
  '<b>Phone:</b> ' + fields.phone + '<br>' +
  '<b>E-mail:</b> ' + fields.email + '<br>' +
  '<b>Message:</b> ' + fields.message + '</p>';
  
  //Função de envio do SmtpJS
  Email.send({
    SecureToken : "3e3ceea2-2cb6-460e-bef9-8eda1298071a",
    To : "portfoliocraft444@gmail.com",
    From : "almeidadavid123@gmail.com",
    Subject : "Novo contato via site",
    Body : body
  }).then(
    message => console.log(message)
  );
};
