export type FAQItem = {
  title: string;
  description: string | string[];
};

export const faqItems: FAQItem[] = [
  {
    title: "How do I open a personal account?",
    description: [
      "To open a personal account, you will need:",
      "A valid identity document: National ID card (front and back) or passport.",
      "Proof of address: A utility bill (gas, water, electricity, mobile phone) no older than 3 months.",
      "Once your application is completed, our team may contact you with additional questions to confirm your details",
    ],
  },
  {
    title: "How long does it take to receive funds in my bank account?",
    description:
      "Funds are typically processed and deposited into our digital payment platform and your bank account within 2-5 business days, depending on the bank’s processing times.",
  },
  {
    title: "What fees does PayDo charge?",
    description:
      "PayDo ensures transparency in fees. You can find a detailed list of all fees and transaction limits of our electronic payment solution in the “Pricing & Limits” section, available in your account’s left-hand menu or in the “Pricing” page",
  },
  {
    title: "Does PayDo offer virtual or physical cards?",
    description:
      "Yes, PayDo offers both virtual cards (ideal for online transactions) and physical cards (perfect for everyday purchases). Choose the option that best fits your lifestyle",
  },
  {
    title: "What countries are supported by PayDo?",
    description:
      "PayDo is a global payment gateway that supports users worldwide, with a few exceptions. Please check our Prohibited Jurisdictions page for a full list of unsupported regions.",
  },
  {
    title: "Is PayDo high-risk and high-growth friendly?",
    description:
      "Yes, PayDo is both a high-risk and high-growth friendly payment solutions company. Study the list of industries that they serve and utilize the help of a dedicated account manager that specializes in your high-risk/high-growth industry",
  },
  {
    title: "Do you need to sign separate contracts for different PayDo solutions?",
    description:
      "No, a single contract with PayDo grants you access to all of their electronic payment solutions: multicurrency IBANs, merchant account (checkout), mass payments, virtual and physical cards.",
  },
  {
    title: "Can I use PayDo for my freelance or remote work income?",
    description:
      "Yes, PayDo is ideal for freelancers, remote workers, and digital nomads. You can receive payments from clients globally, convert funds to your preferred currency, and withdraw via card or bank transfer. The platform supports fast access to your earnings with minimal fees and hassle.",
  },
];
