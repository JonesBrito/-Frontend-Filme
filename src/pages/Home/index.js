import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Home() {
    return (
        <>
            <section class="bgDark" id="homeInfo">
                <div class="infoImg"></div>
                <div class="infoContent">
                    <h2><span class="textPrimary">A História </span>Do Nosso Site</h2>
                    <p>O JSFlix começou a partir do sonho de tornar referência no seu setor de atuação.
                    </p>
                    <a href="/sobre" class="btn btnLight">Leia Mais</a>
                </div>
            </section>
            <section id="features">
                <div class="box bgLight">
                    <i class="fas fa-hotel fa-3x"></i>
                    <h3>Ótima Localização</h3>
                    <p>Localização privilegiada perto de praias e dos melhores restaurantes da cidade!</p>
                </div>
                <div class="box bgPrimary">
                    <i class="fas fa-utensils fa-3x"></i>
                    <h3>Promoções Semanais</h3>
                    <p>Oferecemos diversas promoções ao decorrer da semana!</p>
                </div>
                <div class="box bgLight">
                    <i class="fas fa-dumbbell fa-3x"></i>
                    <h3>Grande Acervo de Filmes</h3>
                    <p id="teste">Uma imensa quantidade de filmes disponíveis!</p>
                </div>
            </section>
        </>
    )
}

export default Home;