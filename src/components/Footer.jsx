import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Estilos
  const footerStyle = {
    backgroundColor: "#111827",
    color: "white",
    padding: "2.5rem 1rem",
    borderRadius: "0.75rem",
    marginTop: "2rem",
  };
  const containerStyle = {
    maxWidth: "58rem",
    margin: "0 auto",
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  };
  const columnStyle = { marginBottom: "1rem" };
  const headingStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };
  const textStyle = {
    color: "#9ca3af",
    marginBottom: "0.5rem",
  };
  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };
  const listItemStyle = {
    marginBottom: "0.5rem",
  };
  const linkStyle = {
    color: "#9ca3af",
    textDecoration: "none",
    transition: "color 0.3s",
    display: "flex",
    alignItems: "center",
  };
  const linkHoverStyle = { color: "white" };
  const iconStyle = {
    width: "1.25rem",
    height: "1.25rem",
    marginRight: "0.5rem",
    color: "#9ca3af",
  };
  const flexStyle = {
    display: "flex",
    gap: "1.5rem",
    marginTop: "1rem",
  };
  const socialIconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    color: "#9ca3af",
    transition: "color 0.3s",
  };
  const socialIconHoverStyle = { color: "white" };
  const borderStyle = {
    borderTop: "1px solid #1f2937",
    paddingTop: "1.5rem",
    textAlign: "center",
    color: "#9ca3af",
  };
  const logoCoder = {
    width: "3rem",
    height: "auto",
    borderRadius: "3rem",
    marginRight: "0.5rem",
  };


  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={columnStyle}>
            <h3 style={headingStyle}>CoderCamp.</h3>
            <p style={textStyle}>Curso para mejorar la empleabilidad</p>
            <div style={flexStyle}>
              <a
                href="https://www.coderhouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                <img
                  src="/img/logo-blanco-negro.png"
                  alt="Logo"
                  style={logoCoder}
                />
                <p style={textStyle}>CoderHouse</p>
              </a>
            </div>
          </div>

          <div style={columnStyle}>
            <h3 style={headingStyle}>Recursos</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a
                  href="https://www.linkedin.com/learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
                >
                  LinkedIn Learning
                </a>
              </li>
              <li style={listItemStyle}>
                <a
                  href="https://www.16personalities.com/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
                >
                  16 Personalities
                </a>
              </li>
              <li style={listItemStyle}>
                <a
                  href="https://arhu.es/archivos/2220/test-soft-skills-espanol/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
                >
                  Test de habilidades blandas
                </a>
              </li>
            </ul>
          </div>

          <div style={columnStyle}>
            <h3 style={headingStyle}>Enlaces rápidos</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <NavLink to="/" style={linkStyle}>
                  Inicio
                </NavLink>
              </li>
              <li style={listItemStyle}>
                <NavLink to="/modelo-cv" style={linkStyle}>
                  Modelo CV
                </NavLink>
              </li>
              <li style={listItemStyle}>
                <NavLink to="/insercion-laboral" style={linkStyle}>
                  Inserción Laboral
                </NavLink>
              </li>
              <li style={listItemStyle}>
                <NavLink to="/destacar-en-entrevistas" style={linkStyle}>
                  Entrevistas
                </NavLink>
              </li>
            </ul>
          </div>

          <div style={columnStyle}>
            <h3 style={headingStyle}>Contacto</h3>
            <ul style={listStyle}>
              {/* <li style={{ ...listItemStyle, display: 'flex', alignItems: 'center' }}>
                  Entrevistas
                </a>
              </li>
            </ul>
          </div>

          <div style={columnStyle}>
            <h3 style={headingStyle}>Contacto</h3>
            <ul style={listStyle}>
              {/* <li style={{ ...listItemStyle, display: 'flex', alignItems: 'center' }}>
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>mauriciogastonluquez@gmail.com</span>
              </li> */}
              <li
                style={{
                  ...listItemStyle,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Mendoza, Argentina</span>
              </li>
            </ul>
            <div style={flexStyle}>
              <a
                href="https://www.linkedin.com/in/mauricio-gastón-lúquez-aaa78571/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                <svg
                  style={socialIconStyle}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/HX-MLuquez"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                <svg
                  style={socialIconStyle}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={borderStyle}>
          <p>© {new Date().getFullYear()} CoderCamp. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
