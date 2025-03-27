import Link from 'next/link';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
  const PLANS = [
    { 
      name: 'Premium', 
      duration: '12 Months', 
      price: '₹ 8,900',
      features: {
        'Access to members trust score': true,
        'Chat with other members without sharing your personal mobile number': true,
        'Priority in search results': false,
        'Conduct conversation on your behalf with candidate': false,
        'Organise your meeting': false,
        'Prepare you for your interaction with prospect': false,
        'Support & Guidance throughout': false,
        'Horoscope Profile': true,
        'Automated mysambandh match recomendetion': true,
        'Handpicked match recommendation by experts': false
      }
    },
    { 
      name: 'Elite BIAnnual', 
      duration: '6 Months', 
      price: '₹ 12,900',
      features: {
        'Access to members trust score': true,
        'Chat with other members without sharing your personal mobile number': true,
        'Priority in search results': true,
        'Conduct conversation on your behalf with candidate': true,
        'Organise your meeting': true,
        'Prepare you for your interaction with prospect': true,
        'Support & Guidance throughout': true,
        'Horoscope Profile': true,
        'Automated mysambandh match recomendetion': true,
        'Handpicked match recommendation by experts': true
      }
    },
    { 
      name: 'Elite', 
      duration: '12 Months', 
      price: '₹ 18,900',
      features: {
        'Access to members trust score': true,
        'Chat with other members without sharing your personal mobile number': true,
        'Priority in search results': true,
        'Conduct conversation on your behalf with candidate': true,
        'Organise your meeting': true,
        'Prepare you for your interaction with prospect': true,
        'Support & Guidance throughout': true,
        'Horoscope Profile': true,
        'Automated mysambandh match recomendetion': true,
        'Handpicked match recommendation by experts': true
      }
    },
    { 
      name: 'Elite Till You Marry', 
      duration: '120 Months', 
      price: '₹ 31,900',
      features: {
        'Access to members trust score': true,
        'Chat with other members without sharing your personal mobile number': true,
        'Priority in search results': true,
        'Conduct conversation on your behalf with candidate': true,
        'Organise your meeting': true,
        'Prepare you for your interaction with prospect': true,
        'Support & Guidance throughout': true,
        'Horoscope Profile': true,
        'Automated mysambandh match recomendetion': true,
        'Handpicked match recommendation by experts': true
      }
    }
  ];

  const FEATURES = [
    'Access to members trust score',
    'Chat with other members without sharing your personal mobile number',
    'Priority in search results',
    'Conduct conversation on your behalf with candidate',
    'Organise your meeting',
    'Prepare you for your interaction with prospect',
    'Support & Guidance throughout',
    'Horoscope Profile',
    'Automated mysambandh match recomendetion',
    'Handpicked match recommendation by experts'
  ];

  return (
    <section className="relative pricing-section py-16 lg:py-30">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-xl md:text-2xl lato-bold font-bold text-[#ED2B73]">Plans and Pricing</h2>
          <h3 className="text-2xl lg:max-w-xl mx-auto lg:text-[40px] playfair-display font-bold text-[#000000]">
            Just Few Steps Away To Meet Your Soulmate.
          </h3>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#D9D9D9]">
            <thead>
              <tr className="">
                <th className="w-3/7 p-4 text-left border border-[#D9D9D9]">
                  <p className="text-2xl text-[#ED2B73] lato-bold">
                    Select the Package that best suits your needs.
                  </p>
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.name} className="p-4 text-center border border-[#D9D9D9]">
                    <p className="text-[22px] text-[#ED2B73] lato-bold flex flex-col gap-4">
                      {plan.name}
                      <br />
                      <span className="text-[16px] lato-regular text-[#000]">{plan.duration}</span>
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {FEATURES.map((feature) => (
                <tr key={feature}>
                  <td className="p-4 text-[#000] border lato-regular text-[18px] border-[#D9D9D9]">{feature}</td>
                  {PLANS.map((plan) => (
                    <td key={`${plan.name}-${feature}`} className="p-4 text-center border border-[#D9D9D9]">
                      {plan.features[feature] ? (
                        <div className="flex justify-center">
                          <FaCheck className="w-5 h-5 p-0.5 rounded-full border-2 border-[#000] text-[#000]" />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <FaTimes className="w-5 h-5 p-0.5 rounded-full border-2 border-[#ED2B73] text-[#ED2B73]" />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Combined Price and Select Plan row */}
              <tr>
                <td className="p-4 border border-[#D9D9D9]"></td>
                {PLANS.map((plan) => (
                  <td key={`price-${plan.name}`} className="p-4 text-center border border-[#D9D9D9]">
                    <div className="flex flex-col items-center gap-6">
                      <p className="text-lg md:text-xl lato-bold font-bold text-[#000]">{plan.price}</p>
                      <Link
                        href="/select-plan"
                        className="inline-block rounded-md bg-[#ED2B73] px-4 text-[18px] py-2 text-sm md:text-base lato-bold text-white transition-colors hover:bg-[#c8235c]"
                      >
                        Select Plan
                      </Link>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
