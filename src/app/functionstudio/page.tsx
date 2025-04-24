

export default function page() {
  return (
    <div className='mx-auto my-10 max-sm:mx-7'>

        <div className="flex gap-x-2 items-center justify-end">
            <img src="/Layers.svg" alt="layer" />
            <img src="/Line 2.svg" alt="line" />
            <img src="/Code 2.svg" alt="code" /> 
        </div>

       <h1  className='merriweather sm:text-[75.85px] sm:leading-[80px] sm:tracking-[-4%] mt-7 mb-12  text-[30px] leading-[30.36px] tracking-[-6%]'><span className="text-[#00000066] text-opacity-40">About </span> <br /> Function Studioo</h1>

       <p>We’re a team made up of a designer and a developer, combining creativity and code to bring digital products to life. With a shared passion for solving real-world problems, we collaborate seamlessly to deliver user-friendly, high-quality solutions tailored to your needs.</p>
        <p className="my-8 font-semibold">What We Do</p>
        <p>Our strength lies in bridging design and development to build products that look great and perform even better. From crafting intuitive user experiences to writing clean, scalable code, we handle every step of the process to bring your ideas to reality</p>
        

        <div className='flex-col items-start my-8'>
      <h2 className=" mb-6 font-semibold">Why Work With Us?</h2>
      <ul className="space-y-3 list-disc pl-[3%]">
        <li>
        Streamlined Collaboration: No back-and-forth between separate teams; we’re in sync from start to finish.
        </li>
        <li>
        Personalized Attention: As a small team, we prioritize your project with undivided focus and dedication
        </li>
        <li>
        End-to-End Expertise: We think big but execute down to the smallest details, ensuring no aspect of your product is overlooked.
        </li>
      </ul>
    </div>

    <div className='flex-col items-start my-8'>
      <h2 className=" mb-6 font-semibold">What you get</h2>
      <ul className="space-y-3 list-disc pl-[3%]">
        <li>
        UX-first design — Thoughtful experiences that put your users first
        </li>
        <li>
        Tailored aesthetics — Visually distinct interfaces shaped around your brand
        </li>
        <li>
        Dynamic animations — Smooth, scroll-triggered and auto-play interactions that bring your site to life
        </li>
        <li>
        Custom web development — No templates, no shortcuts—just handcrafted code
        </li>
        <li>High-converting eCommerce — Optimized storefronts built to drive sales</li>
      </ul>
    </div>

    <p>Whether you're launching a new app, redesigning your platform, or need support for ongoing development, we’re here to help you build with clarity and confidence.</p>

    <p className="my-8 underline font-medium">Let’s Build Something Great Together.</p>
      
    </div>
  )
}
