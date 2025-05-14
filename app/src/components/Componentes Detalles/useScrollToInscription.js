const useScrollToInscription = ({ activeTab, setActiveTab, selectedCard, location, navigate }) => {
  return () => {
    const currentPath = location.pathname;

    if (!currentPath.includes("/tournament-details")) {
      navigate("/tournament-details", { state: { selectedCard } });
      setTimeout(() => {
        setActiveTab("inscritos");
        const section = document.getElementById("inscription-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return;
    }

    setActiveTab("inscritos");
    setTimeout(() => {
      const section = document.getElementById("inscription-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
};

export default useScrollToInscription;
