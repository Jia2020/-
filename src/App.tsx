import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  RotateCcw, 
  Info, 
  AlertCircle, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';
import { QUESTIONS, RESULTS, ElementType, Option } from './constants';
import { Character } from './components/Character';

export default function App() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ElementType[]>([]);
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const handleStart = (selectedGender: 'male' | 'female') => {
    setGender(selectedGender);
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (optionId: ElementType) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('result');
    }
  };

  const handleReset = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setGender('male');
  };

  const counts = useMemo(() => {
    const res: Record<ElementType, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    answers.forEach(a => res[a]++);
    return res;
  }, [answers]);

  const sortedResults = useMemo(() => {
    return (Object.keys(counts) as ElementType[])
      .sort((a, b) => counts[b] - counts[a]);
  }, [counts]);

  const primaryElement = sortedResults[0];
  const secondaryElement = sortedResults[1];
  const isMixed = counts[primaryElement] - counts[secondaryElement] <= 1 && counts[secondaryElement] > 0;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:py-16">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <header className="text-center space-y-4">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-block p-3 bg-stone-100 rounded-full mb-2"
                >
                  <Sparkles className="w-6 h-6 text-stone-500" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-stone-900">
                  五行体质自测试卷
                </h1>
                <p className="text-stone-500 font-medium tracking-widest uppercase text-xs">
                  中医养生 · 个人体质辨识
                </p>
              </header>

              <div className="glass rounded-3xl p-8 space-y-8 shadow-sm">
                <section className="space-y-4">
                  <h2 className="text-xl font-serif font-semibold flex items-center gap-2">
                    <Info className="w-5 h-5 text-stone-400" />
                    测试说明
                  </h2>
                  <div className="space-y-3 text-stone-600 leading-relaxed">
                    <p>本试卷依据中医五行理论设计，共10题，系统将自动统计各选项出现的次数，为您辨识核心体质。</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif font-semibold text-center">请选择性别开始测试</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleStart('male')}
                      className="group space-y-3 focus:outline-none"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-stone-900 transition-all duration-300 shadow-sm">
                        <img 
                          src="male.jpeg" 
                          alt="男" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-serif font-bold text-stone-700 group-hover:text-stone-900 transition-colors">乾 (男)</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleStart('female')}
                      className="group space-y-3 focus:outline-none"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-stone-900 transition-all duration-300 shadow-sm">
                        <img 
                          src="female.jpeg" 
                          alt="女" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-serif font-bold text-stone-700 group-hover:text-stone-900 transition-colors">坤 (女)</span>
                      </div>
                    </button>
                  </div>
                </section>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter">
                    {QUESTIONS[currentQuestionIndex].category}
                  </span>
                  <h2 className="text-2xl font-serif font-bold">
                    问题 {currentQuestionIndex + 1} / {QUESTIONS.length}
                  </h2>
                </div>
                <div className="text-stone-300 font-serif text-4xl italic">
                  {String(currentQuestionIndex + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-stone-900 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-xl text-stone-800 leading-snug">
                  {QUESTIONS[currentQuestionIndex].text}
                </h3>

                <div className="grid gap-3">
                  {QUESTIONS[currentQuestionIndex].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className="group relative w-full text-left p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-900 hover:bg-stone-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
                          {option.id}
                        </span>
                        <span className="text-stone-700 group-hover:text-stone-900">
                          {option.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <header className="text-center space-y-2">
                <h2 className="text-stone-500 font-medium tracking-widest uppercase text-xs">
                  测试结果
                </h2>
                <h1 className="text-4xl font-serif font-bold text-stone-900">
                  您的体质辨识
                </h1>
              </header>

              <div className="space-y-6">
                {/* Main Result Card */}
                <div className={`rounded-3xl p-8 border-2 ${RESULTS[primaryElement].color} shadow-sm space-y-6`}>
                  {gender && (
                    <div className="flex justify-center mb-6">
                      <Character 
                        gender={gender} 
                        answers={answers} 
                        className="w-48 h-64"
                      />
                    </div>
                  )}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {React.createElement(RESULTS[primaryElement].icon, { className: "w-6 h-6" })}
                        <h3 className="text-3xl font-serif font-bold">
                          {RESULTS[primaryElement].title}
                          <span className="text-lg ml-2 opacity-70">({RESULTS[primaryElement].organ})</span>
                        </h3>
                      </div>
                      {isMixed && (
                        <p className="text-sm font-medium opacity-80">
                          兼夹体质：{RESULTS[secondaryElement].title}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-serif italic opacity-20">
                        {RESULTS[primaryElement].element}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-current/10">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest opacity-60">体质特点</h4>
                      <p className="text-stone-800 leading-relaxed">
                        {RESULTS[primaryElement].characteristics}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest opacity-60">调理方向</h4>
                      <p className="text-stone-800 leading-relaxed">
                        {RESULTS[primaryElement].direction}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest opacity-60">适合香材</h4>
                    <div className="flex flex-wrap gap-2">
                      {RESULTS[primaryElement].incense.map(item => (
                        <span key={item} className="px-3 py-1 rounded-full bg-white/50 border border-current/20 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="glass rounded-3xl p-8 space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400">计分统计</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {(Object.keys(counts) as ElementType[]).map(el => (
                      <div key={el} className="text-center space-y-2">
                        <div className="text-xs font-bold text-stone-400">{RESULTS[el].element}</div>
                        <div className={`h-20 w-full rounded-xl bg-stone-100 relative overflow-hidden`}>
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${(counts[el] / 10) * 100}%` }}
                            className={`absolute bottom-0 w-full ${RESULTS[el].color.split(' ')[1]}`}
                          />
                        </div>
                        <div className="text-sm font-serif font-bold">{counts[el]}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-400 text-center italic">
                    注：若某选项超过5个，则倾向非常明显；若两个选项数量接近，可能为兼夹体质。
                  </p>
                </div>

                {/* Tips & Safety */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-stone-50 rounded-2xl p-6 space-y-4 border border-stone-100">
                    <h4 className="font-serif font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      选香小贴士
                    </h4>
                    <ul className="text-sm text-stone-600 space-y-2">
                      <li className="flex gap-2">
                        <span className="text-stone-300 font-bold">1.</span>
                        <span>先辨体质：结合上述症状判断，或咨询中医师</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-stone-300 font-bold">2.</span>
                        <span>选平衡型，不极端：火旺选水+土；气虚选金+土；湿气重选土+木</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50/50 rounded-2xl p-6 space-y-4 border border-red-100">
                    <h4 className="font-serif font-bold flex items-center gap-2 text-red-900">
                      <AlertCircle className="w-4 h-4" />
                      安全第一
                    </h4>
                    <ul className="text-sm text-red-800/70 space-y-2">
                      <li>• 孕妇、过敏、慢性病、服药者请先咨询医生</li>
                      <li>• 选天然中药、无香精、正规手作的香珠</li>
                      <li>• 气味不适立即停戴</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-4 border-2 border-stone-200 text-stone-600 rounded-2xl font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  重新测试
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-16 text-center space-y-4">
        <div className="flex items-center justify-center gap-4 text-stone-300">
          <div className="h-px w-8 bg-current" />
          <Heart className="w-4 h-4 fill-current" />
          <div className="h-px w-8 bg-current" />
        </div>
        <p className="text-stone-400 text-xs tracking-widest uppercase">
          传承中医智慧 · 探索香道奥秘
        </p>
      </footer>
    </div>
  );
}
