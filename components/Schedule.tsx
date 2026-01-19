
import React from 'react';
import { Calendar, User2, Clock } from 'lucide-react';

interface ScheduleProps {
  content: {
    title: string;
    subtitle: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
    };
    classNames: {
      boxing: string;
      hiit: string;
      spinning: string;
      yoga: string;
      zumba: string;
      pilates: string;
    }
  };
}

const Schedule: React.FC<ScheduleProps> = ({ content }) => {
  const scheduleData = [
    {
      day: content.days.monday,
      classes: [
        { time: '09:00 - 10:00', name: content.classNames.boxing, instructor: 'Paco' },
        { time: '18:00 - 19:00', name: content.classNames.hiit, instructor: 'Jesús' },
        { time: '20:00 - 21:00', name: content.classNames.spinning, instructor: 'María' }
      ]
    },
    {
      day: content.days.tuesday,
      classes: [
        { time: '10:00 - 11:00', name: content.classNames.yoga, instructor: 'Laura' },
        { time: '19:00 - 20:00', name: content.classNames.boxing, instructor: 'Paco' }
      ]
    },
    {
      day: content.days.wednesday,
      classes: [
        { time: '09:00 - 10:00', name: content.classNames.hiit, instructor: 'Jesús' },
        { time: '18:00 - 19:00', name: content.classNames.zumba, instructor: 'Ana' }
      ]
    },
    {
      day: content.days.thursday,
      classes: [
        { time: '09:00 - 10:00', name: content.classNames.boxing, instructor: 'Paco' },
        { time: '18:00 - 19:00', name: content.classNames.pilates, instructor: 'Laura' }
      ]
    },
    {
      day: content.days.friday,
      classes: [
        { time: '09:00 - 10:00', name: content.classNames.spinning, instructor: 'María' },
        { time: '19:00 - 20:00', name: content.classNames.hiit, instructor: 'Jesús' }
      ]
    },
    {
      day: content.days.saturday,
      classes: [
        { time: '10:00 - 11:00', name: content.classNames.yoga, instructor: 'Laura' },
        { time: '12:00 - 13:00', name: content.classNames.boxing, instructor: 'Paco' }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-32 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <a href="#schedule" className="inline-block group mb-6">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase group-hover:text-red-600 transition-colors">
              {content.title}
            </h2>
          </a>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-[2px] w-8 bg-red-600"></div>
            <span className="text-red-600 font-black tracking-[0.5em] uppercase text-xs">
              {content.days.monday} - {content.days.saturday}
            </span>
            <div className="h-[2px] w-8 bg-red-600"></div>
          </div>

          <p className="text-white/50 max-w-2xl mx-auto font-bold tracking-widest text-sm uppercase">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scheduleData.map((dayPlan, i) => (
            <div key={i} className="group bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/30 transition-all hover:shadow-2xl hover:shadow-red-600/5">
              <div className="bg-zinc-800/50 py-6 px-8 flex justify-between items-center border-b border-white/5">
                <h3 className="text-xl font-black italic uppercase tracking-widest text-white">{dayPlan.day}</h3>
                <Calendar size={20} className="text-red-600/40" />
              </div>
              <div className="p-8 space-y-10">
                {dayPlan.classes.map((cls, j) => (
                  <div key={j} className="relative pl-6 border-l-2 border-red-600/20 hover:border-red-600 transition-colors">
                    <div className="flex items-center space-x-2 text-red-600 text-xs font-black mb-2 tracking-widest">
                      <Clock size={12} />
                      <span>{cls.time}</span>
                    </div>
                    <div className="text-2xl font-black italic tracking-tight mb-2 uppercase group-hover:text-red-600 transition-colors">{cls.name}</div>
                    <div className="flex items-center space-x-2 text-white/30 font-bold uppercase text-[10px] tracking-widest">
                      <User2 size={12} />
                      <span>{cls.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
