import { useState } from 'react';
import { Send, User, Phone, Loader2 } from 'lucide-react';
import { trackLead } from '../utils/facebookPixel';
import { submitToGoogleSheets } from '../services/googleSheets';

interface FormData {
  name: string;
  phone: string;
}

interface LeadFormProps {
  className?: string;
}

const LeadForm = ({ className = '' }: LeadFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'landing_page'
      });

      // Track Facebook Pixel Lead event
      trackLead({
        content_name: 'Lead Form Submission',
        content_category: 'lead_generation',
        value: 1,
        currency: 'USD'
      });

      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/77058315777?text=Здравствуйте%21%20Я%20оставил%20заявку%20на%20сайте%20CoFounder%20AI.%20Меня%20зовут%20${encodeURIComponent(formData.name)}%2C%20мой%20телефон%20${encodeURIComponent(formData.phone)}`;
      window.location.href = whatsappUrl;
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4 font-montserrat">
          Получите консультацию бесплатно
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ваше имя *"
              className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                errors.name ? 'border-red-400' : 'border-white/20'
              } rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Номер телефона *"
              className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                errors.phone ? 'border-red-400' : 'border-white/20'
              } rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Отправляем...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Получить консультацию
            </>
          )}
        </button>

        {/* WhatsApp Redirect Notice */}
        <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-3 mb-4">
          <p className="text-xs text-green-200 text-center">
            ⚠️ После отправки формы вы будете перенаправлены в WhatsApp для связи с нашим менеджером
          </p>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-blue-300 text-center">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <span className="underline cursor-pointer hover:text-white">
            политикой конфиденциальности
          </span>
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
