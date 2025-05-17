import { useState } from "react";
import chevronIcon from "@/assets/images/chevron.svg";
import type { DocumentListType } from "@/utils/Types";

function LoginForm() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [document, setDocument] = useState<string>("dni");

  const documentList: DocumentListType = {
    dni: "DNI",
    ce: "C. E.",
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const selectDocument = (doc: string) => {
    setDocument(doc);
    toggleDropdown();
  };

  return (
    <form className="form">
      <div className="form__inputgroup">
        <button type="button" onClick={toggleDropdown}>
          <p>{documentList[document]}</p>
          <img src={chevronIcon} alt="Chevron icon" />
        </button>
        <ul className={dropdown ? "shown" : ""}>
          <li onClick={() => selectDocument("dni")}>DNI</li>
          <li onClick={() => selectDocument("ce")}>C. E.</li>
        </ul>

        <div className="form__input">
          <input
            type="text"
            name="document"
            id="document"
            placeholder="Nro. de documento"
          />
          <label htmlFor="document">Nro. de documento</label>
        </div>
      </div>

      <div className="form__input">
        <input
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Celular"
        />
        <label htmlFor="mobile">Celular</label>
      </div>

      <div className="form__check">
        <input
          type="checkbox"
          value="privacy"
          name="privacy"
          id="privacy"
        />
        <label htmlFor="privacy">Acepto la Política de Privacidad</label>
      </div>

      <div className="form__check">
        <input
          type="checkbox"
          value="comunication"
          name="comunication"
          id="comunication"
        />
        <label htmlFor="comunication">
          Acepto la Política de Comunicaciones Comerciales
        </label>
      </div>

      <a className="form__link" href="#">Aplican Términos y Condiciones</a>

      <button type="submit">Cotiza aquí</button>
    </form>
  );
}

export default LoginForm;
