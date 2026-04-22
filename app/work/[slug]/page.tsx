import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { ScrollToTop } from '@/components/ScrollToTop';

export function generateStaticParams() {
  return [
    { slug: 'ap-teacher-info' },
    { slug: 'sky-garden' },
    { slug: 'nit-ap-ece' },
    { slug: 'nit-ap-freshers' },
    { slug: 'nit-ap-mess' },
    { slug: 'student-outing' },
  ];
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const projectDetails: Record<string, { title: string, category: string, description: string, image: string, problem: string, solution: string, results: string, liveUrl?: string }> = {
    'ap-teacher-info': {
      title: 'Teacher Info',
      category: 'Web Portal',
      description: 'Central source for information and updates for Andhra Pradesh Teachers.',
      image: 'https://i.ibb.co/Dfv2QQQ8/Screenshot-2026-04-22-at-7-50-50-PM.png',
      problem: 'Teachers across Andhra Pradesh lacked a centralized, reliable platform to access official updates, resources, and essential information, leading to confusion and delays.',
      solution: 'We built a robust web portal that aggregates all necessary information in one easy-to-navigate interface, ensuring high availability and fast load times even during peak traffic.',
      results: 'The portal now serves thousands of teachers daily, significantly reducing the time spent searching for official information and improving overall communication.',
      liveUrl: 'https://teacherinfo.net/',
    },
    'sky-garden': {
      title: 'Sky Garden Family Restaurant',
      category: 'Marketing Website',
      description: 'A vibrant marketing website for Sky Garden Family Restaurant, featuring their menu, ambiance, and online presence.',
      image: 'https://i.ibb.co/XxRq6fLs/Screenshot-2026-03-19-at-10-40-31-AM.png',
      problem: 'The restaurant needed a modern online presence to showcase their menu, attract new customers, and highlight their unique dining experience.',
      solution: 'We designed and developed a visually appealing, mobile-responsive website that highlights their offerings, includes an easy-to-read menu, and integrates seamlessly with their social media.',
      results: 'Increased online visibility, higher customer engagement, and a noticeable boost in reservations and walk-in traffic.',
      liveUrl: 'https://amcny.github.io/sky-garden/',
    },
    'nit-ap-ece': {
      title: 'NIT AP: ECE Student App',
      category: 'Mobile Application',
      description: 'A comprehensive app for ECE students to seamlessly manage timetables, track attendance, and access academic records via WSDC integration.',
      image: 'https://play-lh.googleusercontent.com/njc4K88pOp-MmScjFY4C-x1IbmKqiavUrWUf4Ycx-4VcwE_EPx84RtmPyMmEzykjPYQ=w1052-h592-rw',
      problem: 'Students struggled to keep track of their changing timetables, attendance records, and academic updates scattered across different platforms.',
      solution: 'We developed a unified mobile application that integrates directly with the college systems, providing real-time updates, notifications, and an intuitive dashboard.',
      results: 'Widespread adoption among ECE students, resulting in better attendance tracking and a more organized academic life.',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.nitstudent.app',
    },
    'nit-ap-freshers': {
      title: 'NIT AP Freshers App',
      category: 'Mobile Application',
      description: 'An intuitive companion app designed specifically for incoming freshers to navigate campus life, track grades, and stay updated with class schedules.',
      image: 'https://play-lh.googleusercontent.com/0ugxCI4zvQZ82hHDgafVECxW398uEeV4Ocya1ZIG9YfIh4TxxOCHvfT2VvAJdZsXaSs=w1052-h592-rw',
      problem: 'New students often felt overwhelmed navigating a new campus, finding their classes, and understanding the academic system.',
      solution: 'We created a dedicated "Freshers" app with campus maps, simplified schedules, and essential guides to help them transition smoothly.',
      results: 'A highly successful onboarding tool that reduced confusion and helped new students feel at home much faster.',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.nitapfreshers.app',
    },
    'nit-ap-mess': {
      title: 'NIT AP: Mess App',
      category: 'Mobile Application',
      description: 'A dedicated platform for students to access daily mess menus, receive real-time food updates, and seamlessly navigate between different hostel dining facilities.',
      image: 'https://play-lh.googleusercontent.com/mQIvnv1DGflJRVhJ5pLKj6Xl2-GzKBSjzzcRisaPSBJa5RTNYqH31HsFcR1Luu2Q9mV8ou1_FYb-EKy-ojlTmEE=w1052-h592-rw',
      problem: 'Students had no easy way to check the daily menu across different mess halls or receive updates about food availability.',
      solution: 'We built an app that displays real-time menus, allows students to provide feedback, and helps manage dining logistics seamlessly.',
      results: 'Improved student satisfaction with dining services and better inventory management for the mess administration.',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.nitmess.com',
    },
    'student-outing': {
      title: 'Student Outing Management',
      category: 'AI & Security',
      description: 'An advanced facial recognition system designed to automate and secure the student outing process for the NIT Andhra Pradesh campus.',
      image: 'https://i.ibb.co/Rk5wC4GT/image.png',
      problem: 'The manual process of tracking student outings was slow, prone to errors, and difficult to secure effectively.',
      solution: 'We implemented an AI-powered facial recognition system that automates the check-in/check-out process, ensuring high security and speed.',
      results: 'Drastically reduced wait times at the campus gates and provided administration with accurate, real-time security logs.',
      liveUrl: 'https://kanzen.tech',
    },
  };

  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary pt-32 pb-24">
      <ScrollToTop />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link href="/#work" scroll={false} className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>
        
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-8">
            {project.description}
          </p>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full"
            >
              Visit Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>

        {project.liveUrl ? (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-100 mb-16 border border-gray-200 shadow-xl hover:opacity-95 transition-opacity group"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-sm font-medium text-gray-900 shadow-lg">
                Visit Project <ExternalLink className="w-3 h-3 ml-2" />
              </div>
            </div>
          </a>
        ) : (
          <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-100 mb-16 border border-gray-200 shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">The Problem</h2>
              <p className="text-gray-600 font-light leading-relaxed">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-600 font-light leading-relaxed">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">The Results</h2>
              <p className="text-gray-600 font-light leading-relaxed">{project.results}</p>
            </section>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm sticky top-32 space-y-8">
              {project.liveUrl && (
                <div className="pb-8 border-b border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-4">Live Project</h3>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors rounded-full"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              )}
              
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-4">Ready to start your project?</h3>
                <p className="text-gray-600 text-sm mb-6 font-light">Let&apos;s build something great together.</p>
                <Link href="/#contact" scroll={false} className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
