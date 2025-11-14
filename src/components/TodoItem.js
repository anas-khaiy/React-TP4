function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
          className="form-check-input me-2"
        />
        <span
          style={{ textDecoration: tache.terminee ? "line-through" : "none" }}
        >
          {tache.texte}
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => supprimerTache(tache.id)}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
