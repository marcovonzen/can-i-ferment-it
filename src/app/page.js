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
    <main className="min-h-screen bg-green-100 text-center p-6">
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
          className="rounded-xl"
        />
        <h1 className="text-5xl font-bold text-[#8A4B2F]">Can I Ferment It?</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-[#8A4B2F] max-w-xl mb-6"
      >
        Ask anything about fermentation — whether it’s your forgotten kiwi, suspicious mango, or mushroom mystery. The Fermentalist Buddy is here to help.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="shadow-xl border-2 border-[#7E8F64] bg-white rounded p-6">
          <input
            type="text"
            placeholder="Can I ferment my leftover strawberries?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="p-3 border rounded text-[#8A4B2F] border-[#A4A4A4] focus:outline-none w-full mb-4"
          />
          <button
            onClick={handleAsk}
            className="bg-[#D96459] hover:bg-[#8A4B2F] text-white px-4 py-2 rounded font-semibold"
          >
            Ask The Fermentalist Buddy
          </button>
          {response && (
            <p className="text-[#7E8F64] mt-4">{response}</p>
          )}
        </div>
      </motion.div>

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
          className="flex items-center gap-2 text-[#D9A441] hover:underline"
        >
          <Instagram size={20} /> @imthefermentalist
        </a>
      </motion.div>
    </main>
  );
}
// This code is a React component for a fermentation advice app.
// It allows users to ask questions about fermenting various foods and provides a playful response