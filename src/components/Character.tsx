import React from 'react';
import { ElementType } from '../constants';

interface CharacterProps {
  gender: 'male' | 'female';
  answers: ElementType[];
  className?: string;
}

export const Character: React.FC<CharacterProps> = ({ gender, answers, className = "" }) => {
  // Mapping answers to visual traits
  // Q1: Body & Skin
  const q1 = answers[0];
  const q2 = answers[1];
  const q3 = answers[2];

  // Skin tones
  const skinTones: Record<ElementType, string> = {
    A: "#fef3f2", // Pale
    B: "#fee2e2", // Rosy
    C: "#fef9c3", // Yellowish
    D: "#451a03", // Dark/Dull
    E: "#f8fafc", // White/Pale
  };

  // Body widths
  const bodyWidths: Record<ElementType, number> = {
    A: 40, // Slender
    B: 55, // Strong
    C: 65, // Robust/Fat
    D: 45, // Thin/Fat (average)
    E: 50, // Square/Balanced
  };

  // Hair colors/styles based on Q2
  const hairColors: Record<ElementType, string> = {
    A: "#78350f", // Dry/Thin
    B: "#171717", // Thick/Black
    C: "#404040", // Oily
    D: "#a16207", // Sparse/Yellow
    E: "#525252", // Hard/Dry
  };

  const skinColor = q1 ? skinTones[q1] : "#f5f5f4";
  const bodyWidth = q1 ? bodyWidths[q1] : 50;
  const hairColor = q2 ? hairColors[q2] : "#262626";

  // Facial expression based on Q3 (Morning feeling)
  // A: Tired, B: Hot/Red, C: Heavy, D: Weak, E: Dry
  const getFace = () => {
    if (!q3) {
      // Default face - sharp and elegant like the image
      return (
        <g transform="translate(0, 5)">
          {/* Eyes - Sharper for male */}
          {gender === 'male' ? (
            <g>
              <path d="M -15 -2 Q -10 -5 -5 -2" stroke="#444" fill="none" strokeWidth="1" />
              <path d="M 5 -2 Q 10 -5 15 -2" stroke="#444" fill="none" strokeWidth="1" />
              <circle cx="-10" cy="0" r="1.5" fill="#333" />
              <circle cx="10" cy="0" r="1.5" fill="#333" />
            </g>
          ) : (
            <g>
              <circle cx="-10" cy="0" r="2" fill="#444" />
              <circle cx="10" cy="0" r="2" fill="#444" />
            </g>
          )}
          {/* Nose line */}
          <path d="M 0 -2 L 0 8 L 3 8" stroke="#444" fill="none" strokeWidth="0.5" opacity="0.3" />
          {/* Mouth */}
          <path d="M -6 15 Q 0 16 6 15" stroke="#444" fill="none" strokeWidth="1" />
        </g>
      );
    }

    switch(q3) {
      case 'A': return (
        <g transform="translate(0, 5)">
          <path d="M -12 -2 L -8 2 M -12 2 L -8 -2" stroke="#444" strokeWidth="1.5" />
          <path d="M 8 -2 L 12 2 M 8 2 L 12 -2" stroke="#444" strokeWidth="1.5" />
          <path d="M -5 12 Q 0 10 5 12" stroke="#444" fill="none" strokeWidth="1.5" />
        </g>
      );
      case 'B': return (
        <g transform="translate(0, 5)">
          <circle cx="-10" cy="0" r="2" fill="#444" />
          <circle cx="10" cy="0" r="2" fill="#444" />
          <circle cx="-15" cy="5" r="5" fill="#f87171" opacity="0.4" />
          <circle cx="15" cy="5" r="5" fill="#f87171" opacity="0.4" />
          <path d="M -5 12 Q 0 16 5 12" stroke="#444" fill="none" strokeWidth="1.5" />
        </g>
      );
      default: return (
        <g transform="translate(0, 5)">
          <circle cx="-10" cy="0" r="2" fill="#444" />
          <circle cx="10" cy="0" r="2" fill="#444" />
          <path d="M -5 10 Q 0 15 5 10" stroke="#444" fill="none" strokeWidth="1.5" />
        </g>
      );
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl">
        {/* Shadow */}
        <ellipse cx="100" cy="280" rx="40" ry="10" fill="#000" opacity="0.05" />
        
        {/* Body Base */}
        <path 
          d={`M ${100 - bodyWidth/2} 270 L ${100 + bodyWidth/2} 270 L ${100 + bodyWidth/1.5} 120 L ${100 - bodyWidth/1.5} 120 Z`} 
          fill={skinColor} 
          className="transition-all duration-500"
        />
        
        {/* Clothing (Elegant Black Robe inspired by images) */}
        <g className="transition-all duration-500">
          {/* Main Robe Body */}
          <path 
            d={`M ${100 - bodyWidth/2 - 8} 275 L ${100 + bodyWidth/2 + 8} 275 L ${100 + bodyWidth/1.1} 105 L ${100 - bodyWidth/1.1} 105 Z`} 
            fill="#0a0a0a" 
          />
          {/* Robe Collar/Lapel - Higher and sharper */}
          <path 
            d={`M 100 105 L ${100 + bodyWidth/2.5} 105 L 100 190 L ${100 - bodyWidth/2.5} 105 Z`} 
            fill="#171717"
            stroke="#c6a34f"
            strokeWidth="0.8"
          />
          {/* Gold Embroidery Details (Shoulder area like image) */}
          <g opacity="0.6">
            <path d="M 120 120 Q 140 130 135 160" stroke="#c6a34f" fill="none" strokeWidth="1" />
            <path d="M 125 125 Q 145 140 140 170" stroke="#c6a34f" fill="none" strokeWidth="0.5" />
            <path d="M 115 115 Q 130 120 125 140" stroke="#c6a34f" fill="none" strokeWidth="0.5" />
          </g>
          {/* Sleeve folds */}
          <path d="M 70 200 Q 60 230 65 270" stroke="#333" fill="none" strokeWidth="1" />
          <path d="M 130 200 Q 140 230 135 270" stroke="#333" fill="none" strokeWidth="1" />
        </g>

        {/* Neck */}
        <rect x="94" y="95" width="12" height="15" fill={skinColor} className="transition-all duration-500" />

        {/* Head - Slightly more oval for male */}
        <ellipse cx="100" cy="70" rx="30" ry="34" fill={skinColor} className="transition-all duration-500" />
        
        {/* Face */}
        <g transform="translate(0, -5)">
          {getFace()}
        </g>

        {/* Hair - Messy and layered like the image */}
        <g className="transition-all duration-500">
          {gender === 'female' ? (
            <path 
              d="M 68 75 Q 68 25 100 25 Q 132 25 132 75 Q 132 140 115 140 L 85 140 Q 68 140 68 75" 
              fill={hairColor} 
            />
          ) : (
            <g fill={hairColor}>
              {/* Main hair mass */}
              <path d="M 65 75 Q 65 25 100 25 Q 135 25 135 75 L 130 65 Q 100 45 70 65 Z" />
              {/* Messy strands like the image - more organic shapes */}
              <path d="M 68 45 L 55 55 Q 60 60 70 58 Z" />
              <path d="M 132 45 L 145 55 Q 140 60 130 58 Z" />
              <path d="M 95 25 L 105 10 Q 115 15 110 28 Z" />
              <path d="M 80 28 L 75 15 Q 85 20 85 32 Z" />
              <path d="M 115 28 L 125 15 Q 135 20 125 35 Z" />
              {/* Sideburns - sharper */}
              <path d="M 68 70 L 62 95 L 75 88 Z" />
              <path d="M 132 70 L 138 95 L 125 88 Z" />
              {/* Fringe strands - more detailed like the image */}
              <path d="M 82 40 Q 88 65 75 80" stroke={hairColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 92 35 Q 95 55 88 70" stroke={hairColor} strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 118 40 Q 112 65 125 80" stroke={hairColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 108 35 Q 105 55 112 70" stroke={hairColor} strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
          )}
          {/* Hair Shine */}
          <path d="M 85 40 Q 100 35 115 40" stroke="white" opacity="0.1" fill="none" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};
