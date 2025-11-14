import TodoItem from "./TodoItem";

function TodoList({ taches, changerEtat, supprimerTache }) {
  return (
    <ul className="list-group">
      {taches.map((t) => (
        <TodoItem
          key={t.id}
          tache={t}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;
