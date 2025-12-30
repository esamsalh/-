
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-black text-emerald-400 mb-6 tracking-tighter">متجر النخبة</h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              نسعى في متجر النخبة لتقديم تجربة تسوق فريدة تجمع بين الجودة والأناقة والخدمة المميزة لعملائنا في كافة أرجاء المملكة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">عن المتجر</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">سياسة الاسترجاع</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">تتبع الطلب</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>support@elitestore.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>متجر موثق في "معروف"</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">النشرة البريدية</h4>
            <p className="text-gray-400 text-xs mb-4">اشترك ليصلك أحدث العروض والخصومات الحصرية</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-800 border-none rounded-lg py-2 px-4 text-xs flex-1 focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-xs font-bold transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2024 متجر النخبة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
