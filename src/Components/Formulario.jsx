import React from "react";

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

  return (
    <div className="container mt-4">
      <h1 className="text-center font-italic">
        TABLA CLASIFICATORIA AL MUNDIAL DE QTAR
      </h1>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col">1 of 2</div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
