import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      <Header />
      <Services />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
