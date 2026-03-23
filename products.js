const products = [
  {
    id: 1, name: '415 footlock', cat: 'accessories', price: 25, orig: 30, emoji: '⚙️', badge: 'sale',
    desc: 'Our signature footlock kit includes everything you need to install secure, comfortable footpegs on your ebike. CNC-machined from durable aluminum with a sleek black anodized finish, these pegs provide a solid platform for aggressive riding and precise control.',
    specs: [],
    features: ['Pair of footlocks', 'Mounting hardware'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 2, name: 'ultra bee brakes', cat: 'brakes', price: 175, orig: null, emoji: '🔩',
    desc: 'The Ultra Bee brake kit delivers powerful, fade-free stopping performance for high-speed ebike builds. Featuring oversized 203mm rotors and hydraulic calipers with built-in motor inhibitors, this kit is designed to handle the demands of aggressive riding and steep descents with confidence.',
    specs: [],
    features: ['Hub motor laced to 26" or 27.5" rim', 'Phase wires (350mm pigtail)', 'Hall sensor wires', 'Axle nuts & washers', 'Installation guide'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 3, name: 'Motocross Single Ply Grips Half Waffle Black Univ', cat: 'grips', price: 13, orig: null, emoji: '⚡', badge: 'SALE',
    desc: 'Our half-waffle grips are designed for maximum comfort and control on the trail. Made from a durable rubber compound with a textured surface, these grips provide excellent traction and shock absorption for aggressive riding styles.',
    specs: [],
    features: ['Motor with laced 26" rim', 'Waterproof phase connectors', 'Hall sensor pigtail', 'Freewheel thread included', 'Reflective sidewall tire'],
    stock: 'Out of Stock'
  },
  {
    id: 4, name: 'titanium bolt pegs', cat: 'accessories', price: 30, orig: null, emoji: '🔋',
    desc: 'Our titanium bolt pegs are the ultimate upgrade for riders seeking a lightweight, durable, and stylish footpeg solution. CNC-machined from high-grade titanium alloy, these pegs offer exceptional strength and corrosion resistance while adding a sleek, high-performance aesthetic to your ebike build.',
    specs: [],
    features: ['Triangle battery with frame straps', 'Smart BMS with Bluetooth app', '5A charger', 'XT60 output connector', 'Waterproof bag cover', 'Cell-level fusing'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 5, name: 'XXX motor cover', cat: 'accessories', price: 16, orig: 20, emoji: '🔋', badge: 'SALE',
    desc: 'Our motor cover is designed to protect your ebike’s motor from dirt, debris, and moisture while adding a sleek, custom look to your build. Made from durable, weather-resistant materials, this cover provides a snug fit around your motor to keep it safe during aggressive riding and adverse conditions.',
    specs: [],
    features: ['Dolphin battery pack', '3A charger included', 'Rack mounting bracket', 'Key lock & spare key', 'Anderson connector + XT60 adapter'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 6, name: 'XXX side cover', cat: 'accessories', price:37, orig: null, emoji: '🔋',
    desc: 'Our side cover is engineered to provide robust protection for your ebike’s battery and electrical components while enhancing the overall aesthetics of your build. Crafted from high-quality, impact-resistant materials, this cover offers a secure fit and easy access for maintenance, ensuring your battery stays safe from the elements and road debris.',
    specs: [],
    features: ['Frame bag battery', '2A charger', 'Velcro mounting straps', 'LED charge indicator', 'Insulated carry pouch'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 7, name: 'XXX key ignition cover', cat: 'accessories', price: 35, orig: null, emoji: '🖥️',
    desc: 'Our key ignition cover is designed to provide secure, convenient control over your ebike’s power system while adding a sleek, custom touch to your build. Made from durable materials with a weather-resistant finish, this cover features a built-in key ignition switch that allows you to easily turn your ebike on and off while keeping your electrical components protected from dirt and moisture.',
    specs: [],
    features: ['Controller unit', 'Programming cable (USB)', 'Sabvoton PC software license', 'Wiring diagram PDF', 'Heat sink with thermal paste'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 8, name: 'XXX titanium bolt kit', cat: 'accessories', price: 85, orig: 109, emoji: '🖥️', badge: 'HOT',
    desc: 'Our titanium bolt kit is the ultimate upgrade for riders seeking a lightweight, durable, and stylish hardware solution for their ebike build. CNC-machined from high-grade titanium alloy, this kit offers exceptional strength and corrosion resistance while adding a sleek, high-performance aesthetic to your bike. Each bolt is precision-engineered to provide a secure fit and long-lasting performance, making it the perfect choice for riders who demand the best in both form and function.',
    specs: [],
    features: ['KT controller unit', 'Waterproof wiring harness', 'Connector set (pre-wired)', 'LCD display cable', 'Installation sheet'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 9, name: '28mm handlebars', cat: 'accessories', price: 20, orig: null, emoji: '📱',
    desc: 'Our 28mm handlebars are designed to provide a comfortable and responsive riding experience for ebike riders. Made from high-quality materials, these handlebars offer excellent strength and durability while maintaining a lightweight profile. The 28mm diameter provides a secure grip for your hands, allowing for precise control and improved handling on a variety of terrains.',
    specs: [],
    features: ['850C display unit', '31.8mm handlebar clamp', 'Wiring harness', 'Protective screen film', 'User manual'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 10, name: 'carbon XXX fender', cat: 'accessories', price: 20, orig: 25, emoji: '📟', badge: 'NEW',
    desc: 'Our carbon XXX fender is engineered to provide lightweight, durable protection against mud and debris while adding a sleek, high-performance aesthetic to your ebike build. Crafted from high-quality carbon fiber, this fender offers exceptional strength and impact resistance while maintaining a minimal weight profile. The aerodynamic design not only enhances the look of your bike but also helps to reduce drag, making it the perfect choice for riders who demand both style and function.',
    specs: [],
    features: ['DPC-18 display', 'Handlebar mount', 'Charging cable', 'Cadence sensor', 'BT speed sensor'],
    stock: 'Pre-order — Ships in 7 days'
  },
  {
    id: 11, name: 'surron ibx back fender', cat: 'accessories', price: 15, orig: null, emoji: '🚑',
    desc: 'The Surron IBX back fender is designed to provide reliable protection against mud and debris for your ebike’s rear wheel. Made from durable, weather-resistant materials, this fender offers a secure fit and easy installation, ensuring that your bike stays clean and protected during aggressive riding and adverse conditions.',
    specs: [],
    features: ['Front + rear caliper set', '203mm rotors (x2)', 'Brake levers w/ inhibitor', 'Pre-bled hydraulic lines', 'Mounting bolts & pads', '50ml Royal Blood fluid'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 12, name: 'glossy motocuts plate', cat: 'accessories', price: 20, orig: 22, emoji: '🚑', badge: 'SALE',
    desc: 'The Glossy Motocuts plate is engineered to provide robust protection for your ebike’s drivetrain components while enhancing the overall aesthetics of your build. Crafted from high-quality, impact-resistant materials with a glossy finish, this plate offers a secure fit and easy access for maintenance, ensuring your motor and chainring stay safe from the elements and road debris.',
    specs: [],
    features: ['Front + rear lever set', '180mm rotors (x2)', 'Cut-off sensor cables', 'Pre-bled lines', 'Caliper mounting bolts'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 13, name: 'baja light', cat: 'accessories', price: 15, orig: null, emoji: '🔧',
    desc: 'The Baja Light is a compact, high-performance headlight designed to provide bright, reliable illumination for night riding and low-light conditions. Featuring a powerful LED bulb with multiple brightness settings, this light offers excellent visibility while maintaining a sleek, minimalist design that complements any ebike build.',
    specs: [],
    features: ['Torque sensing BB unit', 'Left crank arm', 'Wiring harness', 'Calibration magnet', 'Thread-in tool'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 14, name: '3D motocutz plate', cat: 'accessories', price: 34, orig: null, emoji: '🔌',
    desc: 'The 3D Motocutz plate is designed to provide robust protection for your ebike’s drivetrain components while enhancing the overall aesthetics of your build. Crafted from high-quality, impact-resistant materials with a sleek 3D design, this plate offers a secure fit and easy access for maintenance, ensuring your motor and chainring stay safe from the elements and road debris.',
    specs: [],
    features: ['XT60 battery connector pair', 'Phase wire set (3×12AWG)', 'Hall sensor connectors', 'Display cable extensions', 'Heat shrink assortment', 'Cable ties (20 pack)'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 15, name: '', cat: 'accessories', price: 22, orig: 28, emoji: '🖐️', badge: 'NEW',
    desc: 'Our in-house designed aluminum thumb throttle features a smooth hall-effect sensor for lag-free throttle response. The ergonomic profile sits naturally under your thumb for all-day comfort without fatigue.',
    specs: [{ l: 'Type', v: 'Thumb / Hall' }, { l: 'Voltage', v: '3.3–5V' }, { l: 'Output', v: '0.8–4.2V analog' }, { l: 'Material', v: 'CNC 6061 alloy' }, { l: 'Bar Clamp', v: '22.2mm' }, { l: 'Cable', v: '600mm, 3-pin JST' }],
    features: ['Thumb throttle unit', 'Lock-on bar clamp', '3-pin JST cable', 'Spare hall sensor', '1-year warranty card'],
    stock: 'In Stock — Ships within 24h'
  },
];