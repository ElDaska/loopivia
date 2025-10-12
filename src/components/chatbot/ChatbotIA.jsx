import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  X,
  Send,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX,
  WifiOff,
  Trash2,
} from 'lucide-react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Importez vos images ici
import botImage from '../../assets/bot.png';
import conversationImage from '../../assets/conversation.png';
import conversationImage1 from '../../assets/conversation1.png';

const ChatbotIA = () => {
  const API_URL = import.meta.env.VITE_CHATBOT_API_URL;
  const TRAIN_SECRET = import.meta.env.VITE_TRAIN_SECRET;

  // États principaux
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('chatbot_muted');
    return saved ? JSON.parse(saved) : false;
  });
  const [unreadCount, setUnreadCount] = useState(0);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatbot_messages');
    if (saved) {
      try {
        return JSON.parse(saved).map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
      } catch {
        return [{
          id: 1,
          type: 'bot',
          content: "Salut ! 👋 Je suis Diop, votre consultant Loopivia spécialisé en automatisation intelligente. Comment puis-je aider ?",
          timestamp: new Date(),
        }];
      }
    }
    return [{
      id: 1,
      type: 'bot',
      content: "Salut ! 👋 Je suis Diop, votre consultant Loopivia spécialisé en automatisation intelligente. Comment puis-je aider ?",
      timestamp: new Date(),
    }];
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const audioContextRef = useRef(null);

  const quickReplies = useMemo(() => [
    '💡 Quels processus puis-je automatiser ?',
    '🚀 Vos solutions IA',
    "📈 ROI de l'automatisation",
    '🤝 Démarrer un projet',
  ], []);

  // Persistance des messages
  useEffect(() => {
    localStorage.setItem('chatbot_messages', JSON.stringify(messages));
  }, [messages]);

  // Persistance du son
  useEffect(() => {
    localStorage.setItem('chatbot_muted', JSON.stringify(isMuted));
  }, [isMuted]);

  // Détection de connexion
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Scroll automatique
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus et reset badge
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Sons de notification
  const playSound = useCallback((type) => {
    if (isMuted) return;
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      if (type === 'send') {
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
      } else if (type === 'receive') {
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.2);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  }, [isMuted]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (isMinimized) setIsMinimized(false);
  }, [isMinimized]);

  const minimizeChat = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  const clearHistory = useCallback(() => {
    if (window.confirm('Voulez-vous vraiment effacer l\'historique des conversations ?')) {
      const welcomeMsg = {
        id: Date.now(),
        type: 'bot',
        content: "Salut ! 👋 Je suis Diop, votre consultant Loopivia spécialisé en automatisation intelligente. Comment puis-je aider ?",
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
      localStorage.removeItem('chatbot_messages');
    }
  }, []);

  const handleSendMessage = useCallback(async (preText = null) => {
    const text = (preText ?? inputMessage).trim();
    if (!text || !isOnline) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);
    playSound('send');

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-train-secret': TRAIN_SECRET,
        },
        body: JSON.stringify({ chatInput: text }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const { reply } = await res.json();
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        content: reply,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMsg]);
      playSound('receive');
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Chatbot API error:', error);
      
      let errorMsg = "⚠️ Problème de connexion. Réessayez plus tard.";
      if (error.name === 'AbortError') {
        errorMsg = "⏱️ La requête a expiré. Veuillez réessayer.";
      } else if (!isOnline) {
        errorMsg = "📡 Vous êtes hors ligne. Vérifiez votre connexion.";
      }
      
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          content: errorMsg,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [inputMessage, isOnline, API_URL, TRAIN_SECRET, playSound, isOpen]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const handleInput = useCallback((e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 96)}px`;
  }, []);

  return (
    <>
      {/* Bouton flottant - Style moderne du screenshot */}
      {!isOpen && (
        <div className="fixed bottom-4 left-4 z-[9998]">
          <button
            onClick={toggleChat}
            aria-label="Ouvrir le chat avec Diop"
            className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-3 border-white ring-4 ring-indigo-100"
          >
            <img
              src={botImage}
              alt="Avatar Diop"
              className="w-16 h-16 rounded-full"
            />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold shadow-lg">
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
            {!isOnline && (
              <div className="absolute bottom-0 right-0 bg-gray-500 rounded-full p-1.5 border-2 border-white">
                <WifiOff size={12} className="text-white" />
              </div>
            )}
          </button>
        </div>
      )}

      {/* Fenêtre de chat - Full Responsive comme votre screenshot */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 z-[9999] w-[min(450px,calc(100vw-2rem))]">
          <div
            className={`bg-white rounded-3xl shadow-2xl border border-gray-200/50 flex flex-col transition-all duration-300 backdrop-blur-sm ${
              isMinimized
                ? 'h-20'
                : 'h-[min(700px,calc(100vh-8rem))]'
            }`}
            role="dialog"
            aria-label="Chatbot Diop"
            aria-modal="true"
          >
            {/* Header - Style du screenshot */}
            <div className="relative flex items-center justify-between bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 text-white rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative flex items-center space-x-3 flex-1 min-w-0">
                <div className="relative">
                  <img
                    src={conversationImage}
                    alt="Avatar Diop"
                    className="w-14 h-14 rounded-full border-3 border-white shadow-xl flex-shrink-0 ring-4 ring-white/20"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg truncate flex items-center gap-2">
                    Diop
                  </h3>
                  <p className="text-sm text-white/90 truncate flex items-center gap-1.5">
                    {isOnline ? (
                      <>
                        <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse shadow-sm"></span>
                        <span>En ligne</span>
                      </>
                    ) : (
                      <>
                        <WifiOff size={12} className="flex-shrink-0" />
                        <span>Hors ligne</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex items-center space-x-1">
                <button
                  onClick={clearHistory}
                  aria-label="Effacer l'historique"
                  className="p-2 text-white/90 hover:bg-white/20 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  onClick={() => setIsMuted(prev => !prev)}
                  aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
                  className="p-2 text-white/90 hover:bg-white/20 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  onClick={minimizeChat}
                  aria-label={isMinimized ? "Agrandir" : "Réduire"}
                  className="p-2 text-white/90 hover:bg-white/20 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={toggleChat}
                  aria-label="Fermer le chat"
                  className="p-2 text-white/90 hover:bg-white/20 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Contenu */}
            {!isMinimized && (
              <>
                {/* Messages - Style épuré comme le screenshot */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start space-x-3 ${
                        msg.type === 'user'
                          ? 'flex-row-reverse space-x-reverse'
                          : ''
                      } animate-fade-in`}
                    >
                      <img
                        src={msg.type === 'bot' ? conversationImage : conversationImage1}
                        alt={msg.type === 'bot' ? 'Avatar Diop' : 'Votre avatar'}
                        className="w-10 h-10 rounded-full shadow-md border-2 border-gray-100 flex-shrink-0"
                      />
                      <div className="max-w-[75%]">
                        <div
                          className={`px-4 py-3 rounded-2xl shadow-sm text-[15px] leading-relaxed ${
                            msg.type === 'bot'
                              ? 'bg-gray-50 border border-gray-200 text-gray-800'
                              : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                          }`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              a: (props) => (
                                <a
                                  {...props}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`underline hover:opacity-80 transition-opacity ${
                                    msg.type === 'bot' ? 'text-indigo-600 font-medium' : 'text-white font-semibold'
                                  }`}
                                />
                              ),
                              p: ({ children }) => (
                                <p className="whitespace-pre-wrap break-words">{children}</p>
                              ),
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                        <div
                          className={`text-xs mt-1.5 font-medium ${
                            msg.type === 'bot'
                              ? 'text-gray-400'
                              : 'text-gray-400 text-right'
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Indicateur de frappe - Style moderne */}
                  {isTyping && (
                    <div className="flex items-start space-x-3 animate-fade-in">
                      <img
                        src={botImage}
                        alt="Diop écrit"
                        className="w-10 h-10 rounded-full shadow-md border-2 border-gray-100 flex-shrink-0"
                      />
                      <div className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                        <div className="flex items-center space-x-1.5">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.6s' }}
                            />
                          ))}
                          <span className="ml-2 text-xs text-gray-600 font-medium">
                            Diop écrit…
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick replies - Style élégant comme le screenshot */}
                {messages.length === 1 && (
                  <div className="px-4 pt-2 pb-4 bg-white border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((qr, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(qr)}
                          disabled={!isOnline}
                          className="px-4 py-2.5 text-sm font-medium bg-white text-gray-700 rounded-full border border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Zone de saisie - Style moderne du screenshot */}
                <div className="p-4 bg-white border-t border-gray-100 rounded-b-3xl">
                  <div className="flex items-end space-x-3">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onInput={handleInput}
                      placeholder={isOnline ? "Tapez votre message..." : "Hors ligne"}
                      disabled={!isOnline}
                      aria-label="Message à envoyer"
                      className="flex-1 px-4 py-3 text-[15px] text-gray-700 bg-gray-50 placeholder-gray-500 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:bg-white disabled:bg-gray-100 disabled:cursor-not-allowed transition-all shadow-sm"
                      rows={1}
                      style={{ height: 'auto', maxHeight: '96px' }}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isTyping || !isOnline}
                      aria-label="Envoyer le message"
                      className="p-3 text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex-shrink-0"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                      <span className="font-medium">Loopivia IA</span>
                    </span>
                    <span className="font-medium">Réponses en temps réel</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Styles globaux - Améliorés pour correspondre au screenshot */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* Scrollbar personnalisée élégante */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        
        /* Animation de bounce pour les points de typing */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        /* Bordure pour l'avatar principal */
        .border-3 {
          border-width: 3px;
        }
        
        /* Ring pour le bouton flottant */
        .ring-4 {
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </>
  );
};

export default ChatbotIA;