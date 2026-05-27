import { motion } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  ArrowRight, 
  Layers, 
  Settings, 
  CheckCircle,
  Instagram,
  Facebook,
  Mail,
  Star,
  MapPin
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Başlangıç", href: "#hero" },
    { name: "Perde Sistemleri", href: "#systems" },
    { name: "Montaj", href: "#installation" },
    { name: "Referanslar", href: "#references" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-primary/5" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://i.hizliresim.com/177h4js.png" 
            alt="Düzgün Perde Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-accent/20"
          >
            Teklif Al
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary rounded-lg bg-soft/50 hover:bg-accent/10 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-primary/5 p-6 flex flex-col space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-primary hover:text-accent transition-colors py-1 border-b border-primary/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-accent text-primary px-6 py-3 rounded-xl text-center font-bold hover:bg-accent/90"
          >
            Teklif Al
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-soft to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-primary border border-accent/20 rounded-full text-xs font-black mb-6 uppercase tracking-wider">
            Evinizin Tarzını Tamamlayan Perde Çözümleri
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
            Pencere Dekorasyonunda <br />
            <span className="text-accent">Modern Dokunuşlar</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-10 max-w-lg leading-relaxed">
            Düzgün Perde olarak, en kaliteli perde sistemlerini profesyonel montaj hizmetiyle birleştiriyoruz. Evinizin havasını değiştirmeye hazır mısınız?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#systems" 
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:scale-105 transition-transform shadow-lg shadow-accent/25"
            >
              Ürünleri İncele <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="bg-white text-primary border border-primary/10 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-soft transition-colors shadow-sm"
            >
              Bize Ulaşın <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://i.hizliresim.com/9xekava.jpg" 
              alt="Modern Perde Tasarımı" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-primary/5"
          >
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-secondary font-semibold">Hızlı Kurulum</p>
              <p className="text-sm font-bold text-primary">Aynı Gün Keşif</p>
            </div>
          </motion.div>

          <div className="absolute top-1/2 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const CurtainSystems = () => {
  const systems = [
    { title: "Zebra Perde", desc: "Hem tül hem de güneşlik özelliğini bir arada sunan şık mekanizma.", icon: <Layers />, img: "https://i.hizliresim.com/7u3gda1.png" },
    { title: "Stor Perde", desc: "Minimalist ve modern mekanlar için en çok tercih edilen kumaş perdeler.", icon: <Settings />, img: "https://i.hizliresim.com/x814eev.png" },
    { title: "Dikey Perde", desc: "Geniş pencereler ve ofisler için ideal ışık kontrolü sağlar.", icon: <Layers />, img: "https://i.hizliresim.com/4cu8e2p.png" },
    { title: "Jaluzi Perde", desc: "Ahşap veya alüminyum seçenekleriyle klasik ve endüstriyel şıklık.", icon: <Settings />, img: "https://i.hizliresim.com/bat1stw.png" },
    { title: "Plise Perde", desc: "Cam balkonlar ve dar alanlar için katlanabilir inovatif çözüm.", icon: <Layers />, img: "https://i.hizliresim.com/aoeh981.png" },
    { title: "Motorlu Sistemler", desc: "Uzaktan kumanda ile kontrol edilebilen akıllı perde teknolojileri.", icon: <Settings />, img: "https://i.hizliresim.com/db5y47m.png" },
  ];

  return (
    <section id="systems" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Üretim Gruplarımız
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-secondary text-lg max-w-2xl mx-auto"
          >
            Her ihtiyaca ve stile uygun, yüksek kaliteli kumaş ve mekanizma seçenekleriyle geniş ürün yelpazesi.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-soft rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 border border-primary/5"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">
                  {item.desc}
                </p>
                <a href="#contact" className="text-primary hover:text-accent font-bold flex items-center gap-1.5 transition-all w-fit group">
                  Detaylı Bilgi <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = () => {
  return (
    <section id="installation" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-white grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Profesyonel <br /><span className="text-accent">Montaj Hizmeti</span>
            </h2>
            <div className="space-y-6">
              {[
                "Lazer terazili kusursuz ölçüm ve kurulum.",
                "Evinizi kirletmeden, tozsuz ve temiz montaj.",
                "Deneyimli ekip ve garantili işçilik.",
                "Sadece perde değil, korniş ve ray sistemleri montajı."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-white/90 leading-snug">{text}</p>
                </div>
              ))}
            </div>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-accent text-primary px-10 py-5 rounded-full font-bold inline-block shadow-lg hover:shadow-xl transition-all"
            >
              Hemen Randevu Al
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 hidden lg:block"
          >
             <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-[2rem]">
               <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden group">
                   <img 
                     src="https://i.hizliresim.com/6q5bg65.jpg" 
                     alt="Montaj Çalışması 1" 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                     referrerPolicy="no-referrer"
                   />
                 </div>
                 <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden group">
                   <img 
                     src="https://i.hizliresim.com/bif7u00.jpg" 
                     alt="Montaj Çalışması 2" 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                     referrerPolicy="no-referrer"
                   />
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const References = () => {
  const logos = [
    "Villa Projeleri", "Ofis Kompleksleri", "Modern Rezidanslar", "Şık Restoranlar", "Butik Oteller"
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      location: "Kadıköy, İstanbul",
      text: "Ölçümden montaja kadar harika bir süreçti. Motorlu perdelerimiz kusursuz çalışıyor, elinize sağlık.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
    },
    {
      name: "Elif Demir",
      location: "Beşiktaş, İstanbul",
      text: "Tasarım fikirleri çok ufuk açıcıydı. Salon tül dikey perdelerimiz tahminimizden de şık oldu.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face"
    },
    {
      name: "Murat Kaya",
      location: "Ataşehir, İstanbul",
      text: "Ofisimizin tüm stor perdelerini hızlıca teslim ettiler. Malzeme kalitesi ve dikişler gerçekten kusursuz.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face"
    }
  ];
  
  return (
    <section id="references" className="bg-soft border-y border-primary/5">
      <div className="section-padding overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Referanslarımız</h2>
          <p className="text-secondary max-w-xl mx-auto italic">Referanslarımız, işimize verdiğimiz değerin en büyük kanıtıdır.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((name) => (
            <span key={name} className="text-2xl font-bold tracking-widest text-primary italic uppercase text-center">
              {name}
            </span>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {testimonials.map((item, i) => (
             <motion.div 
               key={item.name}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow duration-300"
             >
                <div className="flex text-accent gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary/80 italic mb-6 text-sm leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-primary/5 pt-5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border border-primary/5 shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-primary">{item.name}</h4>
                    <p className="text-xs text-secondary">{item.location}</p>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Hizmet İçin <br /><span className="text-accent">Bize Ulaşın</span></h2>
            <p className="text-lg text-secondary mb-12">
              Ücretsiz keşif ve ölçü alımı için form doldurabilir veya doğrudan WhatsApp üzerinden iletişime geçebilirsiniz.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-soft rounded-3xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Telefon & WhatsApp</p>
                  <a href="tel:05388738304" className="text-xl font-bold">0538 873 83 04</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://www.instagram.com/duzgunperdecomtr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Instagram /></a>
              <a href="#" className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Facebook /></a>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-soft p-10 rounded-[3rem] shadow-sm border border-primary/5 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary px-2">Adınız</label>
                <input type="text" placeholder="Ad Soyad" className="w-full bg-white border border-primary/5 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary px-2">Telefon</label>
                <input type="tel" placeholder="05xx xxx xx xx" className="w-full bg-white border border-primary/5 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary px-2">Perde Türü</label>
              <select className="w-full bg-white border border-primary/5 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium">
                <option>Zebra Perde</option>
                <option>Stor Perde</option>
                <option>Dikey Perde</option>
                <option>Jaluzi Perde</option>
                <option>Motorlu Sistemler</option>
                <option>Diğer / Bilgi Almak İstiyorum</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary px-2">Mesajınız</label>
              <textarea rows={4} placeholder="İhtiyacınızı buraya yazabilirsiniz..." className="w-full bg-white border border-primary/5 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium" />
            </div>
            <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] transition-all">
              Mesajı Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (selected: number) => {
    setRating(selected);
    setSubmitted(true);
    // Smooth transition before opening the Google Maps link
    setTimeout(() => {
      window.open("https://share.google/PbLaeeW5n8aOqq1Rx", "_blank");
    }, 1200);
  };

  return (
    <footer className="bg-primary pt-24 pb-12 text-white/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-20">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <img 
                src="https://i.hizliresim.com/177h4js.png" 
                alt="Düzgün Perde Logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="leading-relaxed text-sm text-white/60 pr-4">
              İstanbul genelinde; Başakşehir, Beşiktaş, Beylikdüzü, Büyükçekmece, Kadıköy, Avcılar, Bahçelievler, Bakırköy, Kağıthane, Şişli, Sarıyer, Eyüpsultan, Gaziosmanpaşa, Bayrampaşa, Zeytinburnu, Fatih, Üsküdar, Ataşehir, Maltepe, Kartal, Pendik ve Tuzla başta olmak üzere tüm ilçelere perde üretim, montaj ve teknik servis hizmeti sunuyoruz.
            </p>
          </div>

          {/* Column 2 - Links & Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold tracking-tight text-lg italic border-b border-white/10 pb-2">İletişim & Saatler</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start text-white/85">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Kadıköy / İstanbul</span>
              </li>
              <li className="space-y-2 text-xs text-white/60">
                <p className="font-semibold text-white/80">Çalışma Saatlerimiz:</p>
                <p>Hafta içi: 09:00 - 19:00</p>
                <p>Hafta sonu: 10:00 - 17:00</p>
              </li>
            </ul>
            <div className="flex gap-4 pt-2 border-t border-white/5">
              <a href="#hero" className="hover:text-accent text-xs transition-colors">Başlangıç</a>
              <span className="text-white/10">|</span>
              <a href="#systems" className="hover:text-accent text-xs transition-colors">Ürünler</a>
              <span className="text-white/10">|</span>
              <a href="#installation" className="hover:text-accent text-xs transition-colors">Montaj</a>
            </div>
          </div>

          {/* Column 3 - Small Google Maps block */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-bold tracking-tight text-lg italic border-b border-white/10 pb-2">Bizi Bulun</h4>
            <div className="space-y-3">
              <p className="text-xs text-white/60 leading-relaxed">İşletmemizi haritada görerek yol tarifi alabilirsiniz:</p>
              
              <a 
                href="https://share.google/PbLaeeW5n8aOqq1Rx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative block h-32 rounded-2xl overflow-hidden group border border-white/10 bg-white/5 transition-all duration-300 hover:border-accent/40 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 to-transparent h-16" />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 z-10">
                  <div className="relative mb-2">
                    <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping duration-1000" />
                    <MapPin className="w-6 h-6 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-accent transition-colors duration-300">Haritada Göster</span>
                  <span className="text-[10px] text-white/40 mt-0.5">Yol Tarifi Al</span>
                </div>
                <div className="absolute top-2 right-2 text-[8px] bg-accent/10 border border-accent/20 text-accent px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider group-hover:bg-accent group-hover:text-primary transition-all">
                  Harita
                </div>
              </a>
            </div>
          </div>

          {/* Column 4 - Ratings Block */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold tracking-tight text-lg italic border-b border-white/10 pb-2">Google Puanımız</h4>
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center relative overflow-hidden flex flex-col justify-center min-h-[128px]">
              {!submitted ? (
                <div className="space-y-3">
                  <p className="text-xs text-white/70 leading-relaxed">Kalitemizi ve montaj hizmetimizi yıldızlarla puanlayın:</p>
                  <div className="flex justify-center items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 focus:outline-none transition-transform hover:scale-125 duration-150 active:scale-95"
                      >
                        <Star 
                          className={`w-6 h-6 transition-all duration-150 ${
                            star <= (hoverRating ?? rating ?? 0)
                              ? "fill-accent text-accent filter drop-shadow-[0_0_3px_rgba(255,176,0,0.6)]"
                              : "text-white/20"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-accent font-bold tracking-wide animate-pulse uppercase">Bizleri Değerlendirip Teşvik Edin!</p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  <div className="inline-block bg-accent/20 p-2 rounded-full text-accent">
                    <CheckCircle className="w-5 h-5 animate-bounce" />
                  </div>
                  <h5 className="text-xs font-bold text-white leading-snug">Geri bildiriminiz için teşekkürler!</h5>
                  <p className="text-[10px] leading-relaxed text-white/60">
                    Sizi Google Haritalar'a yönlendiriyoruz. Yorumunuzla bize büyük destek olabilirsiniz!
                  </p>
                  <a 
                    href="https://share.google/PbLaeeW5n8aOqq1Rx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent text-primary text-[11px] font-black px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md shadow-accent/20"
                  >
                    Google'da Yorum Yaz
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Düzgün Perde. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">KVKK</a>
            <a href="#" className="hover:text-white">Çerez Politikası</a>
            <a href="#" className="hover:text-white">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/905388738304"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <Phone className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        WhatsApp Destek
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <main className="selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <Hero />
      <CurtainSystems />
      <Installation />
      <References />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
