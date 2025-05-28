import { services } from "@/constants/services";

const Services = () => {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "60px",
            color: "#1f2937",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
          }}
        >
          Наши услуги
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(155, 135, 245, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.05)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#9b87f5",
                  marginBottom: "15px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "600",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                {service.description}
              </p>
              <p
                style={{
                  color: "#9b87f5",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
