import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ProductSearch from './pages/ProductSearch';
import TrendAnalysis from './pages/TrendAnalysis';
import KeywordResearch from './pages/KeywordResearch';
import CompetitorAnalysis from './pages/CompetitorAnalysis';
import SavedItems from './pages/SavedItems';
import Settings from './pages/Settings';
import Login from './pages/Login';
import { useAuth } from './hooks/useAuth';

function App() {
  const { session } = useAuth();

  if (!session) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-search" element={<ProductSearch />} />
          <Route path="/trend-analysis" element={<TrendAnalysis />} />
          <Route path="/keyword-research" element={<KeywordResearch />} />
          <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/saved-items" element={<SavedItems />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;