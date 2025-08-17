export interface ContentData {
  navbar: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    contact: string;
  };
  hero: {
    title: string;
    slogan: string;
    callUs: string;
    sendEmail: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    items: string[];
  };
  whyUs: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    address: string;
    mobile: string;
    email: string;
    whatsappLink: string;
  };
  footer: {
    copyright: string;
    quickLinks: {
      contact: string;
      privacy: string;
    };
  };
}

export const content: { ar: ContentData; en: ContentData } = {
  ar: {
    navbar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      whyUs: "المزايا",
      contact: "التواصل"
    },
    hero: {
      title: "ريم حسين العوذلي للتدقيق والمحاسبة",
      slogan: "خبرة تدقيق ورؤية محاسبية تصنع الفرق",
      callUs: "اتصل بنا",
      sendEmail: "إرسال بريد"
    },
    about: {
      title: "من نحن",
      description: "مكتب مهني مرخّص يقدم خدمات المراجعة وتدقيق الحسابات، وإعداد التقارير المالية، والخدمات الاستشارية والضريبية، مع اعتماد أحدث التقنيات وأدوات الذكاء الاصطناعي لضمان أعلى مستويات الكفاءة والدقة، وفق أعلى المعايير المهنية والقوانين المحلية."
    },
    services: {
      title: "الخدمات",
      items: [
        "تدقيق الحسابات وإصدار تقارير المراجعة",
        "إمساك الدفاتر وتنظيم السجلات المالية",
        "إعداد التقارير المالية الدورية",
        "الاستشارات المالية والضريبية",
        "المراجعة الداخلية وتحسين الإجراءات المالية"
      ]
    },
    whyUs: {
      title: "المزايا",
      items: [
        "خبرة مهنية معتمدة",
        "التزام كامل بالمعايير والقوانين",
        "دقة وسرعة في الإنجاز",
        "حلول مخصصة لكل عميل",
        "تطوير رقمي متقدم باستخدام أدوات الذكاء الاصطناعي لزيادة الكفاءة وتحسين جودة الخدمات"
      ]
    },
    contact: {
      title: "بيانات التواصل",
      address: "مارينا توين تاور – لوسيل – بلوك B – الطابق العاشر – مكتب B3",
      mobile: "+974 51566651",
      email: "CEO@REEM-AUDITING.COM",
      whatsappLink: "https://wa.me/97451566651"
    },
    footer: {
      copyright: "حقوق النشر © 2025 – ريم حسين العوذلي للتدقيق والمحاسبة",
      quickLinks: {
        contact: "اتصل بنا",
        privacy: "سياسة الخصوصية"
      }
    }
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      whyUs: "Why Us",
      contact: "Contact"
    },
    hero: {
      title: "Reem Hussain AlOzali for Auditing & Accounting",
      slogan: "Audit Expertise & Accounting Vision That Makes a Difference",
      callUs: "Call Us",
      sendEmail: "Send Email"
    },
    about: {
      title: "About Us",
      description: "A licensed professional office providing audit and accounting services, preparation of financial reports, and financial and tax advisory, while adopting the latest technologies and AI tools to ensure the highest levels of efficiency and accuracy, in compliance with the highest professional standards and local regulations."
    },
    services: {
      title: "Services",
      items: [
        "Auditing and issuing audit reports",
        "Bookkeeping and organizing financial records",
        "Preparing periodic financial reports",
        "Financial and tax advisory",
        "Internal audit and financial process improvement"
      ]
    },
    whyUs: {
      title: "Why Us",
      items: [
        "Certified professional expertise",
        "Full compliance with standards and regulations",
        "Accuracy and speed in execution",
        "Tailored solutions for each client",
        "Advanced digital development using AI tools to enhance efficiency and service quality"
      ]
    },
    contact: {
      title: "Contact Information",
      address: "Marina Twin Towers – Lusail – Block B – 10th Floor – Office B3",
      mobile: "+974 51566651",
      email: "CEO@REEM-AUDITING.COM",
      whatsappLink: "https://wa.me/97451566651"
    },
    footer: {
      copyright: "Copyright © 2025 – Reem Hussein Al-Oudhali for Auditing & Accounting",
      quickLinks: {
        contact: "Contact Us",
        privacy: "Privacy Policy"
      }
    }
  }
};