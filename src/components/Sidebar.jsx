import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Estilos
  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#111827",
    color: "white",
    zIndex: 50,
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    width: "14rem",
    overflowY: "auto",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  };

  const navStyle = {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  };

  const navLinkActiveStyle = {
    color: "#3B82F6",
    fontWeight: "bold",
  };

  const toggleButtonStyle = {
    position: "fixed",
    top: "1rem",
    left: "1rem",
    zIndex: 60,
    backgroundColor: "#111827",
    border: "none",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
  };

  const contactSectionStyle = {
    marginTop: "2rem",
  };

  const contactListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const contactItemStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const contactItemHoverStyle = {
    color: "#3B82F6",
  };

  const contactTitleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  // estilos mínimos (podés ajustarlos a tu paleta)
  const promoCardStyle = {
    marginTop: "1.25rem",
    padding: "1rem",
    borderRadius: "0.75rem",
    border: "1px solid #e5e7eb",
    background:
      "linear-gradient(135deg, rgba(79,70,229,0.08), rgba(236,72,153,0.08))",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const promoTextWrap = { display: "flex", flexDirection: "column" };
  const promoTitleStyle = { fontSize: "1rem", fontWeight: 700, margin: 0 };
  const promoSubtitleStyle = { fontSize: ".95rem", margin: ".25rem 0 0 0" };
  const promoFootnoteStyle = {
    fontSize: ".8rem",
    opacity: 0.75,
    marginTop: ".35rem",
  };

  const promoButtonStyle = {
    padding: ".6rem 1rem",
    borderRadius: "0.75rem",
    border: "1px solid #11182720",
    backgroundColor: "#111827",
    color: "#fff",
    fontWeight: 600,
    transition: "transform .05s ease",
  };

  const promoButtonHover = { backgroundColor: "#000" };

  const copiedBadgeStyle = {
    position: "fixed",
    right: "2rem",
    fontSize: "0.80rem",
    fontWeight: 400,
    zIndex: 9999,
  };

  // === dentro de tu componente ===
  const [copied, setCopied] = useState(false);
  const promoCode = "ref.mauricio.gaston.7b15";

  const copyPromoCode = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(promoCode);
      } else {
        // Fallback para navegadores viejos
        const ta = document.createElement("textarea");
        ta.value = promoCode;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // si falla, igual intentamos el fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = promoCode;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {}
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        {/* Header */}
        <div style={headerStyle}>
          {/* <h1 style={titleStyle}>CoderCamp</h1> */}
          <div>
            <img
              src="/img/camp-rem.png"
              alt="Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <button onClick={toggleSidebar} style={closeButtonStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "1.5rem", height: "1.5rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navegación */}
        <nav style={navStyle}>
          <NavLink
            to="/"
            onClick={toggleSidebar}
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navLinkActiveStyle : {}),
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/modelo-cv"
            onClick={toggleSidebar}
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navLinkActiveStyle : {}),
            })}
          >
            Modelo de CV
          </NavLink>
          <NavLink
            to="/insercion-laboral"
            onClick={toggleSidebar}
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navLinkActiveStyle : {}),
            })}
          >
            Inserción Laboral
          </NavLink>
          <NavLink
            to="/destacar-en-entrevistas"
            onClick={toggleSidebar}
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navLinkActiveStyle : {}),
            })}
          >
            Destacar en Entrevistas
          </NavLink>
        </nav>

        {/* Contacto */}
        <div style={contactSectionStyle}>
          <h3 style={contactTitleStyle}>Contacto</h3>
          <div style={contactListStyle}>
            <a
              href="https://www.linkedin.com/in/mauricio-gastón-lúquez-aaa78571/"
              target="_blank"
              rel="noopener noreferrer"
              style={contactItemStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = contactItemHoverStyle.color)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = contactItemStyle.color)
              }
            >
              🔗 LinkedIn
            </a>
            <a
              href="mailto:mauriciogastonluquez@gmail.com"
              style={contactItemStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = contactItemHoverStyle.color)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = contactItemStyle.color)
              }
            >
              ✉️ Correo
            </a>
            <a
              href="https://github.com/HX-MLuquez"
              target="_blank"
              rel="noopener noreferrer"
              style={contactItemStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = contactItemHoverStyle.color)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = contactItemStyle.color)
              }
            >
              💻 GitHub
            </a>
            {/* === pegá este bloque debajo de tu sección de contacto === */}
            <div
              style={promoCardStyle}
              onClick={copyPromoCode}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && copyPromoCode()
              }
              aria-label="Copiar código de descuento"
            >
              <div style={promoTextWrap}>
                <h4 style={promoSubtitleStyle}>15% OFF</h4>
                <p style={promoFootnoteStyle}>
                  Descuento aplicable a todos los Cursos y Carreras. ¡Acumulable con otros beneficios!
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // evita disparar el click del contenedor
                    copyPromoCode();
                  }}
                  style={promoButtonStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, promoButtonHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, promoButtonStyle)
                  }
                  aria-live="polite"
                >
                  Copiar código
                </button>
                {copied && <span style={copiedBadgeStyle}>¡Copiado!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón hamburguesa */}
      {!isOpen && (
        <button onClick={toggleSidebar} style={toggleButtonStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "1.5rem", height: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Sidebar;
