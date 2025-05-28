import { useState } from "react";
import { services } from "@/constants/services";
import { validatePhone, formatPhone } from "@/utils/phoneUtils";

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhone(value);
      setFormData({ ...formData, [name]: formattedPhone });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

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
            Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
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
                border: errors.name ? "2px solid #ef4444" : "2px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
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
              rows={4}
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
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
