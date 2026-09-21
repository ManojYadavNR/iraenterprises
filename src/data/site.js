/* ==================================================================
   ALL SITE CONTENT LIVES HERE.
   Edit this one file to change text, products, numbers or contacts.
   Everything marked  // TODO: confirm  is a placeholder to verify.
================================================================== */

export const business = {
  name: 'IRA Enterprises',
  legalLine: 'Wholesale Distributors — Bio Degradable Papers',
  tagline: 'Save Soil, Save Earth',
  proprietor: 'Manjunatha M. Gowda',
  proprietorRole: 'Proprietor',
  phones: ['9742035459', '9742015459'],
  whatsapp: '919742035459',
  email: 'manjunatha.0726@gmail.com',
  gstin: '29CQLPM9854R1ZE',
  address: {
    line1: '#767, 3rd A Cross, Bharathi Nagara',
    line2: 'Ward No. 20, Chikkaballapur',
    pin: '562101',
    state: 'Karnataka, India',
  },
  // TODO: confirm — replace with your real counter timings
  hours: [
    { days: 'Monday – Saturday', time: '9:30 AM – 8:30 PM' },
    { days: 'Sunday', time: 'By appointment' },
  ],
}

export const mapsQuery = encodeURIComponent(
  '#767, 3rd A Cross, Bharathi Nagara, Ward No 20, Chikkaballapur 562101, Karnataka'
)

export const phoneHref = (p) => `tel:+91${p}`
export const prettyPhone = (p) => `${p.slice(0, 5)} ${p.slice(5)}`

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#film' },
  { label: 'Why Bio-Degradable', href: '#why' },
  { label: 'Our Store', href: '#store' },
  { label: 'Our Founder', href: '#owner' },
  { label: 'Dealership', href: '#dealership' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Wholesale distributors · Chikkaballapur, Karnataka',
  headline: 'I am not plastic.',
  sub:
    'IRA Enterprises supplies 100% bio-degradable paper bags and covers to shops, hotels, clinics and factories — in bulk, at wholesale rates. Strong enough to carry your business. Kind enough to leave nothing behind.',
  chips: [
    { value: '180', unit: 'days', label: 'back to soil' }, // TODO: confirm
    { value: '0', unit: '%', label: 'plastic content' },
    { value: '8', unit: '+', label: 'product lines' },
  ],
  badges: [
    'GST registered supplier',
    'Bulk & wholesale supply',
    'Custom sizes & printing',
    'Delivery across Karnataka',
  ],
}

export const marquee = [
  'Kirana & general stores',
  'Supermarkets',
  'Bakeries & sweet shops',
  'Hotels & restaurants',
  'Clinics & hospitals',
  'Garment showrooms',
  'Pharmacies',
  'Vegetable & fruit vendors',
  'Caterers & event halls',
  'Textile & footwear retail',
]

/* Products are taken directly from the IRA Enterprises visiting card. */
export const products = [
  {
    id: 'ucut',
    name: 'U-Cut Bags',
    kicker: 'The everyday counter carrier',
    image: '/images/p-ucut.jpg',
    desc:
      'Kraft paper bags with a clean U-shaped die-cut handle. The workhorse of daily retail — light, quick to open, and comfortable in the hand.',
    uses: ['Kirana stores', 'Pharmacies', 'Boutiques'],
  },
  {
    id: 'dcut',
    name: 'D-Cut Bags',
    kicker: 'Reinforced grip, neat finish',
    image: '/images/p-dcut.jpg',
    desc:
      'A D-shaped punch handle with a double-folded top edge, so heavier loads never tear at the handle. Crisp, squared-off and shelf-ready.',
    uses: ['Garment stores', 'Gifting', 'Takeaway'],
  },
  {
    id: 'carry',
    name: 'Carry Bags',
    kicker: 'Premium twisted handles',
    image: '/images/p-carry.jpg',
    desc:
      'Twisted paper handles on a rigid body — the bag customers keep and reuse. Turns a purchase into an experience your brand gets credit for.',
    uses: ['Showrooms', 'Brand retail', 'Festive packs'],
  },
  {
    id: 'grocery',
    name: 'Pouches / Grocery Bags',
    kicker: 'Gusseted, stands on its own',
    image: '/images/p-grocery.jpg',
    desc:
      'Flat and gusseted paper pouches that hold their shape on the counter. Ideal for loose grains, spices, snacks and dry provisions.',
    uses: ['Provision stores', 'Spice & dry fruit', 'Snack counters'],
  },
  {
    id: 'garbage',
    name: 'Garbage Bags',
    kicker: 'Compostable waste liners',
    image: '/images/p-garbage.jpg',
    desc:
      'Bio-degradable liners for wet and dry waste that break down with what is inside them — instead of sealing it in plastic for decades.',
    uses: ['Homes & offices', 'Hotels', 'Apartments'],
  },
  {
    id: 'medical',
    name: 'Medical Waste Bags',
    kicker: 'Built for safe segregation',
    image: '/images/p-medical.jpg',
    desc:
      'Colour-coded bags for clinical waste segregation, supplied in the sizes hospital housekeeping teams actually use day to day.',
    uses: ['Clinics', 'Diagnostic labs', 'Hospitals'],
  },
  {
    id: 'butter',
    name: 'Butter Paper & Covers',
    kicker: 'Grease-proof and food-safe',
    image: '/images/p-butter.jpg',
    desc:
      'Grease-resistant wrapping sheets and covers that keep sweets, bakes and hot food fresh without a plastic layer touching them.',
    uses: ['Bakeries', 'Sweet shops', 'Hotels & tiffin'],
  },
  {
    id: 'custom',
    name: 'Custom & Printed Bags',
    kicker: 'Your brand, on every bag',
    image: '/images/p-custom.jpg',
    desc:
      'Send us your size, GSM and logo. We print and supply in bulk, so every bag that leaves your counter keeps selling for you.',
    uses: ['Own branding', 'Festive & wedding', 'Bulk orders'],
  },
]

/* --------------------------- The animated story ------------------- */
export const film = {
  eyebrow: 'From soil to soil',
  title: 'The life of one IRA bag',
  sub:
    'Ninety seconds of use. A lifetime of consequence. Here is the full circle a plastic bag can never complete.',
  scenes: [
    {
      key: 'seed',
      chapter: 'The seed',
      caption: 'It begins in the soil.',
      line: 'A seed, a season of rain, and the patience of the earth.',
    },
    {
      key: 'tree',
      chapter: 'The fibre',
      caption: 'Nature gives us fibre — never plastic.',
      line: 'Wood pulp and paper: renewable, and already part of the cycle.',
    },
    {
      key: 'bag',
      chapter: 'The bag',
      caption: 'We fold it into something useful.',
      line: 'Cut, creased and reinforced at our Chikkaballapur unit.',
    },
    {
      key: 'use',
      chapter: 'The work',
      caption: 'It carries your business, every single day.',
      line: 'From your counter to a customer’s kitchen, over and over.',
    },
    {
      key: 'return',
      chapter: 'The return',
      caption: 'And then it becomes soil again.',
      line: 'No microplastic. No landfill century. Just earth, back where it started.',
    },
  ],
  outro: 'Save Soil. Save Earth.',
}

/* --------------------------- Why bio-degradable ------------------- */
export const why = {
  eyebrow: 'Why it matters',
  title: 'A plastic bag outlives the person who used it.',
  body:
    'One carry bag is useful for about twenty minutes. In plastic, it then sits in our soil and lakes for generations, breaking into fragments too small to ever collect again. Paper does the opposite — it does its job, and then it leaves.',
  points: [
    {
      title: 'Returns to soil, completely',
      text: 'Our paper products break down into earth in months, not centuries — no fragments left behind.', // TODO: confirm your exact timeline
    },
    {
      title: 'No microplastics in food',
      text: 'Nothing synthetic touches what your customer eats, carries home or feeds their family.',
    },
    {
      title: 'Ready for the plastic ban',
      text: 'Switch your counter over before enforcement makes it urgent — and be the shop that did it first.',
    },
    {
      title: 'Wholesale, factory-direct rates',
      text: 'We supply in bulk, so going plastic-free costs your business far less than you expect.',
    },
  ],
  // TODO: confirm — replace with your own verified figures
  stats: [
    { value: 8, suffix: '+', label: 'Product lines in stock' },
    { value: 500, suffix: '+', label: 'Businesses supplied' },
    { value: 100, suffix: '%', label: 'Plastic-free range' },
    { value: 24, suffix: ' hr', label: 'Quotation turnaround' },
  ],
}

export const process = {
  eyebrow: 'How we work',
  title: 'From your first call to your loading bay',
  steps: [
    {
      n: '01',
      title: 'Tell us what you need',
      text: 'Size, GSM, quantity and how you use them. A photo of your current bag is enough to start.',
    },
    {
      n: '02',
      title: 'Sample & quotation',
      text: 'We share rates and a physical sample so you can feel the paper before you commit.',
    },
    {
      n: '03',
      title: 'Bulk supply or printing',
      text: 'Ready stock ships immediately. Custom-printed orders go into production with your artwork.',
    },
    {
      n: '04',
      title: 'Delivered to your door',
      text: 'Packed, counted and delivered across Chikkaballapur and Karnataka, with a GST invoice.',
    },
  ],
}

export const ownerStory = {
  eyebrow: 'Meet the proprietor',
  title: 'Built at the counter, not from a brochure.',
  body:
    'IRA Enterprises started because the plastic on our counters was ending up in the same soil our neighbours farm. Manjunatha M. Gowda opened this wholesale unit in Bharathi Nagara to give every shop in Chikkaballapur a paper option that is strong enough for daily trade — and honest enough to return to the earth when its work is done.',
  image: '/images/owner.png',
  quote:
    'I would rather you feel the paper at my counter than guess from a photo. If the bag is not good enough for my customer’s shop, it does not leave our shelf.',
  milestones: [
    {
      year: 'Rooted here',
      text: 'A Chikkaballapur business, supplying counters across Karnataka from Ward No. 20.',
    },
    {
      year: 'Wholesale first',
      text: 'Factory-direct rates, bulk supply, and GST invoicing for retailers, hotels, and institutions.',
    },
    {
      year: 'Plastic-free range',
      text: 'Eight product lines in stock — from U-cut counter bags to medical waste and custom printing.',
    },
    {
      year: 'Walk in anytime',
      text: 'Samples on the spot, sizes on the shelf, and a proprietor who picks up the phone.',
    },
  ],
}

export const dealership = {
  eyebrow: 'Partner with us',
  title: 'Dealership & distribution opportunities',
  sub:
    'Stock IRA bio-degradable paper products under your name — as a distributor, reseller, or regional partner. We supply in bulk, invoice with GST, and support you with the product range retailers already ask for.',
  benefits: [
    {
      title: 'Wholesale margins',
      text: 'Buy at distributor rates on U-cut, D-cut, carry bags, pouches, liners, and food-safe covers.',
    },
    {
      title: 'Full product range',
      text: 'Eight lines ready to supply — from kirana counter bags to medical waste and custom-printed branding.',
    },
    {
      title: 'GST & documentation',
      text: 'Every order ships with a proper tax invoice from our registered unit — GSTIN on every bill.',
    },
    {
      title: 'Reliable supply',
      text: 'Stock on the shelf at our Chikkaballapur unit, with delivery arranged across Karnataka.',
    },
  ],
  audience: [
    'Paper & packaging distributors',
    'Regional wholesalers',
    'Retail chain procurement',
    'Eco-product resellers',
  ],
  cta: 'Connect with us',
  ctaSub: 'Tell us your territory and monthly volume — we will share dealer rates and terms.',
}

export const store = {
  eyebrow: 'Come and see',
  title: 'Our store in Bharathi Nagara',
  body:
    'Walk in and handle the paper yourself. We keep every size on the shelf, and we would rather you test the grip and the GSM at our counter than guess from a photograph.',
  image: '/images/shop-front.jpg',
  highlights: [
    'All sizes stocked on the shelf',
    'Samples handed over on the spot',
    'Wholesale rates quoted in person',
    'Free parking on 3rd A Cross',
  ],
}

export const city = {
  eyebrow: 'Rooted in Chikkaballapur',
  title: 'Our soil is not an abstraction. It is home.',
  body:
    'We work in the shadow of the Nandi Hills, where the morning still smells of wet earth and eucalyptus, and where farmers a few kilometres away plant into the same ground our waste ends up in. That is not a marketing story for us — it is the reason the business exists. Every bag we sell is made to go back to the soil that raised us.',
  image: '/images/nandi-hills.jpg',
  caption: 'Nandi Hills, Chikkaballapur district — a short drive from our store.',
}

/* TODO: replace with real customer quotes before going live. */
export const testimonials = [
  {
    quote:
      'We moved our whole counter to IRA paper bags last year. Customers actually mention it, and not one has asked for plastic since.',
    name: 'Supermarket owner',
    where: 'Chikkaballapur',
  },
  {
    quote:
      'The butter covers hold up to hot sweets without going soggy. That was the thing I was most worried about, and it was never a problem.',
    name: 'Sweet shop proprietor',
    where: 'B. B. Road',
  },
  {
    quote:
      'Bulk rates were straightforward, delivery came on the day promised, and the GST invoice was in order. That is all I need from a supplier.',
    name: 'Garment retailer',
    where: 'Bharathi Nagara',
  },
]

export const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: 'We supply everything from a single bundle for a small shop to full bulk loads for chains and factories. Call us with your requirement and we will quote for that quantity honestly — there is no pressure to over-order.',
  },
  {
    q: 'Can I get bags printed with my shop name?',
    a: 'Yes. Send your logo and we will print your name, address and phone number on the bag. Printed bags need a slightly higher minimum quantity and a little more lead time, and we will tell you both upfront.',
  },
  {
    q: 'Which sizes and GSM are available?',
    a: 'U-cut, D-cut and carry bags are stocked in the common retail sizes, in a range of paper weights from light counter bags to heavy-duty grades. Tell us what you carry in them and we will point you to the right GSM.',
  },
  {
    q: 'Do you deliver outside Chikkaballapur?',
    a: 'Yes — we supply across Karnataka. Delivery timelines and freight depend on the quantity and the destination, and both are confirmed with your quotation.',
  },
  {
    q: 'Do you provide a GST invoice?',
    a: `Always. IRA Enterprises is a GST-registered supplier — GSTIN ${business.gstin} — and every order ships with a proper tax invoice.`,
  },
  {
    q: 'Are these bags genuinely bio-degradable?',
    a: 'They are paper-based products made to break down naturally, with no plastic lamination in the standard range. If you need documentation for a compliance audit, ask us and we will share the specifications for the exact grade you are buying.',
  },
]

export const businessTypes = [
  'Kirana / general store',
  'Supermarket',
  'Bakery / sweet shop',
  'Hotel / restaurant',
  'Clinic / hospital',
  'Garment / footwear retail',
  'Distributor / reseller',
  'Other',
]
