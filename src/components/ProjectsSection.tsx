import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Activity,
  Terminal,
  Wifi,
  ChevronRight,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  // Project 1 Interactive State (Anemia Risk Assessment Demo)
  const [hemoglobinConfidence, setHemoglobinConfidence] = useState(94.2);
  const [symptomSeverity, setSymptomSeverity] = useState<'Mild' | 'Moderate' | 'High'>('Moderate');

  // Project 2 Interactive State (2D Graphics Editor in C)
  const defaultAscii = [
    ' /--------------------\\ ',
    ' |                    | ',
    ' |      .------.      | ',
    ' |     (  o  o  )     | ',
    ' |      \\  __  /      | ',
    ' |       `----\'       | ',
    ' |         ||         | ',
    ' |       / || \\       | ',
    ' |                    | ',
    ' \\--------------------/ ',
  ];

  const circleAscii = [
    ' /--------------------\\ ',
    ' |       .----.       | ',
    ' |     /        \\     | ',
    ' |    |    ()    |    | ',
    ' |     \\        /     | ',
    ' |       `----\'       | ',
    ' |                    | ',
    ' |   r = 6 units      | ',
    ' |                    | ',
    ' \\--------------------/ ',
  ];

  const boxAscii = [
    ' /--------------------\\ ',
    ' |  +--------------+  | ',
    ' |  |  RECTANGLE   |  | ',
    ' |  |  w: 16, h: 6 |  | ',
    ' |  |              |  | ',
    ' |  +--------------+  | ',
    ' |                    | ',
    ' |  Rasterized in mem | ',
    ' |                    | ',
    ' \\--------------------/ ',
  ];

  const clearAscii = [
    ' /--------------------\\ ',
    ' |                    | ',
    ' |                    | ',
    ' |                    | ',
    ' |   [Canvas Cleared] | ',
    ' |     Buffer: 24x12  | ',
    ' |                    | ',
    ' |                    | ',
    ' |                    | ',
    ' \\--------------------/ ',
  ];

  const [currentBuffer, setCurrentBuffer] = useState<string[]>(defaultAscii);
  const [activeShape, setActiveShape] = useState<'face' | 'circle' | 'box' | 'clear'>('face');

  // Project 3 Interactive State (Smart Lock IoT)
  const [isLocked, setIsLocked] = useState(true);
  const [signalStrength, setSignalStrength] = useState(-48);
  const [latency, setLatency] = useState(18);

  const toggleLock = () => {
    setIsLocked(!isLocked);
    setLatency(Math.floor(16 + Math.random() * 8));
    setSignalStrength(Math.floor(-46 - Math.random() * 6));
  };

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // PRACTICAL IMPLEMENTATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            Featured Projects
          </h2>
          <p className="text-sm text-[#5C5B66] mt-1">
            Real-world problem solving across healthcare AI, graphics fundamentals, and connected systems.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* ======================================================== */}
          {/* PROJECT 01: AI-Based Anemia Detection Application */}
          {/* ======================================================== */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-8 shadow-2xs hover:shadow-xs transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F7D6E0] text-[#745B64] text-[11px] font-mono font-bold tracking-wider uppercase">
                    PROJECT 01
                  </span>
                  <span className="text-xs text-[#5C5B66] font-medium">
                    Healthcare AI • Application Design
                  </span>
                </div>

                <h3 className="text-2xl sm:text-2xl font-display font-bold text-[#1E1E24]">
                  AI-Based Anemia Detection Application
                </h3>

                <p className="text-sm text-[#4E4447] leading-relaxed">
                  Developing an AI-based application aimed at helping users identify possible anemia risk early and seamlessly connect with medical doctors for verified clinical advice.
                </p>

                {/* 3 Key Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F9] border border-[#F0E5EC]">
                    <div className="text-xs font-semibold text-[#1E1E24]">
                      Accessible Healthcare
                    </div>
                    <div className="text-[11px] text-[#5C5B66] mt-0.5">
                      For non-clinical environments
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F9] border border-[#F0E5EC]">
                    <div className="text-xs font-semibold text-[#1E1E24]">
                      Affordable Solutions
                    </div>
                    <div className="text-[11px] text-[#5C5B66] mt-0.5">
                      Low barrier to preliminary triage
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F9] border border-[#F0E5EC]">
                    <div className="text-xs font-semibold text-[#1E1E24]">
                      User-Friendly UI
                    </div>
                    <div className="text-[11px] text-[#5C5B66] mt-0.5">
                      Intuitive intake questionnaires
                    </div>
                  </div>
                </div>

                {/* Key Project Work Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider mb-2">
                    KEY PROJECT WORK:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'User Persona Development',
                      'Problem Identification',
                      'Solution Design',
                      'Competitor Analysis',
                      'Clinical Workflow Flowchart',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F9] border border-[#F0E5EC] text-[#5C5B66]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#5C5B66] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#E26D8C]"></span>
                  <span>Concept & Prototype Stage</span>
                </div>
              </div>

              {/* Right Column: Risk Assessment Demo Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF8F9] rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0E5EC]">
                    <span className="text-xs font-mono font-bold text-[#705860] uppercase tracking-wider">
                      RISK ASSESSMENT DEMO
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#8E44AD] animate-pulse"></span>
                  </div>

                  {/* Interactive Controls & Output */}
                  <div className="py-4 space-y-4">
                    <div>
                      <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                        <span className="text-[#1E1E24]">Hemoglobin Proxy Confidence</span>
                        <span className="font-mono font-bold text-[#1E1E24]">
                          {hemoglobinConfidence.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-[#E4E1EA] h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#705860] to-[#E26D8C] h-full rounded-full transition-all duration-300"
                          style={{ width: `${hemoglobinConfidence}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#F0E5EC]">
                      <span className="text-xs font-medium text-[#5C5B66]">
                        Symptom Corroboration Index
                      </span>
                      <button
                        onClick={() => {
                          const next =
                            symptomSeverity === 'Mild'
                              ? 'Moderate'
                              : symptomSeverity === 'Moderate'
                              ? 'High'
                              : 'Mild';
                          setSymptomSeverity(next);
                          setHemoglobinConfidence(
                            next === 'Mild' ? 78.4 : next === 'Moderate' ? 94.2 : 98.1
                          );
                        }}
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F7D6E0] text-[#745B64] hover:bg-[#E2DAEB] transition"
                        title="Click to toggle simulated severity"
                      >
                        {symptomSeverity}
                      </button>
                    </div>

                    {/* Next step recommendation lock card */}
                    <div className="p-3.5 rounded-xl bg-[#F7D6E0]/40 border border-[#F0E5EC] flex items-start gap-2.5">
                      <Lock className="w-4 h-4 text-[#745B64] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#574049] leading-relaxed">
                        Next step: Trigger doctor referral & complete CBC blood profile.
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[#F0E5EC] flex items-center justify-between text-[11px] text-[#807477] font-mono">
                    <span>Status: Active Exploration</span>
                    <span>AIDS Project Lab</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 02: 2D Graphics Editor in C */}
          {/* ======================================================== */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-8 shadow-2xs hover:shadow-xs transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E2DAEB] text-[#4E415E] text-[11px] font-mono font-bold tracking-wider uppercase">
                    PROJECT 02
                  </span>
                  <span className="text-xs text-[#5C5B66] font-medium">
                    Systems Programming • Algorithms
                  </span>
                </div>

                <h3 className="text-2xl sm:text-2xl font-display font-bold text-[#1E1E24]">
                  2D Graphics Editor in C
                </h3>

                <p className="text-sm text-[#4E4447] leading-relaxed">
                  Developed a menu-driven terminal graphics editor concept using a 2D character-array canvas. Implemented rasterization mathematics for geometric drawing directly in memory.
                </p>

                {/* 5 Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Drawing Circles',
                    'Rectangles',
                    'Lines (Bresenham)',
                    'Triangles',
                    'Dynamic Shape Management',
                  ].map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#FAF8F9] border border-[#F0E5EC] text-[#1E1E24] font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* C Programming Foundations */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider mb-2">
                    C PROGRAMMING FOUNDATIONS:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      '2D Character Arrays',
                      'Pointers & Offsets',
                      'Structures (struct Shape)',
                      'Dynamic Memory (malloc/free)',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F9] border border-[#F0E5EC] text-[#5C5B66] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="https://github.com/inchararsep24coder/2D_graphics"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E1E24] hover:text-[#705860] hover:underline"
                  >
                    <span>View on GitHub Repository</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive ASCII Terminal Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF8F9] rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs font-mono">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0E5EC]">
                    <span className="text-xs font-bold text-[#5C5B66]">canvas_renderer.c</span>
                    <span className="text-[11px] text-[#807477]">24x12 Buffer</span>
                  </div>

                  {/* Render Box */}
                  <div className="my-3 p-3 bg-white rounded-xl border border-[#F0E5EC] text-[#1E1E24] text-[11.5px] leading-snug select-none flex flex-col items-center justify-center font-mono">
                    {currentBuffer.map((line, idx) => (
                      <div key={idx} className="whitespace-pre">
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Interactive Terminal Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F0E5EC] text-xs">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          setCurrentBuffer(circleAscii);
                          setActiveShape('circle');
                        }}
                        className={`px-2 py-0.5 rounded text-[11px] transition ${
                          activeShape === 'circle'
                            ? 'bg-[#1E1E24] text-white'
                            : 'bg-white border border-[#F0E5EC] hover:bg-[#F7D6E0]'
                        }`}
                      >
                        [1] Circle
                      </button>
                      <button
                        onClick={() => {
                          setCurrentBuffer(boxAscii);
                          setActiveShape('box');
                        }}
                        className={`px-2 py-0.5 rounded text-[11px] transition ${
                          activeShape === 'box'
                            ? 'bg-[#1E1E24] text-white'
                            : 'bg-white border border-[#F0E5EC] hover:bg-[#F7D6E0]'
                        }`}
                      >
                        [2] Box
                      </button>
                      <button
                        onClick={() => {
                          setCurrentBuffer(clearAscii);
                          setActiveShape('clear');
                        }}
                        className={`px-2 py-0.5 rounded text-[11px] transition ${
                          activeShape === 'clear'
                            ? 'bg-[#1E1E24] text-white'
                            : 'bg-white border border-[#F0E5EC] hover:bg-[#F7D6E0]'
                        }`}
                      >
                        [3] Clear
                      </button>
                    </div>
                    <span className="text-[11px] text-[#2E7D32] font-semibold">
                      Memory: 0 leaks
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 03: Smart Lock System Using IoT */}
          {/* ======================================================== */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-8 shadow-2xs hover:shadow-xs transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E9D7FB] text-[#6A5C7A] text-[11px] font-mono font-bold tracking-wider uppercase">
                    PROJECT 03
                  </span>
                  <span className="text-xs text-[#5C5B66] font-medium">
                    IoT • Smart Hardware • Security
                  </span>
                </div>

                <h3 className="text-2xl sm:text-2xl font-display font-bold text-[#1E1E24]">
                  Smart Lock System Using IoT
                </h3>

                <p className="text-sm text-[#4E4447] leading-relaxed">
                  A connected smart door locking mechanism engineered to eliminate physical key vulnerability, granting authorized mobile authentication with live state synchronization.
                </p>

                {/* 4 Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    'Smartphone-Controlled Access',
                    'App-Based Unlocking',
                    'Live Door Status Monitoring',
                    'Alerts & Access Notifications',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#FAF8F9] border border-[#F0E5EC] text-xs font-semibold text-[#1E1E24]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Hardware & Network Protocol */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider mb-2">
                    HARDWARE & NETWORK PROTOCOL:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'IoT Microcontroller',
                      'Wi-Fi/BLE Protocol',
                      'Relay Actuator',
                      'Mobile Dashboard',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F9] border border-[#F0E5EC] text-[#5C5B66]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#5C5B66] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#8E44AD]"></span>
                  <span>Embedded IoT Concept</span>
                </div>
              
              <div className="pt-3">
  <a
    href="https://github.com/inchararsep24coder/smart-lock-iot"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E1E24] hover:text-[#705860] hover:underline"
  >
    <span>View on GitHub Repository</span>
    <ChevronRight className="w-3.5 h-3.5" />
  </a>
</div>
              </div>

              {/* Right Column: Device Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF8F9] rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs">
                  
                  {/* Telemetry Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0E5EC]">
                    <span className="text-xs font-mono font-bold text-[#6A5C7A] uppercase tracking-wider">
                      DEVICE TELEMETRY
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#2E7D32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse"></span>
                      Node Online
                    </span>
                  </div>

                  {/* Interactive Lock State Box */}
                  <div className="py-6 flex flex-col items-center justify-center text-center">
                    <button
                      onClick={toggleLock}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                        isLocked
                          ? 'bg-[#E2DAEB] text-[#4E415E] hover:scale-105'
                          : 'bg-[#F7D6E0] text-[#745B64] hover:scale-105 ring-2 ring-[#E26D8C]'
                      }`}
                      title="Click to simulate toggle lock state"
                    >
                      {isLocked ? (
                        <Lock className="w-6 h-6" />
                      ) : (
                        <Unlock className="w-6 h-6" />
                      )}
                    </button>

                    <div className="mt-4 font-display font-bold text-base text-[#1E1E24]">
                      Secure Status:{' '}
                      <span className={isLocked ? 'text-[#1E1E24]' : 'text-[#E26D8C]'}>
                        {isLocked ? 'ENGAGED' : 'DISENGAGED'}
                      </span>
                    </div>
                    <div className="text-xs text-[#5C5B66] mt-0.5">
                      Controlled by authenticated device token
                    </div>

                    {/* Signal & Latency Metrics */}
                    <div className="grid grid-cols-2 gap-3 w-full mt-5">
                      <div className="p-2.5 rounded-xl bg-white border border-[#F0E5EC]">
                        <div className="text-[11px] text-[#807477] font-mono">Signal</div>
                        <div className="text-sm font-mono font-bold text-[#1E1E24] mt-0.5">
                          {signalStrength} dBm
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#F0E5EC]">
                        <div className="text-[11px] text-[#807477] font-mono">Latency</div>
                        <div className="text-sm font-mono font-bold text-[#1E1E24] mt-0.5">
                          {latency} ms
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-3 border-t border-[#F0E5EC] flex items-center justify-between text-[11px] text-[#807477] font-mono">
                    <span>Auth: SHA-256 Token</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#705860]" />
                      Encrypted
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
