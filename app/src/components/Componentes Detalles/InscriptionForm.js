import React, { useState, useEffect } from "react";

const InscriptionForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    email: "",
    representative: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    const isValid =
      formData.teamName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.representative.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.body.style.height = "100%"; // Prevent scrolling on mobile devices
    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling when form is closed
      document.body.style.height = "auto"; // Restore height
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowSuccessPopup(true); // Show success pop-up
      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowRedirectPopup(true); // Show redirect pop-up
        setTimeout(() => {
          setShowRedirectPopup(false);
          closeForm(); // Close the form after the pop-ups
        }, 2000); // Redirect pop-up duration
      }, 2000); // Success pop-up duration
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        showSuccessPopup || showRedirectPopup ? "backdrop-blur-md" : ""
      }`}
    >
      <div
        className={`bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative transition-all duration-300 ${
          showSuccessPopup || showRedirectPopup ? "blur-sm" : ""
        }`}
      >
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={closeForm}
        >
          X
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">Formulario de Inscripción</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="teamName"
            placeholder="Nombre del equipo"
            className="p-2 rounded-lg bg-gray-800 text-white"
            value={formData.teamName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="p-2 rounded-lg bg-gray-800 text-white"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="representative"
            placeholder="Representante del equipo"
            className="p-2 rounded-lg bg-gray-800 text-white"
            value={formData.representative}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              isFormValid
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Inscribirse
          </button>
        </form>
      </div>

      {/* Success Pop-up */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">¡Inscripción Realizada con Éxito!</h2>
            <p className="text-lg">Gracias por inscribirte en el torneo.</p>
          </div>
        </div>
      )}

      {/* Redirect Pop-up */}
      {showRedirectPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Redirigiendo...</h2>
            <p className="text-lg">Por favor, espera un momento.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscriptionForm;
