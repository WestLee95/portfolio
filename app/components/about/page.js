'use client';
import Card from '../card/page';

export default function About() {

  return (
    <>
      {/* Project Card Section */}
      <section className='flex flex-col items-center justify-center mb-10'>
        <div className="w-full h-[500px] container mx-auto px-4 py-12 flex justify-center items-center gap-2 ">
       
         <div className='w-1/2 h-3/4 flex justify-start items-start gap-4'>
  <h2 className='text-3xl'>VOICE <br /> PROJECTS</h2>
  
  {/* 1. The Grid Container: Defines a single-cell grid layout */}
  <div className="grid grid-cols-1 grid-rows-1 isolate">
    
    {/* Card 1: Bottom Card */}
    <div className="col-start-1 row-start-1">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>

    {/* Card 2: Middle Card (Slightly right) */}
    <div className="col-start-1 row-start-1 translate-x-24 translate-y-2 z-10">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>

    {/* Card 3: Top Card (Shifted further right) */}
    <div className="col-start-1 row-start-1 translate-x-48 translate-y-4 z-20">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>

  </div>
</div>

          <div className='w-1/2 h-3/4 flex justify-start items-starts gap-4'>
          <h2 className='text-3xl'>CODE <br /> PROJECTS</h2>
              {/* 1. The Grid Container: Defines a single-cell grid layout */}
  <div className="grid grid-cols-1 grid-rows-1 isolate">
    
    {/* Card 1: Bottom Card */}
    <div className="col-start-1 row-start-1">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>

    {/* Card 2: Middle Card (Slightly right) */}
    <div className="col-start-1 row-start-1 translate-x-24 translate-y-2 z-10">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>

    {/* Card 3: Top Card (Shifted further right) */}
    <div className="col-start-1 row-start-1 translate-x-48 translate-y-4 z-20">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
      />
    </div>
          </div>

</div>

</div>
          <button className="px-6 py-3 bg-black text-[#ffdf20] text-xl rounded-md hover:bg-[#6fa406] transition duration-300">View Projects</button>
      </section>
    </>
  );
}