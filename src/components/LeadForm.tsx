import { useState } from 'react';
import { Send, User, Phone, Building, MessageCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackLead } from '../utils/facebookPixel';
import { submitToGoogleSheets } from '../services/googleSheets';

interface FormData {
  name: string;
  phone: string;
  company: string;
  message: string;
}

interface LeadFormProps {
  className?: string;
}

const LeadForm = ({ className = '' }: LeadFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    company: '',
    message: ''
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
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Введите название компании';
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

      // Redirect to thank you page
      navigate('/thank-you');
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
        <p className="text-blue-200 text-lg">
          Оставьте заявку и наш менеджер свяжется с вами в течение 30 минут
        </p>
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

        {/* Company Field */}
        <div>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Название компании *"
              className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                errors.company ? 'border-red-400' : 'border-white/20'
              } rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
            />
          </div>
          {errors.company && (
            <p className="mt-2 text-red-400 text-sm">{errors.company}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 text-blue-300 w-5 h-5" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Расскажите о вашем бизнесе (необязательно)"
              rows={4}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
            />
          </div>
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
