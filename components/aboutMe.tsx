'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@heroui/card"


export default function AboutMe () {
    return (
        <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-foreground-secondary leading-relaxed">
              <p className="mb-6 text-center lg:text-left">
                A front-end developer with a passion for bold and exciting design. I have extensive knowledge in
                modern web technologies and a keen eye for creating user experiences that are both beautiful and functional.
              </p>
              <p className="mb-6 text-center lg:text-left">
                My journey in web development started with curiosity about how websites work, and has evolved into 
                a deep appreciation for the intersection of technology and design. I believe that great code and 
                great design go hand in hand.
              </p>
              <p className="mb-6 text-center lg:text-left">
                When I'm not coding, you can find me exploring new design trends, playing chess, or contributing 
                to open-source projects that make the web a better place.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center-safe lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {['Creative Problem Solving', 'User Experience Focus', 'Performance Optimization', 'Modern Standards'].map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 surface-elevated rounded-full text-sm font-medium border-1 text-primary"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30" />
              <Card>

              <img
                src={'/images/portrett.jpg'}
                alt="Jørgen Sørheim - Front-end Developer"
                className="relative w-96 h-96 object-cover rounded-2xl surface-elevated shadow-lg "
                />
                </Card>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    )
}