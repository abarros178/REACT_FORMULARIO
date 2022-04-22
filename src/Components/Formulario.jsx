import React from "react";
import { nanoid } from "nanoid";

const Formulario = () => {
  const [id, setId] = React.useState(0);
  const [nombreequipo, setNombreequipo] = React.useState("");
  const [puntos, setPuntos] = React.useState(0);
  const [partidosjugados, setPartidosJugados] = React.useState(0);
  const [partidosganados, setPartidosGanados] = React.useState(0);
  const [partidosempatados, setPartidosEmptados] = React.useState(0);
  const [partidosperdidos, setPartidosperdidos] = React.useState(0);
  const [golesfavor, setGolesfavor] = React.useState(0);
  const [golescontra, setGolescontra] = React.useState(0);
  const [diferenciagoles, setDiferenciaGoles] = React.useState(0);
  const [listaequipos, setListaequipos] = React.useState([]);
  const [error, setError] = React.useState(null);

  const guardarequipos = async (e) => {
    e.preventDefault();

    if (!nombreequipo.trim()) {
      setError("Digite el nombre del equipo");
      return;
    }

    if (!puntos.trim()) {
      setError("Digite los puntos del equipo");
      return;
    } else if (puntos >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!partidosjugados.trim()) {
      setError("Digite los partidos jugados");
      return;
    } else if (partidosjugados >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!partidosempatados.trim()) {
      setError("Digite los partidos empatados");
      return;
    } else if (partidosempatados >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!partidosganados.trim()) {
      setError("Digite los partidos ganados");
      return;
    } else if (partidosganados >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!partidosperdidos.trim()) {
      setError("Digite los partidos perdidos");
      return;
    } else if (partidosperdidos >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!golesfavor.trim()) {
      setError("Digite los goles a favor");
      return;
    } else if (golesfavor >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }
    if (!golescontra.trim()) {
      setError("Digite los goles en contra");
      return;
    } else if (golescontra >= 0) {
      setError("El numero no puede ser negativo");
      return;
    }

    try {
      //const db = firebase.firestore();
      const nuevoequipo = {
        id: id,
        nombreEquipo: nombreequipo,
        Puntos: puntos,
        partidosJugados: partidosjugados,
        partidosGanados: partidosganados,
        partidosEmpatados: partidosempatados,
        partidosPerdidos: partidosempatados,
        golesaFavor: golesfavor,
        golesContra: golescontra,
        golesdeDiferencia: diferenciagoles,
      };

      //await db.collection("fruta").add(nuevaFruta);

      setListaequipos([
        ...listaequipos,
        {
          id: nanoid(),
          nombreEquipo: nombreequipo,
          Puntos: puntos,
          partidosJugados: partidosjugados,
          partidosGanados: partidosganados,
          partidosEmpatados: partidosempatados,
          partidosPerdidos: partidosempatados,
          golesaFavor: golesfavor,
          golesContra: golescontra,
          golesdeDiferencia: Math.abs(golesfavor - golescontra),
        },
      ]);

      e.target.reset();
      setNombreequipo("");
      setPuntos(0);
      setPartidosGanados(0);
      setGolescontra(0);
      setGolesfavor(0);
      setPartidosperdidos(0);
      setPartidosEmptados(0);
      setPartidosJugados(0);
      setError(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center font-italic">
        TABLA CLASIFICATORIA AL MUNDIAL DE QTAR
      </h1>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Equipo</th>
                  <th scope="col ">Pts</th>
                  <th scope="col">PJ</th>
                  <th scope="col">PG</th>
                  <th scope="col">PE</th>
                  <th scope="col">PP</th>
                  <th scope="col">GF</th>
                  <th scope="col">GC</th>
                  <th scope="col">DIF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Equipo</h6>
            <input
              className="form-control mb-2 "
              type="text"
              placeholder="Ingrese equipo"
              onChange={(e) => setNombreequipo(e.target.value)}
              value={nombreequipo}
            />
            <hr></hr>
            <div class="col">
              <h6 class="card-subtitle mb-2 text-muted">Puntos</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setPuntos(e.target.value)}
                value={puntos}
              />
              <h6 class="card-subtitle mb-2 text-muted">partidos Jugados</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setPartidosJugados(e.target.value)}
                value={partidosjugados}
              />
              <h6 class="card-subtitle mb-2 text-muted">Partidos Ganados</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setPartidosGanados(e.target.value)}
                value={partidosganados}
              />
              <h6 class="card-subtitle mb-2 text-muted">Partidos Empatados</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setPartidosEmptados(e.target.value)}
                value={partidosempatados}
              />
              <h6 class="card-subtitle mb-2 text-muted">Partidos Perdidos</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setPartidosperdidos(e.target.value)}
                value={partidosperdidos}
              />
              <h6 class="card-subtitle mb-2 text-muted">Goles a favor</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setGolesfavor(e.target.value)}
                value={golesfavor}
              />
              <h6 class="card-subtitle mb-2 text-muted">Goles en contra</h6>
              <input
                className="form-control mb-2 "
                type="number"
                onChange={(e) => setGolescontra(e.target.value)}
                value={golescontra}
              />
              <button className="btn btn-primary btn-block" type="submit">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
