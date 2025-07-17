import { useState, useEffect } from 'react';
import { Check, Users, TrendingUp, Zap, Target, Bot, Rocket } from 'lucide-react';
import box from '@/assets/images/box.png';
import LeadForm from './components/LeadForm';
import { initGoogleAPI } from './services/googleSheets';

// Load Google Fonts
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null;
};

const CoFounderAI = () => {
  const [, setIsVisible] = useState<Record<string, boolean>>({});

  // Initialize Google Sheets API
  useEffect(() => {
    initGoogleAPI().catch(console.error);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const stats = [
    { number: "2x", label: "Рост продаж за 2 месяца", icon: TrendingUp },
    { number: "50%", label: "Конверсия ИИ-продажника", icon: Target },
    { number: "100k", label: "Клиентов одновременно", icon: Users },
    { number: "24/7", label: "Работа без перерывов", icon: Zap }
  ];

  const features = [
    {
      icon: Target,
      title: "ИИ-таргетолог",
      subtitle: "Трафик, который сразу даёт результат",
      description: "ИИ сам анализирует конкурентов, пишет сценарии и запускает рекламу, которая точно заходит.",
      benefits: [
        "Заявки от $0.5 до $1 без агентств",
        "Больше не нужно платить по ₸300–500k маркетологам",
        "Целевые, горячие клиенты приходят сами"
      ]
    },
    {
      icon: Bot,
      title: "ИИ-продажник",
      subtitle: "Стабильные продажи 24/7",
      description: "Полностью заменяет отдел продаж и продает с 50% конверсией. Не болеет, не увольняется, не сливает заявки.",
      benefits: [
        "Экономия от ₸1 500 000 в месяц на ФОТ",
        "Стабильная, прогнозируемая конверсия",
        "Все переписки и отчёты в одной системе"
      ]
    },
    {
      icon: Rocket,
      title: "Масштаб без стресса",
      subtitle: "Продавайте в 5 раз быстрее",
      description: "Обслуживайте до 100 000 клиентов одновременно. То, что раньше продавалось за месяц, теперь уходит за 7 дней.",
      benefits: [
        "Не нужно расширять штат",
        "Никаких просадок в обработке",
        "Масштабируйтесь смело"
      ]
    }
  ];

  const problems = [
    {
      emoji: "💸",
      title: "Лиды есть, но они дорогие и не приносят денег",
      description: "Вы вливаете бюджет в рекламу, заявки идут — но часто некачественные, слабо конвертятся. Отдел продаж не справляется: теряет, сливает, затягивает."
    },
    {
      emoji: "😤",
      title: "Платите отделу продаж а он приносит стресс и текучку",
      description: "Менеджеры увольняются, новички сливают заявки. Вы тратите кучу денег, а получаете головную боль и мизерные результаты."
    },
    {
      emoji: "📉",
      title: "Боитесь масштабироваться, потому что не вывозите",
      description: "Хотите расти, но понимаете: команда не справится, нанимать новых — долго, дорого и снова хаос и просадка качества."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <FontLoader />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-montserrat">CoFounder AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#section-problems" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Проблемы</a>
            <a href="#section-solution" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Решение</a>
          </nav>
          <a href="#section-form" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Консультация
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-visible position-relative z-10">
        {/* Background decorative elements */}
        <div className="absolute w-1/3 top-2/5 right-0 opacity-70">
          <div className="text-8xl font-bold text-green-400 transform rotate-45">
            <img
                id="box"
                src={box}
                alt="AI box"
            />
          </div>
        </div>
        <div className="absolute w-1/3 left-0 opacity-100" style={{ bottom: '-50px', left: '-10%' }}>
          <div className="text-8xl font-bold text-green-400 transform rotate-45">
            <img
                id="box2"
                src={box}
                alt="AI box"
            />
          </div>
        </div>

        {/* AI Brain Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 z-0">
          <div className="w-96 h-96 bg-gradient-to-br from-purple-400 via-blue-500 to-pink-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-20 right-20 opacity-30 z-1">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-blue-500 to-pink-400 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center min-h-[30vh]">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-montserrat">
                <span className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-montserrat">
                  Увеличить продажи
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  в 2 раза за 2 месяца
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter font-medium">
                Мы берем полностью отделы продаж и маркетинга на себя
              </p>


              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href="#section-form" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 font-montserrat">
                  Хочу результата
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Problems Section */}
      <section id="section-problems" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-9xl font-bold text-white transform rotate-12">КОМУ ПОДХОДИТ?</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 font-montserrat text-white">
              Устали? Хотите больше денег<br />но по факту получаете это...
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-4">{problem.emoji}</div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-white">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed font-inter">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#section-form" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors font-montserrat">
              Хочу результата
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="section-solution" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="text-6xl font-bold text-green-400 transform rotate-12">350.000.000 ₸</div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <div className="text-4xl font-bold text-green-400 transform -rotate-12">на запусках за 1 месяц</div>
        </div>

        {/* AI Brain Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 z-0">
          <div className="w-[600px] h-[600px] bg-gradient-to-br from-purple-400 via-blue-500 to-pink-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-20 right-1/4 opacity-10 z-1">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-400 via-blue-500 to-pink-400 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 z-1">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                {/* Smaller version of the holographic brain */}
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='smallBrain' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='25%25' stop-color='%236366f1'/%3E%3Cstop offset='50%25' stop-color='%233b82f6'/%3E%3Cstop offset='75%25' stop-color='%23ec4899'/%3E%3Cstop offset='100%25' stop-color='%23a855f7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M200 50c-30 0-55 20-65 45-15-10-35-15-55-10-25 8-45 30-50 60-3 20 2 40 15 55-10 15-15 35-10 55 8 25 30 45 60 50 20 3 40-2 55-15 15 10 35 15 55 10 25-8 45-30 50-60 3-20-2-40-15-55 10-15 15-35 10-55-8-25-30-45-60-50z' fill='url(%23smallBrain)' opacity='0.9'/%3E%3C/svg%3E"
                    alt="AI Brain"
                    className="w-full h-full object-contain animate-pulse"
                  />
                </div>
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-1">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-black mb-4 text-gray-900 font-montserrat">
              CoFounder AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter font-medium">
              Экосистема ИИ-агентов, которая заменит ваш маркетинг и продажи под ключ в товарке
            </p>
            <p className="text-lg text-gray-500 mt-4 font-inter">
              Мы создали систему, которая помогает бизнесам <span className="font-semibold text-gray-900">зарабатывать больше, тратя меньше</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                {/* Card background AI effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"></div>

                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-3 mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-montserrat">{feature.title}</h3>
                    <p className="text-gray-600 font-inter">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 font-inter leading-relaxed relative z-10">{feature.description}</p>
                <ul className="space-y-3 relative z-10">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-inter">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 py-16 bg-gray-900 rounded-2xl">
            <div className="max-w-6xl mx-auto px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CoFounder AI — это:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔁", title: "Полная автоматизация", desc: "Воронки от клиента до продажи" },
              { icon: "💰", title: "Рост прибыли", desc: "Без роста расходов" },
              { icon: "🔒", title: "Контроль и отчётность", desc: "Без «человеческого фактора»" },
              { icon: "⚡", title: "Система на автопилоте", desc: "Зарабатывает для вас" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden" id="section-form">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 text-6xl font-bold transform rotate-12 text-white">СИСТЕМА БОЛЬШОГО ЗАПУСКА</div>
          <div className="absolute bottom-20 left-20 text-4xl font-bold transform -rotate-12 text-blue-300">РЕЗУЛЬТАТ ГАРАНТИРОВАН</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 font-montserrat">
              Готовы масштабировать бизнес<br />
              в 5 раз быстрее и тратить<br />
              в 2 раза меньше?
            </h2>
            <p className="text-xl text-blue-200 opacity-90 font-inter font-medium max-w-3xl mx-auto">
              Заполните форму ниже и вы получите БЕСПЛАТНУЮ консультацию в маркетинге и продажах от наших экспертов.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CoFounder AI</span>
              </div>
              <p className="text-gray-400">
                Экосистема ИИ-агентов для автоматизации продаж и маркетинга
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">ИИ-таргетолог</a></li>
                <li><a href="#" className="hover:text-white">ИИ-продажник</a></li>
                <li><a href="#" className="hover:text-white">Автоматизация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Результаты</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Документация</a></li>
                <li><a href="#" className="hover:text-white">Помощь</a></li>
                <li><a href="#" className="hover:text-white">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CoFounder AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoFounderAI;
