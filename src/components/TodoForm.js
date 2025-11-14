import { useState } from "react";

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState("");
  const [error, setError] = useState(""); // <-- for empty message

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === "") {
      setError("Le champ ne peut pas être vide !");
      return;
    }
    ajouterTache(texte);
    setTexte("");
    setError(""); // clear error after adding
  };

  return (
    <form onSubmit={soumettreFormulaire} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Nouvelle tâche"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </div>
      {error && <div className="text-danger mt-1">{error}</div>}
    </form>
  );
}

export default TodoForm;
