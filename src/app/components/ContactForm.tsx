import { useState } from 'react';
// import { sendContactForm } from '../lib/api';

export default function ContactForm({setShowChatPopup,showChatPopup}) {
  const [activeTab, setActiveTab] = useState('message');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
    //   await sendContactForm(formData);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        service: 'Development',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:w-[890px] ms:w-[85%] w-[90%]  mx-auto z-50">
      <div className="flex sm:justify-between items-center mb-4 max-sm:flex-col max-sm:gap-[10px]">
        <div className="flex gap-x-6 max-sm:items-start max-sm:w-full max-sm:order-2">
          <button
            className={`px-4 py-2 sm:text-xl text-sm font-medium rounded-[61.52px] ${activeTab === 'message' ? 'text-black  bg-[#F5F5F5]' : 'text-[#0000008F]'}`}
            onClick={() => setActiveTab('message')}
          >
            Send us a message
          </button>
          <button
        className={`px-4 py-2 sm:text-xl text-sm font-medium rounded-[61.52px] ${activeTab === 'call' ? 'text-black  bg-[#F5F5F5]' : 'text-[#0000008F]'}`}
            onClick={() => setActiveTab('call')}
          >
            Book a call <span className="ml-2">↗</span>
          </button>
        </div>
        <section className="flex items-center gap-3 max-sm:justify-between max-sm:w-full max-sm:order-1">
        <div className="inline-flex items-center gap-x-2 px-3 py-2 border-gray-200 border-2 rounded-full">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm">1 spot remaining</span>
        </div>
        <button onClick={()=>setShowChatPopup(!showChatPopup)}>
<img src="/Close Circle.svg" alt="close" />
</button>
        </section>
      
      </div>

      {activeTab === 'message' && (
        <div className="sm:mt-8 border-2 border-[#D0D0D0] rounded-[15px] py-8 px-6">
          <h2 className="sm:text-xl text-sm font-medium mb-6">You've got our full attention</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-sm:text-sm">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="bg-[#F5F5F5] px-4 py-3 rounded-[76.39px] w-full text-[#000000B8]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business email"
                required
                className="bg-[#F5F5F5] px-4 py-3 rounded-[76.39px] w-full text-[#000000B8]"
              />
            </div>

            <div className="mb-6">
              <p className="sm:text-xl text-sm font-medium mb-6">What service are you interested in?</p>
              <div className="flex flex-wrap gap-4 max-sm:text-xs">
                {['Web design', 'Development', 'Product design', 'Motion design'].map((service) => (
                  <label key={service} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={formData.service === service}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your project details, including your budget, so we can get started"
                required
                rows={5}
                className="bg-[#F5F5F5] px-4 py-3  sm:text-lg text-sm rounded-[25px] w-full text-[#000000B8]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-6 py-3 rounded-full flex items-center max-sm:text-sm"
            >
              Send message
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            {submitSuccess && <p className="mt-4 text-green-500">Message sent successfully!</p>}

            <p className="sm:text-sm text-[#000000B8] mt-6 text-xs">
              By clicking this button, you agree to the site's{' '}
              <a href="/privacy-policy" className="underline">Privacy Policy</a> and consent to the processing of your personal data.
            </p>
          </form>
        </div>
      )}

      {activeTab === 'call' && (
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-6">Schedule a consultation</h2>
          {/* Calendly or similar booking component would go here */}
          <p>Our booking calendar will go here. We'll implement this with Calendly or a similar service.</p>
        </div>
      )}
    </div>
  );
}