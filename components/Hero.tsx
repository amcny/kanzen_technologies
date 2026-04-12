"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Sparkles, Search, Bell, TrendingUp, TrendingDown, Activity, CheckCircle2, Plus, MoreHorizontal, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { getCalApi } from "@calcom/embed-react";

export function Hero() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [activeTab, setActiveTab] = useState('1M');
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"business-call"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => prev === '7D' ? '1M' : prev === '1M' ? '1Y' : '7D');
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const chartData = {
    '7D': [40, 70, 45, 90, 65, 85, 55],
    '1M': [60, 50, 80, 40, 70, 90, 85, 65, 75, 100],
    '1Y': [30, 40, 35, 50, 45, 60, 55, 70, 65, 80, 90, 100]
  };
  const currentData = chartData[activeTab as keyof typeof chartData];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        if (lenis) {
          lenis.scrollTo(y, { force: true });
        } else {
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
      sessionStorage.setItem('lenis_ignore_hash', href);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-clip bg-primary"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(229,231,235,1) 0%, rgba(229,231,235,0) 70%)" }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] right-[-10%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(209,213,219,1) 0%, rgba(209,213,219,0) 70%)" }}
        />
        
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="w-full mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.25rem,6.5vw,6.5rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 leading-[1.1] tracking-tighter pb-4 mb-4"
          >
            <span className="block whitespace-nowrap">Building smart software for</span>
            <span className="block whitespace-nowrap">India&apos;s growing businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-balance font-light"
          >
            We work with Indian companies to build digital products that are easy to use, reliable, and help you scale smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              data-cal-namespace="business-call"
              data-cal-link="kanzentechnologies/business-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":1,"theme":"light"}'
              className="premium-glow w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, "/#work")}
              className="glass-panel w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 hover:bg-black/5 transition-colors rounded-full"
            >
              Explore Our Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Floating Code/Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 relative max-w-5xl mx-auto perspective-1000"
        >
          <div className="relative transform translate-y-10 scale-100 sm:scale-105 origin-bottom">
            <div className="relative rounded-2xl sm:rounded-[2rem] border border-gray-200/60 shadow-2xl p-2 md:p-4 overflow-hidden bg-white/95">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
              
              {/* Animated Overlay Elements */}
              <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden rounded-2xl sm:rounded-[2rem] @container">
                {/* Main User Cursor */}
                <motion.div
                  animate={{
                    x: ["15cqw", "55cqw", "55cqw", "40cqw", "40cqw", "20cqw", "15cqw"],
                    y: ["15cqh", "25cqh", "25cqh", "40cqh", "40cqh", "60cqh", "15cqh"],
                    scale: [1, 1, 0.8, 1, 0.8, 1, 1]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.2, 0.45, 0.5, 0.8, 1]
                  }}
                  className="absolute top-0 left-0 drop-shadow-2xl z-50 flex items-center gap-1.5 pointer-events-none will-change-transform"
                >
                  <MousePointer2 className="w-8 h-8 text-gray-900 fill-white" />
                  <div className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm whitespace-nowrap">You</div>
                </motion.div>

                {/* Collaborator Cursor 1 */}
                <motion.div
                  animate={{
                    x: ["80cqw", "75cqw", "75cqw", "85cqw", "80cqw"],
                    y: ["30cqh", "50cqh", "50cqh", "80cqh", "30cqh"],
                    scale: [1, 1, 0.9, 1, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.35, 0.7, 1]
                  }}
                  className="absolute top-0 left-0 drop-shadow-2xl hidden md:flex items-center gap-1.5 z-50 pointer-events-none will-change-transform"
                >
                  <MousePointer2 className="w-6 h-6 text-purple-500 fill-white" />
                  <div className="bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm whitespace-nowrap">Priya S.</div>
                </motion.div>

                {/* Collaborator Cursor 2 */}
                <motion.div
                  animate={{
                    x: ["30cqw", "50cqw", "50cqw", "20cqw", "30cqw"],
                    y: ["65cqh", "45cqh", "45cqh", "60cqh", "65cqh"],
                    scale: [1, 1, 0.9, 1, 1]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.45, 0.8, 1]
                  }}
                  className="absolute top-0 left-0 drop-shadow-2xl hidden md:flex items-center gap-1.5 z-50 pointer-events-none will-change-transform"
                >
                  <MousePointer2 className="w-6 h-6 text-blue-500 fill-white" />
                  <div className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm whitespace-nowrap">Rahul K.</div>
                </motion.div>

                {/* Floating Notification */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 1, 0, 0],
                    y: [20, 0, 0, -20, -20],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.4, 0.5, 1]
                  }}
                  className="absolute top-6 right-6 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 hidden sm:flex items-center gap-3 pointer-events-none"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">New Subscription</p>
                    <p className="text-[10px] text-gray-500">+₹19,999 / month</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Mockup Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
              
              {/* Mockup Content */}
              <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-90">
                {/* Left Column - Main Content */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <div className="flex items-center bg-gray-100/80 rounded-lg px-3 py-2 w-full sm:w-2/3 md:w-1/2 border border-gray-200/50 focus-within:border-blue-400 focus-within:bg-white transition-all relative overflow-hidden">
                      <Search className="w-4 h-4 text-gray-400 z-10 shrink-0" />
                      <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder:text-gray-400 opacity-0" />
                      {/* Typing Animation Overlay */}
                      <motion.div 
                        className="absolute left-9 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-gray-700 pointer-events-none whitespace-nowrap border-r-2 border-blue-500 pr-1 will-change-transform"
                        animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)", "inset(0 100% 0 0)"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.8, 0.9, 1] }}
                      >
                        Q3 Revenue Analysis
                      </motion.div>
                    </div>
                    <div className="flex gap-2 sm:gap-3 items-center shrink-0">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                        <Bell className="w-4 h-4" />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-8 h-8 bg-gray-900 rounded-full text-white flex items-center justify-center shadow-sm">
                        <span className="text-xs font-medium">AD</span>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Main Chart Area */}
                  <div className="h-auto min-h-[16rem] sm:h-56 w-full bg-white rounded-xl border border-gray-200/60 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 relative z-20">
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-display font-bold text-gray-900">₹84,23,000</span>
                          <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded-md">
                            <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                          </span>
                        </div>
                      </div>
                      <div className="flex bg-gray-100/80 p-1 rounded-lg w-full sm:w-auto justify-between sm:justify-start">
                        {['7D', '1M', '1Y'].map(tab => (
                          <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex-1 sm:flex-none ${activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Chart Bars */}
                    <div className="flex items-end gap-1 sm:gap-2 h-24 mt-6">
                      {currentData.map((h, i) => (
                        <motion.div 
                          key={`${activeTab}-${i}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                          className="flex-1 bg-blue-100 hover:bg-blue-500 rounded-t-md cursor-pointer transition-colors relative group"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            ₹{(h * 12000).toLocaleString('en-IN')}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { label: 'Active Users', value: '2,405', trend: '+4.2%', up: true },
                      { label: 'Conversion', value: '4.8%', trend: '+1.1%', up: true },
                      { label: 'Bounce Rate', value: '24%', trend: '-2.4%', up: false }
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                        className={`bg-white rounded-xl border border-gray-200/60 p-3 sm:p-4 flex flex-col justify-center gap-1 shadow-sm cursor-pointer transition-all ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                      >
                        <span className="text-xs font-medium text-gray-500">{stat.label}</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                          <span className={`text-[10px] font-medium flex items-center ${stat.up ? 'text-green-600' : 'text-blue-600'}`}>
                            {stat.up ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                            {stat.trend}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="flex flex-col gap-6">
                  {/* Profile/Activity Card */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-200/60 p-5 flex flex-col gap-5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Image src="https://picsum.photos/seed/avatar1/100/100" alt="User" width={40} height={40} className="rounded-full border border-gray-200" />
                          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 truncate max-w-[120px]" title="Nebuchadnezzar">Nebuchadnezzar</h4>
                          <p className="text-[10px] text-gray-500">Administrator</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Recent Activity</h5>
                      <div className="space-y-3">
                        {[
                          { icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50', title: 'Task Completed', time: '2m ago' },
                          { icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50', title: 'System Update', time: '1h ago' },
                          { icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-50', title: 'New Feature', time: '3h ago' }
                        ].map((item, i) => (
                          <motion.div key={i} whileHover={{ x: 4 }} className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                              <item.icon className={`w-4 h-4 ${item.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                              <p className="text-[10px] text-gray-500">{item.time}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto w-full bg-gray-900 text-white rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      New Project
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
