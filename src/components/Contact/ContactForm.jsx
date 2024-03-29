import { useFormik } from "formik";
import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [sending, setSending] = React.useState(false);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, { resetForm }) => {
      setSending(true);
      emailjs
        .send("service_hostinger_sdp", "template_8wodfg9", {
          from_name: values.from_name,
          message: values.message,
          reply_to: values.reply_to,
        },"cGQaPgsp-x-VJtFaw")
        .then(() => {
          setSending(false);
          alert("Votre message a été envoyé avec succès !");
          resetForm();
        })
        .catch(() => {
          setSending(false);
          alert(
            "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer."
          );
        });
    },
  });
  return (
    <div id="contact" className="container pt-20 mx-auto p-3">
      <div className="grid gap-10 grid-flow-row md:grid-flow-col md:grid-cols-2">
        <div>
          <h2 className="card-title text-5xl font-bold text-secondary mb-5">
            Nous contacter
          </h2>
          <div className="grid row gap-4">
            <div className="collapse collapse-plus bg-slate-100">
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
            <div className="collapse collapse-plus bg-slate-100">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Nos services publicitaires
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Découvrez notre gamme complète de services publicitaires, des
                  panneaux 12m² aux caravanes publicitaires. Nous offrons des
                  solutions créatives pour maximiser votre visibilité.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-slate-100">
              <input type="radio" name="contactAccordion" />
              <div className="collapse-title text-primary text-xl font-medium">
                Pige et veille concurrentielle
              </div>
              <div className="collapse-content">
                <p className=" text-secondary text-opacity-80">
                  Optimisez votre succès marketing grâce à notre expertise en
                  veille concurrentielle. Notre équipe vous guidera pour rester
                  en tête de la course, en surveillant vos concurrents et en
                  adaptant votre stratégie en conséquence. Contactez-nous
                  aujourd'hui pour un avantage concurrentiel inégalé.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-slate-100">
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
          <form
            onSubmit={formik.handleSubmit}
            className="card w-full bg-gradient-to-r from-secondary to-primary text-primary-content"
          >
            <div className="card-body">
              <h2 className="card-title text-5xl font-bold text-base-100 mb-3">
                Laissez nous un message
              </h2>
              <p className="text-white text-opacity-80 mb-3">
                Nous serions enchantés d'entrer en contact avec vous. Notre
                équipe répondra à votre message dans les plus brefs délais.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="input input-bordered w-full mb-3"
                  onChange={formik.handleChange("from_name")}
                  value={formik.values.from_name}
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="input input-bordered w-full mb-3"
                  onChange={formik.handleChange("reply_to")}
                  value={formik.values.reply_to}
                  required
                />
                <textarea
                  required
                  className="textarea textarea-bordered w-full"
                  placeholder="Votre message"
                  onChange={formik.handleChange("message")}
                  value={formik.values.message}
                ></textarea>
              </div>
              <div className="card-actions justify-end">
                <button
                  disabled={sending}
                  type="submit"
                  className="btn btn-primary text-base-100"
                >
                  {sending ? "Envoi en cours..." : "Envoyer"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
