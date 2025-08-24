import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const ModeloCv = ({ toggleSidebar }) => {
  // Estilos
  const containerStyle = {
    maxWidth: "58rem",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    padding: "1.5rem",
    paddingTop: "2.5rem",
  };
  const centerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const titleStyle = {
    fontSize: "1.875rem",
    fontWeight: "800",
    color: "#273146ff",
    marginBottom: "1.5rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  };

  const subSectionTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.75rem",
  };

  const paragraphStyle = {
    color: "#374151",
    marginBottom: "1rem",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#374151",
  };

  const listItemStyle = {
    marginBottom: "0.5rem",
  };

  const subListStyle = {
    listStyleType: "circle",
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  const toolStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    padding: "1rem",
    textDecoration: "none",
    color: "inherit",
    transition: "background-color 0.3s",
  };

  const toolHoverStyle = {
    backgroundColor: "#f9fafb",
  };

  const toolTitleStyle = {
    fontWeight: "bold",
    fontSize: "1.125rem",
    color: "#2563eb",
    marginBottom: "0.25rem",
  };

  const portalGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
  };

  const portalStyle = {
    backgroundColor: "#f9fafb",
    color: "#2563eb",
    fontWeight: "500",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 0.3s",
  };

  const portalHoverStyle = {
    backgroundColor: "#f3f4f6",
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Modelo de CV</title>
        <meta name="description" content="Descripción del modelo de CV" />
        <meta name="keywords" content="CV, modelo, empleo, trabajo" />
      </Helmet>
      <div style={containerStyle} onClick={toggleSidebar}>
        <div style={centerStyle}>
          <h1 style={titleStyle}>Modelo de CV</h1>
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
                Carolina Lancelotti - Global Recruiting Marketing Manager en
                Globant
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>Marca personal</h2>
          <h3 style={subSectionTitleStyle}>
            Estrategias para que nuestro cv y postulaciones se destaquen
          </h3>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={subSectionTitleStyle}>
              1. Contexto: Futuro del trabajo
            </h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Imaginar el futuro del trabajo y cómo se relaciona con nuestras
                habilidades y experiencias.
              </li>
              <li style={listItemStyle}>
                Tips antes de empezar a trabajar en un cv
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={subSectionTitleStyle}>2. Construcción de CV</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Lo que sí o sí debo tener en cuenta</li>
              <li style={listItemStyle}>Que herramientas puedo usar</li>
              <li style={listItemStyle}>¿Cómo potenciar mi cv?</li>
            </ul>
          </div>

          <div>
            <h4 style={subSectionTitleStyle}>
              3. Cómo buscar ofertas laborales
            </h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong>Networking</strong>
              </li>
              <li style={listItemStyle}>
                Consejos para buscar ofertas laborales
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>Autoconocimiento e Investigación</h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={subSectionTitleStyle}>Autoconocimiento</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Realizar un análisis FODA personal (Fortalezas, Oportunidades,
                Debilidades y Amenazas).
              </li>
              <li style={listItemStyle}>
                Identificar mis habilidades blandas y duras.
              </li>
              <li style={listItemStyle}>
                Reflexionar sobre mis experiencias pasadas y cómo han influido
                en mi desarrollo profesional.
              </li>
            </ul>

            <div style={{ marginTop: "1rem" }}>
              <h4 style={subSectionTitleStyle}>Mis habilidades</h4>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  Habilidades técnicas:
                  <ul style={subListStyle}>
                    <li style={listItemStyle}>[Listar habilidades técnicas]</li>
                  </ul>
                </li>

                <li style={listItemStyle}>
                  Habilidades blandas:
                  <ul style={subListStyle}>
                    <li style={listItemStyle}>
                      [Listar habilidades interpersonales y de comunicación]
                    </li>
                  </ul>
                </li>
                <li style={listItemStyle}>
                  Habilidades de liderazgo: [Describir experiencias de liderazgo
                  y gestión de equipos]
                </li>
                <li style={listItemStyle}>
                  Habilidades de resolución de problemas: [Ejemplos de cómo he
                  abordado y resuelto problemas en el pasado]
                </li>
                <li style={listItemStyle}>
                  Habilidades de aprendizaje continuo: [Cómo me mantengo
                  actualizado en mi campo y aprendo nuevas habilidades]
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <h4 style={subSectionTitleStyle}>Objetivos profesionales</h4>
              <p style={paragraphStyle}>
                [Describir objetivos profesionales a corto, mediano y largo
                plazo]
              </p>
            </div>
          </div>

          <div>
            <h3 style={subSectionTitleStyle}>Investigación</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Investigar sobre las empresas y sectores en los que me gustaría
                trabajar.
              </li>
              <li style={listItemStyle}>
                Analizar las tendencias del mercado laboral y las habilidades
                más demandadas.
              </li>
              <li style={listItemStyle}>
                Conectar con profesionales del área para obtener información de
                primera mano.
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>Tener en cuenta para nuestro cv</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Efectivo:</strong> Debe ser claro, tener como máximo una o
              dos páginas, y destacar lo más relevante.
            </li>
            <li style={listItemStyle}>
              <strong>Estrategia. Palabras clave:</strong> Incluir palabras
              clave relevantes para el puesto al que se postula, basadas en la
              descripción del trabajo.
            </li>
            <li style={listItemStyle}>
              <strong>Enfoque:</strong> Secciones en base a prioridades, como
              experiencia laboral, educación y habilidades.
            </li>
            <li style={listItemStyle}>
              <strong>Incluir LinkedIn y Portfolio (en lo posible):</strong>{" "}
              Asegurarse de que los enlaces sean visibles y estén actualizados.
            </li>
            <li style={listItemStyle}>
              <strong>Evitar:</strong> datos personales innecesarios, como
              estado civil o foto. Evitar información no solicitada y formatos
              jpg.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>Herramientas para crear un CV</h2>
          <div style={gridStyle}>
            {[
              {
                name: "Canva",
                url: "https://www.canva.com/",
                desc: "Ofrece plantillas personalizables y fáciles de usar.",
              },
              {
                name: "CVwizard",
                url: "https://www.cvwizard.com/",
                desc: "Herramienta en línea que guía en la creación de CVs efectivos.",
              },
              {
                name: "LiveCareer",
                url: "https://www.livecareer.com/",
                desc: "Permite crear CVs profesionales con plantillas y consejos.",
              },
              {
                name: "CV Maker",
                url: "https://www.cvmaker.com/",
                desc: "Plataforma que ayuda a crear CVs atractivos y personalizados.",
              },
              {
                name: "ChatGPT",
                url: "https://chat.openai.com/",
                desc: "Puede ayudar a generar contenido para el CV, como descripciones de experiencia laboral y habilidades.",
              },
            ].map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={toolStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    toolHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
              >
                <h3 style={toolTitleStyle}>{tool.name}</h3>
                <p style={paragraphStyle}>{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>
            Networking y búsqueda de ofertas laborales
          </h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Acceso al mercado oculto:</strong> Muchas ofertas
              laborales no se publican en portales de empleo, por lo que es
              importante construir una red de contactos.
            </li>
            <li style={listItemStyle}>
              <strong>Desarrollo profesional:</strong> Aprender de otros,
              obtener mentoría y consejos de profesionales con más experiencia.
            </li>
            <li style={listItemStyle}>
              <strong>Visibilidad y credibilidad:</strong> una red sólida puede
              aumentar tu visibilidad y credibilidad en el campo profesional.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>Tips para aplicar</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>No apliques en automático.</li>
            <li style={listItemStyle}>Usar palabras claves del aviso.</li>
            <li style={listItemStyle}>
              Aplicar en las primeras 48 hs desde que se publica la vacante.
            </li>
            <li style={listItemStyle}>
              Chequear la empresa en LinkedIn antes de aplicar.
            </li>
            <li style={listItemStyle}>
              No subestimes vacantes que no coinciden 100% con tu perfil.
            </li>
            <li style={listItemStyle}>
              Mantené tu CV y LinkedIn actualizados y coherentes entre sí.
            </li>
            <li style={listItemStyle}>
              Postulá en portales, pero también buscá oportunidades en redes,
              comunidades y referidos.
            </li>
            <li style={listItemStyle}>
              Organizá tus postulaciones.
              <ul style={subListStyle}>
                <li style={listItemStyle}>
                  Usando Excel o Google Sheets para llevar un registro de las
                  ofertas a las que has postulado, incluyendo detalles como la
                  fecha de postulación, el estado de la solicitud y cualquier
                  seguimiento necesario.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 style={sectionTitleStyle}>Portales de empleo</h2>
          <div style={portalGridStyle}>
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/jobs/" },
              { name: "Bumeran", url: "https://www.bumeran.com/" },
              { name: "Computrabajo", url: "https://www.computrabajo.com.ar/" },
              { name: "ZonaJobs", url: "https://www.zonajobs.com.ar/" },
              { name: "Idealist", url: "https://www.idealist.org/" },
              { name: "Jobtogether", url: "https://www.jobtogether.com/" },
              { name: "Workana", url: "https://www.workana.com/" },
              { name: "La Pieza", url: "https://www.lapieza.io/" },
              { name: "Remotolist", url: "https://www.remotolist.com/" },
              { name: "FlexJobs", url: "https://www.flexjobs.com/" },
            ].map((portal, index) => (
              <a
                key={index}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                style={portalStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    portalHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = portalStyle.backgroundColor)
                }
              >
                {portal.name}
              </a>
            ))}
          </div>
        </div>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div style={columnStyle}>
              <ul style={listStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginLeft: "0.5rem",
                    color: "#9ca3af",
                  }}
                >
                  <NavLink
                    to="/insercion-laboral"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverStyle.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = linkStyle.color)
                    }
                  >
                    Continuar con Inserción Laboral
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ marginRight: "0.5rem" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5-5 5M6 12h12"
                      />
                    </svg>
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
          <div style={borderStyle}>
            <p>© {new Date().getFullYear()} CoderCamp. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeloCv;
