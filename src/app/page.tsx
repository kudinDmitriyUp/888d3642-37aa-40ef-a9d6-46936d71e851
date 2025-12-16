"use client";

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import { CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="fluid"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Let's F*ck Around"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Destinations", id: "destinations" },
            { name: "Packages", id: "packages" },
            { name: "Stories", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Adventure Awaits"
          bottomRightText="hello@letsfuckround.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Let's F*ck Around and Find Out"
          description="Discover unexpected adventures, hidden gems, and unforgettable moments around the world. Travel beyond the guidebook."
          tag="Adventure Travel Co"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894603250-gh8rqv1q.jpg"
          imageAlt="Mountain landscape adventure"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Explore Destinations", href: "destinations" },
            { text: "Book Now", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="Travel Your Way"
          description="We believe adventure isn't about following the map, it's about creating your own path. Our curated experiences blend the thrill of discovery with thoughtful planning."
          tag="Who We Are"
          features={[
            {
              id: "offbeat",
              title: "Off-the-Beaten Path",
              description: "Skip the tourist traps. We find the hidden corners, local stories, and authentic experiences that make travel meaningful.",
              label: "100+ Unique Routes"
            },
            {
              id: "flexible",
              title: "Flexible Itineraries",
              description: "Your adventure, your pace. Mix guided experiences with free exploration. Customize every detail to match your travel style.",
              label: "Fully Customizable"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="destinations" data-section="destinations">
        <FeatureCardFourteen
          title="Featured Destinations"
          description="Handpicked locations where adventure meets discovery"
          tag="Explore"
          features={[
            {
              id: "bali",
              title: "Bali, Indonesia",
              description: "Terraced rice fields, spiritual temples, and hidden beach coves. Find your zen or your adventure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894604341-1o9z8nah.jpg",
              imageAlt: "Bali tropical beach"
            },
            {
              id: "patagonia",
              title: "Patagonia, Chile",
              description: "Granite peaks, turquoise glaciers, and endless trekking routes. For those who crave raw wilderness.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894605277-0sz9vuxz.jpg",
              imageAlt: "Patagonia mountain landscape"
            },
            {
              id: "iceland",
              title: "Iceland",
              description: "Waterfalls, geysers, black sand beaches, and northern lights. Nature's most dramatic playground.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894606220-suhddemr.jpg",
              imageAlt: "Iceland waterfall"
            },
            {
              id: "japan",
              title: "Japan",
              description: "Ancient temples, modern cities, mountain villages, and culinary excellence. East meets experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894607081-bihjb8bp.jpg",
              imageAlt: "Japan cherry blossoms"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="packages" data-section="packages">
        <PricingCardNine
          title="Travel Packages"
          description="Choose your adventure. Every package includes flights, accommodation, guides, and curated experiences."
          tag="Pricing"
          plans={[
            {
              id: "adventure",
              title: "Adventure Seeker",
              price: "$2,499",
              period: "/person",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894608037-1xh1l5qc.jpg",
              imageAlt: "Adventure package",
              features: [
                "7 days guided exploration",
                "Budget-friendly accommodation",
                "Active group experiences",
                "Local transportation included",
                "Daily adventure activities"
              ],
              button: { text: "Choose Adventure", href: "contact" }
            },
            {
              id: "luxury",
              title: "Luxury Explorer",
              price: "$6,999",
              period: "/person",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894609457-ofyj6ehj.jpg",
              imageAlt: "Luxury package",
              features: [
                "10 days curated private journey",
                "5-star resort stays",
                "Personal travel concierge",
                "Private transportation",
                "Exclusive local experiences"
              ],
              button: { text: "Choose Luxury", href: "contact" }
            }
          ]}
          variant="card"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Traveler Stories"
          description="Real adventures from real explorers"
          tag="Reviews"
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "This company changed how I travel. Instead of rushing through checklist destinations, I found myself lost in conversations with locals and discovering places Google doesn't know about.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894610722-24hpghtj.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jamesexplores",
              testimonial: "The flexibility is unreal. They mapped out my ideal itinerary but left room for spontaneity. I ended up spending an extra week in Patagonia and they arranged it all seamlessly.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894611578-j756df6y.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmatravel",
              testimonial: "As a solo traveler, I was nervous. Their team made me feel safe while pushing me out of my comfort zone. Best decision I made was booking with them.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894612315-9bmasl5j.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Marcus Johnson",
              handle: "@adventuremark",
              testimonial: "Every single detail was thought through. From transportation to meals to activities - nothing felt forced or corporate. This is what real travel should feel like.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894613037-3g37wl75.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "5",
              name: "Lisa Patel",
              handle: "@travelwithlis",
              testimonial: "I brought my family and we had completely different experiences suited to each of us. The guides were knowledgeable, fun, and genuinely cared about our trip.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894614008-ssxn38yb.jpg",
              imageAlt: "Lisa Patel"
            },
            {
              id: "6",
              name: "David Wu",
              handle: "@davidtheexplorer",
              testimonial: "Price-to-value ratio is unbeatable. I've traveled with luxury companies before, but the experience here was more authentic and memorable than five-star hotels ever provided.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894614792-313zgvek.jpg",
              imageAlt: "David Wu"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Travel Questions Answered"
          sideDescription="Everything you need to know about planning your next adventure with us."
          textPosition="left"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I book?",
              content: "We recommend booking 2-3 months in advance to secure the best flights and accommodations. However, we do offer last-minute deals for flexible travelers. Get in touch and we'll find something perfect for you."
            },
            {
              id: "2",
              title: "Are the itineraries really customizable?",
              content: "Absolutely. Our itineraries are starting points. Tell us what excites you - adventure sports, cultural immersion, luxury relaxation, wildlife - and we'll tailor every day. You can adjust on the fly too."
            },
            {
              id: "3",
              title: "What's included in the package price?",
              content: "Flights, accommodation, all listed activities, professional guides, and most meals are included. Personal expenses like shopping and optional activities are not included. We'll provide a detailed breakdown before booking."
            },
            {
              id: "4",
              title: "Do you offer group travel or is it private?",
              content: "Both. Join our group tours to meet fellow adventurers (8-15 people max), or book a private journey for you and your friends/family. Private trips give you more control; groups offer camaraderie and lower costs."
            },
            {
              id: "5",
              title: "What if I need to cancel?",
              content: "We offer flexible cancellation up to 60 days before travel with full refund. 30-60 days: 50% refund. Less than 30 days: Non-refundable. Travel insurance is highly recommended and can be added during booking."
            },
            {
              id: "6",
              title: "How experienced do I need to be?",
              content: "Our trips range from beginner-friendly to advanced. We have trips for everyone from first-time travelers to experienced adventurers. During booking, we'll match you with the perfect difficulty level and provide training if needed."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Travel Stories & Tips"
          description="Adventures from the road and insider guides to maximize your trip"
          tag="Blog"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          blogs={[
            {
              id: "1",
              category: "Guide",
              title: "Hidden Villages of Bali Beyond the Beach",
              excerpt: "Skip Ubud crowds and discover mountain villages where agriculture meets tradition. Meet coffee farmers, learn traditional weaving, and eat with local families.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894615759-67eoitca.jpg",
              imageAlt: "Bali village guide",
              authorName: "Marcus Johnson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894611578-j756df6y.jpg",
              date: "15 Mar 2025"
            },
            {
              id: "2",
              category: "Tips",
              title: "Budget Trekking in Patagonia: Save 40% and See More",
              excerpt: "Full guide to hiking independently vs. guided tours. Insider tips on camping, water sources, weather patterns, and how to do Torres del Paine without the tourist price tag.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894616612-5wi1mbm0.jpg",
              imageAlt: "Patagonia trekking",
              authorName: "Emma Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894612315-9bmasl5j.jpg",
              date: "08 Mar 2025"
            },
            {
              id: "3",
              category: "Culture",
              title: "Eating Your Way Through Japan: Street Food to Kaiseki",
              excerpt: "From midnight ramen shops to 300-year-old restaurants. Learn how to order without a menu, understand food etiquette, and discover the best 10 dishes you can't miss.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894617378-b9sxmo7e.jpg",
              imageAlt: "Japanese food culture",
              authorName: "Sarah Mitchell",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894610722-24hpghtj.jpg",
              date: "01 Mar 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Adventure"
          description="Tell us about your dream trip. Dream destination, travel style, dates, group size - whatever you have in mind. Our team will craft the perfect itinerary."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "destination",
              type: "text",
              placeholder: "Where do you want to go?",
              required: true
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred travel dates",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal trip. Budget, interests, group size, any must-sees or must-dos...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765894618304-om150st9.jpg"
          imageAlt="Travel planning"
          mediaPosition="right"
          buttonText="Start Planning"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Let's F*ck Around"
          copyrightText="© 2025 Let's F*ck Around and Find Out | Adventure Travel Co. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
