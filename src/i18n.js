import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: 'Vision',
            skills: 'Expertise',
            experience: 'Journey',
            projects: 'Major Works',
            contact: 'Connect',
            cta: 'Let\'s Create'
          },
          hero: {
            badge: 'Pioneering Digital Solutions',
            location: 'Saigon, Vietnam',
            name: 'Dang Ngoc Tram',
            role: 'Full-Stack .NET Developer',
            desc: 'Crafting high-performance enterprise ecosystems and AI-driven platforms. Transforming complex challenges into seamless digital experiences with over 5 years of mastery.',
            viewProjects: 'Discover My Work',
            contactMe: 'Hire Perfection',
            scroll: 'The Journey'
          },
          about: {
            title: 'The Visionary',
            bio: 'Driven by precision and innovation, I have spent over <strong>half a decade</strong> architecting the digital backbone of modern enterprises. With a deep mastery of <strong>.NET Core</strong>, I don\'t just write code; I build legacies.',
            bio2: 'I specialize in shattering performance ceilings and integrating cutting-edge AI to redefine what’s possible in enterprise software. My mission is to turn every complex requirement into a high-performance masterpiece.',
            exp: 'Years of Mastery',
            netExp: 'Years of Deep Dev',
            projectsCount: 'Major Deployments',
            team: 'Leaders Led',
            workStatus: 'Ready for the next big thing',
            contact: {
              phone: 'Direct Line',
              email: 'Secure Email',
              address: 'Headquarters',
              addressVal: 'Phu Nhuan, HCM City'
            }
          },
          skills: {
            title: 'Core Powers',
            fe: { title: 'Seamless UI', desc: 'Crafting immersive, lightning-fast interfaces that captivate users at first click.' },
            be: { title: 'Robust Backbone', desc: 'Engineering bulletproof, hyper-scalable infrastructures that never fail under pressure.' },
            db: { title: 'Data Mastery', desc: 'Weaponizing data with elite-level optimization for instant, large-scale intel.' },
            perf: { title: 'Peak Performance', desc: 'Eliminating every millisecond of lag. I make slow systems legendary.' },
            arch: { title: 'Strategic Arch', desc: 'Designing future-proof systems where every line of code serves a purpose.' },
            ai: { title: 'AI Integration', desc: 'Commanding Artificial Intelligence to automate, predict, and dominate.' }
          },
          experience: {
            title: 'The Professional Legacy',
            company: 'Lac Viet Computing Group',
            role: 'Lead Project Strategist',
            duration: '2020 – PRESENT',
            items: [
              { title: 'Revolutionizing Products', desc: 'Leading at the frontlines, transforming raw requirements into market-leading features.' },
              { title: 'System Optimization Elite', desc: 'Rescuing massive Big Data systems from performance death, smashing bottlenecks.' },
              { title: 'AI & Next-Gen Modules', desc: 'Pioneering the integration of AI analytics that provide unmatched business insights.' },
              { title: 'Architectural Excellence', desc: 'Building the core foundations that support entire enterprise ecosystems.' }
            ]
          },
          projects: {
            title: 'Industry Powerhouses',
            list: [
              {
                id: 'erp',
                name: 'The Enterprise Command Center',
                period: '2022 – 2025',
                role: 'Chief Architect',
                team: '20 Elite Developers',
                desc: [
                  'Orchestrated a massive-scale ERP ecosystem supporting 1M+ transactions',
                  'Deployed ultra-fast real-time synchronization using advanced SignalR patterns',
                  'Engineered AI ingestion pipelines for predictive business intelligence',
                  'Maximized system throughput with high-tier database tuning'
                ]
              },
              {
                id: 'dms',
                name: 'Document Management System',
                period: '2020 – 2022',
                role: 'Migration Specialist',
                team: '5 Dedicated Engineers',
                desc: [
                  'Spearheaded the complex migration of legacy archives to modern high-speed storage',
                  'Achieved sub-second retrieval speeds on multi-terabyte document databases',
                  'Redefined User Experience for massive administrative workflows',
                  'Integrated elite-level search engines for instant data discovery'
                ]
              }
            ]
          },
          sideProjects: {
            title: 'The Innovation Lab',
            list: [
              {
                name: 'AI Agent: Social Dominance',
                role: 'AI System Designer',
                desc: 'A complete content automation powerhouse that transforms how businesses handle social media. Leveraging Gemini AI for trend research and viral content generation, this agent eliminates manual toil. It features an intelligent image hunter and a multi-channel command center for 24/7 automated dominance across dozens of fanpages through a secure, multi-tenant architecture.',
              },
              {
                name: 'The Backend Backbone (BlogApi)',
                role: 'System Architect',
                desc: 'A masterclass in enterprise-grade API design. Built on Clean Architecture and Domain-Driven Design (DDD), it ensures zero technical debt and infinite scalability. By weaponizing CQRS with MediatR, the system achieves sub-millisecond response times under extreme load, protected by multi-layered JWT security and cloud-native media optimization.',
              },
              {
                name: 'Luxury Digital: ChinChin Flowers',
                role: 'Lead Interactive Developer',
                desc: 'Redefining luxury e-commerce through immersive 3D technology. Using Three.js, customers can interactively explore floral arrangements in full 3D space, blurring the line between physical and digital. It combines state-of-the-art UX with Framer Motion and an ultra-fast Vite/React foundation for a boutique experience that leaves grid-based stores in the past.',
              },
              {
                name: 'Remote Mastery: WoL',
                role: 'Infrastructure Engineer',
                desc: 'Shattering physical boundaries by commanding hardware states from anywhere on the planet. This tool utilizes specialized Magic Packet protocols to wake fully powered-down computers across LAN or WAN networks. Built with hyper-optimized TypeScript, it provides near-zero latency command execution and real-time infrastructure monitoring for pro-level remote operations.',
              }
            ]
          },
          education: {
            title: 'Academic Foundation',
            school: 'Ho Chi Minh University of Technology (HUTECH)',
            period: '2015 – 2020',
            dept: 'Information Technology',
            degree: 'Engineer of Technology'
          },
          interests: {
            title: 'Fueling The Mind',
            items: ['🚀 Tech Frontiers', '🎵 High-Fidelity Audio', '🎮 Tactical Gaming']
          },
          contact: {
            title: "Let's Build The Future",
            desc: "The next digital revolution starts with a conversation. Ready to scale your vision?",
            email: 'Direct Email',
            website: 'Official Hub',
            github: 'Code Matrix'
          },
          footer: {
            copy: '© 2026 Dang Ngoc Tram. Excellence by design.'
          }
        }
      },
      vi: {
        translation: {
          nav: {
            about: 'Tầm nhìn',
            skills: 'Năng lực lõi',
            experience: 'Hành trình',
            projects: 'Siêu dự án',
            contact: 'Kết nối',
            cta: 'Cùng kiến tạo'
          },
          hero: {
            badge: 'Tiên phong giải pháp số',
            location: 'TP. Hồ Chí Minh',
            name: 'Đặng Ngọc Trầm',
            role: 'Full-Stack .NET Developer',
            desc: 'Xây dựng hệ sinh thái doanh nghiệp hiệu năng cao và nền tảng tích hợp AI. Chuyển hóa thách thức phức tạp thành trải nghiệm số mượt mà với hơn 5 năm kinh nghiệm đỉnh cao.',
            viewProjects: 'Khám phá thành tựu',
            contactMe: 'Kết nối ngay',
            scroll: 'Hành trình số'
          },
          about: {
            title: 'Bậc thầy công nghệ',
            bio: 'Được thúc đẩy bởi sự chính xác và đổi mới, tôi đã dành hơn <strong>nửa thập kỷ</strong> để thiết kế "xương sống" số cho các doanh nghiệp hiện đại. Với sự am hiểu sâu sắc về <strong>.NET Core</strong>, tôi không chỉ viết code; tôi tạo ra di sản.',
            bio2: 'Tôi chuyên về phá vỡ mọi giới hạn hiệu năng và tích hợp AI tiên tiến để tái định nghĩa khả năng của phần mềm doanh nghiệp. Sứ mệnh của tôi là biến mọi yêu cầu phức tạp thành một kiệt tác hiệu quả.',
            exp: 'Năm khẳng định vị thế',
            netExp: 'Năm chuyên sâu .NET Core',
            projectsCount: 'Dự án trọng điểm',
            team: 'Lãnh đạo đội ngũ',
            workStatus: 'Sẵn sàng cho những thử thách lớn tiếp theo',
            contact: {
              phone: 'Hotline trực tiếp',
              email: 'Email bảo mật',
              address: 'Trụ sở',
              addressVal: 'Quận Phú Nhuận, TP. HCM'
            }
          },
          skills: {
            title: 'Sức mạnh cốt lõi',
            fe: { title: 'Giao diện đỉnh cao', desc: 'Tạo ra những trải nghiệm đắm chìm, tốc độ ánh sáng, chinh phục người dùng ngay từ cái chạm đầu tiên.' },
            be: { title: 'Hệ thống vững chãi', desc: 'Thiết kế hạ tầng không thể phá vỡ, khả năng mở rộng cực hạn, bất chấp mọi áp lực hệ thống.' },
            db: { title: 'Bậc thầy dữ liệu', desc: 'Vũ khí hóa dữ liệu với khả năng tối ưu hóa cấp độ cao nhất cho các truy vấn quy mô lớn.' },
            perf: { title: 'Hiệu năng cực hạn', desc: 'Xóa bỏ mọi mili giây trễ. Tôi biến những hệ thống chậm chạp thành huyền thoại về tốc độ.' },
            arch: { title: 'Kiến trúc chiến lược', desc: 'Thiết kế những hệ thống bền vững theo thời gian, nơi mỗi dòng code đều mang một sứ mệnh.' },
            ai: { title: 'Tích hợp AI', desc: 'Làm chủ Trí tuệ nhân tạo để tự động hóa, dự báo và dẫn đầu xu thế thị trường.' }
          },
          experience: {
            title: 'Di sản sự nghiệp',
            company: 'Tập đoàn Công nghệ Lạc Việt',
            role: 'Trưởng dự án chiến lược',
            duration: '2020 – HIỆN TẠI',
            items: [
              { title: 'Cách mạng hóa sản phẩm', desc: 'Dẫn đầu tiền tuyến, chuyển hóa những yêu cầu thô thành các tính năng dẫn đầu thị trường.' },
              { title: 'Biệt đội tối ưu hệ thống', desc: 'Giải cứu các hệ thống Big Data khổng lồ khỏi sự sụp đổ về hiệu năng.' },
              { title: 'Tích hợp AI & Module thế hệ mới', desc: 'Tiên phong đưa phân tích AI vào doanh nghiệp, cung cấp những hiểu biết kinh doanh vô giá.' },
              { title: 'Kiến tạo nền tảng vững chắc', desc: 'Xây dựng nền móng cốt lõi chống đỡ cho toàn bộ hệ sinh thái của doanh nghiệp.' }
            ]
          },
          projects: {
            title: 'Siêu dự án doanh nghiệp',
            list: [
              {
                id: 'erp',
                name: 'Trung tâm điều hành doanh nghiệp (ERP)',
                period: '2022 – 2025',
                role: 'Kiến trúc sư trưởng',
                team: '20 lập trình viên tinh nhuệ',
                desc: [
                  'Điều phối hệ sinh thái ERP khổng lồ xử lý hơn 1 triệu giao dịch',
                  'Triển khai đồng bộ hóa thời gian thực tốc độ cao với các mô hình SignalR tiên tiến',
                  'Xây dựng pipeline dữ liệu AI giúp dự báo thông minh trong kinh doanh',
                  'Tối ưu hóa khả năng xử lý của hệ thống thông qua tinh chỉnh DB cấp cao'
                ]
              },
              {
                id: 'dms',
                name: 'Kho lưu trữ số (DMS)',
                period: '2020 – 2022',
                role: 'Chuyên gia chuyển đổi',
                team: '5 kỹ sư nòng cốt',
                desc: [
                  'Dẫn dắt cuộc di chuyển dữ liệu phức tạp từ hệ thống cũ sang lưu trữ tốc độ cao hiện đại',
                  'Đạt tốc độ truy xuất dưới 1 giây trên các kho tài liệu quy mô nhiều Terabyte',
                  'Tái định nghĩa trải nghiệm người dùng cho các quy trình quản lý khổng lồ',
                  'Tích hợp các bộ máy tìm kiếm ưu việt giúp khám phá dữ liệu tức thì'
                ]
              }
            ]
          },
          sideProjects: {
            title: 'Phòng thí nghiệm đổi mới',
            list: [
              {
                name: 'AI Agent: Thống trị mạng xã hội',
                role: 'Kiến trúc sư hệ thống AI',
                desc: 'Một cỗ máy tự động hóa nội dung toàn diện, thay đổi cách doanh nghiệp vận hành trên mạng xã hội. Khai phá sức mạnh của Gemini AI để nghiên cứu xu hướng và tạo nội dung viral tự động. Hệ thống tích hợp khả năng "săn tìm" hình ảnh thông minh và trung tâm điều phối đa kênh giúp duy trì sự hiện diện 24/7 trên hàng chục fanpage với kiến trúc bảo mật đa tầng tuyệt đối.',
              },
              {
                name: 'The Backend Backbone (BlogApi)',
                role: 'Kiến trúc sư hệ thống',
                desc: 'Tiêu chuẩn vàng cho thiết kế API cấp doanh nghiệp. Xây dựng trên nền tảng Clean Architecture và Domain-Driven Design (DDD), đảm bảo hệ thống không có "nợ kỹ thuật" và khả năng mở rộng vô hạn. Bằng cách vũ khí hóa CQRS với MediatR, hệ thống đạt tốc độ phản hồi mili giây dưới tải trọng cực hạn, được bảo vệ bởi bảo mật JWT đa tầng.',
              },
              {
                name: 'Luxury Digital: Tiệm hoa ChinChin',
                role: 'Trưởng dự án tương tác',
                desc: 'Tái định nghĩa thương mại điện tử xa xỉ thông qua công nghệ 3D đắm chìm. Sử dụng Three.js, khách hàng có thể tương tác trực tiếp, ngắm nhìn hoa trong không gian 3 chiều sống động, xóa nhòa ranh giới giữa thực và ảo. Dự án kết hợp UX đẳng cấp với Framer Motion và nền tảng Vite/React siêu tốc, tạo ra một không gian showroom số sang trọng vượt bậc.',
              },
              {
                name: 'Remote Mastery: WoL',
                role: 'Kỹ sư hạ tầng',
                desc: 'Phá vỡ mọi giới hạn vật lý bằng cách làm chủ trạng thái phần cứng từ bất cứ đâu trên hành tinh. Công cụ sử dụng các giao thức Magic Packet đặc biệt để đánh thức những máy tính đang tắt hoàn toàn qua mạng LAN hoặc WAN. Xây dựng trên nền tảng TypeScript tối ưu cực hạn, dự án cung cấp khả năng thực thi lệnh với độ trễ gần như bằng không.',
              }
            ]
          },
          education: {
            title: 'Nền tảng học thuật',
            school: 'Đại học Công nghệ Thành Phố Hồ Chí Minh (HUTECH)',
            period: '2015 – 2020',
            dept: 'Công nghệ thông tin',
            degree: 'Kỹ sư CNTT'
          },
          interests: {
            title: 'Nuôi dưỡng tâm hồn',
            items: ['🚀 Công nghệ tương lai', '🎵 Âm thanh Hi-Fi', '🎮 Chiến thuật đỉnh cao']
          },
          contact: {
            title: "Cùng xây dựng tương lai",
            desc: "Cuộc cách mạng số tiếp theo bắt đầu bằng một cuộc trò chuyện. Bạn đã sẵn sàng hiện thực hóa tầm nhìn của mình?",
            email: 'Liên hệ trực tiếp',
            website: 'Trung tâm chính thức',
            github: 'Ma trận mã nguồn'
          },
          footer: {
            copy: '© 2026 Đặng Ngọc Trầm. Đẳng cấp từ thiết kế.'
          }
        }
      }
    }
  });

export default i18n;
