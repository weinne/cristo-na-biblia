
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, books } from '@/lib/data';
import CategoryHeader from '@/components/categories/CategoryHeader';
import CategoryTabs from '@/components/categories/CategoryTabs';
import CategoryList from '@/components/categories/CategoryList';
import ExploreMoreSection from '@/components/categories/ExploreMoreSection';
import RefTaggerLoader from '@/components/categories/RefTaggerLoader';
import { useLanguage } from '@/contexts/LanguageContext';

const Categories = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map categories to include translated names and descriptions
  const translatedCategories = categories.map(category => ({
    ...category,
    displayName: t(`category-${category.id}`),
    description: t(`category-${category.id}-desc`)
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <CategoryHeader />
      
      <section className="py-8 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <CategoryTabs books={books} />
          
          <CategoryList categories={translatedCategories} />
          
          <ExploreMoreSection />
        </div>
      </section>
      
      <Footer />
      
      {/* Load RefTagger */}
      <RefTaggerLoader />
    </div>
  );
};

export default Categories;
