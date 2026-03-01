/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, ReactNode } from 'react';
import { 
  Sparkles, 
  Scroll, 
  Feather, 
  Wand2, 
  Users, 
  HelpCircle, 
  Calendar, 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  Gem, 
  Palette, 
  Rocket,
  X,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("7287 05694");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-magic-gold/30 selection:text-ink-900">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center bg-parchment-100/80 backdrop-blur-sm border-b border-ink-900/10">
        <div className="flex items-center gap-3">
          <Wand2 className="w-5 h-5 text-ink-800" />
          <span className="font-display font-bold text-lg tracking-widest text-ink-900">2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6 text-magic-gold/80">
            <div className="h-[1px] w-12 bg-current"></div>
            <span className="font-display tracking-[0.3em] text-sm font-semibold">2026</span>
            <div className="h-[1px] w-12 bg-current"></div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink-900 mb-8 leading-tight magic-glow mt-8">
            AHHAO WORK SHOP
          </h1>

          <div className="mt-12">
            <ScrollDownIndicator />
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 space-y-32 pb-32">
        
        {/* Day Schedule Section */}
        <section id="curriculum">
          <SectionHeader title="三天课程详解" icon={<Scroll className="w-6 h-6" />} />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <DayCard 
              day="第一天" 
              bgText="01"
              title="从零上手 AI 设计" 
              desc="学习 MJ 核心功能 + 高效提示词框架，练习精准拆解客户需求、掌握生图技巧，完成草图优化、建立属于自己的个人风格体系。"
            />
            <DayCard 
              day="第二天" 
              bgText="02"
              title="从单张效果图进阶到完整方案体系" 
              desc="学会一键高效输出多区域提案、AI 修图与细节调整、素材生成、Logo设计、AI 3D 模型生成，把散落素材串联成一套完整的视觉交付方案。"
            />
            <DayCard 
              day="第三天" 
              bgText="03"
              title="掌握视频动态设计技巧" 
              desc="理解 AI 提示词背后的底层逻辑。搭建属于自己的 AI 智能体矩阵——个人设计师、文案助手、运营助手，搭建专属婚礼设计 AI 网页应用，让工具更便利。"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="relative">
          <div className="absolute inset-0 bg-ink-900/5 -skew-y-1 transform rounded-3xl -z-10 mx-4 md:mx-0"></div>
          <div className="py-16 px-4 md:px-12">
            <SectionHeader title="课程目标" icon={<Sparkles className="w-6 h-6" />} />
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mt-12">
              <BenefitItem text="拿到客户需求，快速产出高质量初稿" />
              <BenefitItem text="独立承接从需求沟通 → 方案设计 → 视觉交付的完整项目" />
              <BenefitItem text="建立可持续迭代的个人 AI 设计系统，越用越顺手" />
              <BenefitItem text="30天在线答疑 — 课程结束后遇到问题随时问，不怕一个人卡住" />
              <BenefitItem text="学员专属社群 — 和同行设计师交流案例、分享经验，持续成长" />
              <BenefitItem text="可复用模板 & 资源库 — 课程用到的提示词模板、精选资源网站，学完直接带走用" />
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section id="audience">
          <SectionHeader title="课程适合谁" icon={<Users className="w-6 h-6" />} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <AudienceCard 
              icon={<Palette className="w-8 h-8" />}
              role="设计师"
              desc="用AI突破瓶颈提升竞争力"
            />
            <AudienceCard 
              icon={<Gem className="w-8 h-8" />}
              role="婚礼策划师"
              desc="快速生成多套方案，客户满意度翻倍"
            />
            <AudienceCard 
              icon={<Rocket className="w-8 h-8" />}
              role="创业者/兼职者"
              desc="打造设计副业"
            />
            <AudienceCard 
              icon={<Sparkles className="w-8 h-8" />}
              role="AI感兴趣的人"
              desc="零基础也能学，实战项目掌握应用"
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto">
          <SectionHeader title="常见疑问解答" icon={<HelpCircle className="w-6 h-6" />} />
          
          <div className="mt-12 space-y-6">
            <FAQItem 
              q="我完全没有设计基础，能学会吗？" 
              a="可以。课程从零开始讲，遇到不明白的现场解决。" 
            />
            <FAQItem 
              q="我没有 MJ 会员 / 不会翻墙，怎么办？" 
              a="开课前一周会发送设备准备清单和详细教程，手把手指引你完成环境配置，遇到问题可以提前联系我。" 
            />
            <FAQItem 
              q="学完之后如果忘了或者遇到问题怎么办？" 
              a="课后享有30天答疑权限，随时提问。同时你会进入学员社群，有同行可以互相帮助。" 
            />
            <FAQItem 
              q="我是做婚礼以外设计领域的，也适合吗？" 
              a="完全适合。课程教的是 AI 设计思维和工作流，婚礼是案例载体，方法本身可以迁移到品牌设计、活动策划、软装等各类视觉设计场景。" 
            />
          </div>
        </section>

        {/* Registration Ticket */}
        <section id="registration" className="flex justify-center">
          <div className="w-full max-w-4xl paper-card border-2 border-ink-900/20 p-2 md:p-4 rounded-xl relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ink-900/40 rounded-tl-lg m-2"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-ink-900/40 rounded-tr-lg m-2"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-ink-900/40 rounded-bl-lg m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ink-900/40 rounded-br-lg m-2"></div>

            <div className="bg-parchment-50/80 border border-ink-900/10 rounded-lg p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center md:items-start relative z-10">
              
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="font-display text-3xl font-bold text-ink-900 mb-2">报名信息</h3>
                  <p className="font-script text-2xl text-ink-700">小班精细化教学，全班限招 10 人</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-magic-red" />
                    <span className="font-display font-semibold text-lg">2026 年 4 月 14 日至 16 日（三天）</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-magic-red" />
                    <span className="font-body text-lg">广东惠州·西湖周边（开课前两周群内通知详细地址）</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-magic-red" />
                    <div className="flex flex-col">
                      <span className="font-body text-ink-500 line-through text-sm">原价 ¥4,299 / 人</span>
                      <span className="font-display font-bold text-2xl text-magic-red">早鸟价 ¥3,699 / 人</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-900/10">
                  <h4 className="font-bold text-ink-900 mb-2">报名须知</h4>
                  <p className="font-body text-sm text-ink-600 leading-relaxed">
                    * 为保证授课质量，本次课程限定 10 人，需支付全款锁定名额。<br/>
                    * 如因个人原因无法参加，支持转让名额给他人，或申请延期至下一期。<br/>
                    * 退款申请须在开课前14日提前沟通，逾期未沟通的缺课情况报名费不予退还。
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-ink-900/10 pt-8 md:pt-0 md:pl-12">
                <div className="w-32 h-32 border-4 border-double border-ink-900/20 rounded-full flex items-center justify-center mb-6 bg-parchment-200">
                  <Feather className="w-12 h-12 text-ink-800" />
                </div>
                <button 
                  onClick={() => setShowQRCode(true)}
                  className="w-full md:w-auto bg-ink-900 text-parchment-100 font-display font-bold tracking-widest py-4 px-8 rounded hover:bg-magic-red transition-colors duration-300 shadow-lg"
                >
                  立即报名
                </button>
                <p className="mt-4 text-xs font-body text-center text-ink-500 max-w-[200px]">
                  报名后开课前10天进入备课群，同步上课地点、教材资源、课前准备清单等全部安排。
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-8 border-t border-ink-900/10 pt-12">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-ink-600 font-display text-sm">
            <span>食宿、交通费用需自理</span>
            <span className="hidden md:inline">•</span>
            <span>设备准备：个人电脑、VPN、MJ 会员、谷歌账号</span>
            <span className="hidden md:inline">•</span>
            <span>开课前一周发放部分预习资料</span>
          </div>
          <p className="font-body text-ink-400 italic text-sm">
            © 2026
          </p>
        </footer>

      </main>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {showQRCode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink-900/80 backdrop-blur-sm" onClick={() => setShowQRCode(false)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-parchment-100 p-8 rounded-xl max-w-sm w-full relative border-2 border-magic-gold shadow-2xl paper-card"
            >
              <button 
                onClick={() => setShowQRCode(false)}
                className="absolute top-4 right-4 text-ink-500 hover:text-magic-red transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-6">报名联系方式</h3>
                
                <div className="bg-white p-6 rounded-lg border border-ink-900/10 mb-6 flex flex-col items-center gap-4">
                  <span className="font-display text-3xl font-bold text-ink-900 tracking-wider">7287 05694</span>
                  
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-ink-900 text-parchment-100 rounded hover:bg-magic-gold transition-colors font-body text-sm"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "已复制" : "点击复制"}
                  </button>
                </div>
                
                <p className="font-body text-ink-600 text-sm">
                  请复制上方号码添加好友或转账报名
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Subcomponents ---

function SectionHeader({ title, icon }: { title: string, icon: ReactNode }) {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4 text-magic-gold">
        {icon}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-2">{title}</h2>
      <div className="h-1 w-24 bg-magic-gold/30 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

function DayCard({ day, title, desc, bgText }: { day: string, title: string, desc: string, bgText: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="paper-card p-8 rounded-lg relative overflow-hidden group border border-ink-900/5"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="font-display text-6xl font-bold text-ink-900">{bgText}</span>
      </div>
      <h3 className="font-display text-sm font-bold tracking-widest text-magic-red mb-2 uppercase">{day}</h3>
      <h4 className="font-display text-2xl font-bold text-ink-900 mb-4">{title}</h4>
      <p className="font-body text-lg text-ink-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <CheckCircle2 className="w-5 h-5 text-magic-gold shrink-0 mt-1" />
      <p className="font-body text-lg text-ink-800">{text}</p>
    </div>
  );
}

function AudienceCard({ icon, role, desc }: { icon: ReactNode, role: string, desc: string }) {
  return (
    <div className="text-center p-6 border border-dashed border-ink-900/20 rounded-xl hover:bg-parchment-50 transition-colors">
      <div className="inline-flex p-4 bg-ink-900/5 rounded-full mb-4 text-ink-800">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-ink-900 mb-2">{role}</h3>
      <p className="font-body text-ink-600">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="border-b border-ink-900/10 pb-6 last:border-0">
      <h4 className="font-display text-lg font-bold text-ink-900 mb-2 flex gap-2">
        <span className="text-magic-red">Q：</span> {q}
      </h4>
      <p className="font-body text-lg text-ink-700 pl-6 border-l-2 border-magic-gold/30">
        <span className="text-magic-gold font-bold mr-2">A：</span>{a}
      </p>
    </div>
  );
}

function ScrollDownIndicator() {
  return (
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="flex flex-col items-center gap-2 opacity-60"
    >
      <div className="w-[1px] h-12 bg-ink-900"></div>
    </motion.div>
  );
}
