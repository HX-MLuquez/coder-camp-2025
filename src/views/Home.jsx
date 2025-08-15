import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = ({ toggleSidebar }) => {
  // Estilos
  const containerStyle = {
    maxWidth: "58rem",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    padding: "1.5rem",
    paddingTop: "2.5rem",
    marginBottom: "2rem",
  };

  const logoStyle = {
    width: "10rem",
    height: "auto",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "#273146ff",
    marginBottom: "1rem",
  };

  const subtitleStyle = {
    fontSize: "1.125rem",
    color: "#374151",
    marginBottom: "1.5rem",
  };

  const flexStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const avatarStyle = {
    backgroundColor: "#e5e7eb",
    border: "1px solid #9ca3af",
    borderRadius: "0.75rem",
    width: "4rem",
    height: "5rem",
  };

  const infoStyle = {
    marginLeft: "1rem",
    width: "13rem",
  };

  const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: 0,
  };

  const roleStyle = {
    color: "#4b5563",
    fontStyle: "italic",
    margin: 0,
  };

  const dateStyle = {
    color: "#6b7280",
    margin: 0,
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "0.75rem",
  };

  const bulletStyle = {
    color: "#eab308",
    marginRight: "0.5rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2.5rem",
  };

  const statStyle = (color) => ({
    backgroundColor:
      color === "blue" ? "#dbeafe" : color === "yellow" ? "#fef9c3" : "#fee2e2",
    padding: "1rem",
    borderRadius: "0.5rem",
  });

  const statNumberStyle = {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: (color) =>
      color === "blue" ? "#1d4ed8" : color === "yellow" ? "#ca8a04" : "#dc2626",
    marginBottom: "0.5rem",
  };

  const statTextStyle = {
    color: "#374151",
  };

  const paragraphStyle = {
    color: "#374151",
    marginBottom: "1rem",
  };

  const grid2ColStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
  };

  const highlightStyle = {
    backgroundColor: "#fef9c3",
    borderLeft: "4px solid #eab308",
    padding: "1rem",
    borderRadius: "0.25rem",
    marginBottom: "2.5rem",
  };

  const highlightTextStyle = {
    fontWeight: "600",
    marginBottom: "0.5rem",
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
  

  return (
    <div style={containerStyle} onClick={toggleSidebar}>
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
          <h1 style={titleStyle}>CODERCAMP.</h1>
          <div style={{ fontWeight: "600", fontSize: "1.3rem" }}>2025</div>
        </div>
        <div style={headerStyle}>
          <div style={subtitleStyle}>
            Programa de formación y desarrollo profesional{" "}
            {/* <strong style={{ fontWeight: "600" }}>CoderHouse</strong> */}
            <div style={logoStyle}>
              <img
                src="/img/Logo_blackbg.png"
                alt="Logo"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div style={flexStyle}>
            <div style={avatarStyle}>
              <img
                src="/img/perfil.png"
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.75rem",
                }}
              />
            </div>
            <div style={infoStyle}>
              <p style={dateStyle}>Participante:</p>
              <h2 style={nameStyle}>Mauricio Gastón Lúquez</h2>
              <p style={roleStyle}>Desarrollador FullStack</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={sectionTitleStyle}>Objetivos del curso</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>➔</span>
              <span>
                <strong>Conocer</strong> nuestro diferencial profesional y las
                necesidades del mercado laboral.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>➔</span>
              <span>
                <strong>Comunicar</strong> nuestro capital de conocimiento,
                experiencia y aptitudes de manera efectiva.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>➔</span>
              <span>
                <strong>Conectar</strong> con otros profesionales creando red en
                función de nuestros objetivos.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>➔</span>
              <span>
                <strong>Pasar a la acción</strong> para potenciar nuestra
                empleabilidad.
              </span>
            </li>
          </ul>
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
                Brigitte Bergery - Speaker y creadora de contenidos en Emplea
                Habilidad
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
            >
              <h2 style={speakerTitleStyle}>MODERADOR:</h2>
              <p style={speakerTextStyle}>
                Nahuel Lema - Co-Founder & BDR @ CoderHouse
              </p>
            </div>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={statStyle("blue")}>
            <p style={statNumberStyle}>74%</p>
            <p style={statTextStyle}>
              de las empresas a nivel global enfrentan dificultades para
              encontrar talento cualificado
            </p>
          </div>
          <div style={statStyle("yellow")}>
            <p style={statNumberStyle}>30%</p>
            <p style={statTextStyle}>
              de las búsquedas activas son publicadas ya que hay un gran
              porcentaje de puestos que no son publicitados
            </p>
          </div>
          <div style={statStyle("red")}>
            <p style={statNumberStyle}>7/10</p>
            <p style={statTextStyle}>
              no recibió información sobre empleabilidad
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={sectionTitleStyle}>¿Qué es la empleabilidad?</h3>
          <p style={paragraphStyle}>
            La empleabilidad es la capacidad de una persona para conseguir y
            mantener un empleo. Esto implica no solo tener las habilidades
            técnicas necesarias, sino también saber cómo presentarse,
            comunicarse y relacionarse con los demás.
          </p>
          <p style={paragraphStyle}>
            Es estar en autosintonía con el mercado laboral, conocer sus
            necesidades y poder adaptarse a ellas. La empleabilidad no es algo
            que se consigue de una vez por todas, sino que es un proceso
            continuo que requiere esfuerzo y dedicación.
          </p>

          <div style={grid2ColStyle}>
            {[
              "Autoconocimiento",
              "Formación continua",
              "Adaptabilidad",
              "Comunicación",
              "Networking",
              "La marca personal",
              "El uso de plataformas digitales",
            ].map((item, index) => (
              <div key={index} style={listItemStyle}>
                <span style={{ ...bulletStyle, fontSize: "1.5rem" }}>•</span>
                <span style={paragraphStyle}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={sectionTitleStyle}>
            ¿Cómo mejorar nuestra empleabilidad?
          </h3>
          <div style={grid2ColStyle}>
            {[
              {
                title: "Conocer",
                desc: "Identificar nuestras habilidades, intereses y valores únicos",
              },
              {
                title: "Comunicar",
                desc: "Presentar nuestras habilidades y experiencia de manera efectiva",
              },
              {
                title: "Conectar",
                desc: "Construir y mantener una red de contactos profesionales",
              },
              {
                title: "Pasar a la acción",
                desc: "Implementar estrategias para mejorar nuestra empleabilidad",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    color: "#1d4ed8",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h4>
                <p style={paragraphStyle}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={highlightStyle}>
          <p style={highlightTextStyle}>La suerte es amiga de la acción</p>
          <p style={paragraphStyle}>
            "Recuerda que la suerte favorece a los que están preparados y toman
            acción. No esperes a que las oportunidades lleguen a ti, sal a
            buscarlas"
          </p>
        </div>

        {/* <ContactForm /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
