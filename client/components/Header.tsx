import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/95 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="cursor-target flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-sm font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                MLN122
              </h1>
              <p className="text-xs text-muted-foreground">Political Economy</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/module/1"
              className="text-sm font-medium text-foreground/80 hover:text-foreground cursor-target transition-colors"
            >
              Phần 1
            </Link>
            <Link
              to="/module/2"
              className="text-sm font-medium text-foreground/80 hover:text-foreground cursor-target transition-colors"
            >
              Phần 2
            </Link>
            <Link
              to="/module/3"
              className="text-sm font-medium text-foreground/80 hover:text-foreground cursor-target transition-colors"
            >
              Phần 3
            </Link>
          </nav>

          <Link
            to="/"
            className="cursor-target px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
