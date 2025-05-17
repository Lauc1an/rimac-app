import family from "@/assets/images/family.png";

function LoginPage() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__heading">
          <div className="login__promo">Seguro Salud Flexible</div>
          <h1>Creado para ti y tu familia</h1>
        </div>
        <div className="login__image">
          <img src={family} alt="Familia feliz"/>
        </div>
        <div className="login__form">
          <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
