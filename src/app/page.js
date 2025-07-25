"use client";

import React, { useState } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function CanIFermentIt() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;
    setResponse("👃 Hmm... That sounds funky in a good way. Yes, you can ferment it! 🍍🫙");
  };

  return (
    <main className="min-h-screen bg-orange-50 text-center p-6 flex flex-col items-center">
      {/* Logo + Heading */}
      <motion.div
        className="flex flex-col items-center gap-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://i.ibb.co/q352w496/Screenshot-2025-05-31-111036.png"
          alt="Fermentalist Logo"
          width={120}
          height={120}
          className="rounded-2xl shadow-md"
        />
        <h1 className="text-5xl font-bold text-[#8A4B2F]">Can I Ferment It?</h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-[#8A4B2F] max-w-xl mb-6"
      >
        Ask anything about fermentation — whether it’s your forgotten kiwi, suspicious mango, or mushroom mystery. The Fermentalist Buddy is here to help.
      </motion.p>

      {/* Input Box + Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="shadow-xl border-2 border-[#8A4B2F] bg-white rounded-xl p-6">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Can I ferment my leftover strawberries?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-3 border border-[#A4A4A4] rounded text-[#8A4B2F] focus:outline-none"
            />
            <button
              onClick={handleAsk}
              className="bg-[#D96459] hover:bg-[#8A4B2F] text-white px-4 py-2 rounded font-semibold"
            >
              Ask The Fermentalist Buddy
            </button>
          </div>
          {response && (
            <p className="text-[#7E8F64] mt-4">{response}</p>
          )}
        </div>
      </motion.div>

      {/* Instagram Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="mt-8"
      >
        <a
          href="https://instagram.com/imthefermentalist"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#D9A441] hover:underline justify-center"
        >
          <Instagram size={20} /> @imthefermentalist
        </a>
      </motion.div>
    </main>
  );
}
