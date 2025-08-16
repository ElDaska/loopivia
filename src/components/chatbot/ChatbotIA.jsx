import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import botImage from '../../assets/bot.png';
import conversationImage1 from '../../assets/conversation1.png';
import conversationImage from '../../assets/conversation.png';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatbotIA = () => {
  const API_URL      = import.meta.env.VITE_CHATBOT_API_URL;
  const TRAIN_SECRET = import.meta.env.VITE_TRAIN_SECRET;

  const [isOpen, setIsOpen]            = useState(false);
  const [isMinimized, setIsMinimized]  = useState(false);
  const [isMuted, setIsMuted]          = useState(false);
  const [unreadCount, setUnreadCount]  = useState(0);
  const [inputMessage, setInputMessage]= useState('');
  const [isTyping, setIsTyping]        = useState(false);
  const [messages, setMessages]        = useState([
    {
      id: 1,
      type: 'bot',
      content:
        "Salut ! 👋 Je suis Diop, votre consultant Loopivia spécialisé en automatisation intelligente. Comment puis-je aider ?",
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  const quickReplies = [
    '💡 Quels processus puis-je automatiser ?',
    '🚀 Vos solutions IA',
    '📈 ROI de l’automatisation',
    '🤝 Démarrer un projet',
  ];

  // Scroll auto
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus & reset badge
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(o => !o);
    if (isMinimized) setIsMinimized(false);
  };
  const minimizeChat = () => setIsMinimized(m => !m);

  const handleSendMessage = async (preText = null) => {
    const text = (preText ?? inputMessage).trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages(ms => [...ms, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type':   'application/json',
          'x-train-secret': TRAIN_SECRET,
        },
        body: JSON.stringify({ chatInput: text }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { reply } = await res.json();
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        content: reply,
        timestamp: new Date(),
      };
      setMessages(ms => [...ms, botMsg]);
    } catch {
      setMessages(ms => [
        ...ms,
        {
          id: Date.now() + 1,
          type: 'bot',
          content:
            "⚠️ Problème de connexion. Réessayez plus tard.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
      if (!isOpen) setUnreadCount(c => c + 1);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <div className="fixed bottom-4 left-4 z-[9998]">
          <button
            onClick={toggleChat}
            className="relative bg-gradient-to-r from-cyan-600 to-blue-700 p-1 rounded-full shadow-lg hover:scale-105 active:scale-95 border-2 border-white"
          >
            <img
              src={botImage}
              alt="Ouvrir chat Diop"
              className="w-14 h-14 rounded-full"
            />
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse font-bold">
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
          </button>
        </div>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:left-4 sm:max-w-sm lg:max-w-md z-[9999] p-2 sm:p-0">
          <div
            className={`bg-white rounded-2xl shadow-2xl border border-gray-300 flex flex-col transition-all duration-300 ${
              isMinimized
                ? 'h-16'
                : 'sm:h-[600px] max-h-[90vh] h-full'
            }`}
          >
            {/* Header */}
            <div className="relative flex items-center justify-between bg-gradient-to-r from-cyan-600 to-purple-600 p-4 text-white rounded-t-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative flex items-center space-x-3 flex-1">
                <img
                  src={conversationImage}
                  alt="Diop"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-lg truncate">Diop</h3>
                  <p className="text-sm text-white/80 truncate">
                    Consultant Loopivia – En ligne
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex items-center space-x-1">
                <button
                  onClick={() => setIsMuted(m => !m)}
                  className="p-2 text-white hover:bg-white/25 rounded-full transition-colors shadow-md"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  onClick={minimizeChat}
                  className="p-2 text-white hover:bg-white/25 rounded-full transition-colors shadow-md"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 text-white hover:bg-white/25 rounded-full transition-colors shadow-md"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Contenu */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  {messages.map(msg => (
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
                        alt=""
                        className="w-10 h-10 rounded-full shadow-md border-2 border-gray-200"
                      />
                      <div className="max-w-[75%]">
                        <div
                          className={`px-4 py-3 rounded-2xl shadow-inner ${
                            msg.type === 'bot'
                              ? 'bg-gray-100 border border-gray-300 text-gray-900'
                              : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
                          }`}
                        >
                          <ReactMarkdown
                          remarkPlugins={[remarkGfm]}                   // gère [texte](url) + autolinks
                          components={{
                            a: (props) => (
                            <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                            />
                          ),
                          /* facultatif : forcer <p> à conserver tes classes */
                          p: ({ children }) => (
                          <p className="whitespace-pre-wrap break-words">{children}</p>
                        ),
                        }}
                        >
                          {msg.content}
                          </ReactMarkdown>

                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            msg.type === 'bot'
                              ? 'text-gray-500'
                              : 'text-gray-200 text-right'
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

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex items-start space-x-3 animate-fade-in">
                      <img
                        src={botImage}
                        alt=""
                        className="w-10 h-10 rounded-full shadow-md border-2 border-gray-200"
                      />
                      <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded-2xl shadow-inner text-gray-900">
                        <div className="flex items-center space-x-1">
                          {[0, 1, 2].map(i => (
                            <span
                              key={i}
                              className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                          <span className="ml-2 text-xs text-gray-700">
                            Diop écrit…
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick replies */}
                {messages.length === 1 && (
                  <div className="px-4 pt-2 pb-4 bg-white border-t border-gray-300">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((qr, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(qr)}
                          className="
                            px-3 py-2 text-xs bg-white text-gray-900 
                            rounded-full border border-gray-400 
                            hover:bg-cyan-100 hover:border-cyan-400 hover:text-cyan-900 
                            transition
                          "
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input area */}
                <div className="p-4 bg-white border-t border-gray-300">
                  <div className="flex items-end space-x-3">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={e => setInputMessage(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Tapez votre message…"
                      className="
                        flex-1 px-4 py-3 
                        text-sm text-gray-900            /* texte foncé */
                        bg-white                         /* fond blanc */
                        placeholder-gray-700             /* placeholder plus sombre */
                        border border-gray-500           /* bordure plus prononcée */
                        rounded-2xl resize-none 
                        focus:outline-none 
                        focus:ring-2 focus:ring-cyan-500
                      "
                      rows={1}
                      style={{ height: 'auto', maxHeight: '96px' }}
                      onInput={e => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${Math.min(
                          e.target.scrollHeight,
                          96
                        )}px`;
                      }}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isTyping}
                      className="
                        p-3 text-white bg-gradient-to-r from-cyan-600 to-blue-700 
                        rounded-full hover:scale-105 disabled:opacity-50 
                        transition
                      "
                    >
                      <Send size={16} />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-700">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Propulsé par Loopivia IA</span>
                    </span>
                    <span>Réponses en temps réel</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Styles globaux */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </>
  );
};

export default ChatbotIA;
