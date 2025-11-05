import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Trang này chưa được tạo. Vui lòng quay lại trang chủ hoặc chọn một module.
          </p>
          <Link
            to="/"
            className="cursor-target inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
