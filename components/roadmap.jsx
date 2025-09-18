'use client';
import React, { useState, useEffect } from 'react';
import { Sprout, TreePine, Building2, Target, TrendingUp, MapPin, Calendar } from 'lucide-react';

const ManzilAgroRoadmap = () => {
    const [activeStep, setActiveStep] = useState(0);

    const roadmapData = [
        { id: 1, year: "২০২০", title: "প্রকল্প সূচনা", icon: Sprout, color: "from-emerald-500 to-green-500", status: "completed" },
        { id: 2, year: "২০২১-২৩", title: "৫ হাজার গাছ রোপণ", icon: TreePine, color: "from-green-500 to-lime-500", status: "completed" },
        { id: 3, year: "২০২৪-২৫", title: "রিসোর্ট নির্মাণ", icon: Building2, color: "from-lime-500 to-yellow-500", status: "in-progress" },
        { id: 4, year: "২০২৬", title: "প্রকল্প সম্পূর্ণ", icon: Target, color: "from-yellow-500 to-orange-500", status: "upcoming" },
        { id: 5, year: "২০২৭+", title: "মুনাফা বিতরণ", icon: TrendingUp, color: "from-orange-500 to-red-500", status: "future" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % roadmapData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/10 overflow-hidden">

            {/* 🌳 Decorative Village Hills + Trees */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Green Hills */}
                <svg className="absolute bottom-0 w-full h-40 fill-green-200 dark:fill-green-800/60" viewBox="0 0 1200 200">
                    <path d="M0,200 Q200,100 400,180 T800,120 T1200,180 V200 Z" />
                </svg>

                {/* Extra Trees */}
                <div className="absolute bottom-10 left-10">
                    <div className="w-5 h-12 bg-amber-800 rounded-t-md mx-auto"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-full -mt-6"></div>
                </div>
                <div className="absolute bottom-16 right-20">
                    <div className="w-4 h-10 bg-amber-700 rounded-t-md mx-auto"></div>
                    <div className="w-10 h-10 bg-green-600 rounded-full -mt-5"></div>
                </div>
            </div>

            {/* 🏷 Header */}
            <div className="text-center mb-20 relative z-10">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/30 text-emerald-700 dark:text-emerald-300 font-semibold shadow-md mb-6">
                    <MapPin className="w-5 h-5 mr-2" />
                    মানযিল এগ্রো রোডম্যাপ
                </div>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                    <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                        আমাদের যাত্রা
                    </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    ২০২০ থেকে শুরু করে একটি স্বপ্নের বাস্তবায়ন 🌱
                </p>
            </div>

            {/* 🚜 Village Style Road with Milestones */}
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="relative">
                    <svg
                        className="w-full h-64 md:h-80"
                        viewBox="0 0 1000 300"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Dirt Road Border */}
                        <path
                            d="M50 250 Q200 150 350 220 T650 140 Q800 180 950 160"
                            stroke="#78350f"
                            strokeWidth="48"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Dirt Road Inner */}
                        <path
                            d="M50 250 Q200 150 350 220 T650 140 Q800 180 950 160"
                            stroke="url(#villageRoad)"
                            strokeWidth="38"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Road Center Dashed Line */}
                        <path
                            d="M50 250 Q200 150 350 220 T650 140 Q800 180 950 160"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeDasharray="18 14"
                            opacity="0.9"
                            fill="none"
                        />
                        <defs>
                            <linearGradient id="villageRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a16207" />
                                <stop offset="50%" stopColor="#ca8a04" />
                                <stop offset="100%" stopColor="#a16207" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Milestone Points */}
                    <div className="absolute inset-0">
                        {roadmapData.map((step, index) => {
                            const Icon = step.icon;
                            const positions = [
                                { x: '6%', y: '80%' },
                                { x: '28%', y: '42%' },
                                { x: '50%', y: '70%' },
                                { x: '72%', y: '38%' },
                                { x: '92%', y: '55%' }
                            ];
                            const isActive = index === activeStep;
                            return (
                                <div
                                    key={step.id}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: positions[index].x, top: positions[index].y }}
                                    onMouseEnter={() => setActiveStep(index)}
                                >
                                    {/* Marker */}
                                    <div className={`
                    relative w-20 h-20 md:w-24 md:h-24 rounded-full shadow-xl border-4 border-white dark:border-gray-800 flex items-center justify-center
                    transition-all duration-500 bg-gradient-to-br ${step.color}
                    ${isActive ? 'scale-110 animate-pulse' : 'hover:scale-105'}
                  `}>
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                        {isActive && <div className="absolute inset-0 rounded-full animate-ping bg-white/30" />}
                                    </div>

                                    {/* Info Popup */}
                                    <div className={`
                    absolute top-full mt-4 left-1/2 -translate-x-1/2 min-w-[180px] p-4 rounded-2xl shadow-2xl backdrop-blur-md border
                    transition-all duration-500
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
                    bg-white/90 dark:bg-gray-800/90 border-white/40 dark:border-gray-700/40 z-20
                  `}>
                                        <div className={`inline-flex items-center px-3 py-1 mb-2 rounded-full text-white text-sm font-bold bg-gradient-to-r ${step.color}`}>
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {step.year}
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-base">{step.title}</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {step.status === 'completed' ? '✅ সম্পন্ন' :
                                                step.status === 'in-progress' ? '🚧 চলমান' :
                                                    step.status === 'upcoming' ? '⏳ আসন্ন' : '🌟 ভবিষ্যৎ'}
                                        </p>
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white/90 dark:bg-gray-800/90 border-l border-t border-white/40 dark:border-gray-700/40"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 📊 Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {[
                        { value: "৮০+", label: "শেয়ার হোল্ডার", color: "emerald" },
                        { value: "১০k+", label: "ফল গাছ", color: "green" },
                        { value: "৩টি", label: "রিসোর্ট", color: "lime" },
                        { value: "২০২৭+", label: "মুনাফা শুরু", color: "orange" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-center shadow-lg">
                            <div className={`text-3xl font-extrabold text-${stat.color}-600 dark:text-${stat.color}-400`}>{stat.value}</div>
                            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManzilAgroRoadmap;
