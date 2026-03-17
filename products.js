const products = [
  {
    id: 1, name: '415 footlock', cat: 'accessories', price: 25, orig: 30, emoji: '⚙️', badge: 'sale',
    desc: 'The 415 footlock is our flagship accessory for secure foot placement. that ensures a secure a comfortable wheelie position without the need for clipless shoes. Compatible with most flat pedals and easy to install with included hardware.',
    specs: [{ l: 'Rated Power  ', v: '1000W' }, { l: 'Peak Torque', v: '160 Nm' }, { l: 'Voltage', v: '48V' }, { l: 'Weight', v: '4.2 kg' }, { l: 'Efficiency', v: '91%' }, { l: 'IP Rating', v: 'IP65' }],
    features: ['Motor unit with integrated gear sensor', 'Torque sensor bottom bracket', 'Speed sensor & magnet', 'Mounting hardware & bolts', 'Wiring harness (600mm)'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 2, name: 'ultra bee brakes', cat: 'brakes', price: 175, orig: null, emoji: '🔩',
    desc: 'The QS 205 is a high-torque rear hub motor built for high-speed conversion builds. With a wide power band and exceptional thermal tolerance, it handles continuous 3kW+ loads that would destroy lesser motors.',
    specs: [{ l: 'Peak Power', v: '3000W' }, { l: 'Voltage', v: '48–72V' }, { l: 'Max Speed', v: '65 km/h' }, { l: 'Wheel Size', v: '26" / 27.5"' }, { l: 'Axle Width', v: '135mm' }, { l: 'Weight', v: '6.8 kg' }],
    features: ['Hub motor laced to 26" or 27.5" rim', 'Phase wires (350mm pigtail)', 'Hall sensor wires', 'Axle nuts & washers', 'Installation guide'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 3, name: 'Leaf Motor 1500W', cat: 'motor', price: 299, orig: 349, emoji: '⚡', badge: 'SALE',
    desc: 'Leaf Motors are known for their silent operation and smooth power delivery. This 1500W unit is fully waterproof and dual-voltage compatible — drop it into almost any rear hub conversion without hassle.',
    specs: [{ l: 'Rated Power', v: '1500W' }, { l: 'Voltage', v: '48V / 52V' }, { l: 'Max RPM', v: '490 RPM' }, { l: 'Axle', v: '135mm QR' }, { l: 'IP Rating', v: 'IP65' }, { l: 'Weight', v: '4.0 kg' }],
    features: ['Motor with laced 26" rim', 'Waterproof phase connectors', 'Hall sensor pigtail', 'Freewheel thread included', 'Reflective sidewall tire'],
    stock: 'Low Stock — 4 left'
  },
  {
    id: 4, name: '52V 20Ah Triangle', cat: 'battery', price: 549, orig: null, emoji: '🔋',
    desc: 'Our triangle frame battery is built with premium LG 21700 cells in a 14s4p configuration. The smart BMS with Bluetooth lets you monitor cell-level data from your phone. Fits most full-suspension triangle frames.',
    specs: [{ l: 'Capacity', v: '1040 Wh' }, { l: 'Voltage', v: '52V (14s)' }, { l: 'Cell Type', v: 'LG 21700' }, { l: 'BMS', v: '30A smart BT' }, { l: 'Charge Time', v: '5–6h' }, { l: 'Cycles', v: '800+' }],
    features: ['Triangle battery with frame straps', 'Smart BMS with Bluetooth app', '5A charger', 'XT60 output connector', 'Waterproof bag cover', 'Cell-level fusing'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 5, name: '48V 15Ah Dolphin', cat: 'battery', price: 349, orig: 399, emoji: '🔋', badge: 'SALE',
    desc: 'The dolphin-style rear rack battery is one of the most popular form factors for commuter builds. Samsung 35E cells provide outstanding longevity and consistent performance in cold weather.',
    specs: [{ l: 'Capacity', v: '720 Wh' }, { l: 'Voltage', v: '48V (13s)' }, { l: 'Cell Type', v: 'Samsung 35E' }, { l: 'BMS', v: '25A continuous' }, { l: 'Mount', v: 'Rear rack' }, { l: 'Weight', v: '3.8 kg' }],
    features: ['Dolphin battery pack', '3A charger included', 'Rack mounting bracket', 'Key lock & spare key', 'Anderson connector + XT60 adapter'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 6, name: '36V 10Ah Frame Bag', cat: 'battery', price: 219, orig: null, emoji: '🔋',
    desc: 'The cleanest stealth battery solution available. Fits inside standard frame bags on most hardtail and gravel bikes. Quick-release design lets you swap or charge in seconds. Great for Class 1 builds.',
    specs: [{ l: 'Capacity', v: '360 Wh' }, { l: 'Voltage', v: '36V (10s)' }, { l: 'Cell Type', v: 'Panasonic GA' }, { l: 'Dimensions', v: '280×90×60mm' }, { l: 'Connector', v: 'XT60' }, { l: 'Weight', v: '2.2 kg' }],
    features: ['Frame bag battery', '2A charger', 'Velcro mounting straps', 'LED charge indicator', 'Insulated carry pouch'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 7, name: 'Sabvoton SVMC 72150', cat: 'controller', price: 189, orig: null, emoji: '🖥️',
    desc: 'The Sabvoton is the go-to choice for high-voltage performance builds. FOC sinusoidal waveform means whisper-quiet operation and maximum motor efficiency. Regenerative braking is fully configurable via PC software.',
    specs: [{ l: 'Max Voltage', v: '72V' }, { l: 'Max Current', v: '150A' }, { l: 'Control', v: 'FOC Sinusoidal' }, { l: 'Regen Braking', v: 'Yes' }, { l: 'Dimensions', v: '190×100×50mm' }, { l: 'Weight', v: '1.1 kg' }],
    features: ['Controller unit', 'Programming cable (USB)', 'Sabvoton PC software license', 'Wiring diagram PDF', 'Heat sink with thermal paste'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 8, name: 'KT 48V 30A', cat: 'controller', price: 89, orig: 109, emoji: '🖥️', badge: 'HOT',
    desc: 'The KT controller is the most widely compatible unit we carry. Works with nearly every 48V hub motor and most mid-drives. Plug-and-play with KT displays. An essential part for budget builds and quick upgrades.',
    specs: [{ l: 'Voltage', v: '48V' }, { l: 'Max Current', v: '30A' }, { l: 'Phases', v: 'Sine wave' }, { l: 'Display', v: 'KT compatible' }, { l: 'Protection', v: 'OC / OV / OT' }, { l: 'Weight', v: '0.6 kg' }],
    features: ['KT controller unit', 'Waterproof wiring harness', 'Connector set (pre-wired)', 'LCD display cable', 'Installation sheet'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 9, name: 'Color 850C Display', cat: 'display', price: 79, orig: null, emoji: '📱',
    desc: 'The 850C is Bafang\'s color flagship display. A bright IPS panel is readable even in direct sunlight. Built-in USB-C charges your phone while you ride. Fully compatible with all Bafang mid-drive systems.',
    specs: [{ l: 'Screen', v: '3.5" IPS color' }, { l: 'Brightness', v: '600 nits' }, { l: 'USB', v: 'USB-C 5V/2A' }, { l: 'Waterproof', v: 'IP65' }, { l: 'Interface', v: 'Bafang UART' }, { l: 'Mount', v: '31.8mm clamp' }],
    features: ['850C display unit', '31.8mm handlebar clamp', 'Wiring harness', 'Protective screen film', 'User manual'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 10, name: 'DPC-18 Smart Display', cat: 'display', price: 59, orig: 69, emoji: '📟', badge: 'NEW',
    desc: 'The DPC-18 packs GPS speed, cadence, and real-time power metering into a compact display. Bluetooth 5.0 syncs to the 415 Customs app for ride logging and remote tune. Works with most KT and UART controllers.',
    specs: [{ l: 'GPS', v: 'Yes (built-in)' }, { l: 'Bluetooth', v: 'BT 5.0' }, { l: 'Metrics', v: 'Speed / Pwr / Cad' }, { l: 'Battery', v: '500mAh built-in' }, { l: 'Interface', v: 'UART / KT' }, { l: 'App', v: 'iOS + Android' }],
    features: ['DPC-18 display', 'Handlebar mount', 'Charging cable', 'Cadence sensor', 'BT speed sensor'],
    stock: 'Pre-order — Ships in 7 days'
  },
  {
    id: 11, name: 'Magura MT5 Hydraulic', cat: 'brakes', price: 179, orig: null, emoji: '🚑',
    desc: 'Magura MT5 brakes are the gold standard for high-powered ebike builds. Four-piston calipers with 203mm rotors provide massive stopping power with precise modulation. Motor inhibitor sensor kills power instantly on squeeze.',
    specs: [{ l: 'Pistons', v: '4-piston' }, { l: 'Rotor', v: '203mm' }, { l: 'Fluid', v: 'Royal Blood' }, { l: 'Motor Cutoff', v: 'Yes (magnetic)' }, { l: 'Reach Adj.', v: 'Toolless' }, { l: 'Weight', v: '390g / side' }],
    features: ['Front + rear caliper set', '203mm rotors (x2)', 'Brake levers w/ inhibitor', 'Pre-bled hydraulic lines', 'Mounting bolts & pads', '50ml Royal Blood fluid'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 12, name: 'Tektro HD-E350', cat: 'brakes', price: 89, orig: 110, emoji: '🚑', badge: 'SALE',
    desc: 'The HD-E350 is purpose-built for ebikes with an integrated cut-off switch that signals the controller the moment you touch the lever. Hydraulic disc performance at a price that doesn\'t require justification.',
    specs: [{ l: 'Type', v: 'Hydraulic disc' }, { l: 'Rotor', v: '180mm' }, { l: 'Pistons', v: '2-piston' }, { l: 'Cut-off', v: 'Yes (2-wire)' }, { l: 'Fluid', v: 'DOT 5.1' }, { l: 'Weight', v: '310g / side' }],
    features: ['Front + rear lever set', '180mm rotors (x2)', 'Cut-off sensor cables', 'Pre-bled lines', 'Caliper mounting bolts'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 13, name: 'Torque Sensor BB', cat: 'accessories', price: 69, orig: null, emoji: '🔧',
    desc: 'Upgrade your hub motor build from cadence to torque sensing in one swap. This bottom bracket torque sensor delivers natural, responsive pedal assist that feels like a premium mid-drive. Compatible with 68 and 73mm shells.',
    specs: [{ l: 'Shell Width', v: '68 / 73mm' }, { l: 'Axle', v: '19.5mm sq taper' }, { l: 'Output', v: '5V analog' }, { l: 'Resolution', v: '12-bit' }, { l: 'Cable', v: '600mm, 5-pin' }, { l: 'Weight', v: '210g' }],
    features: ['Torque sensing BB unit', 'Left crank arm', 'Wiring harness', 'Calibration magnet', 'Thread-in tool'],
    stock: 'In Stock — Ships within 48h'
  },
  {
    id: 14, name: 'Wiring Harness Kit', cat: 'accessories', price: 34, orig: null, emoji: '🔌',
    desc: 'A complete professional-grade wiring kit with waterproof connectors rated to 40A continuous. Everything you need to run a clean, reliable ebike build from battery to motor. No crimping required — all pre-terminated.',
    specs: [{ l: 'Rating', v: '40A / 60V max' }, { l: 'Wire Gauge', v: '12 AWG (main)' }, { l: 'Connectors', v: 'XT60 / MR30 / SM' }, { l: 'Waterproof', v: 'IP67 connectors' }, { l: 'Length', v: '800mm main' }, { l: 'Pieces', v: '24-piece set' }],
    features: ['XT60 battery connector pair', 'Phase wire set (3×12AWG)', 'Hall sensor connectors', 'Display cable extensions', 'Heat shrink assortment', 'Cable ties (20 pack)'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 15, name: 'Thumb Throttle', cat: 'accessories', price: 22, orig: 28, emoji: '🖐️', badge: 'NEW',
    desc: 'Our in-house designed aluminum thumb throttle features a smooth hall-effect sensor for lag-free throttle response. The ergonomic profile sits naturally under your thumb for all-day comfort without fatigue.',
    specs: [{ l: 'Type', v: 'Thumb / Hall' }, { l: 'Voltage', v: '3.3–5V' }, { l: 'Output', v: '0.8–4.2V analog' }, { l: 'Material', v: 'CNC 6061 alloy' }, { l: 'Bar Clamp', v: '22.2mm' }, { l: 'Cable', v: '600mm, 3-pin JST' }],
    features: ['Thumb throttle unit', 'Lock-on bar clamp', '3-pin JST cable', 'Spare hall sensor', '1-year warranty card'],
    stock: 'In Stock — Ships within 24h'
  },
  {
    id: 16, name: 'Speed Sensor PAS', cat: 'accessories', price: 18, orig: null, emoji: '⚙️',
    desc: 'A 12-magnet cadence PAS sensor that works with virtually every controller on the market. The high magnet count delivers ultra-smooth assist transitions that feel natural at any speed. Universal 3-wire interface.',
    specs: [{ l: 'Magnets', v: '12' }, { l: 'Interface', v: '3-wire (5V / GND / SIG)' }, { l: 'Signal', v: 'Digital pulse' }, { l: 'Mount', v: 'Bottom bracket' }, { l: 'Cable', v: '700mm, waterproof' }, { l: 'Axle Fit', v: '30–46mm BB' }],
    features: ['PAS sensor disc', '12 neodymium magnets', 'Zip tie mounting kit', 'Universal wiring pigtail', 'Spacer set'],
    stock: 'In Stock — Ships within 24h'
  },
];