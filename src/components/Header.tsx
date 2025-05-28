const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#9b87f5",
        color: "white",
        padding: "40px 0",
        textAlign: "center",
        background: "linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "700",
            margin: "0 0 10px 0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Аврора
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            margin: "0 0 20px 0",
            opacity: "0.9",
          }}
        >
          Салон красоты премиум-класса
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            margin: "0",
          }}
        >
          Телефон администратора: +7 (495) 123-45-67
        </p>
      </div>
    </header>
  );
};

export default Header;
