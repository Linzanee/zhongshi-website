import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const isEn = i18n.language === 'en';

  useEffect(() => {
    document.title = t('titles.productDetail');
  }, [t, i18n.language]);

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          {t('productDetail.back')}
        </Link>
      </div>
    );
  }

  const displayName = isEn ? product.nameEn : product.name;
  const displayDesc = isEn ? product.fullDescriptionEn : product.fullDescription;
  const displayFeatures = isEn ? product.featuresEn : product.features;
  const displaySpecs = isEn ? product.specsEn : product.specs;

  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('productDetail.back')}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              {product.model}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {displayName}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {displayDesc}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('productDetail.features')}</h3>
              <ul className="space-y-3">
                {displayFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('productDetail.specs')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(displaySpecs).map(([key, value]) => (
                  <div key={key} className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">{key}</div>
                    <div className="text-sm font-medium text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('productDetail.cta.title')}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('productDetail.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-blue-200">{t('productDetail.cta.phone')}</div>
                <div className="text-lg font-semibold">13959261115</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-blue-200">{t('productDetail.cta.email')}</div>
                <div className="text-lg font-semibold">linzaneee@gmail.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
