// src/components/WorkflowSection.jsx
import { useEffect, useRef, useState, memo } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Circle, CheckCircle } from 'lucide-react';
import { useWorkflowAnimation } from '../hooks/useWorkflowAnimation';
import { workflowNodes, workflowConnections, featureItems } from '../config/siteConfig';

// Sous-composant pour les "features" pour la clarté et la performance
const FeatureCard = memo(({ icon: Icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
    <Icon className="w-12 h-12 text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
    <ArrowRight className="w-5 h-5 text-blue-400 mt-4 transition-transform duration-300 group-hover:translate-x-2" />
  </div>
));
FeatureCard.displayName = 'FeatureCard';

const WorkflowSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Logique d'animation extraite dans le hook
  const { isPlaying, currentStep, handlePlayPause, handleReset } = useWorkflowAnimation(
    workflowNodes.length,
    isVisible
  );

  // Gestion de la visibilité pour déclencher l'animation
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getNodeStatus = (index) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'processing';
    return 'idle';
  };
  
  return (
    <section 
      ref={sectionRef}
      // Style harmonisé avec le header: fond uni, plus sobre
      className="bg-slate-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Animation de fond plus subtile et alignée sur la charte */}
      <div className="absolute inset-0 opacity-10 blur-3xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Un Workflow d'Automatisation Puissant
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Visualisez comment nos solutions transforment des processus complexes en flux de travail simples et efficaces.
          </p>
        </div>

        {/* Contrôles */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-slate-700">
            <button onClick={handlePlayPause} className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300">
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button onClick={handleReset} className="flex items-center gap-2 px-5 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full transition-all duration-300">
              <RotateCcw size={18} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Visualisation du Workflow */}
        <div className={`relative h-96 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700 shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
            {workflowConnections.map(({ from, to }, index) => {
              const fromNode = workflowNodes.find(n => n.id === from);
              const toNode = workflowNodes.find(n => n.id === to);
              const fromIndex = workflowNodes.findIndex(n => n.id === from);
              const isActive = getNodeStatus(fromIndex) === 'completed' || getNodeStatus(fromIndex) === 'processing';

              if (!fromNode || !toNode) return null;
              
              // Couleurs des connexions harmonisées
              return <line key={index} x1={`${fromNode.position.x}%`} y1={`${fromNode.position.y}%`} x2={`${toNode.position.x}%`} y2={`${toNode.position.y}%`}
                           className={`transition-all duration-500 ${isActive ? 'stroke-blue-400' : 'stroke-slate-600'}`}
                           strokeWidth={isActive ? 2 : 1.5} strokeDasharray={!isActive ? '4 4' : 'none'} />;
            })}
          </svg>

          {workflowNodes.map((node, index) => {
            const status = getNodeStatus(index);
            const NodeIcon = node.icon;
            
            // Logique de style des noeuds pour plus de clarté
            const statusClasses = {
              idle: 'bg-slate-700 border-slate-500 text-gray-400',
              processing: 'bg-blue-500/20 border-blue-400 text-blue-400 scale-110',
              completed: 'bg-slate-700 border-blue-400/50 text-blue-400',
            };

            return (
              <div key={node.id} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.position.x}%`, top: `${node.position.y}%`, zIndex: 10 }}>
                <div className="relative group cursor-pointer">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${statusClasses[status]}`}>
                    {status === 'completed' ? <CheckCircle /> : <NodeIcon />}
                    {status === 'processing' && <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>}
                  </div>
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900 text-white p-3 rounded-lg z-20 text-center border border-slate-700">
                    <h4 className="font-semibold text-sm">{node.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{node.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grille de Features */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {featureItems.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;