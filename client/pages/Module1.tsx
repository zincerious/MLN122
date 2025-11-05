import Header from '@/components/Header';
import { ChevronDown, BookOpen, Lightbulb, Zap, Globe, DollarSign, Building2, AlertCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface KeyPoint {
  title: string;
  description: string;
}

interface ContentBlock {
  id: string;
  title: string;
  icon: React.ReactNode;
  keyPoints: KeyPoint[];
  details: string[];
  color: 'cyan' | 'blue' | 'purple' | 'orange' | 'red' | 'emerald';
}

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    border: 'border-cyan-200 dark:border-cyan-700',
    icon: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600',
    badge: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    accent: 'from-cyan-500 to-blue-600',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-700',
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    accent: 'from-blue-500 to-indigo-600',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-700',
    icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    accent: 'from-purple-500 to-pink-600',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-200 dark:border-orange-700',
    icon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600',
    badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    accent: 'from-orange-500 to-red-600',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-700',
    icon: 'bg-red-100 dark:bg-red-900/30 text-red-600',
    badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    accent: 'from-red-500 to-pink-600',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-700',
    icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    accent: 'from-emerald-500 to-teal-600',
  },
};

export default function Module1() {
  // Start with all sections collapsed; user can open when needed
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const contentBlocks: ContentBlock[] = [
    {
      id: 'definition',
      title: 'Bản chất của Độc quyền',
      icon: <Building2 className="w-6 h-6" />,
      color: 'cyan',
      keyPoints: [
        {
          title: 'Khái niệm cốt lõi',
          description: 'Chi phối nguồn lực thị trường, giá cả, kênh phân phối',
        },
        {
          title: 'Mức độ ảnh hưởng',
          description: 'Làm suy yếu cạnh tranh thực sự trong thị trường',
        },
      ],
      details: [
        'Độc quyền là tình trạng chủ thể (một hoặc một nhóm doanh nghiệp/tập đoàn, hoặc nhà nước) có khả năng chi phối nguồn lực thị trường, giá cả, hoặc các kênh phân phối tới mức làm suy yếu cạnh tranh thực sự.',
        'Bản chất của độc quyền không chỉ nằm ở việc chiếm thị phần mà còn ở khả năng kiểm soát và định hướng thị trường.',
      ],
    },
    {
      id: 'modern-transformation',
      title: 'Chuyển biến Hiện đại',
      icon: <Zap className="w-6 h-6" />,
      color: 'blue',
      keyPoints: [
        {
          title: 'Mới lạ',
          description: 'Kiểm soát dữ liệu, nền tảng số, tiêu chuẩn kỹ thuật',
        },
        {
          title: 'Dạng độc quyền mới',
          description: 'Nền tảng, dữ liệu, ngang-dọc, xuyên quốc gia',
        },
      ],
      details: [
        'Trong nền kinh tế ngày nay, độc quyền không chỉ thể hiện qua việc một đơn vị chiếm thị phần tuyệt đối mà còn qua quyền kiểm soát dữ liệu, nền tảng số, tiêu chuẩn kỹ thuật, chuỗi cung ứng và các kênh tài chính.',
        'Xuất hiện các dạng độc quyền mới: độc quyền nền tảng, độc quyền dữ liệu, độc quyền ngang-dọc, độc quyền xuyên quốc gia.',
        'Những hình thức mới này tạo ra những rào cản cao hơn đối với sự cạnh tranh lành mạnh.',
      ],
    },
    {
      id: 'platform',
      title: 'Độc quyền Nền tảng & Dữ liệu',
      icon: <Globe className="w-6 h-6" />,
      color: 'purple',
      keyPoints: [
        {
          title: 'Hiệu ứng mạng',
          description: 'Tích lũy dữ liệu, người dùng, khó chen chân cho đối thủ',
        },
        {
          title: 'Rào cản',
          description: 'Thông tin và khách hàng bị khóa trong hệ thống',
        },
      ],
      details: [
        'Công ty nền tảng (tìm kiếm, thương mại điện tử, mạng xã hội) tích lũy dữ liệu và người dùng, tạo hiệu ứng mạng (network effect).',
        'Hiệu ứng mạng khiến đối thủ mới khó chen chân vào thị trường.',
        'Điều này hình thành rào cản gia nhập về thông tin và khách hàng. Ví dụ: Google, Facebook, Amazon, Alibaba',
      ],
    },
    {
      id: 'vertical',
      title: 'Độc quyền Ngang-Dọc',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'orange',
      keyPoints: [
        {
          title: 'Kiểm soát chuỗi',
          description: 'Từ nguyên liệu đến bán lẻ, khóa chặt cấu trúc',
        },
        {
          title: 'Ảnh hưởng DN nhỏ',
          description: 'Khó tiếp cận kênh phân phối và thị trường',
        },
      ],
      details: [
        'Tập đoàn kiểm soát nhiều khâu trong chuỗi giá trị (từ nguyên liệu đến bán lẻ).',
        'Khiến doanh nghiệp nhỏ gặp khó khăn tiếp cận kênh phân phối và thị trường.',
        'Tạo ra sự phụ thuộc của các doanh nghiệp nhỏ vào những tập đoàn lớn.',
      ],
    },
    {
      id: 'financial',
      title: 'Độc quyền Tài chính',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'red',
      keyPoints: [
        {
          title: 'Kiểm soát vốn',
          description: 'Tổ chức kiểm soát nguồn vốn, kênh tín dụng',
        },
        {
          title: 'Ảnh hưởng quyết định',
          description: 'Định hướng đầu tư và chiến lược thị trường',
        },
      ],
      details: [
        'Tổ chức hoặc nhóm nhà đầu tư kiểm soát nguồn vốn, kênh tín dụng.',
        'Ảnh hưởng quyết định đầu tư và chiến lược của thị trường.',
        'Tập trung quyền lực kinh tế vào tay những tổ chức tài chính lớn.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50/50 dark:to-slate-950/50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 dark:from-cyan-500/5 dark:to-blue-600/5 -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700 mb-8">
            <BookOpen className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Phần 1</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Biểu hiện mới của độc quyền
          </h1>
          <h2 className="text-2xl sm:text-3xl text-foreground/70 mb-6">
            Vai trò lịch sử của chủ nghĩa tư bản
          </h2>

          <div className="prose prose-invert max-w-none mb-8">
            <div className="p-6 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-700">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                <Lightbulb className="w-5 h-5 text-cyan-600" />
                Tóm tắt
              </h3>
              <p className="text-foreground/80">
                Độc quyền tiếp tục tồn tại nhưng đã biến đổi về hình thức trong bối cảnh toàn cầu hóa, số hóa
                và tài chính hóa. Chủ nghĩa tư bản có vai trò lịch sử lớn trong phát triển lực lượng sản xuất,
                nhưng đồng thời tồn tại những giới hạn nội tại về phân phối, độc quyền và chu kỳ khủng hoảng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {contentBlocks.map((block) => {
            const colors = colorClasses[block.color];
            const isExpanded = expandedSections[block.id];

            return (
              <div
                key={block.id}
                className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(block.id)}
                  className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                    {block.icon}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-foreground">{block.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                    {/* Key Points */}
                    <div className="p-6">
                      <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">
                        Điểm chính
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {block.keyPoints.map((point, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg ${colors.bg} border ${colors.border} space-y-2`}
                          >
                            <p className="font-semibold text-foreground text-sm">{point.title}</p>
                            <p className="text-foreground/70 text-sm">{point.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-4">
                      <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                        Chi tiết
                      </h4>
                      <div className="space-y-3">
                        {block.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.badge.split(' ').find(c => c.includes('bg-'))}`} style={{
                              backgroundColor: block.color === 'cyan' ? '#06b6d4' : 
                                               block.color === 'blue' ? '#3b82f6' :
                                               block.color === 'purple' ? '#a855f7' :
                                               block.color === 'orange' ? '#f97316' :
                                               block.color === 'red' ? '#ef4444' : '#10b981'
                            }} />
                            <p className="text-foreground/80 leading-relaxed flex-1">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* State Monopoly Section */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('state-monopoly')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  Độc quyền Nhà nước: Lợi ích & Rủi ro
                </h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['state-monopoly'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['state-monopoly'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Định nghĩa</h4>
                    <p className="text-foreground/80 mb-2">
                      Độc quyền nhà nước là khi nhà nước hoặc doanh nghiệp nhà nước nắm vị trí chi phối ở các ngành chiến lược (năng lượng, hạ tầng, tài nguyên, viễn thông).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
                      <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white text-xs">✓</span>
                        Lợi ích
                      </h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Bảo đảm an ninh kinh tế</li>
                        <li>• Quản lý nguồn lực chiến lược</li>
                        <li>• Đảm bảo dịch vụ công</li>
                        <li>• Thực hiện mục tiêu an sinh</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700">
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Rủi ro
                      </h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Thiếu minh bạch</li>
                        <li>• Quan liêu và lãng phí</li>
                        <li>• Lợi ích nhóm</li>
                        <li>• Tham nhũng</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-700">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Nhận xét</h5>
                    <p className="text-sm text-foreground/80">
                      Hiệu quả hay không phụ thuộc vào thể chế quản trị, minh bạch và khả năng kiểm soát.
                      Cần kiểm toán độc lập, công khai thông tin, và trách nhiệm giải trình.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Capitalism Role */}
          <div className="cursor-target group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all">
            <button
              onClick={() => toggleSection('capitalism')}
              className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-background to-slate-50/30 dark:to-slate-900/30 hover:from-slate-100/30 dark:hover:from-slate-800/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  Vai trò Lịch sử của Chủ nghĩa Tư bản
                </h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                  expandedSections['capitalism'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections['capitalism'] && (
              <div className="border-t border-foreground/10 divide-y divide-foreground/10 bg-background/50">
                <div className="p-6 space-y-6">
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Vai trò Tích cực</h5>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>
                        <span className="font-semibold text-foreground">Phát triển lực lượng sản xuất:</span> Công nghiệp hóa, ứng dụng khoa học-kỹ thuật, năng suất lao động tăng mạnh.
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Chuyển biến sản xuất:</span> Từ sản xuất nhỏ thành sản xuất hiện đại, quy mô lớn.
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Xã hội hóa sản xuất:</span> Phát triển thị trường, phân công lao động xã hội quy mô.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">Những Giới hạn Lịch sử</h5>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Tích lũy tư bản dẫn tới tập trung lợi ích, gây bất bình đẳng</li>
                      <li>• Xu hướng tập trung và hình thành độc quyền</li>
                      <li>• Chu kỳ khủng hoảng kinh tế (thừa cung, khủng hoảng tài chính)</li>
                      <li>• Khả năng gây xung đột, chiến tranh giữa các trung tâm tư bản</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conclusion */}
          <div className="cursor-target mt-12 p-8 rounded-xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-700">
            <h3 className="text-2xl font-bold text-foreground mb-4">Kết luận Phần 1</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Chủ nghĩa tư bản đã tạo ra nền tảng vật chất và kỹ thuật cho xã hội hiện đại. Tuy nhiên, các
              giới hạn nội tại của nó — bất bình đẳng, độc quyền, chu kỳ khủng hoảng — đòi hỏi phải có cơ chế
              điều chỉnh và khắc phục.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Đó là lý do xuất hiện các mô hình kinh tế pha trộn như kinh tế thị trường định hướng xã hội chủ
              nghĩa, kết hợp động lực thị trường với vai trò điều tiết của nhà nước.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              disabled
              className="cursor-target px-6 py-3 rounded-lg border border-foreground/10 text-foreground/40 font-medium disabled:opacity-50"
            >
              ← Trước
            </button>
            <a href="/" className="cursor-target px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg transition-all text-center">
              Quay lại trang chủ
            </a>
            <a
              href="/module/2"
              className="cursor-target px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:shadow-lg transition-all text-center"
            >
              Tiếp theo →
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
