import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const FlowerDecoration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 absolute opacity-80 animate-pulse">
    <path
      d="M50 20 C60 10, 70 20, 50 40 C30 20, 40 10, 50 20"
      fill="#FDB8D4"
      className="animate-spin-slow"
    />
    <path
      d="M50 20 C40 10, 30 20, 50 40 C70 20, 60 10, 50 20"
      fill="#FDC4E3"
      className="animate-spin-slow"
    />
    <circle cx="50" cy="30" r="5" fill="#FFE5F3" />
  </svg>
);

const FloatingSparkle = ({ className }) => (
  <div className={`absolute ${className} animate-float`}>
    <Sparkles className="w-6 h-6 text-pink-300" />
  </div>
);

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const firstParts = [
    'Blossom', 'Rose', 'Lily', 'Violet', 'Flora',
    'Pearl', 'Crystal', 'Luna', 'Aurora', 'Celeste',
    'Melody', 'Aria', 'Nova', 'Belle', 'Daisy'
  ];

  const secondParts = [
    'heart', 'bloom', 'petal', 'dream', 'light',
    'grace', 'song', 'shine', 'glow', 'wish',
    'star', 'belle', 'rose', 'moon', 'fairy'
  ];

  const generateName = () => {
    setIsGenerating(true);
    const first = firstParts[Math.floor(Math.random() * firstParts.length)];
    const second = secondParts[Math.floor(Math.random() * secondParts.length)];
    setGeneratedName(`${first}${second}`);
    setTimeout(() => setIsGenerating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated floating sparkles */}
      <FloatingSparkle className="top-1/4 left-1/4" />
      <FloatingSparkle className="top-1/3 right-1/4" />
      <FloatingSparkle className="bottom-1/4 left-1/3" />
      <FloatingSparkle className="bottom-1/3 right-1/3" />

      {/* Decorative flowers with hover animation */}
      <div className="absolute top-4 left-4 transform -rotate-45 hover:scale-110 transition-transform">
        <FlowerDecoration />
      </div>
      <div className="absolute top-4 right-4 transform rotate-45 hover:scale-110 transition-transform">
        <FlowerDecoration />
      </div>
      <div className="absolute bottom-4 left-4 transform -rotate-12 hover:scale-110 transition-transform">
        <FlowerDecoration />
      </div>
      <div className="absolute bottom-4 right-4 transform rotate-12 hover:scale-110 transition-transform">
        <FlowerDecoration />
      </div>
      
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg border-pink-200 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 animate-gradient" />
        
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif text-pink-700 animate-fade-in">
            <span className="hover:text-pink-500 transition-colors duration-300">✿ Aesthetic Name Generator ✿</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center min-h-[80px] flex items-center justify-center">
            <div className={`text-[26px] font-serif font-bold text-pink-600 py-4 transition-all duration-300 ${isGenerating ? 'scale-110' : ''}`}>
              {generatedName ? (
                <div className="flex items-center gap-2 justify-center animate-bounce-subtle">
                  <Sparkles className="w-6 h-6 text-pink-400 animate-spin-slow" />
                  <span className="hover:text-pink-500 transition-colors duration-300">
                    {generatedName}
                  </span>
                  <Sparkles className="w-6 h-6 text-pink-400 animate-spin-slow" />
                </div>
              ) : (
                <span className="text-pink-300 italic animate-pulse">Click to generate a name...</span>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={generateName}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              ✿ Generate Name ✿
            </Button>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NameGenerator;
