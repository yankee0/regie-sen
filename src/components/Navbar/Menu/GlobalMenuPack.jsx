import React, { useState } from "react";

export default function GlobalMenuPack() {
  return (
    <>
      <li>
        <a
          className="hover:text-primary active:text-primary focus:text-primary"
          href="#accueil"
        >
          Accueil
        </a>
      </li>
      <li>
        <a
          className="hover:text-primary active:text-primary focus:text-primary"
          href="#a-propos"
        >
          À propos
        </a>
      </li>
      <li>
        <a
          className="hover:text-primary active:text-primary focus:text-primary"
          href="#services"
        >
          Services
        </a>
      </li>
    </>
  );
}
