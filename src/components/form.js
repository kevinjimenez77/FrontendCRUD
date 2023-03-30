import './form.css'

export default function Form({onClick, onChange, form = {}, edit = false, cancelEdit, onClickEdit}) {
  return (
    <div className='form-container'>
      <input id="playerName" onChange={(e) => onChange(e)} placeholder="Nombre" value={form.playerName} />
      <input id="playerLastName" onChange={(e) => onChange(e)} placeholder="Apellido" value={form.playerLastName} />
      <input id="playerNickName" onChange={(e) => onChange(e)} placeholder="Apodo" value={form.playerNickName} />
      <input id="jerseyNumber" onChange={(e) => onChange(e)} placeholder="Numero" value={form.jerseyNumber} />
      <button onClick={edit ? onClickEdit : onClick}>{`${edit ? 'Editar' : 'Crear'} jugador`}</button>
      {edit && (
        <button onClick={cancelEdit}>Cancelar</button>
      )}
    </div>
  );
}
