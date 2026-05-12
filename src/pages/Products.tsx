import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Thermometer, Battery, Zap, Grid3X3, Container, Cpu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = t('titles.products');
  }, [t, i18n.language]);

  const categories = [
    { id: 'all', name: t('products.all'), icon: Zap },
    { id: 'liquid-cooled', name: t('products.categoriesList.liquidCooled'), icon: Thermometer },
    { id: 'liquid-battery', name: t('products.categoriesList.liquidBattery'), icon: Battery },
    { id: 'air-cooled', name: t('products.categoriesList.airCooled'), icon: Zap },
    { id: 'air-solar', name: t('products.categoriesList.airSolar'), icon: Grid3X3 },
    { id: 'container', name: t('products.categoriesList.container'), icon: Container },
    { id: 'pcs', name: t('products.categoriesList.pcs'), icon: Cpu },
    { id: 'pack', name: t('products.categoriesList.pack'), icon: Battery },
    { id: 'bms', name: t('products.categoriesList.bms'), icon: Settings },
    { id: 'pcs-module', name: t('products.categoriesList.pcsModule'), icon: Zap },
    { id: 'ems', name: t('products.categoriesList.ems'), icon: Settings },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getProductName = (product: typeof products[0]) => {
    return i18n.language === 'en' ? product.nameEn : product.name;
  };

  const getProductDesc = (product: typeof products[0]) => {
    return i18n.language === 'en' ? product.descriptionEn : product.description;
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('products.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            {t('products.subtitle')}
          </motion.p>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('products.categories')}</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                        activeCategory === cat.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-white' : 'text-blue-600'}`} />
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6">
                <span className="text-gray-500 text-sm">
                  {t('products.count', { count: filteredProducts.length })}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={getProductName(product)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-3">
                          {product.model}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {getProductName(product)}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {getProductDesc(product)}
                        </p>
                        <div className="flex items-center text-blue-600 font-medium text-sm">
                          {t('products.learnMore')}
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
