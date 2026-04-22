import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import { detectLocale, getLocaleFromPath, stripLocale } from './i18n/useLocale';

function RootRedirect() {
  const { pathname } = useLocation();
  const explicit = getLocaleFromPath(pathname);
  if (explicit) return null;
  const locale = detectLocale();
  const rest = stripLocale(pathname);
  const target = `/${locale}${rest === '/' ? '' : rest}`;
  return <Navigate to={target} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<Home />} />
        <Route path="/en/creators" element={<Navigate to="/en" replace />} />
        <Route path="/en/enterprise" element={<Enterprise />} />
        <Route path="/ja" element={<Home />} />
        <Route path="/ja/creators" element={<Navigate to="/ja" replace />} />
        <Route path="/ja/enterprise" element={<Enterprise />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
