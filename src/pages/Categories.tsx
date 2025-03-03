
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, books } from '@/lib/data';
import CategoryHeader from '@/components/categories/CategoryHeader';
import CategoryTabs from '@/components/categories/CategoryTabs';
import CategoryList from '@/components/categories/CategoryList';
import ExploreMoreSection from '@/components/categories/ExploreMoreSection';
import RefTaggerLoader from '@/components/categories/RefTaggerLoader';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <CategoryHeader />
      
      <section className="py-8 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <CategoryTabs books={books} />
          
          <CategoryList categories={categories} />
          
          <ExploreMoreSection />
        </div>
      </section>
      
      <Footer />
      
      {/* Carrega o RefTagger */}
      <RefTaggerLoader />
    </div>
  );
};

export default Categories;
