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
          timeSpentSeconds: (current.timeSpentSeconds || 0) + seconds,
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
                reviewCount: (current.reviewCount || 0) + 1,
                lastStudied: Date.now()
            }
        };
    });
  };

  return { progress, updateTopicStatus, addTime, incrementReview };
};

// --- COMPONENTS ---

const Dashboard: React.FC<{ progress: UserProgress }> = ({ progress }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<TopicCategory | 'ALL'>('ALL');

  const stats = useMemo(() => {
    const total = TOPICS.length;
    const completed = (Object.values(progress) as TopicProgress[]).filter(p => p.status === StudyStatus.COMPLETED).length;
    const reviewing = (Object.values(progress) as TopicProgress[]).filter(p => p.status === StudyStatus.REVIEWING).length;
    const percent = Math.round((completed / total) * 100);
    return { completed, reviewing, percent };
  }, [progress]);

  const filteredTopics = useMemo(() => {
    return TOPICS.filter(t => {
      const matchesSearch = t.fullTitle.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'ALL' || t.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="pb-20">
      <div className="bg-blue-700 text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <h1 className="text-2xl font-bold mb-2">OPE SERMAS</h1>
        <p className="opacity-90 text-sm mb-4">Progreso Global: {stats.percent}%</p>
        <div className="w-full bg-blue-900 rounded-full h-2.5">
          <div className="bg-green-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.percent}%` }}></div>
        </div>
      </div>
      <div className="px-4 sticky top-2 z-10 mb-4">
        <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm border border-gray-100 flex gap-2">
            <input type="text" placeholder="Buscar..." className="flex-1 px-3 py-2 bg-gray-50 rounded-lg outline-none text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map(topic => (
          <div key={topic.id} onClick={() => navigate(`/study/${topic.id}`)} className="p-4 rounded-xl border-2 cursor-pointer bg-white shadow-sm border-gray-100">
            <span className="text-xs font-bold px-2 py-1 rounded bg-blue-50 text-blue-700 uppercase tracking-wider">{topic.category}</span>
            <h3 className="font-bold text-lg mt-2 leading-tight">{topic.fullTitle}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const StudyMode: React.FC<{ progress: UserProgress, updateStatus: any, addTime: any }> = ({ progress, updateStatus, addTime }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = TOPICS.find(t => t.id === Number(id));
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(-1);
  
  const synth = useRef(window.speechSynthesis);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    if(topic) {
        const timer = setInterval(() => addTime(topic.id, 5), 5000);
        return () => {
            clearInterval(timer);
            stopAudio();
        };
    }
  }, [topic]);

  const stopAudio = () => {
    synth.current.cancel();
    isPlayingRef.current = false;
    setIsPlaying(false);
    setCurrentChunkIndex(-1);
  };

  const speakChunk = (index: number) => {
    if (!topic || !isPlayingRef.current || index >= topic.subtopics.length) {
      stopAudio();
      return;
    }

    setCurrentChunkIndex(index);
    const sub = topic.subtopics[index];
    const text = `Punto ${sub.id}. ${sub.title}. ${sub.content || ''}`;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = speed;
    
    utterance.onend = () => {
      if (isPlayingRef.current) {
        setTimeout(() => speakChunk(index + 1), 300);
      }
    };

    utterance.onerror = () => stopAudio();
    synth.current.speak(utterance);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      synth.current.cancel();
      isPlayingRef.current = true;
      setIsPlaying(true);
      
      // Warmup iOS
      synth.current.speak(new SpeechSynthesisUtterance(""));
      speakChunk(0);
    }
  };

  if (!topic) return <div>Tema no encontrado</div>;
  const currentStatus = progress[topic.id]?.status || StudyStatus.PENDING;

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="sticky top-0 bg-white border-b z-20 px-4 py-3 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100"><Icons.ChevronLeft /></button>
        <span className="font-bold text-sm truncate max-w-[200px]">Tema {topic.id}</span>
        <button onClick={togglePlay} className={`p-3 rounded-full shadow-md ${isPlaying ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
          {isPlaying ? <Icons.Pause /> : <Icons.Play />}
        </button>
      </div>

      <div className="p-6 max-w-3xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{topic.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4 leading-tight">{topic.fullTitle}</h1>
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                {(['PENDING', 'REVIEWING', 'COMPLETED'] as StudyStatus[]).map((s) => (
                    <button key={s} onClick={() => updateStatus(topic.id, s)} className={`px-4 py-2 rounded-full text-xs font-bold border ${currentStatus === s ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-500 border-gray-200'}`}>
                        {s === 'PENDING' ? 'Pendiente' : s === 'REVIEWING' ? 'Repasando' : 'Estudiado'}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-6">
            {topic.subtopics.map((sub, idx) => (
                <div key={sub.id} className={`p-4 rounded-lg border transition-all ${currentChunkIndex === idx ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
                    <h3 className="font-bold text-blue-900 mb-2">{sub.id} {sub.title}</h3>
                    <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">{sub.content}</div>
                </div>
            ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 pb-8 flex items-center justify-between z-30">
        <div className="flex flex-col gap-1 flex-1 mr-6">
            <span className="text-[10px] font-bold text-gray-400">VELOCIDAD</span>
            <input type="range" min="0.5" max="2" step="0.25" value={speed} onChange={(e) => {
                setSpeed(parseFloat(e.target.value));
                if(isPlaying) stopAudio();
            }} className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-blue-600" />
        </div>
        <span className="text-sm font-bold text-blue-700">{speed}x</span>
      </div>
    </div>
  );
};

const Flashcards: React.FC<{ progress: UserProgress, incrementReview: any }> = ({ progress, incrementReview }) => {
  const [cards, setCards] = useState<Array<{topicId: number, front: string, back: string}>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const allCards = TOPICS.flatMap(t => t.subtopics.map(s => ({ topicId: t.id, front: `Tema ${t.id} - Punto ${s.id}`, back: s.title })));
    setCards(allCards.sort(() => Math.random() - 0.5));
  }, []);

  const handleNext = (known: boolean) => {
    if (currentIndex >= cards.length - 1) { navigate('/'); return; }
    if (known) incrementReview(cards[currentIndex].topicId);
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
  };

  if (cards.length === 0) return <div>Cargando...</div>;
  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
       <div className="w-full max-w-md flex justify-between mb-4">
            <button onClick={() => navigate('/')} className="text-gray-500">Salir</button>
            <span className="text-gray-400 font-mono text-xs">{currentIndex + 1} / {cards.length}</span>
       </div>
       <div className="w-full max-w-md aspect-[3/4] perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
         <div className={`relative w-full h-full duration-500 transition-all preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <div className="absolute w-full h-full bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <span className="text-blue-500 font-bold text-xs mb-4">PREGUNTA</span>
                <h2 className="text-2xl font-bold text-center">{currentCard.front}</h2>
            </div>
            <div className="absolute w-full h-full bg-blue-600 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <span className="text-blue-200 font-bold text-xs mb-4">RESPUESTA</span>
                <h2 className="text-2xl font-bold text-center text-white">{currentCard.back}</h2>
            </div>
         </div>
       </div>
       <div className="flex gap-4 mt-8 w-full max-w-md">
            <button onClick={() => handleNext(false)} className="flex-1 py-4 bg-red-100 text-red-600 rounded-xl font-bold">Difícil</button>
            <button onClick={() => handleNext(true)} className="flex-1 py-4 bg-green-100 text-green-600 rounded-xl font-bold">Fácil</button>
       </div>
    </div>
  );
};

const Layout: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<DashboardWithData />} />
                    <Route path="/study/:id" element={<StudyWithData />} />
                    <Route path="/flashcards" element={<FlashcardsWithData />} />
                </Routes>
            </div>
            <nav className="fixed bottom-0 w-full bg-white border-t pb-safe flex justify-around items-center h-16 shadow-lg z-40">
                <button onClick={() => navigate('/')} className="flex flex-col items-center text-gray-500"><Icons.Book /><span className="text-[10px]">Temario</span></button>
                <button onClick={() => navigate('/flashcards')} className="flex flex-col items-center text-gray-500"><Icons.Brain /><span className="text-[10px]">Repaso</span></button>
            </nav>
        </>
    );
};

const DashboardWithData = () => { const { progress } = useProgress(); return <Dashboard progress={progress} />; };
const StudyWithData = () => { const { progress, updateTopicStatus, addTime } = useProgress(); return <StudyMode progress={progress} updateStatus={updateTopicStatus} addTime={addTime} />; };
const FlashcardsWithData = () => { const { progress, incrementReview } = useProgress(); return <Flashcards progress={progress} incrementReview={incrementReview} />; };

export default function App() { return <HashRouter><Layout /></HashRouter>; }
