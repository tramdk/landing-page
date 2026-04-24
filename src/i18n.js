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
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact',
            cta: 'Let\'s Connect'
          },
          hero: {
            badge: 'Software Developer',
            location: 'Ho Chi Minh City, Vietnam',
            name: 'Dang Ngoc Tram',
            role: 'Full-Stack .NET Developer',
            desc: 'Experienced in building scalable enterprise applications and integrating AI solutions. Dedicated to creating efficient and user-friendly digital experiences with over 5 years of professional experience.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            scroll: 'Scroll Down'
          },
          about: {
            title: 'About Me',
            bio: 'With over 5 years of experience in software development, I specialize in building robust backend systems and modern frontend interfaces. My core expertise lies in the <strong>.NET Core</strong> ecosystem, where I focus on delivering scalable and maintainable solutions.',
            bio2: 'I am passionate about optimizing application performance and integrating AI features to solve complex business problems. I enjoy working in collaborative environments to bring ideas to life.',
            exp: 'Years of Experience',
            netExp: 'Years in .NET',
            projectsCount: 'Major Projects',
            team: 'Team Members Led',
            workStatus: 'Open to new opportunities',
            contact: {
              phone: 'Phone',
              email: 'Email',
              address: 'Address',
              addressVal: 'Phu Nhuan, HCM City'
            }
          },
          skills: {
            title: 'Technical Skills',
            fe: { title: 'Frontend Development', desc: 'Building responsive and interactive user interfaces using modern JavaScript frameworks.' },
            be: { title: 'Backend Development', desc: 'Designing and implementing secure, scalable RESTful APIs and microservices.' },
            db: { title: 'Database Management', desc: 'Designing efficient database schemas and optimizing queries for performance.' },
            perf: { title: 'Performance Optimization', desc: 'Identifying bottlenecks and improving system responsiveness.' },
            arch: { title: 'Software Architecture', desc: 'Applying design patterns and clean architecture principles for maintainable code.' },
            ai: { title: 'AI Integration', desc: 'Incorporating AI and machine learning capabilities into software solutions.' }
          },
          experience: {
            title: 'Work Experience',
            company: 'Lac Viet Computing Corp',
            role: 'Software Developer',
            duration: '2020 – PRESENT',
            items: [
              { title: 'Product Development', desc: 'Collaborated with cross-functional teams to develop and deploy new features based on business requirements.' },
              { title: 'System Optimization', desc: 'Improved system performance by optimizing database queries and refactoring legacy code.' },
              { title: 'AI Integration', desc: 'Implemented AI-driven analytics modules to enhance data visualization and business insights.' },
              { title: 'System Architecture', desc: 'Contributed to the design and development of core application infrastructure.' }
            ]
          },
          projects: {
            title: 'Professional Projects',
            list: [
              {
                id: 'erp',
                name: 'Enterprise Resource Planning (ERP)',
                period: '2022 – 2025',
                role: 'Full-Stack Developer',
                team: '20 Developers',
                desc: [
                  'Developed and maintained core modules for a large-scale ERP system',
                  'Implemented real-time data synchronization using SignalR',
                  'Integrated data analytics pipelines to support business intelligence',
                  'Optimized database performance to handle high transaction volumes'
                ]
              },
              {
                id: 'dms',
                name: 'Document Management System',
                period: '2020 – 2022',
                role: 'Full-Stack Developer',
                team: '5 Engineers',
                desc: [
                  'Participated in migrating legacy data to a modern storage solution',
                  'Improved document retrieval speed for large-scale databases',
                  'Developed user-friendly interfaces for document administration workflows',
                  'Integrated search functionalities for efficient data retrieval'
                ]
              }
            ]
          },
          sideProjects: {
            title: 'Personal Projects',
            list: [
              {
                name: 'Social Media Management Agent',
                role: 'Developer',
                desc: 'An automated content management tool utilizing Gemini AI for generating and scheduling social media posts. Features include trend analysis, image processing, and multi-channel posting capabilities across multiple platforms.',
              },
              {
                name: 'Blog API Platform',
                role: 'Developer',
                desc: 'A robust RESTful API built with Clean Architecture and Domain-Driven Design principles. Implements CQRS with MediatR for scalable request handling, and features JWT authentication and media optimization.',
              },
              {
                name: 'ChinChin Flowers Digital Store',
                role: 'Developer',
                desc: 'An interactive e-commerce platform featuring 3D floral arrangements using Three.js. Built with Vite and React, it incorporates Framer Motion for smooth animations and an engaging user experience.',
              },
              {
                name: 'Nông Y AI (Agri-AI)',
                role: 'Mobile Developer',
                desc: 'A modern mobile application designed to help farmers quickly and accurately diagnose plant diseases. It integrates Gemini AI for image recognition, text-to-speech, and hands-free voice calls, optimizing crop protection and agricultural productivity. Built with TypeScript and Capacitor.',
              }
            ]
          },
          education: {
            title: 'Education',
            school: 'Ho Chi Minh City University of Technology (HUTECH)',
            period: '2015 – 2020',
            dept: 'Information Technology',
            degree: 'Bachelor of Engineering'
          },
          interests: {
            title: 'Interests',
            items: ['Technology Trends', 'Music & Audio', 'Strategy Games']
          },
          contact: {
            title: "Get In Touch",
            desc: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            email: 'Email',
            website: 'Resume',
            github: 'Github'
          },
          footer: {
            copy: '© 2026 Dang Ngoc Tram.'
          }
        }
      },
      vi: {
        translation: {
          nav: {
            about: 'Giới thiệu',
            skills: 'Kỹ năng',
            experience: 'Kinh nghiệm',
            projects: 'Dự án',
            contact: 'Liên hệ',
            cta: 'Kết nối'
          },
          hero: {
            badge: 'Lập trình viên phần mềm',
            location: 'TP. Hồ Chí Minh',
            name: 'Đặng Ngọc Trầm',
            role: 'Full-Stack .NET Developer',
            desc: 'Có kinh nghiệm xây dựng các ứng dụng doanh nghiệp và tích hợp giải pháp AI. Mong muốn tạo ra các sản phẩm số hiệu quả và thân thiện với người dùng với hơn 5 năm kinh nghiệm làm việc.',
            viewProjects: 'Xem dự án',
            contactMe: 'Liên hệ',
            scroll: 'Kéo xuống'
          },
          about: {
            title: 'Về tôi',
            bio: 'Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, tôi tập trung vào việc xây dựng hệ thống backend vững chắc và giao diện frontend hiện đại. Chuyên môn chính của tôi là hệ sinh thái <strong>.NET Core</strong>, nơi tôi thiết kế các giải pháp có tính mở rộng và dễ bảo trì.',
            bio2: 'Tôi quan tâm đến việc tối ưu hóa hiệu năng ứng dụng và tích hợp các tính năng AI để giải quyết các bài toán kinh doanh. Tôi thích làm việc trong môi trường hợp tác để biến các ý tưởng thành sản phẩm thực tế.',
            exp: 'Năm kinh nghiệm',
            netExp: 'Năm với .NET',
            projectsCount: 'Dự án lớn',
            team: 'Quản lý nhóm',
            workStatus: 'Sẵn sàng đón nhận cơ hội mới',
            contact: {
              phone: 'Điện thoại',
              email: 'Email',
              address: 'Địa chỉ',
              addressVal: 'Quận Phú Nhuận, TP. HCM'
            }
          },
          skills: {
            title: 'Kỹ năng chuyên môn',
            fe: { title: 'Frontend', desc: 'Xây dựng giao diện người dùng tương tác và đáp ứng trên nhiều thiết bị bằng các framework JavaScript hiện đại.' },
            be: { title: 'Backend', desc: 'Thiết kế và phát triển các RESTful API và microservices an toàn, có khả năng mở rộng.' },
            db: { title: 'Cơ sở dữ liệu', desc: 'Thiết kế lược đồ cơ sở dữ liệu và tối ưu hóa truy vấn để cải thiện hiệu suất.' },
            perf: { title: 'Tối ưu hiệu năng', desc: 'Phân tích điểm nghẽn và cải thiện tốc độ phản hồi của hệ thống.' },
            arch: { title: 'Kiến trúc phần mềm', desc: 'Áp dụng design patterns và clean architecture để code dễ bảo trì.' },
            ai: { title: 'Tích hợp AI', desc: 'Ứng dụng các khả năng của AI và machine learning vào sản phẩm phần mềm.' }
          },
          experience: {
            title: 'Kinh nghiệm làm việc',
            company: 'Công ty Cổ phần Tin học Lạc Việt',
            role: 'Software Developer',
            duration: '2020 – HIỆN TẠI',
            items: [
              { title: 'Phát triển sản phẩm', desc: 'Phối hợp với các nhóm để phát triển và triển khai tính năng mới theo yêu cầu nghiệp vụ.' },
              { title: 'Tối ưu hệ thống', desc: 'Cải thiện hiệu năng hệ thống thông qua việc tối ưu câu truy vấn cơ sở dữ liệu và tái cấu trúc mã nguồn.' },
              { title: 'Tích hợp AI', desc: 'Triển khai các module phân tích sử dụng AI để nâng cao khả năng trực quan hóa dữ liệu.' },
              { title: 'Kiến trúc hệ thống', desc: 'Tham gia thiết kế và xây dựng hạ tầng cốt lõi cho các ứng dụng.' }
            ]
          },
          projects: {
            title: 'Dự án nổi bật',
            list: [
              {
                id: 'erp',
                name: 'Hệ thống Quản trị Doanh nghiệp (ERP)',
                period: '2022 – 2025',
                role: 'Full-Stack Developer',
                team: '20 Lập trình viên',
                desc: [
                  'Phát triển và bảo trì các module cốt lõi cho hệ thống ERP quy mô lớn',
                  'Triển khai đồng bộ dữ liệu theo thời gian thực sử dụng SignalR',
                  'Tích hợp luồng dữ liệu phân tích để hỗ trợ báo cáo thông minh',
                  'Tối ưu hiệu năng cơ sở dữ liệu để đáp ứng lượng giao dịch lớn'
                ]
              },
              {
                id: 'dms',
                name: 'Hệ thống Quản lý Tài liệu (DMS)',
                period: '2020 – 2022',
                role: 'Full-Stack Developer',
                team: '5 Kỹ sư',
                desc: [
                  'Tham gia chuyển đổi dữ liệu từ hệ thống cũ sang nền tảng lưu trữ mới',
                  'Cải thiện tốc độ truy xuất tài liệu cho các cơ sở dữ liệu lớn',
                  'Phát triển giao diện quản lý tài liệu thân thiện với người dùng',
                  'Tích hợp tính năng tìm kiếm giúp tra cứu dữ liệu hiệu quả'
                ]
              }
            ]
          },
          sideProjects: {
            title: 'Dự án cá nhân',
            list: [
              {
                name: 'Công cụ Quản lý Mạng xã hội',
                role: 'Developer',
                desc: 'Hệ thống tự động hóa nội dung sử dụng Gemini AI để tạo và lên lịch bài viết trên mạng xã hội. Các tính năng bao gồm phân tích xu hướng, xử lý hình ảnh và đăng bài trên nhiều nền tảng.',
              },
              {
                name: 'Nền tảng Blog API',
                role: 'Developer',
                desc: 'RESTful API được xây dựng theo Clean Architecture và Domain-Driven Design. Áp dụng CQRS với MediatR để xử lý yêu cầu mở rộng, kèm theo tính năng xác thực JWT và tối ưu hình ảnh.',
              },
              {
                name: 'Cửa hàng trực tuyến ChinChin Flowers',
                role: 'Developer',
                desc: 'Nền tảng thương mại điện tử với trải nghiệm xem hoa 3D tương tác sử dụng Three.js. Được xây dựng với Vite và React, kết hợp Framer Motion để tạo ra các hiệu ứng chuyển động mượt mà.',
              },
              {
                name: 'Nông Y AI (Agri-AI)',
                role: 'Mobile Developer',
                desc: 'Ứng dụng di động hỗ trợ chẩn đoán sâu bệnh trên cây trồng bằng AI. Tích hợp sức mạnh của Gemini AI để phân tích hình ảnh, đàm thoại trực tiếp (Voice Call) và nhắn tin. Cung cấp cẩm nang kỹ thuật và thời tiết thực tế, giúp tối ưu hóa quy trình canh tác. Xây dựng bằng TypeScript và Capacitor.',
              }
            ]
          },
          education: {
            title: 'Học vấn',
            school: 'Đại học Công nghệ TP.HCM (HUTECH)',
            period: '2015 – 2020',
            dept: 'Công nghệ thông tin',
            degree: 'Kỹ sư CNTT'
          },
          interests: {
            title: 'Sở thích',
            items: ['Công nghệ mới', 'Âm nhạc', 'Game chiến thuật']
          },
          contact: {
            title: "Liên hệ",
            desc: "Tôi luôn sẵn sàng trao đổi về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác cùng bạn.",
            email: 'Email',
            website: 'Resume',
            github: 'Github'
          },
          footer: {
            copy: '© 2026 Đặng Ngọc Trầm.'
          }
        }
      }
    }
  });

export default i18n;
