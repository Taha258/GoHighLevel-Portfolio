import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Twitter, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram,
  Github,
  ArrowRight, 
  ArrowUp,
  Play, 
  Search,
  ExternalLink,
  ShieldCheck,
  Zap,
  Users,
  Code2,
  MessageSquare,
  Award,
  Heart,
  Globe,
  Database,
  Cloud,
  Rocket,
  ArrowLeft,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

function WhatsAppIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

const skillsList = [
  { name: "TYPESCRIPT", percentage: 95 },
  { name: "JAVASCRIPT", percentage: 96 },
  { name: "NEXT.JS", percentage: 93 },
  { name: "MONGODB", percentage: 90 },
  { name: "POSTGRESQL", percentage: 92 },
  { name: "DRIZZLE ORM", percentage: 90 },
  { name: "OPENAI SDK", percentage: 94 },
  { name: "GOHIGHLEVEL", percentage: 92 },
  { name: "MCP", percentage: 88 },
  { name: "SANITY CMS", percentage: 90 },
  { name: "TAILWIND CSS", percentage: 95 },
  { name: "WORDPRESS", percentage: 88 },
  { name: "CLAUDE CODE", percentage: 94 }
];

const capabilitiesList = [
  {
    id: 1,
    icon: Globe,
    title: "Custom Website Building",
    desc: "Building high-converting custom websites, React apps, and GoHighLevel funnels tailored to your exact business goals.",
    color: "#3b82f6"
  },
  {
    id: 2,
    icon: Database,
    title: "Scalable Database & Backend",
    desc: "Architecting high-performance backend systems with MongoDB, PostgreSQL, Drizzle ORM, and automated GHL workflows.",
    color: "#8b5cf6"
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Deployment & Safety",
    desc: "Deploying web applications securely on cloud platforms (Vercel, AWS) with SSL, protection, and bulletproof uptime.",
    color: "#10b981"
  },
  {
    id: 4,
    icon: Rocket,
    title: "SEO Friendly & Fast Speed",
    desc: "Optimizing structure, meta tags, and performance to ensure top Google search rankings and instantaneous load times.",
    color: "#f59e0b"
  }
];

const servicesData = [
  {
    id: 1,
    image: "/Images/CRM.png",
    fallbackImg: "/Images/CRM.png",
    categories: ["GHL CRM", "Lead Tracking"],
    title: "👤 CRM Management",
    description: "Contacts, leads, tags, custom fields aur lead information manage karna.",
    linkText: "View service →"
  },
  {
    id: 2,
    image: "/Images/Email Marketing.webp",
    fallbackImg: "/Images/Services Page Pic7.png",
    categories: ["Campaigns", "Follow-ups"],
    title: "📱 SMS & Email Marketing",
    description: "Campaigns, follow-ups aur promotional messages for high conversions.",
    linkText: "View service →"
  },
  {
    id: 3,
    image: "/Images/Automation.jpg",
    fallbackImg: "/Images/Services Page Pic6.png",
    categories: ["GHL Workflows", "Nurturing"],
    title: "⚡ Automation & Workflows",
    description: "Email, SMS, follow-ups, reminders aur automated lead nurturing sequences.",
    linkText: "View service →"
  },
  {
    id: 4,
    image: "/Images/Hot Lead.jpg",
    fallbackImg: "/Images/Services Page Pic7.png",
    categories: ["Lead Scoring", "Pipeline"],
    title: "🔥 Hot Lead Management",
    description: "Hot/warm/cold leads ko identify aur properly follow-up karna.",
    linkText: "View service →"
  },
  {
    id: 5,
    image: "/Images/Funnel Desing.webp",
    fallbackImg: "/Images/Services Page Pic6.png",
    categories: ["High Converting", "GHL Funnels"],
    title: "🎯 Funnel & Landing Page Design",
    description: "High-converting funnels, landing pages, custom forms aur booking systems.",
    linkText: "View service →"
  },
  {
    id: 6,
    image: "/Images/Ai CHatbot.jpg",
    fallbackImg: "/Images/Services Page Pic7.png",
    categories: ["AI Automation", "24/7 Support"],
    title: "🤖 AI Chatbot / AI Employee",
    description: "Website visitors aur leads ko automatically 24/7 handle aur qualify karna.",
    linkText: "View service →"
  }
];

const worksProjectsData = [
  {
    id: 1,
    title: "Axis Sports Lab",
    category: "Sports & Analytics Platform",
    image: "/Images/Axis Sports Lab.png",
    link: "https://axissportslab.com/"
  },
  {
    id: 2,
    title: "Home Page",
    category: "Roofing Website Landing",
    image: "/Images/Home Page.png",
    link: "https://roofing-website-tau.vercel.app/#/"
  },
  {
    id: 3,
    title: "Car Buy & Sell",
    category: "Automotive Marketplace",
    image: "/Images/car buy and sell.png",
    link: "https://vehicle2-kappa.vercel.app/"
  },
  {
    id: 4,
    title: "TBL Beauty Salon",
    category: "Salon & Booking Website",
    image: "/Images/salon.png",
    link: "https://tbl-beauty-salon.vercel.app/"
  },
  {
    id: 5,
    title: "Furniro Furniture",
    category: "E-Commerce Furniture Store",
    image: "/Images/Furniture.png",
    link: "https://furniro-website-delta.vercel.app/"
  },
  {
    id: 6,
    title: "HyperFit Studio",
    category: "Fitness & Training Studio",
    image: "/Images/HyperFit.png",
    link: "https://hyperfit-studio-hs94.vercel.app/#home"
  }
];

const whyChooseMeData = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Pixel-Perfect GHL Funnels",
    description: "Crafting clean, responsive, and high-converting GoHighLevel websites down to every single pixel.",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)"
  },
  {
    id: 2,
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamlined CRM pipelines and instant SMS/Email triggers to capture every lead automatically.",
    color: "#eab308",
    bgColor: "rgba(234, 179, 8, 0.1)"
  },
  {
    id: 3,
    icon: Users,
    title: "Full Stack Architecture",
    description: "End-to-end full stack development combining scalable backends with intuitive frontend UI.",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.1)"
  },
  {
    id: 4,
    icon: Code2,
    title: "Custom Code & GHL APIs",
    description: "Custom scripts, React web apps, API integrations, and tailored GHL styling for maximum performance.",
    color: "#ec4899",
    bgColor: "rgba(236, 72, 153, 0.1)"
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular milestone updates, transparent collaboration, and direct WhatsApp contact at all times.",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.1)"
  },
  {
    id: 6,
    icon: Award,
    title: "100% Quality Guaranteed",
    description: "Dedicated to exceeding expectations with top-tier GHL setup, snapshots, and full stack launch support.",
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.1)"
  }
];

const testimonialsRow1 = [
  {
    id: 1,
    name: "Annetta Black",
    handle: "@annettablack35",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    platform: "instagram",
    likes: "1k",
    comments: "500",
    time: "08:10 PM | 23 Mar 2026",
    review: "Taha Hussain's @tahahussain GoHighLevel & full stack expertise helped me save time, double our sales conversions, and launch in record time!"
  },
  {
    id: 2,
    name: "Marvin McKinney",
    handle: "@marvinmckinney45",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    platform: "facebook",
    likes: "1.4k",
    comments: "620",
    time: "09:15 PM | 18 Apr 2026",
    review: "I love how this @tahahussain GHL dashboard makes it incredibly simple to track our pipelines and manage client leads."
  },
  {
    id: 3,
    name: "Jane Cooper",
    handle: "@janecooper89",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    platform: "twitter",
    likes: "2.1k",
    comments: "890",
    time: "07:45 AM | 02 May 2026",
    review: "Taha's GHL funnel design is truly a game-changer for me. Clean aesthetics and world-class responsiveness!"
  },
  {
    id: 4,
    name: "Ronald Richards",
    handle: "@ronaldrichards67",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    platform: "instagram",
    likes: "950",
    comments: "340",
    time: "06:30 PM | 12 Jun 2026",
    review: "Thanks to @tahahussain, I feel confident presenting our GHL agency snapshots and web portal to major clients worldwide."
  }
];

const testimonialsRow2 = [
  {
    id: 5,
    name: "Kristin Watson",
    handle: "@kristinwatson12",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    platform: "linkedin",
    likes: "3.2k",
    comments: "1.1k",
    time: "11:20 AM | 05 Jul 2026",
    review: "Working with Taha Hussain was the best decision we made this year. High quality GHL setup and custom CSS!"
  },
  {
    id: 6,
    name: "Devon Lane",
    handle: "@devonlane99",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    platform: "twitter",
    likes: "1.8k",
    comments: "410",
    time: "03:40 PM | 19 Jul 2026",
    review: "Incredible GoHighLevel workflow automation! The funnel fluidity created by @tahahussain blew our clients away."
  },
  {
    id: 7,
    name: "Courtney Henry",
    handle: "@courtneyhenry24",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    platform: "facebook",
    likes: "2.5k",
    comments: "780",
    time: "04:15 PM | 28 Jul 2026",
    review: "Fast turnaround times, superb communication, and top-tier GHL funnel standards. Highly recommended @tahahussain!"
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    handle: "@savannahnguyen77",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
    platform: "instagram",
    likes: "1.1k",
    comments: "490",
    time: "10:05 AM | 01 Aug 2026",
    review: "Taha Hussain delivered a GoHighLevel snapshot and automated system that far exceeded our expectations. 10/10 service!"
  }
];

function RenderSocialIcon({ platform }) {
  if (platform === 'twitter') return <Twitter size={16} className="social-badge-icon twitter" />;
  if (platform === 'facebook') return <Facebook size={16} className="social-badge-icon facebook" />;
  if (platform === 'instagram') return <Instagram size={16} className="social-badge-icon instagram" />;
  return <Linkedin size={16} className="social-badge-icon linkedin" />;
}

function RenderTestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      {/* Top Header: Likes/Comments & Timestamp */}
      <div className="testimonial-card-top">
        <div className="card-stats-group">
          <span className="stat-pill"><Heart size={14} className="heart-icon" /> {item.likes}</span>
          <span className="stat-pill"><MessageSquare size={14} className="comment-icon" /> {item.comments}</span>
        </div>
        <span className="card-timestamp">{item.time}</span>
      </div>

      {/* Review Text */}
      <p className="testimonial-text">
        "{item.review.split('@tahahussain').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && <span className="highlight-tag">@tahahussain</span>}
          </React.Fragment>
        ))}"
      </p>

      {/* Footer User Profile & Social Icon */}
      <div className="testimonial-card-bottom">
        <div className="user-profile">
          <img src={item.avatar} alt={item.name} className="user-avatar" />
          <div className="user-info">
            <h4 className="user-name">{item.name}</h4>
            <span className="user-handle">{item.handle}</span>
          </div>
        </div>

        <RenderSocialIcon platform={item.platform} />
      </div>
    </div>
  );
}

function AboutMeSection({ onGoHome, onOpenVideo }) {
  return (
    <section className="about-me-page-section">
      {/* Back Button */}
      <button onClick={onGoHome} className="about-back-btn">
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* Main Grid: Left Portrait + Right Skills */}
      <div className="about-hero-grid">
        {/* Left Column: Dark Cinematic Portrait Card */}
        <div className="about-portrait-card">
          <div className="about-portrait-img-wrapper">
            <img 
              src="/Images/Taha Image.png" 
              alt="Taha Hussain" 
              className="about-portrait-img"
              onError={(e) => {
                e.target.src = "/Images/My Pic1.png";
              }}
            />
            <div className="about-portrait-gradient"></div>
          </div>
          <div className="about-portrait-info">
            <h3 className="about-portrait-name">Taha Hussain</h3>
            <p className="about-portrait-role">GoHighLevel Expert & Full Stack Developer</p>
            <div className="about-status-badge">
              <span className="status-green-dot"></span> Available for New Projects
            </div>
          </div>
        </div>

        {/* Right Column: Dark Modern Skills Section (Matching Screenshot) */}
        <div className="about-skills-container">
          <div className="skills-header-small">
            <span className="skills-number-tag">03</span>
            <h2 className="skills-title-bold">SKILLS</h2>
          </div>

          <div className="skills-list-grid">
            {skillsList.map((skill, index) => (
              <div className="skill-row-item" key={index}>
                <span className="skill-label-name">{skill.name}</span>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill-red" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="about-capabilities-wrapper">
        <div className="why-header">
          <div className="services-subtitle-badge">
            <span className="badge-pulse"></span>
            WHAT I CAN DO FOR YOU
          </div>
          <h2 className="why-title">
            Core Expertise & Services
          </h2>
          <p className="why-description">
            High-converting websites, scalable databases, secure cloud deployment, and top-tier SEO optimization.
          </p>
        </div>

        <div className="capabilities-cards-grid">
          {capabilitiesList.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div className="capability-card" key={cap.id}>
                <div className="capability-icon-box" style={{ background: `${cap.color}15`, color: cap.color }}>
                  <IconComp size={28} />
                </div>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-desc">{cap.desc}</p>
                <div className="capability-line-accent" style={{ background: cap.color }}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="about-cta-banner">
        <div className="about-cta-content">
          <h3 className="about-cta-heading">Ready to Launch Your Next Big Project?</h3>
          <p className="about-cta-sub">Let's connect on WhatsApp to discuss your funnel, CRM, or full stack website requirements.</p>
        </div>
        <div className="about-cta-buttons" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div 
            className="video-btn-container" 
            onClick={onOpenVideo} 
            role="button" 
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenVideo && onOpenVideo(); }}
            style={{ cursor: 'pointer' }}
          >
            <div className="play-circle">
              <Play className="play-icon" />
            </div>
            <div className="video-text">
              <span className="video-label-top">WATCH</span>
              <span className="video-label-bottom">Intro Video</span>
            </div>
          </div>
          <a 
            href="https://wa.me/923462973219" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hire-me"
          >
            Let's Work Together <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function LoomDemoPage({ onGoHome }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const automationArchitecture = [
    {
      id: 1,
      title: "Send Product Recommendation using GPT",
      category: "AI Product Recommendations",
      image: "/Images/Send Product Recommendation using GPT.png",
      fallbackImg: "/Images/Ai CHatbot.jpg",
      desc: "Intelligent GPT-powered AI workflow that analyzes customer behavior, evaluates user intent, and automatically delivers tailored product recommendations via SMS, email, and GHL CRM.",
      badge: "GPT AI Recommendation"
    },
    {
      id: 2,
      title: "FAQ Auto Reply",
      category: "24/7 Instant Response",
      image: "/Images/FAQ Auto Reply.png",
      fallbackImg: "/Images/Ai CHatbot.jpg",
      desc: "Automated instant response system that answers frequently asked questions across web chat, SMS, and GHL channels to keep leads engaged instantly.",
      badge: "FAQ Auto-Reply"
    },
    {
      id: 3,
      title: "Long-Term Nurture-Reactivation Email Sequence",
      category: "Reactivation Sequence",
      image: "/Images/Long-Term Nurture-Reactivation Email Sequence.png",
      fallbackImg: "/Images/Email Marketing.webp",
      desc: "Strategic long-term email drip campaign designed to re-engage cold leads, build trust over time, and convert dormant prospects into booked clients.",
      badge: "Reactivation Drip"
    },
    {
      id: 4,
      title: "Email Drip Sequence",
      category: "Email Marketing Automation",
      image: "/Images/Email Drip Sequence.png",
      fallbackImg: "/Images/Email Marketing.webp",
      desc: "High-converting multi-day email sequence that delivers value, introduces services, and drives automated sales pipeline movement.",
      badge: "Email Drip"
    },



    {
      id: 9,
      title: "GoHighLevel Recipe Birthday Template",
      category: "Automated Birthday Nurturing",
      image: "/Images/gohighlevel-recipe-birthday-template.png",
      fallbackImg: "/Images/Automation.jpg",
      desc: "Automated birthday promotion sequence that triggers personalized birthday offers, SMS discounts, and email greetings to boost customer retention.",
      badge: "Birthday Recipe"
    },
    {
      id: 10,
      title: "GoHighLevel FB Messenger Automation",
      category: "Meta Messenger Integration",
      image: "/Images/gohighlevel-fb-messenger.png",
      fallbackImg: "/Images/Ai CHatbot.jpg",
      desc: "Seamless Facebook Messenger auto-reply system that captures leads directly from social media ads, answers FAQs, and syncs contacts into GHL CRM.",
      badge: "FB Automation"
    }
  ];

  return (
    <section className="loom-demo-page-section">
      {/* Back Button */}
      <button onClick={onGoHome} className="about-back-btn">
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* Main Header */}
      <div className="loom-page-header">
        <div className="services-subtitle-badge">
          <span className="badge-pulse"></span>
          LIVE CLIENT DEMO & AUTOMATION ARCHITECTURE
        </div>
        <h1 className="loom-page-title">
          Client Loom Video Presentation & Automation Systems
        </h1>
        <p className="loom-page-subtitle">
          Watch our in-depth walkthrough video below and explore the actual GoHighLevel automation structures, CRM pipelines, and AI systems built for our clients.
        </p>
      </div>

      {/* Main Showcase Video Player Container */}
      <div className="loom-page-video-wrapper">
        <div className="loom-browser-top-bar">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="loom-browser-title">
            <span>📹 Client Loom Video Presentation - Live Systems Walkthrough</span>
          </div>
        </div>
        <div className="loom-video-frame">
          <video 
            controls 
            autoPlay
            playsInline
            className="loom-video-element"
            onError={(e) => {
              if (!e.target.dataset.triedFallback) {
                e.target.dataset.triedFallback = "true";
                e.target.src = "/Images/Fiver Video.mp4";
              }
            }}
          >
            <source src="/Images/loom video.mp4" type="video/mp4" />
            <source src="/Images/loom video" type="video/mp4" />
            <source src="/Images/Fiver Video.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>

      {/* Section Divider */}
      <div className="works-header" style={{ marginTop: '80px', marginBottom: '30px' }}>
        <div className="services-subtitle-badge">
          <span className="badge-pulse"></span>
          SYSTEM STRUCTURE & WORKFLOW ARCHITECTURE
        </div>
        <h2 className="works-main-title" style={{ fontSize: '36px' }}>
          Explore Our GoHighLevel Automations & Systems
        </h2>
        <p className="why-description" style={{ maxWidth: '680px', margin: '12px auto 0 auto' }}>
          Click on any automation workflow below to view the detailed blueprint structure.
        </p>
      </div>

      {/* Automation Images & Structures Grid */}
      <div className="automation-grid">
        {automationArchitecture.map((item) => (
          <div 
            className="automation-card" 
            key={item.id}
            onClick={(e) => {
              const currentImg = e.currentTarget.querySelector('.automation-card-img');
              const activeSrc = (currentImg && currentImg.src) ? currentImg.src : (item.image || item.fallbackImg);
              setSelectedImg({
                ...item,
                activeSrc
              });
            }}
          >
            <div className="automation-card-image-box">
              <img 
                src={item.image} 
                alt={item.title} 
                className="automation-card-img"
                onError={(e) => {
                  const target = e.target;
                  if (!target.dataset.triedJpg && target.src.endsWith('.png')) {
                    target.dataset.triedJpg = 'true';
                    target.src = target.src.replace('.png', '.jpg');
                  } else if (!target.dataset.triedWebp && target.src.endsWith('.jpg')) {
                    target.dataset.triedWebp = 'true';
                    target.src = target.src.replace('.jpg', '.webp');
                  } else if (item.fallbackImg && target.src !== item.fallbackImg) {
                    target.src = item.fallbackImg;
                  }
                }}
              />
              <div className="automation-image-overlay">
                <span className="preview-pill"><ExternalLink size={14} /> View Structure</span>
              </div>
              <span className="automation-badge">{item.badge}</span>
            </div>
            <div className="automation-card-content">
              <span className="automation-cat">{item.category}</span>
              <h3 className="automation-title">{item.title}</h3>
              <p className="automation-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Zoom Modal */}
      {selectedImg && (
        <AutomationModalZoom selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />
      )}

      {/* CTA Box */}
      <div className="about-cta-banner" style={{ marginTop: '70px' }}>
        <div className="about-cta-content">
          <h3 className="about-cta-heading">Want a Similar Custom Automation System?</h3>
          <p className="about-cta-sub">Let's build a custom GoHighLevel workflow, CRM pipeline, and high-converting funnel for your agency.</p>
        </div>
        <a 
          href="https://wa.me/923462973219" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-hire-me"
        >
          Discuss Your Automation <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function AutomationModalZoom({ selectedImg, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!selectedImg) return null;

  const activeSrc = selectedImg.activeSrc || selectedImg.image || selectedImg.fallbackImg || '';

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="automation-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <div className="video-modal-title">
            <span className="video-modal-title-dot"></span>
            <span>{selectedImg.title || 'Automation Workflow Structure'}</span>
          </div>
          <button 
            type="button"
            className="video-modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="automation-modal-body">
          <div className="automation-modal-img-viewport">
            <img 
              src={activeSrc} 
              alt={selectedImg.title || 'Automation Diagram'} 
              className="automation-modal-img"
              onError={(e) => {
                const target = e.target;
                if (!target.dataset.triedJpg && target.src.endsWith('.png')) {
                  target.dataset.triedJpg = 'true';
                  target.src = target.src.replace('.png', '.jpg');
                } else if (!target.dataset.triedWebp && target.src.endsWith('.jpg')) {
                  target.dataset.triedWebp = 'true';
                  target.src = target.src.replace('.jpg', '.webp');
                } else if (selectedImg.fallbackImg && target.src !== selectedImg.fallbackImg) {
                  target.src = selectedImg.fallbackImg;
                }
              }}
            />
          </div>

          <div className="automation-modal-info">
            <h4>{selectedImg.title || 'Automation Workflow'}</h4>
            <p>{selectedImg.desc || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isVideoModalOpen]);

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    if (window.history && window.history.pushState) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    if (e) e.preventDefault();

    if (targetId === 'about') {
      setActiveTab('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'loom-demo') {
      setActiveTab('loom-demo');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const wasOther = activeTab !== 'home';
    setActiveTab('home');

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 90;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, wasOther ? 60 : 20);
  };

  return (
    <div className="hero-wrapper">
      {/* Background Shades & Shadows from User's Folder */}
      <img 
        src="/Images/Backgrond shade.jpg" 
        alt="Background Shade" 
        className="bg-shade-image"
      />
      <img 
        src="/Images/Background shadow2.png" 
        alt="Background Shadow 2" 
        className="bg-shadow2-image"
      />
      <img 
        src="/Images/rounded background shadow.png" 
        alt="Rounded Background Shadow" 
        className="bg-rounded-shadow-image"
      />

      {/* Decorative Outer Rings */}
      <div className="top-left-ring"></div>
      <div className="bottom-left-rings"></div>

      {/* Left-Side Floating "Scroll to Top" Arrow Button */}
      <button 
        onClick={scrollToTop} 
        className="floating-scroll-top-btn"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="arrow-top-icon" />
        <span className="scroll-top-tooltip">Back to Top</span>
      </button>

      {/* Right-Side Floating Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/923462973219" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} color="#ffffff" />
        <span className="whatsapp-tooltip">Chat with us!</span>
        <span className="whatsapp-pulse"></span>
      </a>

      <div className="container">
        {/* Top Header / Contact Bar */}
        <div className="top-bar">
          <div className="top-bar-left">
            <a href="mailto:muntahahussainsample@gmail.com" className="top-bar-item">
              <Mail className="top-bar-icon" />
              <span>muntahahussainsample@gmail.com</span>
            </a>
            <a href="tel:+923462973219" className="top-bar-item">
              <Phone className="top-bar-icon" />
              <span>+92 3462973219</span>
            </a>
            <a 
              href="https://wa.me/923462973219" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-item whatsapp-top-link"
            >
              <WhatsAppIcon size={14} color="#25D366" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="top-bar-right">
            <a href="#twitter" aria-label="Twitter" className="social-link">
              <Twitter size={15} />
            </a>
            <a href="#facebook" aria-label="Facebook" className="social-link">
              <Facebook size={15} />
            </a>
            <a href="#youtube" aria-label="YouTube" className="social-link">
              <Youtube size={15} />
            </a>
            <a 
              href="https://www.linkedin.com/in/taha-hussain-8a0732284/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="social-link"
            >
              <Linkedin size={15} />
            </a>
            <a 
              href="https://wa.me/923462973219" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className="social-link whatsapp-social-icon"
            >
              <WhatsAppIcon size={15} color="#25D366" />
            </a>
          </div>
        </div>

        {/* Main Floating Navigation Header Card */}
        <header className="main-header">
          <div className="logo-container">
            <button onClick={(e) => handleNavClick(e, 'home')} className="header-brand-logo-link border-none-btn">
              <span className="brand-dot"></span>
              <span className="header-brand-name">Taha Hussain</span>
            </button>
          </div>

          <nav>
            <ul className="nav-links">
              <li className="nav-link-item">
                <button 
                  onClick={(e) => handleNavClick(e, 'home')} 
                  className={`nav-link border-none-btn ${activeTab === 'home' ? 'active-nav-link' : ''}`}
                >
                  Home
                </button>
              </li>
              <li className="nav-link-item">
                <button 
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                  className="nav-link border-none-btn"
                >
                  Portfolio
                </button>
              </li>
              <li className="nav-link-item">
                <button 
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="nav-link border-none-btn"
                >
                  Services
                </button>
              </li>
              <li className="nav-link-item">
                <button 
                  onClick={(e) => handleNavClick(e, 'about')} 
                  className={`nav-link border-none-btn ${activeTab === 'about' ? 'active-nav-link' : ''}`}
                >
                  About Me
                </button>
              </li>
              <li className="nav-link-item">
                <button 
                  onClick={(e) => handleNavClick(e, 'loom-demo')} 
                  className={`nav-link border-none-btn ${activeTab === 'loom-demo' ? 'active-nav-link' : ''}`}
                >
                  Automation Demo
                </button>
              </li>
            </ul>
          </nav>

          <a href="https://wa.me/923462973219" target="_blank" rel="noopener noreferrer" className="btn-lets-talk">
            Let's Talk <ArrowRight size={16} />
          </a>
        </header>

        {/* ====================================================
            PAGE CONTENT SWITCHING (HOME VS ABOUT ME VS LOOM DEMO)
           ==================================================== */}
        {activeTab === 'about' ? (
          <AboutMeSection onGoHome={(e) => handleNavClick(e, 'home')} onOpenVideo={() => setIsVideoModalOpen(true)} />
        ) : activeTab === 'loom-demo' ? (
          <LoomDemoPage onGoHome={(e) => handleNavClick(e, 'home')} />
        ) : (
          <>
            {/* Main Hero Section Grid */}
            <main className="hero-grid" id="home">
              {/* Left Column: Heading, Subtitle, CTAs */}
              <div className="hero-content">
                <h1 className="hero-title">
                  Hey, I am <span className="wave-emoji">👋</span>
                  <br />
                  Taha Hussain
                  <br />
                  <span className="highlight-wrapper">
                    GoHighLevel Expert & Full Stack Developer
                    <img 
                      src="/Images/yellow line.png" 
                      alt="Yellow Brush Line" 
                      className="yellow-underline-img" 
                    />
                  </span>
                </h1>

                <p className="hero-subtitle">
                  Agency work with top rated talented people provide quality GoHighLevel & Full Stack Development services.
                </p>

                <div className="cta-group">
                  <a href="https://wa.me/923462973219" target="_blank" rel="noopener noreferrer" className="btn-hire-me">
                    Hire Me <ArrowRight size={18} />
                  </a>

                  <div 
                    className="video-btn-container" 
                    onClick={() => setIsVideoModalOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsVideoModalOpen(true); }}
                  >
                    <div className="play-circle">
                      <Play className="play-icon" />
                    </div>
                    <div className="video-text">
                      <span className="video-label-top">WATCH</span>
                      <span className="video-label-bottom">Intro Video</span>
                    </div>
                  </div>

                  {/* Spiral Arrow Image */}
                  <img 
                    src="/Images/Rounded Arrow.png" 
                    alt="Rounded Arrow" 
                    className="spiral-arrow-img" 
                  />
                </div>
              </div>

              {/* Right Column: Person Image, Shapes & Interactive Badges */}
              <div className="hero-visual">
                {/* Soft Purple Background Circle */}
                <div className="purple-hero-bg-circle"></div>

                {/* Organic Blue Background Blob */}
                <div className="blue-hero-bg-blob"></div>

                {/* Dot Matrix Pattern */}
                <div className="dot-pattern"></div>

                {/* Main Person Image (Transparent Cutout) */}
                <img 
                  src="/Images/My Pic1.png" 
                  alt="Taha Hussain - GoHighLevel Expert & Full Stack Developer" 
                  className="man-image" 
                />

                {/* Floating Badge 1: Top-Right "User Research" Pill */}
                <div className="badge-user-research">
                  <div className="search-icon-wrapper">
                    <Search className="search-icon" />
                  </div>
                  <span className="badge-user-research-text">GHL & Full Stack</span>
                </div>

                {/* Floating Badge 2: Left Middle Experience Circular Badge */}
                <div className="badge-experience-circle">
                  <svg className="exp-badge-svg-text" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fontSize="8.5" fontWeight="700" fill="#475569" letterSpacing="1.2">
                      <textPath href="#textPath" startOffset="0%">
                        • EXPERT • GOHIGHLEVEL • FULL STACK •
                      </textPath>
                    </text>
                  </svg>
                  <div className="exp-number">3.5</div>
                  <div className="exp-years">YEARS</div>
                </div>

                {/* Floating Badge 3: Bottom Right Customers Card */}
                <div className="badge-customers-card">
                  <div className="badge-customers-count">10K+</div>
                  <div className="badge-customers-label">Real Customers</div>
                  <div className="avatar-stack">
                    <img 
                      src="/Images/Services Page Pic6.png" 
                      alt="Customer 1" 
                      className="avatar-img"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                    <img 
                      src="/Images/Services Page Pic7.png" 
                      alt="Customer 2" 
                      className="avatar-img"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" 
                      alt="Customer 3" 
                      className="avatar-img" 
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" 
                      alt="Customer 4" 
                      className="avatar-img" 
                    />
                    <button className="avatar-arrow-btn" aria-label="View customers">
                      <ArrowRight className="avatar-arrow-icon" />
                    </button>
                  </div>
                </div>

                {/* Soft Translucent Bottom-Right Circle Overlay */}
                <div className="soft-circle-overlay"></div>
              </div>
            </main>

            {/* ====================================================
                SECTION 1: OFFERED SERVICES (WITH CRM.PNG)
               ==================================================== */}
            <section id="services" className="image-cards-section">
              {/* Section Header */}
              <div className="services-header">
                <div className="services-subtitle-badge">
                  <span className="badge-pulse"></span>
                  OUR SERVICES
                </div>
                <h2 className="services-title">
                  Offered Services
                </h2>
                <p className="services-description">
                  Explore our wide range of professional GoHighLevel & Full Stack Development services designed to elevate your brand.
                </p>
              </div>

              {/* 6 Image Banner Cards Grid */}
              <div className="image-cards-grid">
                {servicesData.map((project) => (
                  <div className="image-project-card" key={project.id}>
                    {/* Card Top Image Box */}
                    <div className="card-image-box">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="card-main-image"
                        onError={(e) => {
                          e.target.src = project.fallbackImg;
                        }}
                      />
                      <div className="card-image-overlay"></div>
                    </div>

                    {/* Card Content Body */}
                    <div className="card-content-body">
                      {/* Category Tags Row */}
                      <div className="card-categories-row">
                        {project.categories.map((cat, idx) => (
                          <span key={idx} className="category-tag">
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Card Title */}
                      <h3 className="card-project-title">
                        {project.title}
                      </h3>

                      {/* Card Short Description */}
                      <p className="card-project-desc">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ====================================================
                SECTION 2: WORKS & PREVIOUS PROJECTS (TALL WEBPAGE CARDS)
               ==================================================== */}
            <section id="portfolio" className="works-section">
              {/* Section Header with Purple Double Line & Center Pill */}
              <div className="works-header">
                <h2 className="works-main-title">
                  Works & Previous Projects
                </h2>

                {/* Purple Accent Lines & Center Pill */}
                <div className="purple-accent-divider">
                  <div className="purple-lines-stack">
                    <div className="purple-thin-line"></div>
                    <div className="purple-thin-line"></div>
                  </div>
                  <div className="purple-center-pill"></div>
                  <div className="purple-lines-stack">
                    <div className="purple-thin-line"></div>
                    <div className="purple-thin-line"></div>
                  </div>
                </div>
              </div>

              {/* 6 Tall Webpage Mockup Cards Grid */}
              <div className="tall-webpage-grid">
                {worksProjectsData.map((item) => (
                  <div className="tall-webpage-card" key={item.id}>
                    {/* Browser Mockup Top Header */}
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="browser-address-bar">
                        <a 
                          href={item.link || `#${item.title}`} 
                          target={item.link ? "_blank" : "_self"} 
                          rel="noopener noreferrer" 
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {item.link ? item.link : `https://${item.title.toLowerCase().replace(/\s+/g, '')}.com`}
                        </a>
                      </div>
                    </div>

                    {/* Long Webpage Image View Window */}
                    <div className="long-image-window">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="long-webpage-img"
                      />
                      <div className="scroll-hover-indicator">
                        <span>Hover to Scroll Page</span>
                      </div>
                    </div>

                    {/* Card Footer Info */}
                    <div className="tall-card-footer">
                      <div>
                        <h3 className="tall-card-title">{item.title}</h3>
                        <p className="tall-card-category">{item.category}</p>
                      </div>
                      <a 
                        href={item.link || "#preview"} 
                        target={item.link ? "_blank" : "_self"} 
                        rel="noopener noreferrer" 
                        className="tall-preview-btn" 
                        aria-label="View Full Page"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centered Large "Order Now!" Purple Pill Button */}
              <div className="order-now-wrapper">
                <a href="https://wa.me/923462973219" target="_blank" rel="noopener noreferrer" className="btn-order-now">
                  Order Now!
                </a>
              </div>

              {/* Loom Video Showcase Presentation Below Order Now - Click Navigates to Loom & Automation Page */}
              <div className="loom-video-showcase-wrapper">
                <div 
                  className="loom-video-card loom-video-clickable-card"
                  onClick={(e) => handleNavClick(e, 'loom-demo')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick(e, 'loom-demo'); }}
                >
                  <div className="loom-video-header">
                    <div className="services-subtitle-badge">
                      <span className="badge-pulse"></span>
                      CLIENT DEMO & AUTOMATION SHOWCASE
                    </div>
                    <h3 className="loom-video-title">
                      Watch Our Live Client Loom Presentation & Automation Systems
                    </h3>
                    <p className="loom-video-subtitle">
                      Click below to watch the full Loom Video demo and explore our complete GoHighLevel CRM & workflow automation structures.
                    </p>
                  </div>

                  <div className="loom-video-player-container loom-clickable-preview">
                    <div className="loom-browser-top-bar">
                      <div className="browser-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="loom-browser-title">
                        <span>📹 Click to Open Full Loom Video & Automation Structure Page</span>
                      </div>
                    </div>
                    <div className="loom-video-frame loom-preview-frame">
                      {/* Real Loom Video Frame Thumbnail Preview */}
                      <video 
                        className="loom-thumbnail-bg-img"
                        preload="metadata"
                        muted
                        playsInline
                        onError={(e) => {
                          if (!e.target.dataset.triedFallback) {
                            e.target.dataset.triedFallback = "true";
                            e.target.src = "/Images/Fiver Video.mp4#t=1.0";
                          }
                        }}
                      >
                        <source src="/Images/loom video.mp4#t=1.0" type="video/mp4" />
                        <source src="/Images/loom video#t=1.0" type="video/mp4" />
                        <source src="/Images/Fiver Video.mp4" type="video/mp4" />
                      </video>
                      <div className="loom-thumbnail-dark-overlay"></div>

                      <div className="loom-play-btn-pulse">
                        <div className="loom-play-icon-circle">
                          <Play size={36} className="loom-play-svg" />
                        </div>
                      </div>
                      <div className="loom-preview-overlay">
                        <span className="loom-click-badge">Click Here to Open Video & Automation Blueprint Page →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================================
                SECTION 3: WHY CHOOSE ME (VIP FEATURE HIGHLIGHTS)
               ==================================================== */}
            <section id="why-choose-me" className="why-choose-section">
              {/* Section Header */}
              <div className="why-header">
                <div className="services-subtitle-badge">
                  <span className="badge-pulse"></span>
                  WHY CHOOSE ME
                </div>
                <h2 className="why-title">
                  Why Work With Me On Your Next Big Project?
                </h2>
                <p className="why-description">
                  Combining strategy, top-tier design aesthetics, and modern web engineering to deliver results that drive growth.
                </p>
              </div>

              {/* 6 VIP Feature Cards Grid */}
              <div className="why-cards-grid">
                {whyChooseMeData.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div className="why-feature-card" key={item.id}>
                      {/* Icon Box */}
                      <div 
                        className="why-icon-box"
                        style={{ background: item.bgColor }}
                      >
                        <IconComp size={26} style={{ color: item.color }} />
                      </div>

                      {/* Title & Description */}
                      <h3 className="why-card-title">{item.title}</h3>
                      <p className="why-card-desc">{item.description}</p>

                      {/* Corner Accent Glow */}
                      <div 
                        className="why-card-glow"
                        style={{ background: item.color }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ====================================================
                SECTION 4: VIP 2-ROW INFINITE SLIDING TESTIMONIALS
               ==================================================== */}
            <section id="testimonials" className="testimonials-section">
              {/* Section Header */}
              <div className="why-header">
                <div className="services-subtitle-badge">
                  <span className="badge-pulse"></span>
                  CLIENT TESTIMONIALS
                </div>
                <h2 className="why-title">
                  Loved By Clients & Creators Worldwide
                </h2>
                <p className="why-description">
                  See what business owners, founders, and teams say about working with us.
                </p>
              </div>

              {/* 2-Row Infinite Marquee Container */}
              <div className="testimonials-marquee-container">
                {/* Fade Gradients at Left & Right Edges */}
                <div className="marquee-fade-left"></div>
                <div className="marquee-fade-right"></div>

                {/* ROW 1: Slides Right to Left */}
                <div className="marquee-row marquee-row-left">
                  <div className="marquee-track">
                    {testimonialsRow1.concat(testimonialsRow1).concat(testimonialsRow1).map((item, idx) => (
                      <RenderTestimonialCard key={`r1-${idx}`} item={item} />
                    ))}
                  </div>
                </div>

                {/* ROW 2: Slides Left to Right */}
                <div className="marquee-row marquee-row-right">
                  <div className="marquee-track">
                    {testimonialsRow2.concat(testimonialsRow2).concat(testimonialsRow2).map((item, idx) => (
                      <RenderTestimonialCard key={`r2-${idx}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ====================================================
            SECTION 5: VIP FLOATING CARD FOOTER
           ==================================================== */}
        <footer className="footer-floating-card">
          {/* Footer Top Grid */}
          <div className="footer-top-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-logo-row">
                <span className="brand-dot"></span>
                <span className="footer-brand-name">Taha Hussain</span>
              </div>
              <p className="footer-brand-desc">
                Taha Hussain empowers clients and businesses to transform raw ideas into high-converting GoHighLevel funnels and full stack web solutions.
              </p>
              <div className="footer-socials-row">
                <a href="#twitter" aria-label="Twitter" className="footer-social-icon-btn">
                  <Twitter size={16} />
                </a>
                <a href="#instagram" aria-label="Instagram" className="footer-social-icon-btn">
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/taha-hussain-8a0732284/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="footer-social-icon-btn"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://github.com/Taha258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub" 
                  className="footer-social-icon-btn"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://wa.me/923462973219" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp" 
                  className="footer-social-icon-btn whatsapp-footer-btn"
                >
                  <WhatsAppIcon size={16} color="#25D366" />
                </a>
              </div>
            </div>

            {/* Nav Columns Group */}
            <div className="footer-links-group">
              {/* Product Column */}
              <div className="footer-col">
                <h4 className="footer-col-title">Services</h4>
                <ul className="footer-links-list">
                  <li><button onClick={(e) => handleNavClick(e, 'services')} className="border-none-btn footer-nav-btn">GHL CRM</button></li>
                  <li><button onClick={(e) => handleNavClick(e, 'services')} className="border-none-btn footer-nav-btn">SMS & Email</button></li>
                  <li><button onClick={(e) => handleNavClick(e, 'services')} className="border-none-btn footer-nav-btn">Automations</button></li>
                  <li><button onClick={(e) => handleNavClick(e, 'services')} className="border-none-btn footer-nav-btn">AI Chatbots</button></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="footer-col">
                <h4 className="footer-col-title">Portfolio</h4>
                <ul className="footer-links-list">
                  <li><button onClick={(e) => handleNavClick(e, 'portfolio')} className="border-none-btn footer-nav-btn">Featured Works</button></li>
                  <li><button onClick={(e) => handleNavClick(e, 'portfolio')} className="border-none-btn footer-nav-btn">Case Studies</button></li>
                  <li><button onClick={(e) => handleNavClick(e, 'portfolio')} className="border-none-btn footer-nav-btn">Funnel Demos</button></li>
                  <li><a href="https://github.com/Taha258" target="_blank" rel="noopener noreferrer">GitHub Projects</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="footer-col">
                <h4 className="footer-col-title">Connect</h4>
                <ul className="footer-links-list">
                  <li><button onClick={(e) => handleNavClick(e, 'about')} className="border-none-btn footer-nav-btn">About Me</button></li>
                  <li><a href="https://www.linkedin.com/in/taha-hussain-8a0732284/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://wa.me/923462973219" target="_blank" rel="noopener noreferrer">WhatsApp Direct</a></li>
                  <li><a href="mailto:muntahahussainsample@gmail.com">Email Me</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom-bar">
            <span className="copyright-text">
              © 2026 Taha Hussain. All rights reserved.
            </span>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookies Settings</a>
            </div>
          </div>
        </footer>

      </div>

      {/* Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div 
          className="video-modal-overlay" 
          onClick={() => setIsVideoModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="video-modal-title">
                <span className="video-modal-title-dot"></span>
                <span>Taha Hussain - Intro Video</span>
              </div>
              <button 
                className="video-modal-close-btn" 
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close video modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="video-modal-player-wrapper">
              <video 
                controls 
                autoPlay 
                playsInline
                src="/Images/Fiver Video.mp4" 
                className="video-modal-element"
              >
                Your browser does not support HTML video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
