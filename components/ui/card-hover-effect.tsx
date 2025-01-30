import { motion } from "framer-motion"

interface HoverEffectProps {
  items: {
    title: string
    description: string
    icon: JSX.Element
  }[]
}

const variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
}

export const HoverEffect = ({ items }: HoverEffectProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div key={index} variants={variants} whileHover="hover" className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            {item.icon}
            <h3 className="ml-4 text-xl font-medium">{item.title}</h3>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

