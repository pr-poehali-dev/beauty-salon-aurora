import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: "Наращивание ресниц",
      description:
        "Профессиональное наращивание ресниц различных эффектов. Используем только качественные материалы, безопасные для глаз. Длительность процедуры 2-3 часа.",
      price: "от 2500 ₽",
    },
    {
      title: "Коррекция бровей",
      description:
        "Оформление бровей с учетом формы лица. Включает выщипывание, окрашивание и укладку. Создаем идеальную форму под ваш тип внешности.",
      price: "от 1200 ₽",
    },
    {
      title: "Стрижка и укладка",
      description:
        "Модные стрижки от опытных мастеров. Консультация по подбору прически, стрижка, мытье головы и укладка. Используем профессиональную косметику.",
      price: "от 1800 ₽",
    },
    {
      title: "Маникюр",
      description:
        "Классический и аппаратный маникюр. Обработка кутикулы, придание формы ногтям, покрытие гель-лаком. Стерильные инструменты и качественные материалы.",
      price: "от 1500 ₽",
    },
    {
      title: "Педикюр",
      description:
        "Комплексный уход за стопами и ногтями. Размягчение кожи, удаление мозолей, обработка ногтей и покрытие. Расслабляющий массаж стоп включен.",
      price: "от 2000 ₽",
    },
  ];

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return cleanPhone.length === 11 && cleanPhone.startsWith("7");
  };

  const formatPhone = (value) => {
    const phone = value.replace(/\D/g, "");
    if (phone.length === 0) return "";
    if (phone.length <= 1) return "+7";
    if (phone.length <= 4) return `+7 (${phone.slice(1)}`;
    if (phone.length <= 7) return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
    if (phone.length <= 9)
      return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
    return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhone(value);
      setFormData({ ...formData, [name]: formattedPhone });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите номер телефона";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone =
        "Пожалуйста, введите корректный номер телефона в формате +7 (xxx) xxx-xx-xx";
    }

    if (!formData.service) {
      newErrors.service = "Пожалуйста, выберите услугу";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Заявка отправлена:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "", message: "" });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
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
          backgroundColor: "#9b87f5",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
          background: "linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
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

      {/* Services */}
      <section style={{ padding: "80px 0", backgroundColor: "white" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
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
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow =
                    "0 10px 25px rgba(155, 135, 245, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
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

      {/* About */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "30px",
                  color: "#1f2937",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "600",
                }}
              >
                О салоне Аврора
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  marginBottom: "25px",
                }}
              >
                Салон красоты "Аврора" работает уже более 10 лет, предоставляя
                качественные услуги красоты в центре города. Мы используем
                только профессиональную косметику и современное оборудование.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#9b87f5",
                      fontWeight: "700",
                    }}
                  >
                    1000+
                  </div>
                  <div style={{ color: "#6b7280" }}>Довольных клиентов</div>
                </div>
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#9b87f5",
                      fontWeight: "700",
                    }}
                  >
                    10+
                  </div>
                  <div style={{ color: "#6b7280" }}>Лет опыта</div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#9b87f5",
                borderRadius: "12px",
                padding: "40px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Преимущества
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                <li style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
                  ✨ Опытные мастера
                </li>
                <li style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
                  🏆 Качественные материалы
                </li>
                <li style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
                  💎 Индивидуальный подход
                </li>
                <li style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
                  🎯 Современные технологии
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section style={{ padding: "80px 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "40px",
              color: "#1f2937",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "600",
            }}
          >
            Записаться на процедуру
          </h2>

          {isSubmitted && (
            <div
              style={{
                backgroundColor: "#d1fae5",
                color: "#065f46",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "30px",
                textAlign: "center",
                border: "1px solid #a7f3d0",
              }}
            >
              Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее
              время.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "600",
                }}
              >
                Ваше имя *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: errors.name
                    ? "2px solid #ef4444"
                    : "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#9b87f5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.name
                    ? "#ef4444"
                    : "#e5e7eb")
                }
              />
              {errors.name && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "600",
                }}
              >
                Номер телефона *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (___) ___-__-__"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: errors.phone
                    ? "2px solid #ef4444"
                    : "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#9b87f5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.phone
                    ? "#ef4444"
                    : "#e5e7eb")
                }
              />
              {errors.phone && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.phone}
                </div>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "600",
                }}
              >
                Выберите услугу *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: errors.service
                    ? "2px solid #ef4444"
                    : "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  outline: "none",
                  backgroundColor: "white",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#9b87f5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.service
                    ? "#ef4444"
                    : "#e5e7eb")
                }
              >
                <option value="">Выберите услугу</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.service}
                </div>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "600",
                }}
              >
                Дополнительная информация
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Расскажите о ваших предпочтениях или особых пожеланиях..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#9b87f5")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#9b87f5",
                color: "white",
                padding: "15px 30px",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                marginTop: "10px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#7E69AB";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#9b87f5";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <p style={{ margin: "0", fontSize: "1rem" }}>
            © 2024 Салон красоты "Аврора". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
