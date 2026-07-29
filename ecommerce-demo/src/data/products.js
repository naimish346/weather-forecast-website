const products = [
  {
    id: 1,
    name: 'Aurora Wireless Headphones',
    price: 149.0,
    category: 'Audio',
    rating: 4.6,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=70',
    short: 'Over-ear ANC headphones with 40h battery life.',
    description:
      'Aurora delivers deep, balanced sound with adaptive noise cancelling. Memory-foam ear cushions keep long sessions comfortable, and the 40-hour battery means you rarely reach for a cable.',
    features: ['Adaptive noise cancelling', '40h battery life', 'Bluetooth 5.3 multipoint', 'USB-C fast charge'],
  },
  {
    id: 2,
    name: 'Nimbus Mechanical Keyboard',
    price: 119.5,
    category: 'Desk',
    rating: 4.8,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=70',
    short: '75% hot-swappable board with tactile switches.',
    description:
      'A compact 75% layout with a gasket mount for a soft, cushioned typing feel. Hot-swap sockets let you change switches without soldering.',
    features: ['Hot-swappable sockets', 'Gasket mount', 'PBT double-shot keycaps', 'QMK/VIA support'],
  },
  {
    id: 3,
    name: 'Lumen Desk Lamp',
    price: 74.0,
    category: 'Desk',
    rating: 4.3,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=70',
    short: 'Dimmable LED lamp with warm-to-cool tuning.',
    description:
      'Lumen sweeps from 2700K warm to 6500K daylight so your desk matches the hour. The weighted base stays put and the arm folds flat for travel.',
    features: ['2700K–6500K tuning', 'Stepless dimming', 'Flicker-free', 'USB-C powered'],
  },
  {
    id: 4,
    name: 'Trail 30L Backpack',
    price: 98.0,
    category: 'Travel',
    rating: 4.5,
    stock: 17,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=70',
    short: 'Water-resistant daypack with laptop sleeve.',
    description:
      'Built from recycled ripstop with a padded 16" laptop sleeve, a quick-grab top pocket, and load-lifting straps that stay comfortable on long days.',
    features: ['Recycled ripstop shell', 'Fits 16" laptop', 'Water-resistant zips', 'Luggage pass-through'],
  },
  {
    id: 5,
    name: 'Meridian Automatic Watch',
    price: 320.0,
    category: 'Accessories',
    rating: 4.7,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=70',
    short: 'Sapphire-crystal automatic with 42h reserve.',
    description:
      'A slim 38mm case with brushed steel finish, sapphire crystal, and an exhibition caseback showing the 42-hour movement at work.',
    features: ['38mm steel case', 'Sapphire crystal', '42h power reserve', '50m water resistance'],
  },
  {
    id: 6,
    name: 'Ceramic Pour-Over Set',
    price: 46.0,
    category: 'Kitchen',
    rating: 4.4,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=70',
    short: 'Dripper, carafe, and reusable filter.',
    description:
      'Everything for a clean, bright cup: a stoneware dripper with a spiral rib pattern, a 600ml carafe, and a stainless mesh filter.',
    features: ['600ml carafe', 'Stoneware dripper', 'Reusable steel filter', 'Dishwasher safe'],
  },
  {
    id: 7,
    name: 'Field Canvas Sneakers',
    price: 82.0,
    category: 'Apparel',
    rating: 4.2,
    stock: 21,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=70',
    short: 'Everyday low-tops with cork footbed.',
    description:
      'Heavyweight organic canvas over a moulded cork footbed that shapes to your foot. Vulcanised rubber sole for grip that lasts.',
    features: ['Organic canvas upper', 'Cork footbed', 'Vulcanised rubber sole', 'Unisex sizing'],
  },
  {
    id: 8,
    name: 'Studio Bluetooth Speaker',
    price: 129.0,
    category: 'Audio',
    rating: 4.1,
    stock: 0,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=70',
    short: 'Room-filling stereo in a compact shell.',
    description:
      'Dual passive radiators give this small speaker a surprising low end. Pair two for true stereo, or plug in over 3.5mm.',
    features: ['Dual passive radiators', 'Stereo pairing', '18h playtime', 'IPX5 splash resistant'],
  },
]

export default products
export const categories = ['All', ...new Set(products.map((p) => p.category))]
