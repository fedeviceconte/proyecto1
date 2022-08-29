const Contacto = (props) => {
    return (
<main className="main">
<div className="container-form">
    <div className="info-form">
        <h2>Contactanos</h2>
        <p>¿Necesitás hablar con nosotros? ¡Estamos para ayudarte!
            Te detallamos debajo todos los medios de contacto que podes utilizar para comunicarte, tambien podes llenar el formulario y esperar que nosotros nos comuniquemos con vos!</p>
        <a href="#"><i className="fa fa-phone"></i>11-22565387</a>
        <a href="#"><i className="fa fa-envelope"></i>federico.viceconte3@gmail.com</a>
        <a href="#"><i className="fa fa-map-marked"></i>Ciudad Evita,Bs As</a>
    </div>
    
    <form action="#"  autocomplete="off"/>
        <input type="text" name="nombre"
        placeholder="Ingresa tu nombre"
        className="campo"/>
        <input type="email" name="email"
        placeholder="Ingresa tu correo"
        className="campo"/>
        <textarea name="mensaje" placeholder="Ingresa tu mensaje"></textarea>
        <input type="submit" name="enviar" value="enviar mensaje" className="btn-enviar"/>
    <form/>
    </div>


    
</main>
    
    );
}
export default Contacto;