import React from "react";
import "./styles.css";

// IMAGENS
import logo from "../../Images/logo.png";
import login from "../../Images/Login/login-left.png";



function Login() {
    return (
        <section className="login_section">
            <div className="login_left_div">
                <div className="login_left_text_div">
                    <h4>Bem-vindo(a) à plataforma Vivadí</h4>
                    <p>Aqui começa a caminhada pelo desenvolvimento do hemisfério direito da sua escola com as melhores ferramentas para ativar <b>atores</b> e <b>territórios</b> formativos além da sala de aula.</p><br />
                    <p><b>Não perca tempo!</b><br />
                    <b>Faça o login</b> para acessar e começar o desenvolvimento dos programas Vivadí!</p>
                </div>
                <div className="login_left_image_div">
                    <img src={login} />
                </div>
            </div>



        <div className="login_main_div">
            <div className="login_logo_div">
                <img src={logo} />
            </div>
            <div className="login_text_div">
                <div>Para entrar no Vivadi, digite o seu <b>nome usuário</b> e sua <b>senha</b>.</div>
            </div>

            <form>
                <div className="form_div_elements">
                    <label>Usuário</label>
                    <br />
                    <input type="text" name="userName" />
                </div>
                <div className="form_div_elements">
                    <label>Senha</label>
                    <br />
                    <input type="password" name="password" />
                </div>
                <div>
                    <input className="login_submit" type="submit" value="Entrar   →" />
                </div>
                <a href="#">Esqueci minha senha</a>
            </form>
        </div>
        </section>
    )
}

export default Login
