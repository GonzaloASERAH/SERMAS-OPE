
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Topic, TopicCategory, StudyStatus, TopicProgress, UserProgress } from './types';
import { TOPICS } from './data';
import { Icons } from './constants';

// --- CUSTOM HOOKS ---

function useStickyState<T>(defaultValue: T, key: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const useProgress = () => {
  const [progress, setProgress] = useStickyState<UserProgress>({}, 'ope_sermas_progress');

  const updateTopicStatus = (topicId: number, status: StudyStatus) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        status,
        lastStudied: Date.now()
      }
    }));
  };

  const addTime = (topicId: number, seconds: number) => {
    setProgress(prev => {
      const current = prev[topicId] || { status: StudyStatus.PENDING, lastStudied: null, timeSpentSeconds: 0, reviewCount: 0 };
      return {
        ...prev,
        [topicId]: {
          ...current,
          timeSpentSeconds: current.timeSpentSeconds + seconds,
          lastStudied: Date.now()
        }
      };
    });
  };

  const incrementReview = (topicId: number) => {
    setProgress(prev => {
        const current = prev[topicId] || { status: StudyStatus.PENDING, lastStudied: null, timeSpentSeconds: 0, reviewCount: 0 };
        return {
            ...prev,
            [topicId]: {
                ...current,
                reviewCount: current.reviewCount + 1,
                lastStudied: Date.now()
            }
        };
    });
  };

  return { progress, updateTopicStatus, addTime, incrementReview };
};

// --- COMPONENTS ---

// 1. Dashboard / Topic List
const Dashboard: React.FC<{ progress: UserProgress }> = ({ progress }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<TopicCategory | 'ALL'>('ALL');

  const stats = useMemo(() => {
    const total = TOPICS.length;
    // Explicitly cast Object.values to TopicProgress[] to ensure 'status' property is recognized by the compiler
    const completed = (Object.values(progress) as TopicProgress[]).filter(p => p.status === StudyStatus.COMPLETED).length;
    const reviewing = (Object.values(progress) as TopicProgress[]).filter(p => p.status === StudyStatus.REVIEWING).length;
    const percent = Math.round((completed / total) * 100);
    return { completed, reviewing, percent };
  }, [progress]);

  const filteredTopics = useMemo(() => {
    return TOPICS.filter(t => {
      const matchesSearch = t.fullTitle.toLowerCase().includes(search.toLowerCase()) || 
                            t.subtopics.some(s => s.title.toLowerCase().includes(search.toLowerCase()));
      const matchesFilter = filter === 'ALL' || t.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const getStatusColor = (id: number) => {
    const status = progress[id]?.status || StudyStatus.PENDING;
    switch (status) {
      case StudyStatus.COMPLETED: return 'bg-green-100 text-green-800 border-green-200';
      case StudyStatus.REVIEWING: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-white text-gray-500 border-gray-200 hover:border-blue-300';
    }
  };

  return (
    <div className="pb-20">
      <div className="bg-blue-700 text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <h1 className="text-2xl font-bold mb-2">OPE SERMAS Auxiliar</h1>
        <p className="opacity-90 text-sm mb-4">Progreso Global: {stats.percent}%</p>
        <div className="w-full bg-blue-900 rounded-full h-2.5">
          <div className="bg-green-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.percent}%` }}></div>
        </div>
        <div className="flex gap-4 mt-2 text-xs opacity-80">
          <span>✅ {stats.completed} Estudiados</span>
          <span>🔄 {stats.reviewing} Repasando</span>
        </div>
      </div>

      <div className="px-4 sticky top-2 z-10">
        <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm border border-gray-100 mb-4 flex gap-2">
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Icons.Search />
                </div>
                <input 
                    type="text" 
                    placeholder="Buscar tema..." 
                    className="w-full pl-10 pr-3 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <select 
                className="bg-gray-50 text-gray-600 text-sm rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
            >
                <option value="ALL">Todos</option>
                <option value={TopicCategory.LEGAL}>Legal</option>
                <option value={TopicCategory.SERMAS}>SERMAS</option>
                <option value={TopicCategory.IT}>Informática</option>
            </select>
        </div>
      </div>

      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map(topic => (
          <div 
            key={topic.id}
            onClick={() => navigate(`/study/${topic.id}`)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-transform hover:scale-[1.02] shadow-sm ${getStatusColor(topic.id)}`}
          >
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold px-2 py-1 rounded bg-black/5 uppercase tracking-wider">{topic.category}</span>
                {progress[topic.id]?.status === StudyStatus.COMPLETED && <div className="text-green-600"><Icons.Check /></div>}
            </div>
            <h3 className="font-bold text-lg mb-2 leading-tight">{topic.fullTitle}</h3>
            <p className="text-xs opacity-70">{topic.subtopics.length} epígrafes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Study Mode (Detail + Audio)
const StudyMode: React.FC<{ progress: UserProgress, updateStatus: any, addTime: any }> = ({ progress, updateStatus, addTime }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = TOPICS.find(t => t.id === Number(id));
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [activeSubtopic, setActiveSubtopic] = useState<number | null>(null); // For highlighting
  const synth = useRef(window.speechSynthesis);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);

  // Time tracking effect
  useEffect(() => {
    const timer = setInterval(() => {
        if(topic) addTime(topic.id, 5);
    }, 5000); // Add 5 seconds every 5 seconds
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  // Audio setup
  useEffect(() => {
    if (!topic) return;

    // Cancel any previous speech
    synth.current.cancel();

    const fullText = topic.subtopics.map((s, i) => `Punto ${s.id}. ${s.title}. ${s.content || "Contenido pendiente de desarrollar."}`).join('. ');
    
    const u = new SpeechSynthesisUtterance(fullText);
    u.lang = 'es-ES';
    u.rate = speed;
    
    u.onend = () => setIsPlaying(false);
    // Simple mock highlighting logic based on time or boundaries could go here, 
    // but actual boundary events are inconsistent across browsers.
    
    utterance.current = u;

    return () => synth.current.cancel();
  }, [topic, speed]);

  const togglePlay = () => {
    if (isPlaying) {
      synth.current.pause();
      setIsPlaying(false);
    } else {
      if (synth.current.paused) {
        synth.current.resume();
      } else {
        if (utterance.current) synth.current.speak(utterance.current);
      }
      setIsPlaying(true);
    }
  };

  const changeStatus = (status: StudyStatus) => {
    if(topic) updateStatus(topic.id, status);
  };

  if (!topic) return <div>Tema no encontrado</div>;

  const currentStatus = progress[topic.id]?.status || StudyStatus.PENDING;

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="sticky top-0 bg-white border-b z-20 px-4 py-3 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100">
            <Icons.ChevronLeft />
        </button>
        <span className="font-bold text-sm truncate max-w-[200px]">Tema {topic.id}</span>
        <div className="flex gap-2">
           <button 
             onClick={togglePlay}
             className={`p-2 rounded-full ${isPlaying ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
           >
             {isPlaying ? <Icons.Pause /> : <Icons.Play />}
           </button>
        </div>
      </div>

      <div className="p-6 max-w-3xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{topic.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4 leading-tight">{topic.fullTitle}</h1>
            
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                {(['PENDING', 'REVIEWING', 'COMPLETED'] as StudyStatus[]).map((s) => (
                    <button
                        key={s}
                        onClick={() => changeStatus(s)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                            currentStatus === s 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-gray-500 border-gray-200'
                        }`}
                    >
                        {s === 'PENDING' ? 'Pendiente' : s === 'REVIEWING' ? 'Repasando' : 'Estudiado'}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-6">
            {topic.subtopics.map((sub, idx) => (
                <div 
                    key={sub.id} 
                    className={`p-4 rounded-lg border transition-colors ${activeSubtopic === idx ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-100'}`}
                    onClick={() => setActiveSubtopic(idx)}
                >
                    <h3 className="font-bold text-blue-900 mb-2">{sub.id} {sub.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {sub.content || "Aquí iría el desarrollo completo del contenido del tema, cargado desde una fuente de datos externa o Markdown. Para este prototipo, mostramos la estructura oficial del BOE/BOCM."}
                    </p>
                </div>
            ))}
        </div>
      </div>
      
      {/* Speed Control Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 pb-8 flex items-center justify-between z-30">
        <span className="text-xs font-bold text-gray-400">VELOCIDAD AUDIO</span>
        <div className="flex items-center gap-4 flex-1 mx-4">
            <span className="text-xs">0.5x</span>
            <input 
                type="range" 
                min="0.5" 
                max="2" 
                step="0.25" 
                value={speed} 
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs">2x</span>
        </div>
        <span className="text-sm font-bold w-8 text-center">{speed}x</span>
      </div>
    </div>
  );
};

// 3. Flashcards Mode
const Flashcards: React.FC<{ progress: UserProgress, incrementReview: any }> = ({ progress, incrementReview }) => {
  const [cards, setCards] = useState<Array<{topicId: number, front: string, back: string}>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate simple flashcards: Front = Topic Number + ID, Back = Title
    const allCards = TOPICS.flatMap(t => 
        t.subtopics.map(s => ({
            topicId: t.id,
            front: `Tema ${t.id} - Punto ${s.id}`,
            back: s.title
        }))
    );
    // Shuffle
    setCards(allCards.sort(() => Math.random() - 0.5));
  }, []);

  const handleNext = (known: boolean) => {
    if (currentIndex >= cards.length - 1) {
        alert("¡Sesión de repaso completada!");
        navigate('/');
        return;
    }
    
    if (known) {
        incrementReview(cards[currentIndex].topicId);
    }
    
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
  };

  if (cards.length === 0) return <div className="p-10 text-center">Cargando tarjetas...</div>;

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 pb-24">
       <div className="w-full max-w-md flex justify-between items-center mb-6">
            <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-800 font-medium">Salir</button>
            <span className="text-gray-400 font-mono text-sm">{currentIndex + 1} / {cards.length}</span>
       </div>

       <div 
        className="w-full max-w-md aspect-[3/4] perspective-1000 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
       >
         <div className={`relative w-full h-full duration-500 preserve-3d transition-all ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            
            {/* Front */}
            <div className="absolute w-full h-full bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <span className="text-blue-500 font-bold text-sm tracking-widest mb-4">PREGUNTA</span>
                <h2 className="text-2xl font-bold text-center text-gray-800">{currentCard.front}</h2>
                <p className="mt-8 text-gray-400 text-sm animate-pulse">Toca para ver respuesta</p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-blue-600 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <span className="text-blue-200 font-bold text-sm tracking-widest mb-4">RESPUESTA</span>
                <h2 className="text-2xl font-bold text-center text-white">{currentCard.back}</h2>
            </div>
         </div>
       </div>

       <div className="flex gap-4 mt-8 w-full max-w-md">
            <button 
                onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                className="flex-1 py-4 bg-red-100 text-red-600 rounded-xl font-bold hover:bg-red-200 transition-colors"
            >
                Difícil
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                className="flex-1 py-4 bg-green-100 text-green-600 rounded-xl font-bold hover:bg-green-200 transition-colors"
            >
                Fácil
            </button>
       </div>
    </div>
  );
};

// 4. Navigation Layout
const Layout: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
                <Routes>
                    <Route path="/" element={<DashboardWithData />} />
                    <Route path="/study/:id" element={<StudyWithData />} />
                    <Route path="/flashcards" element={<FlashcardsWithData />} />
                </Routes>
            </div>
            
            <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between items-center z-40 h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button onClick={() => navigate('/')} className="flex flex-col items-center text-gray-500 hover:text-blue-600 active:text-blue-600 gap-1">
                    <Icons.Book />
                    <span className="text-[10px] font-medium">Temario</span>
                </button>
                <button onClick={() => navigate('/flashcards')} className="flex flex-col items-center text-gray-500 hover:text-blue-600 active:text-blue-600 gap-1">
                    <Icons.Brain />
                    <span className="text-[10px] font-medium">Repaso</span>
                </button>
                {/* Placeholder for Profile/Settings */}
                <button className="flex flex-col items-center text-gray-300 gap-1 cursor-not-allowed">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <span className="text-[10px] font-medium">Perfil</span>
                </button>
            </nav>
        </>
    );
};

// --- DATA WRAPPERS ---

const DashboardWithData = () => {
    const { progress } = useProgress();
    return <Dashboard progress={progress} />;
};

const StudyWithData = () => {
    const { progress, updateTopicStatus, addTime } = useProgress();
    return <StudyMode progress={progress} updateStatus={updateTopicStatus} addTime={addTime} />;
};

const FlashcardsWithData = () => {
    const { progress, incrementReview } = useProgress();
    return <Flashcards progress={progress} incrementReview={incrementReview} />;
};

// --- MAIN APP ENTRY ---

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
