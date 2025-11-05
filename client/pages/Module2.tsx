import Header from '@/components/Header';
import { ChevronDown, BookOpen, Lightbulb, Zap, Building2, TrendingUp, Shield, Globe, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Module2() {
  // Start collapsed; open on user interaction
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50/50 dark:to-slate-950/50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 dark:from-purple-500/5 dark:to-indigo-600/5 -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 mb-8">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Phần 2</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Kinh tế thị trường định hướng xã hội chủ nghĩa
          </h1>
          <h2 className="text-2xl sm:text-3xl text-foreground/70 mb-6">
            Khái niệm, tính tất yếu và đặc trưng ở Việt Nam
          </h2>

          <div className="prose prose-invert max-w-none mb-8">
            <div className="p-6 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-700">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                Tóm tắt
              </h3>
              <p className="text-foreground/80">
                KTTHĐXHCN là mô hình kết hợp cơ chế thị trường với vai trò điều tiết, định hướng của nhà nước
                nhằm đạt mục tiêu xã hội chủ nghĩa. Ở Việt Nam, mô hình này là lựa chọn phù hợp cả về lý luận
                và thực tiễn lịch sử.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Concept Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('concept')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Khái niệm KTTHĐXHCN</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['concept'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['concept'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-6">
                  <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-700">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Định nghĩa</h4>
                    <p className="text-foreground/80 text-sm mb-3">
                      KTTHĐXHCN là nền kinh tế vận hành theo quy luật thị trường (cung-cầu, giá cả, cạnh tranh) nhưng được nhà nước định hướng và điều tiết để thực hiện mục tiêu XHCN.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-foreground">Mục tiêu:</span> Dân giàu, nước mạnh, công bằng, văn minh</p>
                      <p><span className="font-semibold text-foreground">Vai trò thị trường:</span> Công cụ phân bổ nguồn lực</p>
                      <p><span className="font-semibold text-foreground">Vai trò nhà nước:</span> Định hướng mục tiêu xã hội</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Bản chất</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Mô hình pha trộn — không phải thị trường thuần túy, cũng không phải kế hoạch hóa tập trung</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Kết hợp ưu điểm: hiệu quả thị trường + công bằng xã hội</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Nhà nước can thiệp có chọn lọc để khắc phục thất bại thị trường</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Necessity Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('necessity')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Tính Tất yếu Khách quan</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['necessity'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['necessity'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-700">
                      <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Lý luận</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>✓ Phát triển lực lượng sản xuất</li>
                        <li>✓ Thị trường khuyến khích đổi mới</li>
                        <li>✓ Phân công lao động xã hội</li>
                        <li>✓ Tích hợp nền kinh tế toàn cầu</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
                      <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Thực tiễn Việt Nam</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>✓ Đổi Mới 1986</li>
                        <li>✓ Tăng trưởng GDP</li>
                        <li>✓ Giảm đói nghèo</li>
                        <li>✓ Thu hút FDI</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Kết luận</h4>
                    <p className="text-sm text-foreground/80">
                      Phát triển KTTHĐXHCN phù hợp với yêu cầu phát triển của Việt Nam về cả hiệu quả kinh tế và mục tiêu xã hội.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Characteristics Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('characteristics')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Đặc Trưng Cơ Bản</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['characteristics'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['characteristics'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-4">
                  {[
                    {
                      title: 'Cấu trúc sở hữu đa dạng',
                      desc: 'Nhiều hình thức sở hữu: nhà nước, tư nhân, hợp tác, vốn nước ngoài. Nhà nước giữ vai trò chủ đạo ở ngành chiến lược.',
                      color: 'cyan',
                    },
                    {
                      title: 'Cơ chế vận hành kép',
                      desc: 'Thị trường phân bổ nguồn lực; nhà nước dùng chính sách để điều tiết và khắc phục thất bại thị trường.',
                      color: 'blue',
                    },
                    {
                      title: 'Mục tiêu kép',
                      desc: 'Vừa tăng trưởng, vừa công bằng xã hội, đảm bảo an sinh và ổn định chính trị.',
                      color: 'purple',
                    },
                    {
                      title: 'Thể chế quyết định hiệu quả',
                      desc: 'Minh bạch, pháp quyền, luật cạnh tranh và quản trị DNNN là yếu tố then chốt.',
                      color: 'indigo',
                    },
                    {
                      title: 'Phát triển bền vững',
                      desc: 'Kết hợp tăng trưởng với bảo vệ môi trường và nâng cao năng lực cạnh tranh quốc tế.',
                      color: 'green',
                    },
                  ].map((item, idx) => {
                    const colorMap = {
                      cyan: 'border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-950/30',
                      blue: 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30',
                      purple: 'border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30',
                      indigo: 'border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/30',
                      green: 'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/30',
                    };
                    return (
                      <div key={idx} className={`p-4 rounded-lg border ${colorMap[item.color as keyof typeof colorMap]}`}>
                        <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                        <p className="text-sm text-foreground/80">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Vietnam Context */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('vietnam')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Ghi chú Thực tiễn Việt Nam</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['vietnam'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['vietnam'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-6">
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Đổi Mới 1986 - Minh chứng cụ thể
                    </h5>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Giải phóng nguồn lực, khuyến khích sáng tạo</li>
                      <li>• Tăng GDP từ nước nông nghiệp sang nước công nghiệp</li>
                      <li>• Thu hút FDI lớn từ các nước phát triển</li>
                      <li>• Giảm tỷ lệ nghèo từ 75% xuống dưới 5%</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-700">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Vai trò Nhà nước
                    </h5>
                    <p className="text-sm text-foreground/80 mb-3">
                      Cần thực hiện qua thể chế minh bạch, trách nhiệm giải trình để tránh sai lệch.
                    </p>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>✓ Kiểm toán độc lập</li>
                      <li>✓ Công khai thông tin</li>
                      <li>✓ Trách nhiệm giải trình</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conclusion */}
          <div className="cursor-target mt-12 p-8 rounded-xl bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200 dark:border-purple-700">
            <h3 className="text-2xl font-bold text-foreground mb-4">Kết luận Phần 2</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              KTTHĐXHCN là mô hình kinh tế tiến bộ, kết hợp hiệu quả kinh tế với công bằng xã hội. Tại Việt Nam,
              mô hình này đã chứng tỏ được hiệu quả qua chính sách Đổi Mới.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Tuy nhiên, thành công hay thất bại của mô hình phụ thuộc vào cải cách thể chế, minh bạch, quản trị
              DNNN và năng lực thực thi chính sách. Đó là những yếu tố then chốt quyết định hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/module/1"
              className="cursor-target px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg transition-all text-center"
            >
              ← Phần 1
            </a>
            <a href="/" className="cursor-target px-6 py-3 rounded-lg border border-foreground/20 text-foreground font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all text-center">
              Quay lại trang chủ
            </a>
            <a
              href="/module/3"
              className="cursor-target px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium hover:shadow-lg transition-all text-center"
            >
              Phần 3 →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-8 text-center text-foreground/60 text-sm">
        <p>© 2024 MLN122 - Group 6</p>
      </footer>
    </div>
  );
}
