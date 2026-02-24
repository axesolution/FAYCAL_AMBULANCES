export type Language = 'fr' | 'ar';

export const translations = {
  fr: {
    brand: "Faycal Ambulance",
    tagline: "Service Professionnel Alger",
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      contact: "Contact",
      emergency: "Urgence 24/7"
    },
    hero: {
      badge: "Réponse d'urgence 24/7 à Alger",
      title: "Des soins attentionnés quand cela compte le plus",
      desc: "Ambulance Faycal fournit un transport médical d'urgence professionnel et des services funéraires avec un engagement envers la dignité, la rapidité et la fiabilité.",
      callNow: "Appeler : +213 123 456",
      ourServices: "Nos Services"
    },
    services: {
      title: "Nos Services de Base",
      desc: "Solutions de transport complètes adaptées aux besoins des citoyens d'Alger.",
      emergency: {
        title: "Transport d'Urgence",
        desc: "Transport médical à réponse rapide avec des ambulances modernes entièrement équipées."
      },
      funeral: {
        title: "Services Funéraires",
        desc: "Transport digne et respectueux pour vos proches à Alger et au-delà."
      },
      medical: {
        title: "Assistance Médicale",
        desc: "Équipes paramédicales qualifiées dédiées aux soins des patients durant chaque voyage."
      },
      learnMore: "En savoir plus"
    },
    whyUs: {
      badge: "Fiabilité et Confiance",
      title: "Pourquoi Choisir Ambulance Faycal ?",
      items: [
        { title: "Disponibilité 24/7", desc: "Notre flotte et notre personnel sont en veille permanente." },
        { title: "Flotte de Pointe", desc: "Équipé de technologies modernes de réanimation et de stabilisation." },
        { title: "Personnel Professionnel", desc: "Équipe composée de secouristes certifiés et de soignants compatissants." }
      ]
    },
    cta: {
      title: "Besoin d'une Assistance Urgente ?",
      desc: "N'attendez pas. Notre équipe de répartition est prête à vous aider dès maintenant.",
      button: "Appeler le Centre d'Urgence"
    },
    footer: {
      about: "Fournissant des services de transport médical et funéraire professionnels et compatissants à Alger depuis 2010.",
      quickLinks: "Liens Rapides",
      contactInfo: "Infos Contact",
      rights: "Tous droits réservés."
    },
    contact: {
      title: "Contactez-nous",
      desc: "Contactez-nous pour des demandes non urgentes ou des devis.",
      direct: "Contact Direct",
      form: {
        title: "Envoyer une Demande",
        name: "Nom Complet",
        phone: "Numéro de Téléphone",
        email: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer le Message",
        success: "Demande envoyée. Nous vous contacterons sous peu."
      }
    }
  },
  ar: {
    brand: "إسعاف فيصل",
    tagline: "خدمة احترافية في الجزائر العاصمة",
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      emergency: "طوارئ 24/7"
    },
    hero: {
      badge: "استجابة طارئة على مدار الساعة في الجزائر",
      title: "رعاية رحيمة عندما تكون في أمس الحاجة إليها",
      desc: "توفر إسعاف فيصل نقلاً طبيًا طارئًا احترافيًا وخدمات جنائزية مع التزام بالكرامة والسرعة والموثوقية.",
      callNow: "اتصل الآن: +213 123 456",
      ourServices: "خدماتنا"
    },
    services: {
      title: "خدماتنا الأساسية",
      desc: "حلول نقل شاملة مصممة لتلبية احتياجات مواطني الجزائر العاصمة.",
      emergency: {
        title: "النقل الطارئ",
        desc: "نقل طبي سريع الاستجابة بسيارات إسعاف حديثة ومجهزة بالكامل."
      },
      funeral: {
        title: "خدمات الجنازة",
        desc: "نقل محترم ولائق لأحبائكم في الجزائر العاصمة وخارجها."
      },
      medical: {
        title: "المساعدة الطبية",
        desc: "فرق طبية مؤهلة مكرسة لرعاية المرضى خلال كل رحلة."
      },
      learnMore: "اقرأ المزيد"
    },
    whyUs: {
      badge: "الموثوقية والثقة",
      title: "لماذا تختار إسعاف فيصل؟",
      items: [
        { title: "متاح 24/7", desc: "أسطولنا وموظفونا في حالة تأهب دائم لمساعدتكم." },
        { title: "أسطول حديث", desc: "مجهز بأحدث تقنيات الإنعاش والاستقرار لسلامة المرضى." },
        { title: "طاقم محترف", desc: "يتكون فريقنا من مسعفين معتمدين ومقدمي رعاية رحماء." }
      ]
    },
    cta: {
      title: "هل تحتاج إلى مساعدة عاجلة؟",
      desc: "لا تتردد. فريقنا جاهز لمساعدتك الآن. الرعاية المهنية على بعد مكالمة واحدة.",
      button: "اتصل بمركز الطوارئ"
    },
    footer: {
      about: "تقديم خدمات نقل طبية وجنائزية احترافية ورحيمة في الجزائر العاصمة والمناطق المجاورة منذ عام 2010.",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      rights: "جميع الحقوق محفوظة."
    },
    contact: {
      title: "اتصل بنا",
      desc: "تواصل معنا للاستفسارات غير العاجلة أو لطلب عروض الأسعار.",
      direct: "اتصال مباشر",
      form: {
        title: "أرسل استفسارك",
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        success: "تم إرسال الاستفسار. سنتصل بك قريبًا."
      }
    }
  }
};
