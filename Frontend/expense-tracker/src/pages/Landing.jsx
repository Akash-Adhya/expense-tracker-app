import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 md:px-20 gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
            Track Your Expenses. <br /> Stay in Control.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A clean, modern platform to manage your income, expenses, and financial goals—all in one place.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-900 transition-all shadow-lg"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <motion.circle
              cx="250"
              cy="250"
              r="200"
              stroke="#111"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.rect
              x="140"
              y="180"
              width="220"
              height="140"
              rx="20"
              fill="#111"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.line
              x1="160"
              y1="210"
              x2="320"
              y2="210"
              stroke="white"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.line
              x1="160"
              y1="250"
              x2="280"
              y2="250"
              stroke="white"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
          </svg>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-10 md:px-20 grid md:grid-cols-3 gap-12 bg-white">
        {[
          {
            title: "Track Expenses",
            desc: "Easily log your expenses and categorize them instantly.",
          },
          {
            title: "Visual Insights",
            desc: "Understand your spending patterns through beautiful charts.",
          },
          {
            title: "Smart Budgeting",
            desc: "Set monthly limits and get notified when you overspend.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-50 shadow-sm border hover:shadow-md transition-all"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
