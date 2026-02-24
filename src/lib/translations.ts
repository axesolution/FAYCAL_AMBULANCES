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
      desc: "Ambulance Faycal fournit un transport médical d'urgence professionnel et des services funéraires avec un commitment envers la dignité, la rapidité et la fiabilité.",
      callNow: "Appeler : +213 123 456",
      ourServices: "Nos Services"
    },
    services: {
      title: "Nos Services",
      desc: "Reliable, professional, and empathetic transport solutions for medical and funeral needs in Algiers.",
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
      learnMore: "En savoir plus",
      medicalSection: {
        title: "Services d'Ambulance Médicale",
        desc: "Notre flotte d'ambulances est équipée pour tout gérer, des rendez-vous médicaux de routine aux interventions d'urgence critiques. Chaque véhicule est doté de professionnels formés dédiés à la sécurité des patients.",
        items: [
          { title: "Soutien de Vie de Base (BLS)", desc: "Transport non critique avec des techniciens médicaux d'urgence pour les patients nécessitant une surveillance." },
          { title: "Soutien de Vie Avancé (ALS)", desc: "Transport de soins critiques avec équipement spécialisé et ambulanciers pour les urgences cardiaques ou respiratoires." },
          { title: "Transferts Inter-Hospitaliers SI", desc: "Transfert sécurisé de patients gravement malades entre structures médicales avec support ventilatoire complet." }
        ]
      },
      funeralSection: {
        title: "Services de Transport Funéraire",
        desc: "En période de deuil, nous fournissons un service calme et digne pour ramener vos proches chez eux. Nous gérons toute la logistique avec le plus grand respect et une sensibilité culturelle.",
        items: [
          { title: "Transport National", desc: "Transport respectueux et digne des défunts à travers toutes les wilayas d'Algérie." },
          { title: "Support Administratif", desc: "Assistance pour tous les permis nécessaires et la documentation légale pour le transport." },
          { title: "Flotte Spécialisée", desc: "Véhicules climatisés conçus spécifiquement pour un transport funéraire respectueux." }
        ]
      }
    },
    about: {
      title: "À Propos de Nous",
      subtitle: "Dédié à fournir le plus haut standard de transport d'urgence et de soins funéraires au cœur d'Alger.",
      mission: {
        title: "Notre Mission",
        desc1: "Fondée avec la vision de combler le fossé dans le transport médical de qualité, Faycal Ambulance Services est devenue une pierre angulaire de la communauté d'Alger. Nous croyons que chaque patient mérite des soins dignes, professionnels et rapides lors de ses moments les plus vulnérables.",
        desc2: "Qu'il s'agisse d'un transfert d'urgence salvateur ou du dernier voyage d'un proche, notre engagement reste inébranlable : servir avec compassion, excellence et intégrité absolue."
      },
      values: {
        title: "Nos Valeurs Fondamentales",
        items: [
          { title: "Intégrité", desc: "Nous maintenons les normes éthiques les plus élevées dans toutes nos interactions." },
          { title: "Compassion", desc: "L'empathie est au cœur de tout ce que nous faisons, traitant chaque patient comme un membre de la famille." },
          { title: "Excellence", desc: "Améliorer continuellement nos compétences et notre flotte pour rester à la pointe." },
          { title: "Travail d'Équipe", desc: "Collaborer de manière fluide avec les hôpitaux et les familles pour les meilleurs résultats." }
        ]
      }
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
      title: "خدماتنا",
      desc: "حلول نقل موثوقة واحترافية ورحيمة للاحتياجات الطبية والجنائزية في الجزائر العاصمة.",
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
      learnMore: "اقرأ المزيد",
      medicalSection: {
        title: "خدمات الإسعاف الطبي",
        desc: "أسطولنا مجهز للتعامل مع كل شيء من المواعيد الطبية الروتينية إلى حالات الطوارئ الحرجة. كل سيارة يقودها محترفون مكرسون لسلامة المرضى.",
        items: [
          { title: "دعم الحياة الأساسي (BLS)", desc: "نقل الحالات غير الحرجة مع فنيي طب الطوارئ للمرضى الذين يحتاجون إلى مراقبة." },
          { title: "دعم الحياة المتقدم (ALS)", desc: "نقل الرعاية الحرجة مع معدات متخصصة ومسعفين لحالات الطوارئ القلبية أو التنفسية." },
          { title: "نقل العناية المركزة بين المستشفيات", desc: "نقل آمن للمرضى ذوي الحالات الحرجة بين المنشآت الطبية مع دعم كامل لجهاز التنفس الاصطناعي." }
        ]
      },
      funeralSection: {
        title: "خدمات نقل الجنائز",
        desc: "في أوقات الفقد، نقدم خدمة هادئة وكريمة لإعادة أحبائكم إلى المنزل. نحن نتعامل مع جميع اللوجستيات بأقصوم درجات الاحترام والحساسية الثقافية.",
        items: [
          { title: "النقل الوطني", desc: "نقل محترم ولائق للمتوفين عبر جميع ولايات الجزائر." },
          { title: "الدعم الإداري", desc: "المساعدة في جميع التصاريح اللازمة والوثائق القانونية للنقل." },
          { title: "أسطول متخصص", desc: "مركبات مكيفة مصممة خصيصًا للنقل الجنائزي المحترم." }
        ]
      }
    },
    about: {
      title: "من نحن",
      subtitle: "مكرسون لتقديم أعلى معايير النقل الطارئ والرعاية الجنائزية في قلب الجزائر العاصمة.",
      mission: {
        title: "مهمتنا",
        desc1: "تأسست إسعاف فيصل برؤية لسد الفجوة في النقل الطبي عالي الجودة، وأصبحت حجر زاوية في مجتمع الجزائر العاصمة. نحن نؤمن بأن كل مريض يستحق رعاية كريمة واحترافية وسريعة في أكثر لحظاتهم ضعفاً.",
        desc2: "سواء كان ذلك نقلاً طارئاً لإنقاذ الأرواح أو الرحلة الأخيرة لأحد الأحباء، فإن التزامنا يظل ثابتاً: الخدمة برحمة وتميز ونزاهة مطلقة."
      },
      values: {
        title: "قيمنا الأساسية",
        items: [
          { title: "النزاهة", desc: "نحافظ على أعلى المعايير الأخلاقية في جميع تعاملاتنا." },
          { title: "الرحمة", desc: "التعاطف هو جوهر كل ما نقوم به، حيث نعامل كل مريض كفرد من العائلة." },
          { title: "التميز", desc: "تحسين مهاراتنا وأسطولنا باستمرار للبقاء في الطليعة." },
          { title: "العمل الجماعي", desc: "التعاون بسلاسة مع المستشفيات والعائلات لتحقيق أفضل النتائج." }
        ]
      }
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
