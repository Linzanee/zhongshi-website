import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('titles.contact');
  }, [t, i18n.language]);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.name')}</h2>
            <p className="text-gray-600">{t('contact.role')}</p>
          </div>

          <div className="space-y-6">
            <a
              href="tel:13959261115"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-sm text-gray-500 mb-1">{t('contact.phoneLabel')}</div>
                <div className="text-xl font-semibold text-gray-900">13959261115</div>
              </div>
            </a>

            <a
              href="mailto:linzaneee@gmail.com"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-sm text-gray-500 mb-1">{t('contact.emailLabel')}</div>
                <div className="text-xl font-semibold text-gray-900">linzaneee@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">{t('contact.description')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
