import React from "react";
import backgroundImage from "./../../assets/bg.svg";
import logo from "./../../assets/logo.jpg";
import affiche from "./../../assets/aff.jpg";
import caravane from "./../../assets/caravane.jpg";
import oriflamme from "./../../assets/oriflamme.jpg";
import monitoring from "./../../assets/monitoring.jpg";
import carwash from "./../../assets/carwash.jpg";
import solution from "./../../assets/solution.jpg";
import ContactForm from "../Contact/ContactForm";
import agPartners from "./../../assets/logo/ag-partners.jpeg";
import crax from "./../../assets/logo/crax.jpeg";
import havas from "./../../assets/logo/havas.png";
import sgbs from "./../../assets/logo/sgbs.png";
import tecno from "./../../assets/logo/tecno.png";
import sogepal from "./../../assets/logo/sogepal.jpeg";
import casa from "./../../assets/logo/casa.jpeg";
import gfm from "./../../assets/logo/gfm.jpeg";
//               sgbs.png                tecno.png

export default function Home() {
  return (
    <>
      <div
        id="accueil"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-white">
            <h1 className="text-5xl font-bold mt-20 lg:mt-0">
              Transformez votre message en une expérience mémorable avec Régie
              Sen!
            </h1>
            <p className="py-6 text-gray-300">
              Régie Sen votre partenaire publicitaire de confiance au Sénégal.
              Laissez-nous vous aider à rayonner.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn text-white btn-primary">
                Nous contacter
              </a>
              <a href="#a-propos" className="btn btn-secondary">
                À propos
              </a>
            </div>
          </div>
          <img
            src={logo}
            className="max-w-sm rounded-lg shadow-2xl max-h-[300px] hidden lg:block"
          />
        </div>
      </div>
      <div id="a-propos" className="container pt-20 m-auto p-3">
        <h2 className="text-5xl font-bold text-secondary mb-5 text-center">
          À propos
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-flow-row gap-5">
          <div className="flex p-3 border rounded-box text-secondary">
            <div>
              <div className="p-1 bg-light text-primary rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-text text-sm">
                Nous embrassons l'innovation pour créer des campagnes
                publicitaires qui se démarquent, captivent et évoluent avec le
                monde en constante évolution.
              </p>
            </div>
          </div>

          <div className="flex p-3 border rounded-box text-secondary">
            <div>
              <div className="p-1 bg-light text-primary rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 11c0-4.9-3.499-9.1-8.32-9.983l-.18-.034-.18.033c-4.821.884-8.32 5.084-8.32 9.984 0 4.617 3.108 8.61 7.5 9.795v1.205c0 .553.448 1 1 1s1-.447 1-1v-1.205c4.392-1.185 7.5-5.178 7.5-9.795zm-7.5 7.7v-2.993l4.354-4.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-3.647 3.647v-3.586l2.354-2.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-1.647 1.647v-3.293c0-.553-.448-1-1-1s-1 .447-1 1v3.293l-1.646-1.647c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l2.354 2.354v3.586l-3.646-3.646c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l4.354 4.354v2.992c-3.249-1.116-5.502-4.179-5.502-7.7 0-3.874 2.723-7.201 6.5-7.981 3.777.78 6.5 4.107 6.5 7.981 0 3.521-2.253 6.584-5.5 7.7z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Responsabilité sociale</h3>
              <p className="text-text text-sm">
                Nous nous engageons envers la responsabilité sociale en
                soutenant des initiatives communautaires et environnementales
                pour un avenir meilleur.
              </p>
            </div>
          </div>

          <div className="flex p-3 border rounded-box text-secondary">
            <div>
              <div className="p-1 bg-light text-primary rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Satisfaction client</h3>
              <p className="text-text text-sm">
                Notre priorité est la satisfaction de nos clients. Nous
                travaillons main dans la main avec vous pour atteindre vos
                objectifs publicitaires.
              </p>
            </div>
          </div>

          <div className="flex p-3 border rounded-box text-secondary">
            <div>
              <div className="p-1 bg-light text-primary rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-text text-sm">
                Nous croyons en la puissance de la collaboration. Ensemble, nous
                créons des campagnes publicitaires exceptionnelles qui marquent
                les esprits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="container pt-20 m-auto p-3">
        <h2 className="text-5xl font-bold text-secondary mb-5 text-center">
          Nos services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:grid-flow-row">
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={affiche}
                alt="Affiches PUB"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Affichage publicitaire
              </h4>
              <p className="text-sm text-secondary">
                Faites passer votre message à travers nos panneaux publicitaires
                12m² stratégiquement situés pour une visibilité maximale.
              </p>
            </div>
          </div>
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={caravane}
                alt="Caravanes PUB"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Caravanes Publicitaires
              </h4>
              <p className="text-sm text-secondary">
                Créez un impact mémorable en déplaçant votre publicité à travers
                les rues avec nos caravanes publicitaires.
              </p>
            </div>
          </div>
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={monitoring}
                alt="Monitoring PUB"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Pige et Veille Concurrentielle
              </h4>
              <p className="text-sm text-secondary">
                L'analyse minutieuse de la concurrence est essentielle pour
                prospérer sur le marché. Avec Pige et Veille Concurrentielle,
                vous restez toujours en avance.
              </p>
            </div>
          </div>
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={oriflamme}
                alt="OriBa"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Oriflammes et Bannières
              </h4>
              <p className="text-sm text-secondary">
                Attirez l'attention lors d'événements spéciaux et sur des sites
                précis avec nos oriflammes et bannières personnalisées.
              </p>
            </div>
          </div>
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={carwash}
                alt="Lavade de voiture"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Lavage de Voiture sans Contact
              </h4>
              <p className="text-sm text-secondary">
                Offrez à votre voiture un nettoyage en douceur et efficace sans
                contact avec notre service de lavage.
              </p>
            </div>
          </div>
          <div className="card border">
            <figure>
              <img
                className="aspect-video object-cover"
                src={solution}
                alt="Solution"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title text-secondary">
                Solutions Personnalisées
              </h4>
              <p className="text-sm text-secondary">
                Besoins spécifiques ? Nous créons des solutions de publicité sur
                mesure pour répondre à vos exigences uniques.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="container pt-20 m-auto p-3">
        <h2 className="text-4xl text-secondary mb-5 text-center">
          Ils nous ont fait confiance:
        </h2>
        <div className="carousel carousel-center rounded-box md:w-full md:justify-around">
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={agPartners}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={gfm}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={havas}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={sgbs}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={casa}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={tecno}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={crax}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="max-h-[70px] aspect-video object-contain"
              src={sogepal}
              alt="Pizza"
            />
          </div>
        </div>
      </div>
    </>
  );
}
