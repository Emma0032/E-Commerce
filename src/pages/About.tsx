import { motion } from "motion/react";

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/vantage-about/1920/1080?grayscale"
            alt="About Hero"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium tracking-tight text-gray-200"
          >
            Redefining the modern wardrobe through the lens of essentialism.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">The Vantage Philosophy</h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
            <p>
              Vantage was born from a simple observation: the fashion industry is too loud. Trends come and go, leaving behind a trail of waste and wardrobes full of clothes that no longer feel right.
            </p>
            <p>
              We believe in a different path. We believe in the power of the essential. By focusing on the highest quality materials, perfect fits, and timeless silhouettes, we create pieces that transcend seasons and trends.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter uppercase">Quality First</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We source our fabrics from the world's finest mills. From GOTS-certified organic cotton to ultra-soft merino wool, every material is chosen for its durability, comfort, and environmental impact.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter uppercase">Ethical Production</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We partner with family-owned factories that share our commitment to fair wages and safe working conditions. We visit our partners regularly to ensure our standards are met.
            </p>
          </div>
        </div>

        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img
            src="https://picsum.photos/seed/vantage-factory/1200/800?grayscale"
            alt="Factory"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Our Mission</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our mission is to help you build a wardrobe that lasts a lifetime. We want to reduce the noise of fast fashion and replace it with the quiet confidence of quality. When you wear Vantage, you're not just wearing clothes—you're wearing a commitment to better design and a better world.
          </p>
        </div>
      </section>
    </div>
  );
}
