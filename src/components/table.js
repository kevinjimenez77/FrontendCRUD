import "./table.css";

export default function Table({ data = [], onDelete, onClickEdit }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Apodo</th>
            <th>Numero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.idPlayer}</td>
              <td>{row.playerName}</td>
              <td>{row.playerLastName}</td>
              <td>{row.playerNickName}</td>
              <td>{row.jerseyNumber}</td>
              <td>
                <button onClick={() => onDelete(row.idPlayer)}>Eliminar</button>
                <button onClick={() => onClickEdit(row)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
