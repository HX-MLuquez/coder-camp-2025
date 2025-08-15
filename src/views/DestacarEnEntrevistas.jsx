import React, { useEffect, useState } from "react";

const DestacarEnEntrevistas = ({ toggleSidebar }) => {
  // Estilos
  const containerStyle = {
    maxWidth: "58rem",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    padding: "1.5rem",
  };

  const centerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const titleStyle = {
    fontSize: "1.875rem",
    fontWeight: "800",
    color: "#273146ff",
  };

  const subtitleStyle = {
    color: "#4b5563",
    marginTop: "0.5rem",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speakerStyle = {
    backgroundColor: "#f3f4f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    margin: isMobile ? "2rem 0" : "2rem 6rem",
  };

  const speakerTitleStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.5rem",
  };

  const speakerTextStyle = {
    color: "#374151",
    margin: 0, // quita margen extra de p
  };

  const classTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem",
  };

  const classSubtitleStyle = {
    fontSize: "1.25rem",
    color: "#3b82f6",
    fontWeight: "600",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "0.5rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "2.5rem",
  };

  const gridItemStyle = {
    backgroundColor: "#dbeafe",
    padding: "1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
  };

  const gridNumberStyle = {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: "0.5rem",
  };

  const gridTextStyle = {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#1f2937",
  };

  const subsectionStyle = {
    marginBottom: "1.5rem",
  };

  const subsectionTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.75rem",
    backgroundColor: "#f3f4f6",
    padding: "0.5rem",
    borderRadius: "0.25rem",
  };

  const subsubsectionStyle = {
    marginBottom: "1rem",
  };

  const subsubsectionTitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "500",
    color: "#1f2937",
    marginBottom: "0.5rem",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#374151",
  };

  const listItemStyle = {
    marginBottom: "0.25rem",
  };

  const qrContainerStyle = {
    backgroundColor: "#fef9c3",
    padding: "1.5rem",
    borderRadius: "0.75rem",
    textAlign: "center",
  };

  const qrTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  };

  const qrTextStyle = {
    color: "#4b5563",
    marginBottom: "0.5rem",
  };

  const qrBoxStyle = {
    backgroundColor: "#e5e7eb",
    border: "2px dashed #9ca3af",
    borderRadius: "0.75rem",
    width: "8rem",
    height: "8rem",
    margin: "0 auto",
  };

  const qrNoteStyle = {
    color: "#6b7280",
    marginTop: "1rem",
  };

  const columnStyle = { marginBottom: "1rem" };
  const headingStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };
  const linkStyle = {
    color: "#9ca3af",
    textDecoration: "none",
    transition: "color 0.3s",
    display: "flex",
    alignItems: "normal",
    gap: "1rem",
  };
  const borderStyle = {
    borderTop: "1px solid #1f2937",
    paddingTop: "1.5rem",
    textAlign: "center",
    color: "#9ca3af",
  };
  const linkHoverStyle = { color: "#1f2937" };

  return (
    <div style={containerStyle} onClick={toggleSidebar}>
      <div style={centerStyle}>
        <h1 style={titleStyle}>Destacar en Entrevistas</h1>
      </div>
      <div style={speakerStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
          >
            <h2 style={speakerTitleStyle}>SPEAKER:</h2>
            <p style={speakerTextStyle}>
              Nadia Saranich - Account Manager Digital en Randstad
            </p>
          </div>
        </div>
      </div>

      <div style={centerStyle}>
        {/* <h2 style={classTitleStyle}>Clase 4. Coder CAMP</h2> */}
        <p style={classSubtitleStyle}>
          Estrategias claves para destacar y prepararte en entrevistas laborales
        </p>
      </div>

      <div style={subsectionStyle}>
        <h2 style={sectionTitleStyle}>Objetivos de la clase</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Comprender qué buscan los entrevistadores
          </li>
          <li style={listItemStyle}>Analizar las entrevistas laborales</li>
          <li style={listItemStyle}>
            Conocer algunos consejos para destacar en las entrevistas
          </li>
          <li style={listItemStyle}>
            Preparar a la audiencia para su próxima entrevista
          </li>
        </ul>
      </div>

      <div style={subsectionStyle}>
        <h2 style={sectionTitleStyle}>Temario</h2>
        <div style={gridStyle}>
          {[
            "Antes de la entrevista",
            "Durante la entrevista",
            "Después de la entrevista",
          ].map((item, index) => (
            <div key={index} style={gridItemStyle}>
              <div style={gridNumberStyle}>{index + 1}</div>
              <h3 style={gridTextStyle}>{item}</h3>
            </div>
          ))}
        </div>
      </div>

      <div style={subsectionStyle}>
        <h2 style={sectionTitleStyle}>Antes de la entrevista</h2>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Investigación</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Compañía</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                ¿A qué se dedica la compañía? ¿Cuáles son sus productos, hitos e
                historias más importantes?
              </li>
              <li style={listItemStyle}>
                ¿Qué tipo de empresa es? ¿Qué proyección tiene? ¿Qué cultura
                tiene?
              </li>
              <li style={listItemStyle}>
                ¿Tiene página en Glassdoor? ¿Qué dicen los comentarios?
              </li>
              <li style={listItemStyle}>
                ¿Conozco a alguien que trabaja ahí? ¿Puedo hablar con esa
                persona antes?
              </li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Entrevistador/es</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                ¿Quién es la persona que me entrevista?
              </li>
              <li style={listItemStyle}>¿Tengo algún punto en común?</li>
              <li style={listItemStyle}>
                ¿Dónde estudió? ¿Dónde vivió? ¿Dónde trabajó antes?
              </li>
              <li style={listItemStyle}>
                ¿Tiene algún hobby, gusto o interés que comparta?
              </li>
              <li style={listItemStyle}>
                ¿Hace algún voluntariado o similar con el que pueda conectar?
              </li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Puesto / Rol</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Leer y entender a detalle el Job Description
              </li>
              <li style={listItemStyle}>
                Anotar dudas sobre cosas que hagan ruido o no estén claras
              </li>
              <li style={listItemStyle}>
                ¿Para qué área, producto o proyecto de la compañía voy a
                trabajar?
              </li>
            </ul>
          </div>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Preparación</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Temas y conceptos</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Terminología específica</li>
              <li style={listItemStyle}>
                Repasar conceptos difíciles de explicar
              </li>
              <li style={listItemStyle}>
                ¿Hay test en vivo? → Preparar y repasar
              </li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Machetes</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>¿Qué cosas no me puedo olvidar?</li>
              <li style={listItemStyle}>
                ¿Qué cosas me olvidé durante las prácticas?
              </li>
              <li style={listItemStyle}>Palabras que siempre confundo</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Espacio de la entrevista</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Monitores, cámara y entorno visual</li>
              <li style={listItemStyle}>Micrófono y entorno sonoro</li>
              <li style={listItemStyle}>Familiares y mascotas</li>
              <li style={listItemStyle}>Vestimenta</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Respuestas clásicas</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Contame un poco de vos… ¿Qué te gusta hacer?
              </li>
              <li style={listItemStyle}>
                ¿Por qué te interesa nuestra empresa/rol?
              </li>
              <li style={listItemStyle}>
                ¿Qué te motiva a un cambio? ¿Qué estás buscando?
              </li>
              <li style={listItemStyle}>
                Momento en el que manejaste una situación estresante
              </li>
              <li style={listItemStyle}>Salario pretendido</li>
            </ul>
          </div>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Práctica</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Idioma</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>¿Es en inglés?</li>
              <li style={listItemStyle}>¿Hace mucho que no lo practico?</li>
              <li style={listItemStyle}>¿Qué términos no sé pronunciar?</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Perfil Propio</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Experiencias buenas y desafiantes</li>
              <li style={listItemStyle}>
                Hitos y logros (profesionales y personales)
              </li>
              <li style={listItemStyle}>Fortalezas y debilidades</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Discurso y locución</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Practicar frente al espejo</li>
              <li style={listItemStyle}>Repetir frases claves</li>
              <li style={listItemStyle}>
                Prestar atención a cómo decimos las cosas
              </li>
              <li style={listItemStyle}>Grabarse y escucharse</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Herramientas</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Google Interview Warmup</li>
              <li style={listItemStyle}>Chat GPT</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={subsectionStyle}>
        <h2 style={sectionTitleStyle}>Durante la entrevista</h2>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Presencia</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Puntualidad</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Diferencias entre LATAM vs USA & EU</li>
              <li style={listItemStyle}>
                5 minutos tarde puede ser un <strong>NO</strong>
              </li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Imponderables</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>¿Algo no funciona?</li>
              <li style={listItemStyle}>¿Gato, ruido, luz, sombra?</li>
              <li style={listItemStyle}>
                Sonrisa, pedir perdón e intentar solucionarlo
              </li>
              <li style={listItemStyle}>¿No podés presentarte? No mentir</li>
            </ul>
          </div>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Actitud</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Mostrarte interesado/a y entusiasmado/a
            </li>
            <li style={listItemStyle}>Sonrisa y activo/a</li>
            <li style={listItemStyle}>Evitar estar tirado hacia atrás</li>
            <li style={listItemStyle}>
              No hacer otras cosas durante la entrevista
            </li>
            <li style={listItemStyle}>No jugar con objetos</li>
            <li style={listItemStyle}>Notificaciones apagadas</li>
          </ul>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Respuestas</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Paciencia</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Comprender la pregunta</li>
              <li style={listItemStyle}>
                ¿Entendí lo que quiere saber el entrevistador?
              </li>
              <li style={listItemStyle}>Fantinearla correctamente</li>
              <li style={listItemStyle}>
                No mentir si no sé — mostrar interés por aprender
              </li>
              <li style={listItemStyle}>Avisar si me voy por las ramas</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Ejemplos</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Usar ejemplos practicados</li>
              <li style={listItemStyle}>
                ¿Tenés certificaciones o cursos afines?
              </li>
              <li style={listItemStyle}>No forzar</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Musts</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Otros procesos de selección</li>
              <li style={listItemStyle}>Vacaciones y viajes</li>
              <li style={listItemStyle}>Potencial problema futuro</li>
              <li style={listItemStyle}>Demora en la fecha de inicio</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Feedback del entrevistador</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Leer su comunicación no verbal</li>
              <li style={listItemStyle}>Consultar en caso de dudas</li>
            </ul>
          </div>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Preguntas</h3>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Clásicas</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>¿Cómo está conformado el equipo?</li>
              <li style={listItemStyle}>¿Es un rol nuevo o reemplazo?</li>
              <li style={listItemStyle}>Tiempos estimados para decisiones</li>
              <li style={listItemStyle}>Próximos pasos del proceso</li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>Específicas</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Preguntas relevantes para el cliente
              </li>
              <li style={listItemStyle}>Preguntas sobre el rol específico</li>
              <li style={listItemStyle}>
                Preguntar si recomiendan algo para aprender
              </li>
              <li style={listItemStyle}>
                Usar IA si no se te ocurren preguntas
              </li>
            </ul>
          </div>

          <div style={subsubsectionStyle}>
            <h4 style={subsubsectionTitleStyle}>NO debemos</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>No incomodar</li>
              <li style={listItemStyle}>No forzar preguntas para destacar</li>
              <li style={listItemStyle}>No preguntar solo por preguntar</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={subsectionStyle}>
        <h2 style={sectionTitleStyle}>Después de la entrevista</h2>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Agradecimiento</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Agradecer por el tiempo</li>
            <li style={listItemStyle}>Quedar atento/a a novedades</li>
            <li style={listItemStyle}>Ayuda a que te recuerden</li>
          </ul>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Seguimiento</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>¿Preguntaste por tiempos estimados?</li>
            <li style={listItemStyle}>Mail consultando por novedades</li>
            <li style={listItemStyle}>Hacer follow-up</li>
          </ul>
        </div>

        <div style={subsubsectionStyle}>
          <h3 style={subsectionTitleStyle}>Acuerdo</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Se puede negociar</li>
            <li style={listItemStyle}>Ser respetuoso</li>
            <li style={listItemStyle}>No aceptar algo que no te convenza</li>
          </ul>
        </div>
      </div>

      {/* <div style={qrContainerStyle}>
        <h2 style={qrTitleStyle}>Súmate como Flocker</h2>
        <p style={qrTextStyle}>
          Instagram: <span style={{ fontWeight: "600" }}>@theflockco</span>
        </p>
        <p style={qrTextStyle}>
          LinkedIn: <span style={{ fontWeight: "600" }}>/the-flock-co</span>
        </p>
        <div style={qrBoxStyle}></div>
        <p style={qrNoteStyle}>Escanéa el QR para más info</p>
      </div> */}
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={columnStyle}>
            <ul style={listStyle}>
              <a
                href="/"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                Volver al Inicio
              </a>
            </ul>
          </div>
        </div>
        <div style={borderStyle}>
          <p>© {new Date().getFullYear()} CoderCamp. </p>
        </div>
      </div>
    </div>
  );
};

export default DestacarEnEntrevistas;
