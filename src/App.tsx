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
  Mail
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
           {[1, 2, 3].map((i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5"
             >
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, j) => <CheckCircle key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-primary/80 italic mb-6">
                  "Salonumuzun havası tamamen değişti. Düzgün Perde ekibine titiz çalışmaları için çok teşekkür ederiz. Montaj gerçekten çok temiz yapıldı."
                </p>
                <div className="flex items-center gap-4 border-t border-primary/5 pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full" />
                  <div>
                    <h4 className="font-bold">Müşteri Yorumu #{i}</h4>
                    <p className="text-xs text-secondary">Esenyurt, İstanbul</p>
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
                <input type="tel" placeholder="0538 873 83 04" className="w-full bg-white border border-primary/5 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium" />
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
  return (
    <footer className="bg-primary pt-20 pb-10 text-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.hizliresim.com/177h4js.png" 
                alt="Düzgün Perde Logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="max-w-xl leading-relaxed">
              İstanbul genelinde; Başakşehir, Beşiktaş, Beylikdüzü, Büyükçekmece, Esenyurt, Avcılar, Bahçelievler, Bakırköy, Kağıthane, Şişli, Sarıyer, Eyüpsultan, Gaziosmanpaşa, Bayrampaşa, Zeytinburnu, Fatih, Üsküdar, Kadıköy, Ataşehir, Maltepe, Kartal, Pendik ve Tuzla başta olmak üzere tüm ilçelere perde üretim, montaj ve teknik servis hizmeti sunuyoruz.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 italic">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="hover:text-accent transition-colors">Başlangıç</a></li>
              <li><a href="#systems" className="hover:text-accent transition-colors">Sistemler</a></li>
              <li><a href="#installation" className="hover:text-accent transition-colors">Montaj</a></li>
              <li><a href="#references" className="hover:text-accent transition-colors">Referanslar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 italic">İletişim</h4>
             <ul className="space-y-4 text-sm">
                <li>Esenyurt / İstanbul</li>
                <li>Hafta içi: 09:00 - 19:00</li>
                <li>Hafta sonu: 10:00 - 17:00</li>
             </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Düzgün Perde. Tüm hakları saklıdır.</p>
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
