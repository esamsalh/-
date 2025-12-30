
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';
import { useApp } from '../store';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsAdmin } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation: check credentials
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      navigate('/admin');
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex w-16 h-16 bg-emerald-600 text-white rounded-2xl items-center justify-center font-black text-2xl mb-4 shadow-lg shadow-emerald-200">
              N
            </div>
            <h1 className="text-2xl font-black text-slate-800">تسجيل الدخول للمدراء</h1>
            <p className="text-slate-500 text-sm mt-2">مرحباً بك مجدداً، يرجى إدخال بياناتك</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 mr-2">اسم المستخدم</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-xl py-3 pr-12 pl-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="admin"
                  required
                />
                <User className="absolute right-4 top-3.5 text-slate-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 mr-2">كلمة المرور</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-xl py-3 pr-12 pl-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute right-4 top-3.5 text-slate-400 w-5 h-5" />
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 mt-4 active:scale-95">
              دخول النظام
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')} 
              className="text-slate-400 hover:text-emerald-600 text-sm font-semibold transition-colors"
            >
              العودة للمتجر
            </button>
          </div>
        </div>
        <div className="bg-slate-900 py-4 px-8 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Safe & Encrypted Session</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
