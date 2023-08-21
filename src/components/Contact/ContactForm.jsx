import React from "react";

export default function ContactForm() {
  return (
    <div className="container mx-auto p-3">
      <div className="grid gap-3 grid-flow-row md:grid-flow-col md:grid-cols-2">
        <div>
          <h2 className="card-title text-5xl font-bold text-secondary mb-3">
            Nous contacter
          </h2>
          <div className="grid row gap-3">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Demander un devis
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Obtenez rapidement un devis personnalisé en fournissant
                  quelques détails sur vos besoins. Notre équipe vous contactera
                  avec une offre sur mesure.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Nos Services Publicitaires
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Découvrez notre gamme complète de services publicitaires, des
                  panneaux 12m² aux caravanes publicitaires. Nous offrons des
                  solutions créatives pour maximiser votre visibilité.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Monitoring de Publicité
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Apprenez-en plus sur notre service de suivi de publicités
                  télévisées et radiophoniques. Nous analysons les performances
                  de vos campagnes pour optimiser vos résultats.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Votre avis
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Votre opinion compte pour nous. Partagez vos commentaires,
                  suggestions ou préoccupations afin que nous puissions
                  continuer à améliorer nos services et mieux vous servir à
                  l'avenir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-full bg-gradient-to-r from-secondary to-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title text-5xl font-bold text-base-100 mb-3">
                Laissez nous un message
              </h2>
              <p className="text-white text-opacity-80 mb-3">
                Nous serions enchantés d'entrer en contact avec vous. Notre
                équipe répondra à votre message dans les plus brefs délais.
              </p>
              <form action="#">
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="input input-bordered w-full mb-3"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="input input-bordered w-full mb-3"
                  required
                />
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Votre message"
                ></textarea>
                <label className="cursor-pointer label gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-primary toget-xs"
                  />
                  <span className="label-text text-white text-opacity-80 mb-3">
                    Recevoir de nos nouvelles et de nos conseils en s'abonnant à
                    notre newsletter.
                  </span>
                </label>
              </form>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-base-100">
                  Envoyer le message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
