import { LucideIcon, Leaf, Flame, Mountain, Droplets, Wind } from 'lucide-react';

export type ElementType = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Option {
  id: ElementType;
  text: string;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

export interface ConstitutionResult {
  title: string;
  element: string;
  organ: string;
  characteristics: string;
  direction: string;
  incense: string[];
  color: string;
  icon: LucideIcon;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: '第一部分：身形气色',
    text: '你的体型与肤色更接近：',
    options: [
      { id: 'A', text: '修长匀称，面白肤薄，易苍白' },
      { id: 'B', text: '结实有力，面红目明，气色红润' },
      { id: 'C', text: '适中偏壮，面黄肤柔，易发胖' },
      { id: 'D', text: '偏瘦/偏胖，面黑肤干，肤质粗糙' },
      { id: 'E', text: '身形方正，面白/青白，皮肤干紧' },
    ],
  },
  {
    id: 2,
    category: '第一部分：身形气色',
    text: '指甲与毛发状态：',
    options: [
      { id: 'A', text: '指甲易断，毛发干枯细软易掉' },
      { id: 'B', text: '指甲红润，头发浓密黑亮' },
      { id: 'C', text: '指甲偏软，头发偏油，头屑多' },
      { id: 'D', text: '指甲厚脆，头发稀少偏黄' },
      { id: 'E', text: '指甲坚硬，毛发偏硬，干枯少油' },
    ],
  },
  {
    id: 3,
    category: '第一部分：身形气色',
    text: '晨起第一感觉：',
    options: [
      { id: 'A', text: '脸色发青，没睡够，精神差' },
      { id: 'B', text: '脸热发红，口干舌燥，头胀' },
      { id: 'C', text: '脸黄沉重，头昏脑涨，口中发黏' },
      { id: 'D', text: '脸色暗沉，腰酸背痛，浑身无力' },
      { id: 'E', text: '面色偏白，咽喉干痒，鼻腔干燥' },
    ],
  },
  {
    id: 4,
    category: '第二部分：性格情志',
    text: '面对压力时：',
    options: [
      { id: 'A', text: '多思多虑，易焦虑、悲伤' },
      { id: 'B', text: '急躁易怒，控制不住情绪' },
      { id: 'C', text: '委屈压抑，不想说话，内耗重' },
      { id: 'D', text: '沉默寡言，疏离冷淡' },
      { id: 'E', text: '敏感纠结，易悲伤，追求完美' },
    ],
  },
  {
    id: 5,
    category: '第二部分：性格情志',
    text: '性格底色：',
    options: [
      { id: 'A', text: '细腻敏感，共情力强' },
      { id: 'B', text: '直率热情，好胜心强' },
      { id: 'C', text: '稳重踏实，随遇而安' },
      { id: 'D', text: '冷静深沉，谨慎独处' },
      { id: 'E', text: '严谨自律，爱干净，讲原则' },
    ],
  },
  {
    id: 6,
    category: '第二部分：性格情志',
    text: '睡眠情况：',
    options: [
      { id: 'A', text: '入睡难，多梦易醒，易受惊' },
      { id: 'B', text: '睡觉躁动，梦多纷乱' },
      { id: 'C', text: '嗜睡贪睡，醒后身体沉重' },
      { id: 'D', text: '失眠严重，醒后更疲惫' },
      { id: 'E', text: '睡眠浅，易惊醒，夜间咽干' },
    ],
  },
  {
    id: 7,
    category: '第三部分：饮食偏好',
    text: '口味偏好：',
    options: [
      { id: 'A', text: '喜酸' },
      { id: 'B', text: '喜辣' },
      { id: 'C', text: '喜甜、口感软糯清淡' },
      { id: 'D', text: '喜咸、重口味' },
      { id: 'E', text: '喜辛、清爽，少油少甜' },
    ],
  },
  {
    id: 8,
    category: '第三部分：饮食偏好',
    text: '对冷热敏感度：',
    options: [
      { id: 'A', text: '怕冷，手脚常年冰凉' },
      { id: 'B', text: '怕热，手脚偏热' },
      { id: 'C', text: '既怕冷又怕热，湿气重时难受' },
      { id: 'D', text: '耐热不耐寒，受凉难恢复' },
      { id: 'E', text: '怕风怕冷，换季鼻咽不适' },
    ],
  },
  {
    id: 9,
    category: '第四部分：身体体感',
    text: '大小便特点：',
    options: [
      { id: 'A', text: '小便清长，大便易干或黏' },
      { id: 'B', text: '小便深黄，大便干结味重' },
      { id: 'C', text: '大便黏马桶，不易冲净' },
      { id: 'D', text: '小便短少，大便易稀溏' },
      { id: 'E', text: '小便偏清，大便偏干，易便秘' },
    ],
  },
  {
    id: 10,
    category: '第四部分：身体体感',
    text: '常见不适：',
    options: [
      { id: 'A', text: '肩颈僵硬，偏头痛，关节酸痛' },
      { id: 'B', text: '心慌胸闷，失眠多梦' },
      { id: 'C', text: '腹胀消化不良，身体浮肿' },
      { id: 'D', text: '腰膝酸软，耳鸣脱发，畏寒' },
      { id: 'E', text: '咽干鼻塞，皮肤干痒，胸闷气短' },
    ],
  },
];

export const RESULTS: Record<ElementType, ConstitutionResult> = {
  A: {
    title: '木型体质',
    element: '木',
    organ: '肝',
    characteristics: '肝郁、易焦虑、肩颈紧、睡眠差',
    direction: '疏肝解郁、柔肝养血',
    incense: ['檀香', '绿檀', '玫瑰', '薄荷', '陈皮'],
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    icon: Leaf,
  },
  B: {
    title: '火型体质',
    element: '火',
    organ: '心',
    characteristics: '心火旺、急躁、面红、心慌、失眠',
    direction: '清心降火、安神助眠',
    incense: ['沉香', '柏木', '薰衣草', '琥珀'],
    color: 'text-orange-600 bg-orange-50 border-orange-200',
    icon: Flame,
  },
  C: {
    title: '土型体质',
    element: '土',
    organ: '脾',
    characteristics: '湿气重、大便黏、身体沉、易困',
    direction: '健脾祛湿、温中理气',
    incense: ['藿香', '苍术', '甘松', '零陵香'],
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    icon: Mountain,
  },
  D: {
    title: '水型体质',
    element: '水',
    organ: '肾',
    characteristics: '腰膝酸、畏寒、耳鸣、易疲劳',
    direction: '温肾固本、滋肾纳气',
    incense: ['降真香', '艾草', '肉桂', '丁香'],
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    icon: Droplets,
  },
  E: {
    title: '金型体质',
    element: '金',
    organ: '肺',
    characteristics: '肺燥、咽干鼻塞、皮肤干、易悲伤、敏感',
    direction: '润肺生津、宣肺理气',
    incense: ['百合', '桔梗', '白芷', '檀香', '杏仁'],
    color: 'text-slate-600 bg-slate-50 border-slate-200',
    icon: Wind,
  },
};
