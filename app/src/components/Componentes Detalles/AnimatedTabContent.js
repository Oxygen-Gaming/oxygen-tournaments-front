import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabContent from "@components/Componentes Detalles/TabContent";

const AnimatedTabContent = ({ activeTab, selectedCard, setShowMatchModal, setSelectedMatch }) => (
  <div className="mt-6 max-w-[1200px] mx-auto">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <TabContent
          activeTab={activeTab}
          selectedCard={selectedCard}
          setShowMatchModal={setShowMatchModal}
          setSelectedMatch={setSelectedMatch}
        />
      </motion.div>
    </AnimatePresence>
  </div>
);

export default AnimatedTabContent;
