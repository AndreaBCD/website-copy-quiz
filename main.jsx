import React, { useState } from 'react';
import { Mail, CheckCircle, Calendar, RotateCcw } from 'lucide-react';

const WebsiteCopyQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'industry',
      question: 'What industry best describes your business?',
      options: [
        { main: 'Coaching & Consulting', sub: '(business, life, career, executive, leadership, mindset, brand strategist, etc.)' },
        { main: 'Health & Wellness', sub: '(yoga, fitness, nutrition, dietitian, therapy, pilates, meditation, massage, holistic, etc.)' },
        { main: 'Creative Services', sub: '(copywriter, photographer, designer, stylist, social media manager, VA, videographer, illustrator, etc.)' },
        { main: 'E-commerce / Product-Based', sub: '(Etsy, Shopify, digital products, subscription boxes, boutiques, handmade goods, etc.)' }
      ]
    },
    {
      id: 'businessModel',
      question: "What's your primary business model?",
      options: [
        '1:1 Services (coaching, consulting, design work)',
        'Group Programs / Courses',
        'Digital Products / Resources',
        'Physical Products'
      ]
    },
    {
      id: 'businessStage',
      question: "What stage is your business in?",
      options: [
        'Just starting (0-2 years)',
        'Established (2-4 years)',
        'Scaling (4+ years)'
      ]
    },
    {
      id: 'websiteGoal',
      question: "What's your main website goal?",
      options: [
        'Establish credibility and online presence',
        'Generate leads and consultations',
        'Sell products or services directly',
        'Build email list and community',
        'Showcase portfolio and attract clients'
      ]
    },
    {
      id: 'numberOfOffers',
      question: 'How many offers do you have?',
      options: [
        '1 main offer',
        '2-3 offers',
        '4+ offers',
        "Still figuring it out"
      ]
    },
    {
      id: 'currentSituation',
      question: "What's your current website situation?",
      options: [
        'No website yet',
        'DIY website that needs help',
        'Outdated professional site',
        'Website on wrong platform'
      ]
    },
    {
      id: 'biggestChallenge',
      question: "What's your biggest website challenge?",
      options: [
        "Don't know what pages I need",
        "Struggling with copy and messaging",
        'Not converting visitors to clients',
        'Website looks unprofessional',
        'Too complicated to update'
      ]
    },
    {
      id: 'copyStatus',
      question: 'Do you have your copy written?',
      options: [
        'Yes, professionally written',
        'Yes, I wrote it myself',
        'Partially written',
        'Not written yet'
      ]
    },
    {
      id: 'brandAssets',
      question: 'Do you have professional brand assets?',
      options: [
        'Yes, full brand identity',
        'Logo and colors only',
        'DIY branding',
        'No branding yet'
      ]
    },
    {
      id: 'revenueGoal',
      question: "What's your monthly revenue goal?",
      options: [
        'Under $8K/month',
        '$8K-$20K/month',
        '$20K+/month',
        'Not sure yet'
      ]
    },
    {
      id: 'websiteJourney',
      question: "Are you considering a website redesign?",
      options: [
        'Actively planning a website redesign',
        'Exploring options and gathering information',
        'Thinking about it for down the road',
        "Just curious about what's involved"
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const value = typeof answer === 'object' ? answer.main : answer;
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length);
    }
  };

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setEmail('');
    setShowResults(false);
  };

  const getRecommendations = () => {
    const industry = answers.industry;
    const businessStage = answers.businessStage;
    const numberOfOffers = answers.numberOfOffers;
    const websiteGoal = answers.websiteGoal;
    const revenueGoal = answers.revenueGoal;

    let recommendedPackage = 'Starter';
    let packagePrice = '$3,500';
    let packageReason = '';
    let totalPages = 5;
    let whyThisPackage = '';

    if (
      businessStage === 'Scaling (4+ years)' || 
      revenueGoal === '$20K+/month' ||
      numberOfOffers === '4+ offers'
    ) {
      recommendedPackage = 'Authority';
      packagePrice = '$8,500+';
      totalPages = 11;
      packageReason = "You're an established business ready to own your market with comprehensive content, advanced SEO, and premium positioning.";
      whyThisPackage = "Based on your answers, you're operating at a level where your website needs to reflect your expertise and authority. You need comprehensive content and strategic positioning to compete at the top tier of your industry.";
    } else if (
      businessStage === 'Established (2-4 years)' ||
      revenueGoal === '$8K-$20K/month' ||
      (numberOfOffers === '2-3 offers') ||
      websiteGoal === 'Sell products or services directly' ||
      websiteGoal === 'Generate leads and consultations'
    ) {
      recommendedPackage = 'Growth';
      packagePrice = '$5,500';
      totalPages = 8;
      packageReason = "You're ready to actively convert visitors into clients with strategic design, SEO foundation, and a sales page.";
      whyThisPackage = "Based on your answers, you're past the startup phase and ready for a website that actively generates revenue. You need conversion-focused design and SEO to support your growth.";
    } else {
      recommendedPackage = 'Starter';
      packagePrice = '$3,500';
      totalPages = 5;
      packageReason = "You need a professional online presence to establish credibility and start attracting clients.";
      whyThisPackage = "Based on your answers, you're in the foundation-building phase. You need a clean, professional website that establishes your credibility without overwhelming complexity.";
    }

    let corePages = [
      {
        name: 'Home',
        wordCount: '1,000-1,500',
        purpose: 'Your first impression - clearly communicate what you do and who you help',
        sections: ['Hero with compelling headline', 'Value proposition', 'How you work (3-step process)', 'Social proof (scattered testimonials)', 'Clear CTA'],
        tips: 'Lead with transformation, not struggle. Embed FAQs for SEO. Make your CTA impossible to miss.',
        example: 'Instead of "I help overwhelmed entrepreneurs," try "Turn your expertise into consistent $10K months with strategic systems."'
      },
      {
        name: 'About',
        wordCount: '800-1,200',
        purpose: 'Build trust through your story, credentials, and what makes you different',
        sections: ['Your story (framed positively)', 'Credentials & experience', 'Your unique approach', 'Mission & values', 'Personal testimonials'],
        tips: 'Focus on how your journey helps clients, not just your biography. Include personal testimonials about YOU.',
        example: '"After 10 years in corporate wellness, I created a framework that helps busy professionals prioritize health without burnout."'
      },
      {
        name: 'Services / Work With Me',
        wordCount: '700-1,500',
        purpose: 'Clear breakdown of your offers with benefits and how clients can work with you',
        sections: ['Services overview', 'Each offer detailed', 'Key benefits', 'Service-specific testimonials', 'Process/timeline', 'Embedded FAQs', 'Next steps CTA'],
        tips: 'Sell outcomes, not features. Add offer-specific FAQs for SEO. Include testimonials for each service.',
        example: '"1:1 Brand Strategy Session - Walk away with a crystal-clear brand message, ideal client profile, and positioning that makes you unforgettable."'
      },
      {
        name: 'Contact',
        wordCount: '200-300',
        purpose: 'Make it easy and welcoming for potential clients to reach you',
        sections: ['Welcoming intro', 'Contact form or booking calendar', 'Email/social links', 'Response time expectation'],
        tips: 'Remove friction - make booking feel easy and inviting.',
        example: '"Ready to chat? Book a free 20-minute call or send me a message below. I typically respond within 24 hours."'
      }
    ];

    if (industry === 'Coaching & Consulting') {
      corePages.push({
        name: 'Results / Case Studies',
        wordCount: '600-1,000',
        purpose: 'Showcase client transformations and prove your methodology works',
        sections: ['Client success stories', 'Before/after transformations', 'Results metrics', 'Process highlights', 'Video testimonials (if available)'],
        tips: 'Feature specific, measurable results. Show the journey, not just the outcome.',
        example: '"Sarah went from $3K months to consistent $12K months in 90 days by implementing our signature framework."'
      });
    } else if (industry === 'Health & Wellness') {
      corePages.push({
        name: 'Approach / Philosophy',
        wordCount: '600-800',
        purpose: 'Explain your methodology and what makes your approach unique',
        sections: ['Your philosophy', 'Your methodology/framework', 'Who it works best for', 'What clients can expect', 'Client experiences'],
        tips: 'Help potential clients understand what working with you actually feels like.',
        example: '"My holistic approach blends evidence-based nutrition with mindful eating practices for lasting wellness transformation."'
      });
    } else if (industry === 'Creative Services') {
      corePages.push({
        name: 'Portfolio / Work',
        wordCount: '400-600',
        purpose: 'Showcase your best work to prove expertise and attract ideal clients',
        sections: ['6-10 best projects', 'Before/after (if applicable)', 'Client results', 'Your process highlights', 'Project testimonials'],
        tips: 'Quality over quantity - curate your strongest work only. Add testimonials for each project.',
        example: 'Each portfolio piece: client industry, challenge they faced, your solution, measurable results achieved.'
      });
    } else {
      corePages.push({
        name: 'Shop / Products',
        wordCount: '500-800',
        purpose: 'Showcase products with compelling descriptions and seamless purchasing',
        sections: ['Product categories', 'Featured products', 'Detailed descriptions', 'Customer reviews', 'Add to cart CTA', 'Shipping/returns'],
        tips: 'Use lifestyle photography and benefit-driven product descriptions. Include product reviews.',
        example: '"Hand-stitched leather tote - Fits laptop + daily essentials, ages beautifully, ethically crafted in Oregon."'
      });
    }

    let growthPages = [];
    
    if (recommendedPackage === 'Growth') {
      growthPages = [
        { 
          name: 'Short-Form Sales Page', 
          wordCount: '1,500-2,500', 
          purpose: 'Convert warm leads for your signature offer with focused persuasion',
          note: 'First sales page included. Additional sales pages available.'
        },
        { 
          name: 'Blog Grid', 
          wordCount: 'Setup only', 
          purpose: 'Content hub for SEO and thought leadership' 
        },
        { 
          name: 'Extended Social Proof', 
          wordCount: '400-600', 
          purpose: 'Additional case studies or detailed testimonials (beyond what is scattered on other pages)' 
        }
      ];
    }

    if (recommendedPackage === 'Authority') {
      growthPages = [
        { 
          name: 'Long-Form Sales Page', 
          wordCount: '3,000-5,000', 
          purpose: 'Full persuasive sales page for high-ticket offers with comprehensive storytelling',
          note: 'First long-form sales page included. Additional sales pages available for multiple offers.'
        },
        { 
          name: 'Blog Grid', 
          wordCount: 'Setup only', 
          purpose: 'Content hub for SEO authority and audience nurturing' 
        },
        { 
          name: 'Expanded Case Studies', 
          wordCount: '1,000+', 
          purpose: 'Deep-dive transformations with detailed before/after analysis' 
        },
        { 
          name: 'Press / Features', 
          wordCount: '400-600', 
          purpose: 'Media mentions and authority signals that build instant credibility' 
        },
        { 
          name: 'Process / How It Works', 
          wordCount: '600-800', 
          purpose: 'Detailed methodology that establishes expertise' 
        },
        { 
          name: 'Resources Hub', 
          wordCount: 'Setup', 
          purpose: 'Content hub positioning you as the go-to expert' 
        }
      ];
    }

    let additionalPages = [
      'Resources / Freebies - Grow your email list with valuable lead magnets',
      'Thank You Page - Nurture new subscribers after they download your freebie',
      'Additional Sales Pages - For multiple offers (short-form $795, long-form $1,195)',
      'Dedicated FAQ Page - Only if you have 20+ questions (otherwise embed in Home/Services)'
    ];

    if (recommendedPackage === 'Authority') {
      additionalPages.push(
        'Webinar/Workshop Page - For live or automated events',
        'Membership Portal Landing - If you offer ongoing programs'
      );
    }

    return {
      package: recommendedPackage,
      packagePrice,
      packageReason,
      whyThisPackage,
      totalPages,
      corePages,
      growthPages,
      additionalPages: [...new Set(additionalPages)]
    };
  };

  const progress = currentStep <= questions.length ? (currentStep / (questions.length + 1)) * 100 : 100;

  if (currentStep < questions.length) {
    const question = questions[currentStep];
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="max-w-2xl w-full">
          <div className="text-center mb-6">
            <div className="text-2xl font-light" style={{ color: '#333333', fontFamily: 'serif' }}>
              breathe<span style={{ color: '#ADB98F' }}>create</span>
            </div>
            <div className="text-xs tracking-widest" style={{ color: '#7D806A' }}>DESIGN</div>
          </div>

          <div className="mb-4">
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#ADB98F' }}
              />
            </div>
            <p className="text-sm mt-2 text-center" style={{ color: '#7D806A' }}>
              Question {currentStep + 1} of {questions.length}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#333333' }}>
              {question.question}
            </h2>
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isObject = typeof option === 'object';
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-lg border-2 transition-all hover:scale-[1.02] text-sm md:text-base"
                    style={{ 
                      borderColor: '#ADB98F',
                      backgroundColor: 'white',
                      color: '#333333'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EBECFF';
                      e.currentTarget.style.borderColor = '#ADB98F';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.borderColor = '#ADB98F';
                    }}
                  >
                    {isObject ? (
                      <>
                        <strong>{option.main}</strong> {option.sub}
                      </>
                    ) : (
                      option
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === questions.length && !showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-6">
            <div className="text-2xl font-light" style={{ color: '#333333', fontFamily: 'serif' }}>
              breathe<span style={{ color: '#ADB98F' }}>create</span>
            </div>
            <div className="text-xs tracking-widest" style={{ color: '#7D806A' }}>DESIGN</div>
          </div>

          <div className="text-center mb-8">
            <Mail size={48} className="mx-auto mb-4" style={{ color: '#ADB98F' }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Almost there!
            </h2>
            <p className="text-lg" style={{ color: '#555555' }}>
              Enter your email to receive your personalized Website Copy Roadmap
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full p-4 rounded-lg border-2 text-lg"
              style={{ borderColor: '#ADB98F', color: '#333333' }}
            />
            <button
              onClick={handleEmailSubmit}
              disabled={!email || !email.includes('@')}
              className="w-full py-4 rounded-lg text-white font-semibold text-lg transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#ADB98F' }}
            >
              Get My Results
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen p-4 py-12" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-light" style={{ color: '#333333', fontFamily: 'serif' }}>
              breathe<span style={{ color: '#ADB98F' }}>create</span>
            </div>
            <div className="text-sm tracking-widest" style={{ color: '#7D806A' }}>DESIGN</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 mb-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: '#333333' }}>
              Your Personalized Website Copy Roadmap
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: '#555555' }}>
              Based on your answers, here is exactly what your website needs to create a statement brand.
            </p>

            <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#EBECFF', borderLeft: '4px solid #ADB98F' }}>
              <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#333333' }}>
                Recommended: {recommendations.package} Site
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#ADB98F' }}>
                {recommendations.packagePrice} • {recommendations.totalPages} pages total
              </p>
              <p className="mb-4" style={{ color: '#555555' }}>
                {recommendations.packageReason}
              </p>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F5F5F0' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                  💡 Why this package?
                </p>
                <p className="text-sm" style={{ color: '#555555' }}>
                  {recommendations.whyThisPackage}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: '#FFF9E6', borderLeft: '3px solid #ADB98F' }}>
              <p className="text-sm" style={{ color: '#555555' }}>
                <strong style={{ color: '#333333' }}>Your {recommendations.totalPages} pages are organized as:</strong> 
                <br />• 5 Essential Foundation Pages (every website needs these)
                {recommendations.growthPages.length > 0 && (
                  <><br />• {recommendations.growthPages.length} Growth Pages (to actively convert and scale)</>
                )}
                <br />• Plus smart add-ons you can consider later
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#333333' }}>
              Your 5 Essential Foundation Pages
            </h2>
            <p className="mb-6" style={{ color: '#555555' }}>
              Every statement website starts with these core pages. They establish your credibility, communicate your value, and make it easy for clients to work with you.
            </p>
            <div className="space-y-6 mb-10">
              {recommendations.corePages.map((page, index) => (
                <div key={index} className="border-l-4 pl-4 md:pl-6 py-2" style={{ borderColor: '#ADB98F' }}>
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#333333' }}>
                    {page.name}
                    <span className="ml-2 md:ml-3 text-xs md:text-sm font-normal" style={{ color: '#7D806A' }}>
                      ({page.wordCount} words)
                    </span>
                  </h3>
                  <p className="text-sm md:text-base mb-3" style={{ color: '#555555' }}>
                    <strong style={{ color: '#333333' }}>Purpose:</strong> {page.purpose}
                  </p>
                  <p className="text-sm md:text-base mb-2" style={{ color: '#333333' }}>
                    <strong>Key Sections:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-3 space-y-1 text-sm md:text-base" style={{ color: '#555555' }}>
                    {page.sections.map((section, idx) => (
                      <li key={idx}>{section}</li>
                    ))}
                  </ul>
                  <p className="text-sm md:text-base mb-2" style={{ color: '#333333' }}>
                    <strong>Pro Tip:</strong> <span style={{ color: '#555555' }}>{page.tips}</span>
                  </p>
                  <p className="italic text-xs md:text-sm" style={{ color: '#7D806A' }}>
                    {page.example}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: '#EBECFF' }}>
              <p className="text-sm" style={{ color: '#555555' }}>
                <strong style={{ color: '#333333' }}>📝 Note on Testimonials:</strong> Rather than creating a dedicated testimonials page, scatter your client success stories throughout your site for maximum impact. Add general testimonials to your Home page, service-specific results on your Services/Sales pages, and personal testimonials about working with you on your About page.
              </p>
            </div>

            {recommendations.growthPages.length > 0 && (
              <>
                <div className="border-t-2 pt-8 mb-8" style={{ borderColor: '#EBECFF' }}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#333333' }}>
                    Your {recommendations.growthPages.length} Growth Pages
                  </h2>
                  <p className="mb-6" style={{ color: '#555555' }}>
                    {recommendations.package === 'Growth' 
                      ? "These additional pages help you actively convert visitors into paying clients with strategic positioning and sales psychology:"
                      : "These premium pages position you as the go-to authority in your industry and support high-ticket conversions:"
                    }
                  </p>
                  <div className="space-y-4">
                    {recommendations.growthPages.map((page, index) => (
                      <div key={index} className="p-4 rounded-lg" style={{ backgroundColor: '#F5F5F0' }}>
                        <h3 className="font-bold mb-1" style={{ color: '#333333' }}>
                          {page.name}
                          <span className="ml-2 text-sm font-normal" style={{ color: '#7D806A' }}>
                            ({page.wordCount})
                          </span>
                        </h3>
                        <p className="text-sm mb-2" style={{ color: '#555555' }}>{page.purpose}</p>
                        {page.note && (
                          <p className="text-xs italic" style={{ color: '#7D806A' }}>{page.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="border-t-2 pt-8 mb-8" style={{ borderColor: '#EBECFF' }}>
              <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#333333' }}>
                ✨ Bonus Pages (Included FREE)
              </h2>
              <p className="mb-4" style={{ color: '#555555' }}>
                When you work with Breathe Create Design, these essential pages are bonus additions to your package:
              </p>
              <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: '#E8F5E9' }}>
                <div className="mb-3">
                  <p className="font-semibold" style={{ color: '#333333' }}>Legal Pages (Terms, Privacy Policy, Disclaimer)</p>
                  <p className="text-sm" style={{ color: '#555555' }}>You provide the copy, I design them beautifully. Essential for credibility and compliance.</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#333333' }}>Instagram Links Page</p>
                  <p className="text-sm" style={{ color: '#555555' }}>Drive social traffic directly to your key offers. Perfect for mobile users.</p>
                </div>
              </div>
              <p className="text-xs italic" style={{ color: '#7D806A' }}>
                These pages do not count toward your package page total - they are my gift to ensure your site is complete.
              </p>
            </div>

            {recommendations.additionalPages.length > 0 && (
              <>
                <div className="border-t-2 pt-8 mb-8" style={{ borderColor: '#EBECFF' }}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#333333' }}>
                    Smart Add-Ons to Consider Later
                  </h2>
                  <p className="mb-4" style={{ color: '#555555' }}>
                    Once your foundation is solid, enhance your website with these strategic additions:
                  </p>
                  <ul className="space-y-2">
                    {recommendations.additionalPages.map((page, index) => (
                      <li key={index} className="flex items-start text-sm md:text-base">
                        <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} style={{ color: '#ADB98F' }} />
                        <span style={{ color: '#555555' }}>{page}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="border-t-2 pt-8 mt-8" style={{ borderColor: '#EBECFF' }}>
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#333333' }}>
                Ready to Create Your Statement Website?
              </h2>
              
              <div className="space-y-4">
                <a
                  href="https://client.breathecreatedesign.com/public/website-copy-roadmap---30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 rounded-lg text-white font-semibold text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: '#ADB98F' }}
                >
                  <Calendar className="inline mr-2" size={20} />
                  Book Your Free 30-Minute Strategy Call
                </a>
                
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#EBECFF' }}>
                  <p className="mb-3 font-semibold" style={{ color: '#333333' }}>
                    Found this helpful?
                  </p>
                  <p className="text-sm md:text-base mb-3" style={{ color: '#555555' }}>
                    Your testimonial helps other entrepreneurs discover their perfect website roadmap and keeps valuable resources like this free!
                  </p>
                </div>

                <button
                  onClick={resetQuiz}
                  className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all hover:opacity-90 flex items-center justify-center"
                  style={{ backgroundColor: 'white', border: '2px solid #ADB98F', color: '#ADB98F' }}
                >
                  <RotateCcw className="inline mr-2" size={18} />
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ color: '#7D806A' }}>
            <p className="text-sm">
              © 2025 Breathe Create Design | Andrea Botha
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default () => {
  const [started, setStarted] = useState(false);
  
  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F5F5F0' }}>
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 md:p-12">
          <div className="text-center mb-6">
            <div className="text-3xl font-light" style={{ color: '#333333', fontFamily: 'serif' }}>
              breathe<span style={{ color: '#ADB98F' }}>create</span>
            </div>
            <div className="text-sm tracking-widest" style={{ color: '#7D806A' }}>DESIGN</div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#333333' }}>
            Website Copy Roadmap Quiz
          </h1>
          <p className="text-base md:text-lg mb-6 text-center" style={{ color: '#555555' }}>
            Discover exactly which pages your website needs and get a personalized roadmap tailored to your business.
          </p>
          <div className="mb-8 space-y-3 text-sm md:text-base" style={{ color: '#333333' }}>
            <p className="flex items-start">
              <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} style={{ color: '#ADB98F' }} />
              <span>11 quick questions about your business and goals</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} style={{ color: '#ADB98F' }} />
              <span>Personalized page recommendations with word counts and tips</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} style={{ color: '#ADB98F' }} />
              <span>Package recommendation based on your specific needs</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} style={{ color: '#ADB98F' }} />
              <span>Industry-specific guidance and examples</span>
            </p>
          </div>
          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 rounded-lg text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#ADB98F' }}
          >
            Start Quiz
          </button>
          <p className="text-sm text-center mt-4" style={{ color: '#7D806A' }}>
            Takes about 3 minutes to complete
          </p>
        </div>
      </div>
    );
  }
  
  return <WebsiteCopyQuiz />;
};