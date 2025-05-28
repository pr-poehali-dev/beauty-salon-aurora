import React, { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center" as const,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ✨ Салон красоты "Аврора" ✨
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Профессиональные услуги красоты в уютной атмосфере
        </p>
      </header>

      {/* Services */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center" as const,
            marginBottom: "50px",
            color: "#2d3748",
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
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center" as const,
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💇‍♀️</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#4a5568",
              }}
            >
              Стрижка и укладка
            </h3>
            <p style={{ color: "#718096", lineHeight: "1.6" }}>
              Профессиональные стрижки, окрашивание и укладки от опытных
              мастеров
            </p>
            <div
              style={{
                marginTop: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#667eea",
              }}
            >
              от 1500 ₽
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center" as const,
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💅</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#4a5568",
              }}
            >
              Маникюр и педикюр
            </h3>
            <p style={{ color: "#718096", lineHeight: "1.6" }}>
              Качественный уход за ногтями с использованием премиум материалов
            </p>
            <div
              style={{
                marginTop: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#667eea",
              }}
            >
              от 800 ₽
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center" as const,
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🧴</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#4a5568",
              }}
            >
              Косметология
            </h3>
            <p style={{ color: "#718096", lineHeight: "1.6" }}>
              Процедуры по уходу за кожей лица и тела для сияющего вида
            </p>
            <div
              style={{
                marginTop: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#667eea",
              }}
            >
              от 2000 ₽
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          backgroundColor: "white",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center" as const,
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              color: "#2d3748",
            }}
          >
            О нас
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "30px",
            }}
          >
            Салон красоты "Аврора" работает уже более 10 лет, предоставляя
            качественные услуги красоты в центре города. Наши мастера регулярно
            повышают квалификацию и следят за последними трендами в индустрии
            красоты.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#667eea",
                  marginBottom: "10px",
                }}
              >
                1000+
              </div>
              <p style={{ color: "#718096" }}>Довольных клиентов</p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#667eea",
                  marginBottom: "10px",
                }}
              >
                10+
              </div>
              <p style={{ color: "#718096" }}>Лет опыта</p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#667eea",
                  marginBottom: "10px",
                }}
              >
                5
              </div>
              <p style={{ color: "#718096" }}>Профессиональных мастеров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#f7fafc",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center" as const,
              marginBottom: "40px",
              color: "#2d3748",
            }}
          >
            Записаться на прием
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#4a5568",
                }}
              >
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#4a5568",
                }}
              >
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="service"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#4a5568",
                }}
              >
                Услуга
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  backgroundColor: "white",
                  transition: "border-color 0.3s ease",
                }}
              >
                <option value="">Выберите услугу</option>
                <option value="haircut">Стрижка и укладка</option>
                <option value="manicure">Маникюр</option>
                <option value="pedicure">Педикюр</option>
                <option value="cosmetology">Косметология</option>
              </select>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  htmlFor="date"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#4a5568",
                  }}
                >
                  Дата
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#4a5568",
                  }}
                >
                  Время
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    backgroundColor: "white",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <option value="">Выберите время</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#667eea",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Записаться
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2d3748",
          color: "white",
          padding: "60px 20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                color: "#667eea",
              }}
            >
              Салон "Аврора"
            </h3>
            <p style={{ lineHeight: "1.6", opacity: 0.8 }}>
              Ваша красота - наша страсть. Мы создаем неповторимые образы,
              подчеркивающие вашу индивидуальность.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                color: "#cbd5e0",
              }}
            >
              Контакты
            </h4>
            <div style={{ lineHeight: "1.8", opacity: 0.8 }}>
              <p>📍 г. Москва, ул. Красоты, д. 15</p>
              <p>📞 +7 (495) 123-45-67</p>
              <p>✉️ info@aurora-salon.ru</p>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                color: "#cbd5e0",
              }}
            >
              Режим работы
            </h4>
            <div style={{ lineHeight: "1.8", opacity: 0.8 }}>
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб-Вс: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #4a5568",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center" as const,
            opacity: 0.6,
          }}
        >
          <p>&copy; 2024 Салон красоты "Аврора". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
