import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function Index() {
  const modules = [
    {
      id: 1,
      title: 'Biểu hiện mới của độc quyền',
      subtitle: 'Vai trò lịch sử của chủ nghĩa tư bản',
      description:
        'Khám phá cách độc quyền biến đổi trong bối cảnh toàn cầu hóa, số hóa và tài chính hóa. Phân tích vai trò phát triển nhưng những giới hạn nội tại của chủ nghĩa tư bản.',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-600',
      color: 'text-cyan-600',
      accent: 'bg-cyan-100 dark:bg-cyan-900',
    },
    {
      id: 2,
      title: 'Kinh tế thị trường định hướng XHCN',
      subtitle: 'Khái niệm, tính tất yếu và đặc trưng',
      description:
        'Tìm hiểu mô hình kết hợp cơ chế thị trường với vai trò định hướng của nhà nước. Lý do tại sao đây là lựa chọn phù hợp cho Việt Nam.',
      icon: Zap,
      gradient: 'from-purple-500 to-indigo-600',
      color: 'text-purple-600',
      accent: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      id: 3,
      title: 'Liên hệ thực tiễn & Kiến nghị chính sách',
      subtitle: 'Giải quyết giới hạn lịch sử của chủ nghĩa tư bản',
      description:
        'Phân tích liệu KTTHĐXHCN có khắc phục được các giới hạn của chủ nghĩa tư bản. Kiến nghị chính sách thực hiện để mô hình phát huy hiệu quả.',
      icon: Sparkles,
      gradient: 'from-emerald-500 to-teal-600',
      color: 'text-emerald-600',
      accent: 'bg-emerald-100 dark:bg-emerald-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50/50 dark:to-slate-950/50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 dark:from-cyan-500/5 dark:to-blue-600/5 -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                MLN122 - Group 6
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                MLN122
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Lecturer: Ms.ThuyHTV
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#modules"
                className="cursor-target group flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Bắt đầu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#modules"
                className="cursor-target px-8 py-4 rounded-lg border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              >
                Nội dung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nội dung 
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link
                  key={module.id}
                  to={`/module/${module.id}`}
                  className={`cursor-target group relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1`}
                  style={{
                    background: `linear-gradient(135deg, rgba(var(--color-start), 0.05) 0%, rgba(var(--color-end), 0.02) 100%)`,
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${module.accent} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 ${module.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--start), var(--end))`,
                    }}
                  >
                    {module.title}
                  </h3>
                  <p className={`text-sm font-semibold ${module.color} mb-4`}>
                    {module.subtitle}
                  </p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Link Arrow */}
                  <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background to-slate-100/30 dark:to-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            Đặc điểm
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nội dung',
                description: 'Ba phần chính bao gồm độc quyền, chủ nghĩa tư bản và kinh tế XHCN',
                icon: '📚',
              },
              {
                title: 'Phân tích',
                description:
                  'Tìm hiểu chi tiết về lý thuyết kinh tế và ứng dụng thực tiễn tại Việt Nam',
                icon: '🔍',
              },
              {
                title: 'Giao diện',
                description: 'Trải nghiệm học tập mượt mà với thiết kế responsive và tương tác',
                icon: '✨',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="cursor-target group p-8 rounded-xl border border-foreground/10 hover:border-foreground/20 bg-background/50 hover:bg-foreground/5 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center text-foreground/60 text-sm">
          <p>© 2025 MLN122 - Group 6. </p>
        </div>
      </footer>
    </div>
  );
}
