import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const companyName = i18n.language === 'zh' 
    ? '工商业储能系统解决方案提供商' 
    : 'Industrial Energy Storage Solutions Provider';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t('footer.phone')}: 13959261115</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t('footer.email')}: linzaneee@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-gray-400 text-sm">{t('footer.desc')}</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright', { year: 2026, company: companyName })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
