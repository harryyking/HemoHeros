import { motion, AnimatePresence } from "framer-motion"
import type React from "react" // Added import for React

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg max-w-2xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">Blood Type Compatibility</h2>
            <p className="mb-4">
              Blood type compatibility is crucial for safe blood transfusions. Here's a quick guide:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Type O- is the universal donor and can give to all blood types.</li>
              <li>Type AB+ is the universal recipient and can receive from all blood types.</li>
              <li>Rh-negative types can only receive Rh-negative blood.</li>
              <li>Rh-positive types can receive both Rh-positive and Rh-negative blood.</li>
            </ul>
            <p className="mb-4">
              Remember, in emergency situations, O- blood is often used when the recipient's blood type is unknown.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InfoModal

