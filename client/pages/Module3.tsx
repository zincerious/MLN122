import Header from '@/components/Header';
import { ChevronDown, BookOpen, Lightbulb, Check, AlertCircle, TrendingUp, Target, Zap, ClipboardList } from 'lucide-react';
import { useState } from 'react';

export default function Module3() {
  // Start with nothing expanded; user opens sections as needed
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 dark:from-emerald-500/5 dark:to-teal-600/5 -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-8">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Phần 3</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Liên hệ Thực tiễn & Trả lời Câu hỏi
          </h1>
          <h2 className="text-2xl sm:text-3xl text-foreground/70 mb-6">
            Giải quyết Giới hạn Lịch sử của Chủ nghĩa Tư bản
          </h2>

          <div className="prose prose-invert max-w-none mb-8">
            <div className="p-6 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                <Target className="w-5 h-5 text-emerald-600" />
                Câu Hỏi Chính
              </h3>
              <p className="text-foreground/80 font-semibold mb-2">
                "KTTHĐXHCN có giải quyết được những giới hạn lịch sử của chủ nghĩa tư bản không?"
              </p>
              <p className="text-foreground/80">
                Trả lời: Có khả năng giảm thiểu và quản lý nhiều giới hạn, nhưng không thể tự động loại bỏ hoàn toàn chúng — hiệu quả phụ thuộc vào chất lượng thể chế và năng lực thực thi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Limitations Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('limitations')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Những Giới hạn Lịch sử Cần Khắc phục</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['limitations'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['limitations'] && (
              <div className="border-t border-foreground/10 bg-background/50">
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Bất bình đẳng Thu nhập', desc: 'Khoảng cách giàu-nghèo sâu đẫm' },
                      { title: 'Độc quyền', desc: 'Xu hướng tập trung, bóp méo cạnh tranh' },
                      { title: 'Chu kỳ Khủng hoảng', desc: 'Thừa cung, khủng hoảng tài chính, suy thoái' },
                      { title: 'Xung đột Lợi ích', desc: 'Cạnh tranh giữa các trung tâm tư bản' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700">
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">{item.title}</h5>
                        <p className="text-sm text-foreground/80">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Supporting Arguments Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('supporting')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Luận Cứ Ủng Hộ - Tại Sao Có Thể Khắc phục</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['supporting'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['supporting'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-4">
                  {[
                    {
                      title: 'Công cụ Phân phối',
                      items: ['Thuế lũy tiến', 'Trợ cấp & bảo hiểm xã hội', 'Đầu tư công', 'Tái phân phối thu nhập'],
                      color: 'emerald',
                    },
                    {
                      title: 'Pháp luật Cạnh tranh',
                      items: ['Ngăn chặn hành vi độc quyền', 'Xử lý lũng đoạn thị trường', 'Bảo vệ cạnh tranh công bằng'],
                      color: 'blue',
                    },
                    {
                      title: 'Sở hữu Nhà nước',
                      items: ['Bảo vệ lợi ích công cộng', 'Tránh thao túng của tư nhân', 'Đảm bảo dịch vụ thiết yếu'],
                      color: 'purple',
                    },
                    {
                      title: 'Chính sách Vĩ mô',
                      items: ['Quỹ dự trữ', 'Công cụ tiền tệ-tài khóa', 'Giảm biên độ chu kỳ kinh tế'],
                      color: 'indigo',
                    },
                  ].map((tool, idx) => {
                    const colorMap = {
                      emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300',
                      blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300',
                      purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300',
                      indigo: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300',
                    };
                    const colors = colorMap[tool.color as keyof typeof colorMap];
                    return (
                      <div key={idx} className={`p-4 rounded-lg border ${colors}`}>
                        <h5 className="font-semibold mb-3">{tool.title}</h5>
                        <ul className="space-y-2">
                          {tool.items.map((item, i) => (
                            <li key={i} className="text-sm text-foreground/80 flex gap-2">
                              <span>✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Limiting Arguments */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('limiting')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Luận Cứ Hạn Chế - Điều Kiện Quyết Định</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['limiting'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['limiting'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-4">
                  {[
                    {
                      title: 'Thể chế Yếu kém',
                      problem: 'Thiếu minh bạch, bị chi phối lợi ích nhóm',
                      consequence: 'Tham nhũng, lãng phí, bất công',
                    },
                    {
                      title: 'Can thiệp Sai lầm',
                      problem: 'Bảo hộ kéo dài, bao cấp không hiệu quả',
                      consequence: 'Mất động lực đổi mới, giảm hiệu quả',
                    },
                    {
                      title: 'Hội nhập Toàn cầu',
                      problem: 'Tập đoàn xuyên quốc gia gây áp lực',
                      consequence: 'Kiểm soát trong nước khó khăn hơn',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-700">
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">{item.title}</h5>
                      <p className="text-sm text-foreground/80 mb-2">
                        <span className="font-semibold">Vấn đề:</span> {item.problem}
                      </p>
                      <p className="text-sm text-foreground/80">
                        <span className="font-semibold">Hậu quả:</span> {item.consequence}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Vietnam Evidence */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('vietnam')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Minh chứng Thực tiễn Việt Nam</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['vietnam'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['vietnam'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Thành công</h5>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>✓ Đổi Mới chứng minh khả năng tận dụng thị trường</li>
                      <li>✓ Xuất khẩu tăng: Từ nhập khẩu lương thực sang xuất khẩu hàng đầu</li>
                      <li>✓ Giảm nghèo: Từ 75% xuống dưới 5%</li>
                      <li>✓ Thu hút FDI: Công ty đa quốc gia đầu tư tại Việt Nam</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-700">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Hạn chế</h5>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>⚠ Một số DNNN quản trị yếu, thiếu minh bạch</li>
                      <li>⚠ Cạnh tranh nền tảng số đặt ra thách thức mới</li>
                      <li>⚠ Khung pháp lý đang được hoàn thiện</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-700">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Bài học</h5>
                    <p className="text-sm text-foreground/80">
                      Thành công hay thất bại phụ thuộc vào: cải cách thể chế, minh bạch, quản trị DNNN, thực thi pháp luật.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Policy Recommendations */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('policy')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Kiến nghị Chính sách</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['policy'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['policy'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-4">
                  {[
                    {
                      title: '1. Hoàn thiện Luật Cạnh tranh',
                      items: ['Tăng cường thực thi', 'Cập nhật cho nền kinh tế số', 'Xử lý kịp thời độc quyền'],
                    },
                    {
                      title: '2. Cải cách Quản trị DNNN',
                      items: ['Minh bạch & kiểm toán độc lập', 'Trách nhiệm giải trình', 'Cổ phần hóa có kiểm soát'],
                    },
                    {
                      title: '3. An sinh Bền vững',
                      items: ['Thuế tiến bộ', 'Bảo hiểm xã hội toàn dân', 'Đầu tư giáo dục & y tế'],
                    },
                    {
                      title: '4. Minh bạch & Pháp quyền',
                      items: ['Công khai thông tin', 'Đơn giản hóa thủ tục', 'Chống tham nhũng'],
                    },
                    {
                      title: '5. Phát triển Tư nhân Lành mạnh',
                      items: ['Môi trường kinh doanh công bằng', 'Hỗ trợ DN vừa và nhỏ', 'Khuyến khích đổi mới'],
                    },
                    {
                      title: '6. Quản lý Rủi ro Toàn cầu',
                      items: ['Phối hợp chính sách quốc tế', 'Bảo vệ ngành chiến lược', 'Tham gia tổ chức quốc tế'],
                    },
                  ].map((rec, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-700">
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">{rec.title}</h5>
                      <ul className="space-y-1">
                        {rec.items.map((item, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex gap-2">
                            <span className="text-purple-600">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Final Conclusion */}
          <div className="cursor-target mt-12 p-8 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-700">
            <h3 className="text-2xl font-bold text-foreground mb-6">Kết luận Chung</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Chủ nghĩa tư bản đã đóng góp lớn:
                  </p>
                  <p className="text-foreground/80">
                    Phát triển lực lượng sản xuất, công nghiệp hóa, nâng cao năng suất lao động.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Nhưng có những giới hạn nội tại:
                  </p>
                  <p className="text-foreground/80">
                    Bất bình đẳng, độc quyền, chu kỳ khủng hoảng kinh tế, xung đột lợi ích.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    KTTHĐXHCN là con đường thực tế:
                  </p>
                  <p className="text-foreground/80">
                    Tận dụng động lực thị trường đồng thời giữ vai trò nhà nước định hướng để đảm bảo công bằng xã hội.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Nhưng thành công không được đảm bảo tự nhiên:
                  </p>
                  <p className="text-foreground/80">
                    Cần cải thiện thể chế, minh bạch, quản trị DNNN và năng lực thực thi chính sách để mô hình thực sự khắc phục được những giới hạn của chủ nghĩa tư bản.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/module/2"
              className="cursor-target px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:shadow-lg transition-all text-center"
            >
              ← Phần 2
            </a>
            <a href="/" className="cursor-target px-6 py-3 rounded-lg border border-foreground/20 text-foreground font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all text-center">
              Quay lại trang chủ
            </a>
            <button
              disabled
              className="cursor-target px-6 py-3 rounded-lg border border-foreground/10 text-foreground/40 font-medium disabled:opacity-50"
            >
              Kết thúc →
            </button>
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
