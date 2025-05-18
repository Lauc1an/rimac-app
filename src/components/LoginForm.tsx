import { useState } from "react";
import type { KeyboardEvent, FormEvent } from "react";
import chevronIcon from "@/assets/images/chevron.svg";
import { useAuthContext } from "@/context/auth/useAuth";
import type { DocumentListType, LoginType } from "@/utils/Types";

function LoginForm() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [documentType, setDocumentType] = useState<string>("dni");
  const { signIn, loading, errors } = useAuthContext();

  const documentList: DocumentListType = {
    dni: "DNI",
    ce: "C. E.",
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const selectDocument = (doc: string) => {
    setDocumentType(doc);
    toggleDropdown();
  };

  const numberMask = (e: KeyboardEvent<HTMLInputElement>) => {
    const key: string = e.key;
    const isDigit: boolean = /[0-9]/.test(key);

    const allowedKeys: string[] = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
      ".",
    ];

    const isCtrlCmdAction: boolean =
      (e.ctrlKey || e.metaKey) &&
      ["a", "c", "v", "x", "z"].includes(key.toLowerCase());

    if (allowedKeys.includes(key) || isCtrlCmdAction || isDigit) return;

    e.preventDefault();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      type: formData.get("type") as string,
      document: documentType,
      mobile: formData.get("mobile") as string,
      privacy: formData.get("privacy") as string | null,
      comunication: formData.get("comunication") as string | null,
    } as LoginType;
    signIn(data);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__inputgroup">
        <button
          type="button"
          className={dropdown ? "open" : ""}
          onClick={toggleDropdown}
        >
          <p>{documentList[documentType]}</p>
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
            inputMode="numeric"
            onKeyDown={numberMask}
            maxLength={documentType === "dni" ? 8 : 9}
          />
          <label htmlFor="document">Nro. de documento</label>
        </div>
      </div>
      {Array.isArray(errors?.document)
      ? errors.document.map((err, index) => (
          <div key={index} className="error-message">{err}</div>
        ))
      : errors?.document && (
          <div className="error-message">{errors.document}</div>
        )}

      <div className="form__input">
        <input
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Celular"
          inputMode="numeric"
          onKeyDown={numberMask}
          maxLength={9}
        />
        <label htmlFor="mobile">Celular</label>
      </div>
      {Array.isArray(errors?.mobile)
      ? errors.mobile.map((err, index) => (
          <div key={index} className="error-message">{err}</div>
        ))
      : errors?.mobile && (
          <div className="error-message">{errors.mobile}</div>
        )}

      <div className="form__check">
        <input
          type="checkbox"
          value="privacy"
          name="privacy"
          id="privacy"
        />
        <label htmlFor="privacy">Acepto la Política de Privacidad</label>
        {Array.isArray(errors?.privacy)
        ? errors.privacy.map((err, index) => (
            <div key={index} className="error-message">{err}</div>
          ))
        : errors?.privacy && (
            <div className="error-message">{errors.privacy}</div>
          )}
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
        {Array.isArray(errors?.comunication)
        ? errors.comunication.map((err, index) => (
            <div key={index} className="error-message">{err}</div>
          ))
        : errors?.comunication && (
            <div className="error-message">{errors.comunication}</div>
          )}
      </div>

      <a className="form__link" href="#">
        Aplican Términos y Condiciones
      </a>

      <button type="submit" disabled={loading}>Cotiza aquí</button>
    </form>
  );
}

export default LoginForm;
