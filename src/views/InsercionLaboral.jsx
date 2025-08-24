import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const InsercionLaboral = ({ toggleSidebar }) => {
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

  const paragraphStyle = {
    color: "#374151",
    marginBottom: "1rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
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

  const subSectionTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.75rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  const flexStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  };

  const bulletStyle = {
    width: "0.75rem",
    height: "0.75rem",
    backgroundColor: "#3b82f6",
    borderRadius: "9999px",
    marginRight: "0.5rem",
  };

  const skillGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  const skillItemStyle = {
    backgroundColor: "#f9fafb",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
  };

  const skillIconStyle = {
    width: "1.25rem",
    height: "1.25rem",
    color: "#eab308",
    marginRight: "0.5rem",
  };

  const highlightStyle = {
    backgroundColor: "#dbeafe",
    borderLeft: "4px solid #3b82f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1.5rem",
  };

  const highlightTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem",
  };

  const topSkillStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.75rem",
  };

  const topSkillNumberStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1d4ed8",
    marginRight: "0.75rem",
  };

  const topSkillTextStyle = {
    fontSize: "1.125rem",
    color: "#374151",
  };

  const exerciseStyle = {
    backgroundColor: "#f9fafb",
    padding: "1.5rem",
    borderRadius: "0.75rem",
  };

  const exerciseTextStyle = {
    fontStyle: "italic",
    color: "#374151",
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
        <title>Inserción Laboral y Empleabilidad</title>
        <meta name="description" content="Como mejorar tu inserción laboral y empleabilidad" />
        <meta name="keywords" content="inserción laboral, empleabilidad, búsqueda de empleo" />
      </Helmet>
      <div style={containerStyle} onClick={toggleSidebar}>
        <div style={centerStyle}>
          <h1 style={titleStyle}>Inserción Laboral y Empleabilidad</h1>
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
                Rebeca Correa - Team Manager Digital en Randstad
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <p style={paragraphStyle}>
            Debemos primero entender que la inserción laboral y la empleabilidad
            son conceptos clave en el mundo profesional actual. La inserción
            laboral se refiere al proceso de conseguir un empleo, mientras que
            la empleabilidad implica tener las habilidades y competencias
            necesarias para mantener y avanzar en un trabajo.
          </p>
          <p style={paragraphStyle}>
            Y buscar empleo es un trabajo en sí mismo. Requiere tiempo, esfuerzo
            y una estrategia clara. Aquí te dejamos algunos consejos y recursos
            útiles para mejorar tu empleabilidad y facilitar tu inserción
            laboral.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>
            Destacar la Importancia de tener una Marca Personal
          </h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              La marca personal es la forma en que te presentas al mundo
              profesional.
            </li>
            <li style={listItemStyle}>
              Una marca personal sólida puede diferenciarte de otros candidatos
              y aumentar tus oportunidades laborales.
            </li>
            <li style={listItemStyle}>
              Es fundamental trabajar en tu marca personal desde el inicio de tu
              carrera.
            </li>
            <li style={listItemStyle}>
              Incluye aspectos como tu presencia en redes sociales, tu red de
              contactos y cómo te comunicas con los demás.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>
            Debemos actualizar nuestra habilidades y competencias
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={subSectionTitleStyle}>Habilidades blandas</h3>
            <div style={gridStyle}>
              {[
                "Comunicación efectiva",
                "Trabajo en equipo",
                "Adaptabilidad",
                "Resolución de problemas",
                "Pensamiento crítico",
              ].map((skill, index) => (
                <div key={index} style={flexStyle}>
                  <div style={bulletStyle}></div>
                  <span style={paragraphStyle}>{skill}</span>
                </div>
              ))}
            </div>
            <p style={{ ...paragraphStyle, color: "#4b5563" }}>
              Estas habilidades se mejoran y potencian con la práctica y la
              experiencia. Participar en proyectos, voluntariados o actividades
              extracurriculares puede ser una excelente manera de
              desarrollarlas.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={subSectionTitleStyle}>Habilidades técnicas</h3>
            <div style={gridStyle}>
              {[
                "Programación: JavaScript, Python, Django, etc.",
                "Desarrollo web: React, Node.js, etc.",
                "Bases de datos: PostgreSQL, MongoDB, etc.",
                "DevOps: Docker, AWS, etc.",
                "Diseño gráfico: Adobe Photoshop, Illustrator, etc.",
              ].map((skill, index) => (
                <div key={index} style={flexStyle}>
                  <div
                    style={{ ...bulletStyle, backgroundColor: "#10b981" }}
                  ></div>
                  <span style={paragraphStyle}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>
            Entender las habilidades que las máquinas no pueden automatizar
          </h2>
          <div style={skillGridStyle}>
            {[
              "Creatividad",
              "Inteligencia emocional",
              "Empatía",
              "Pensamiento crítico",
              "Resolución de problemas complejos",
              "Trabajo en equipo",
              "Perseverancia y resiliencia",
              "Liderazgo",
              "Aprender a aprender",
              "Comunicación efectiva",
              "Alfabetización digital",
              "Resolución de conflictos",
            ].map((skill, index) => (
              <div key={index} style={skillItemStyle}>
                <svg
                  style={skillIconStyle}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{skill}</span>
              </div>
            ))}
          </div>
          <p style={{ ...paragraphStyle, color: "#4b5563" }}>
            Estas habilidades son cada vez más valoradas en el mercado laboral,
            ya que las máquinas y la inteligencia artificial aún no pueden
            replicar completamente estas capacidades humanas.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>El nuevo profesional</h2>
          <p style={paragraphStyle}>
            Las empresas buscan profesionales que no solo tengan habilidades
            técnicas, sino también la capacidad de adaptarse y aprender
            continuamente. La flexibilidad y la disposición para adquirir nuevas
            competencias son esenciales en el entorno laboral actual.
          </p>
          <p style={paragraphStyle}>
            Estas habilidades se cultivan a través de la experiencia, la
            formación continua y la apertura al cambio. Los profesionales que
            invierten en su desarrollo personal y profesional tienen más
            probabilidades de destacar en el mercado laboral.
          </p>
        </div>

        <div style={highlightStyle}>
          <h2 style={highlightTitleStyle}>
            ¿Qué se espera del Mercado Laboral?
          </h2>
          <p style={paragraphStyle}>
            Se cree que para el 2030 surgirán más de 170 millones de puestos de
            trabajo que aún no existen, lo que significa que las habilidades y
            competencias requeridas seguirán evolucionando.
          </p>
          <p style={paragraphStyle}>
            Por lo tanto, es crucial mantenerse actualizado y ser proactivo en
            el desarrollo de nuevas habilidades. Y van a desaparecer 92 millones
            de puestos de trabajo que hoy existen, lo que implica que la
            adaptabilidad y la capacidad de aprender nuevas habilidades serán
            fundamentales para la empleabilidad futura.
          </p>
          <p style={paragraphStyle}>
            Esto resulta en un incremento neto de 78 millones de empleos para
            2030.
          </p>
          <p style={paragraphStyle}>
            En términos porcentuales, esos números representan aproximadamente
            un 14 % de empleo nuevo, un 8 % de empleos desaparecidos, y un 7 %
            de aumento neto respecto a la situación actual.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={sectionTitleStyle}>TOP 5 habilidades especiales</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {[
              "Creatividad",
              "Inteligencia emocional",
              "Pensamiento analítico",
              "Perseverancia y resiliencia",
              "Adaptabilidad",
            ].map((skill, index) => (
              <div key={index} style={topSkillStyle}>
                <span style={topSkillNumberStyle}>{index + 1}.</span>
                <span style={topSkillTextStyle}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={exerciseStyle}>
          <h2 style={sectionTitleStyle}>
            Ejercicio de reinvención profesional
          </h2>
          <p style={paragraphStyle}>Escribe y completa el siguiente texto:</p>
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={exerciseTextStyle}>
              "Tengo [número] años de experiencia en [área de especialización].
              Durante mi carrera, he trabajado en [describir roles y
              responsabilidades clave]. Mis principales logros incluyen [listar
              logros significativos]. Actualmente, estoy buscando oportunidades
              en [sector o tipo de trabajo deseado], donde pueda aplicar mis
              habilidades en [habilidades específicas] y contribuir al éxito de
              la empresa."
            </p>
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
                    to="/destacar-en-entrevistas"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverStyle.color)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = linkStyle.color)
                    }
                  >
                    Continuar con Cómo destacar en entrevistas?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ marginLeft: "0.5rem", color: "#9ca3af" }}
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

export default InsercionLaboral;
