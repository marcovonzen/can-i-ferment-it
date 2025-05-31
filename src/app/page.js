import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function CanIFermentIt() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;
    // Mock response logic
    setResponse("👃 Hmm... That sounds funky in a good way. Yes, you can ferment it! 🍍🫙");
  };

  return (
    <main className="min-h-screen bg-[#F1E9E2] flex flex-col items-center justify-center p-6 text-center">
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
        Ask anything about fermentation. Whether it’s your forgotten kiwi, suspicious mango, or mushroom mystery. The Fermentalist Buddy is here to help.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-xl border-2 border-[#7E8F64] bg-white">
          <CardContent className="p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Can I ferment my leftover strawberries?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-3 border rounded text-[#8A4B2F] border-[#A4A4A4] focus:outline-none"
            />
            <Button onClick={handleAsk} className="bg-[#D96459] hover:bg-[#8A4B2F] text-white">
              Ask The Fermentalist Buddy
            </Button>
            {response && (
              <p className="text-[#7E8F64] mt-2">{response}</p>
            )}
          </CardContent>
        </Card>
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
