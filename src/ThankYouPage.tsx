import { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackLead, waitForPixelLoad } from './utils/facebookPixel';

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(1);
  const whatsappUrl = "https://wa.me/77058315777?text=Здравствуйте%21%20Я%20оставил%20заявку%20на%20сайте%20CoFounder%20AI";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = whatsappUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappUrl]);

  useEffect(() => {
    // Track Facebook Pixel conversion event on thank you page
    const trackThankYouPageLead = async () => {
      console.log('[Thank You Page] Waiting for Facebook Pixel to load...');
      const pixelLoaded = await waitForPixelLoad();

      if (pixelLoaded) {
        console.log('[Thank You Page] Facebook Pixel loaded, tracking Lead event');
        trackLead({
          content_name: 'Thank You Page Visit',
          content_category: 'conversion',
          value: 1,
          currency: 'USD'
        });
      } else {
        console.error('[Thank You Page] Facebook Pixel failed to load within timeout');
      }
    };

    trackThankYouPageLead();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-pulse" style={{ top: '10vh' }}>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-xl"></div>
          </div>
          <div className="relative mt-8 w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
            Спасибо!
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <p className="text-xl text-blue-200 font-inter">
              Ваша заявка успешно отправлена
            </p>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">
                Что дальше?
              </h2>

              {/* WhatsApp Redirect Notice */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <p className="text-white font-semibold">
                    Переходим к нашему менеджеру
                  </p>
                </div>
                <p className="text-green-100 text-sm mb-3">
                  Через <span className="font-bold text-green-300">{countdown}</span> секунд вы будете автоматически перенаправлены в WhatsApp к нашему менеджеру для быстрой консультации
                </p>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4 text-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-left">
                    Наш менеджер проконсультирует вас <strong className="text-white">НЕМЕДЛЕННО</strong>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-left">
                    Мы проанализируем ваш бизнес и подготовим <strong className="text-white">персональную стратегию</strong>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-left">
                    Начнем внедрение AI-решений для <strong className="text-white">роста ваших продаж</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-200 text-sm">
                Проверьте почту и мессенджеры - мы можем написать вам там первыми
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <p className="text-blue-200">
            Пока ждете, можете изучить больше информации о CoFounder AI
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-lg border border-white/20 hover:border-white/40"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-300 text-sm">
            © 2025 CoFounder AI. Увеличиваем продажи с помощью искусственного интеллекта
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
