import "./App.css";
import Table from "./components/table";
import { useState, useEffect } from "react";
import * as http from "./api/http";
import Form from "./components/form";

const formInitialState = {
  playerName: "",
  playerLastName: "",
  playerNickName: "",
  jerseyNumber: 0,
};

function App() {
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(formInitialState);
  const [playerEdit, setPlayerEdit] = useState("");

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    http
      .get("http://localhost:3001/api/getPlayers")
      .then(function (response) {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos", error);
      });
  };

  const onChange = (e) => {
    let input = e.target.value;
    let id = e.target.id;

    setFormData({
      ...formData,
      [id]: input,
    });
  };

  const onClickAdd = () => {
    http
      .post("http://localhost:3001/api/create", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(window.location.replace(""));
  };

  const onClickDelete = (id) => {
    http
      ._delete("http://localhost:3001/api/delete", { idPlayer: id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(window.location.replace(""));
  };

  const onClickEditPlayer = (row) => {
    setEdit(true);
    setFormData(row);
    setPlayerEdit(row.idPlayer);
  };

  const cancelEdit = () => {
    setEdit(false);
    setFormData(formInitialState);
  };

  const onClickEdit = () => {
    http
      .put("http://localhost:3001/api/update", {
        idPlayer: playerEdit,
        ...formData,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(window.location.replace(""));
  };

  return (
    <div className="App">
      <Form
        onChange={onChange}
        onClick={onClickAdd}
        form={formData}
        edit={edit}
        cancelEdit={cancelEdit}
        onClickEdit={onClickEdit}
      />
      <Table
        title="CRUD"
        data={data}
        onDelete={onClickDelete}
        onClickEdit={onClickEditPlayer}
      />
    </div>
  );
}

export default App;
