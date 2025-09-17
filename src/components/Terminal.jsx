'use client';

import { useState } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');

  // helper to scroll like <a href="#id">
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = id; // fallback
    }
  };

  const handleCommandExecution = (command) => {
    command = command.toLowerCase();
    const commands = command.trim().split(' ');
    const cmd = commands[0];

    if (command === 'sudo rm -rf') {
      return {
        output:
          "Oh really? You think you can delete me? Nice try, but I'm smarter than that.",
      };
    }

    switch (cmd) {
      case 'help':
        return {
          output: `Available ACSES commands:
  acses-home      - Navigate to Home
  acses-about     - Learn more About us
  acses-squad     - Meet the Teams
  acses-contact   - Get in touch
  clear           - Clear the terminal`,
        };

      case 'rm':
        return {
          output: '⚠️ Nice try! ACSES firewall detected your trick 😉',
        };

      case 'acses-home':
        scrollToSection('#home');
        return { output: '🏠 Welcome to the ACSES Home!' };

      case 'acses-about':
        scrollToSection('#about');
        return { output: 'ℹ️ Redirecting... Discover ACSES story.' };

      case 'acses-teams':
        scrollToSection('#teams');
        return { output: '👥 Loading ACSES Teams... United we code!' };

      case 'acses-contact':
        scrollToSection('#contact');
        return { output: '📡 Connecting you with ACSES... Contact ready!' };

      case 'clear':
        setHistory([]);
        return { output: '' };

      default:
        return { output: `❌ Unknown ACSES command: ${command}` };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const trimmedCommand = currentCommand.trim();
      if (!trimmedCommand) return;

      const result = handleCommandExecution(trimmedCommand);
      if (!trimmedCommand.includes('clear')) {
        setHistory([
          ...history,
          { command: trimmedCommand, output: result.output },
        ]);
      }
      setCurrentCommand('');
    }
  };

  return (
    <div className="w-full h-full mx-auto rounded-xl overflow-hidden  bg-[#11082A] text-teal-300 font-mono flex flex-col">
      {/* Top bar */}
      <div className="px-4 py-2 bg-[#462da1] border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-400" />
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
        </div>
        <button className="px-3 py-1 text-sm rounded-md bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 transition-colors duration-200">
          WCE ACSES
        </button>
      </div>


      <div className="terminal flex flex-col p-4 flex-1 text-left overflow-y-auto scrollbar-hide">
       
        <div className="mb-3 text-teal-400/80 font-medium">
          Type <span className="text-cyan-400">help</span> for a list of commands.
        </div>

        <div className="flex flex-col gap-y-3 overflow-y-auto overflow-x-hidden flex-1 pr-2">
          {history.map((entry, i) => (
            <div key={i} className="flex flex-col gap-1">
              {/* Command */}
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <div>
                  <span className="text-pink-400">root</span>
                  <span className="text-cyan-400">@host</span>
                </div>
                <span className="text-cyan-400">$</span>
                <span className="text-yellow-400">{entry.command}</span>
              </div>

              {entry.output && (
                <div className="text-teal-300 whitespace-pre-wrap">
                  {entry.output}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <div>
              <span className="text-pink-400">root</span>
              <span className="text-cyan-400">@host</span>
            </div>
            <span className="text-cyan-400">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent border-none outline-none flex-1 text-yellow-400 caret-yellow-400 focus:ring-0"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
