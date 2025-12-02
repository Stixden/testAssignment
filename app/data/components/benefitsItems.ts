export type BenefitsItem = {
  title?: string;
  itemTitle?: string;
  description?: string;
  hasImage?: boolean;
  hasLink?: boolean;
};

export const benefitsItems: BenefitsItem[] = [
  {
    title: "Your PayDo benefits",
  },
  {
    itemTitle: "Multicurrency IBAN account in 19 currencies",
    description: "Go global — hold, send, and receive money in different currencies from one smart account",
    hasImage: true,
  },
  {
    itemTitle: "Free opening and maintenance",
    description: "Enjoy free account opening and zero maintenance fees for seamless financial management",
    hasImage: true,
  },
  {
    itemTitle: "Account details for cross-border transfers",
    description:
      "Local and international account details, at your service in just a few clicks. Generate unique IBANs and SWIFT/BIC codes to access any market",
    hasImage: true,
  },
  {
    itemTitle: "Physical and virtual cards",
    description:
      "Experience the full spectrum of PayDo services, online and offline. Shop in the most convenient way— anytime, anywhere",
    hasImage: true,
  },

  {
    itemTitle: "Payment on checkout",
    description:
      "Pay in seconds by choosing PayDo at checkout and complete your purchase. Immediate, secure payments directly from your account during online checkout",
    hasImage: true,
  },
  {
    itemTitle: "Top-up with cards or by APMs",
    description:
      "Fund your account through a variety of payment channels. Support top-ups through card networks (Visa, Mastercard) and 350+ payment methods",
    hasImage: true,
  },
  {
    itemTitle: "Free payments to/from other PayDo users",
    description:
      "Enable transactions with zero internal fees between PayDo user accounts. Instant and fee-free transfers within the PayDo user network",
    hasImage: true,
  },
];
