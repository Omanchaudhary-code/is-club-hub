
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Users, Code, Calendar, Paintbrush } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  section: 'board' | 'technical' | 'events' | 'creative';
};

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    // Board Members
    {
      name: "Unique Poudel",
      role: "Coordinator",
      bio: "Second year BBIS student with expertise in social media management and leadership.",
      imageUrl: "public/members/Unique.jpg",
      section: 'board'
    },
    {
      name: "Resha Pokharel",
      role: "Vice Coordinator",
      bio: "Second year BBIS student focusing on web development and design.",
      imageUrl: "public/members photos/Resha Pokheral (vice Coordinator).jpg",
      section: 'board'
    },
    {
      name: "Niraj Prasad Sah",
      role: "Secretary",
      bio: "Second year BBIS student with a passion for programming and project/product management.",
      imageUrl: "public/members photos/Niraj Prasad Sah (Secretary).jpg",
      section: 'board'
    },
    {
      name: "Gunjan Suwal",
      role: "Treasurer",
      bio: "Second year BBIS student with experience in managing budgets for student organizations.",
      imageUrl: "public/members photos/Gunjan Suwal (Treasurer).jpg",
      section: 'board'
    },
    {
      name: "Sumina Rai",
      role: "Joint Secretary",
      bio: "Second year BBIS student with experience in administration and coordination.",
      imageUrl: "public/members photos/Sumina Rai(joint secretary).jpg",
      section: 'board'
    },
    {
      name: "Samyog Karki",
      role: "Joint Treasurer",
      bio: "Second year BBIS student who is passionate about finance and leadership.",
      imageUrl: "public/members photos/Samyog Karki (Joint Treasurer).jpg",
      section: 'board'
    },
    
    // Technical Team
    {
      name: "Oman Chaudhary",
      role: "Technical Head",
      bio: "Second year BBIS student who is passionate about technology and leadership.",
      imageUrl: "public/members photos/Oman Chaudhary (Technical Head).JPG",
      section: 'technical'
    },
    {
      name: "Sandesh Shrestha",
      role: "Technical Team Member",
      bio: "Second year BBIS student who is a self-taught developer with a passion for creating accessible web experiences.",
      imageUrl: "public/members photos/Sandesh Shrestha (Technical Team Member).jpg",
      section: 'technical'
    },
    {
      name: "Sabina Shrestha",
      role: "Technical Team Member",
      bio: "Second year BBIS student focusing on vibe coding and web development.",
      imageUrl: "public/members photos/Sabina Shrestha(Technical Team Member).jpg",
      section: 'technical'
    },
    {
      name: "Evan Karmacharya",
      role: "Technical Team Member",
      bio: "First year BBIS student who has a strong craving for knowledge.",
      imageUrl: "public/members photos/Evan Karmacharya (Technical team member).jpg",
      section: 'technical'
    },
    
    // Events Team
    {
      name: "Samira Khan",
      role: "Events Coordinator",
      bio: "Marketing major with a passion for organizing impactful events and community building.",
      imageUrl: "https://images.unsplash.com/photo-1541787457429-b1766a4766b6",
      section: 'events'
    },
    {
      name: "Marcus Johnson",
      role: "Logistics Manager",
      bio: "Operations Management student skilled in event planning and resource coordination.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      section: 'events'
    },
    {
      name: "Sophia Rodriguez",
      role: "Partnerships Lead",
      bio: "Business Administration junior focused on building corporate relationships and sponsorships.",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      section: 'events'
    },
    {
      name: "Omar Hassan",
      role: "Workshop Facilitator",
      bio: "Education major with experience in creating engaging learning experiences.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      section: 'events'
    },
    
    // Creative Team
    {
      name: "Emma Wilson",
      role: "Creative Director",
      bio: "Graphic Design senior specializing in branding and visual communication.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      section: 'creative'
    },
    {
      name: "Daniel Lee",
      role: "Content Creator",
      bio: "Digital Media student with skills in photography, videography, and storytelling.",
      imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556",
      section: 'creative'
    },
    {
      name: "Isabella Garcia",
      role: "Social Media Manager",
      bio: "Marketing Communications student focused on digital engagement and community building.",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
      section: 'creative'
    },
    {
      name: "Ryan Thompson",
      role: "Graphic Designer",
      bio: "Visual Arts major with expertise in digital illustration and motion graphics.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      section: 'creative'
    }
  ];

  const boardMembers = teamMembers.filter(member => member.section === 'board');
  const technicalTeam = teamMembers.filter(member => member.section === 'technical');
  const eventsTeam = teamMembers.filter(member => member.section === 'events');
  const creativeTeam = teamMembers.filter(member => member.section === 'creative');

  const TeamSection = ({ 
    title, 
    icon, 
    description, 
    members, 
    bgColor = "bg-isclub-light" 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    description: string; 
    members: TeamMember[]; 
    bgColor?: string;
  }) => (
    <section className={`section-padding ${bgColor} px-4`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-isclub-teal bg-isclub-blue-light/50 rounded-full flex items-center justify-center mx-auto w-fit">
            {icon}
            <span className="ml-2">{title}</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {title}
          </h2>
          <p className="text-isclub-gray max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={cn(
                "h-full rounded-xl overflow-hidden",
                "bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm",
                "transition-all duration-300 hover:shadow-tech hover:-translate-y-1"
              )}>
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                    loading="lazy" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold">{member.name}</h3>
                  <p className="text-isclub-teal text-sm mb-3">{member.role}</p>
                  <p className="text-isclub-gray text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <TeamSection 
        title="Board Members" 
        icon={<Users className="w-4 h-4" />}
        description="The IS Club is led by a dedicated team of student officers who oversee all club operations and strategic direction."
        members={boardMembers}
        bgColor="bg-isclub-light"
      />
      
      <TeamSection 
        title="Technical Team" 
        icon={<Code className="w-4 h-4" />}
        description="Our technical team develops and maintains club technologies, websites, and provides expertise for workshops and projects."
        members={technicalTeam}
        bgColor="bg-white"
      />
      
      <TeamSection 
        title="Events Team" 
        icon={<Calendar className="w-4 h-4" />}
        description="The events team plans, organizes, and executes all club activities, from workshops to networking sessions and annual symposiums."
        members={eventsTeam}
        bgColor="bg-isclub-light"
      />
      
      <TeamSection 
        title="Creative Team" 
        icon={<Paintbrush className="w-4 h-4" />}
        description="Our creative team handles all aspects of club branding, design, content creation, and social media presence."
        members={creativeTeam}
        bgColor="bg-white"
      />
    </>
  );
}
