// 120 Distinct Premium Cars Catalog (30 per category) for professional UI
const FLEET_CARS = [
    // ==========================================
    // PREMIUM CATEGORY (30 Cars)
    // ==========================================
    {
        carName: "M5 Competition",
        brand: "BMW",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 6000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "9.8 km/l", rating: 4.8, ratingCount: 88, baggage: 2,
        description: "The BMW M5 Competition combines executive business luxury with track-ready performance, packing a twin-turbo V8 producing 617 horsepower."
    },
    {
        carName: "S-Class",
        brand: "Mercedes-Benz",
        model: "2024",
        category: "Premium",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 8500,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "13.4 km/l", rating: 4.95, ratingCount: 95, baggage: 4,
        description: "The absolute pinnacle of luxury travel. The Mercedes-Benz S-Class provides active ambient lighting, unmatched suspension control, and elite cabin comfort."
    },
    {
        carName: "R8 V10",
        brand: "Audi",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 12000,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "7.5 km/l", rating: 4.9, ratingCount: 42, baggage: 1,
        description: "Experience the thrill of a mid-mounted naturally aspirated 5.2-liter V10 engine, delivering 602 horsepower alongside legendary quattro all-wheel drive."
    },
    {
        carName: "911 GT3",
        brand: "Porsche",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 15000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "8.2 km/l", rating: 4.98, ratingCount: 38, baggage: 1,
        description: "A precise, road-legal track masterpiece packing a 4.0-liter naturally-aspirated flat-six revving up to a soaring 9,000 RPM."
    },
    {
        carName: "Urus",
        brand: "Lamborghini",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 18000,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "7.8 km/l", rating: 4.92, ratingCount: 45, baggage: 4,
        description: "The world's first Super Sport Utility Vehicle, matching extreme supercar handling, raw sound, and 650hp with practical SUV luxury."
    },
    {
        carName: "Mustang GT",
        brand: "Ford",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 7500,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "8.5 km/l", rating: 4.8, ratingCount: 77, baggage: 2,
        description: "A legendary American muscle car powered by a roaring 5.0-liter Coyote V8 engine, offering raw acceleration and classic style."
    },
    {
        carName: "F-Type R",
        brand: "Jaguar",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 8000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "9.2 km/l", rating: 4.78, ratingCount: 40, baggage: 1,
        description: "A pure sports car with a supercharged engine, dramatic exhaust acoustics, precise driver focus, and a sleek silhouette."
    },
    {
        carName: "Range Rover Sport",
        brand: "Land Rover",
        model: "2024",
        category: "Premium",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 10000,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "12.1 km/l", rating: 4.9, ratingCount: 73, baggage: 4,
        description: "Combines dynamic on-road performance, unparalleled luxury craftsmanship, and robust Land Rover mud/snow capability."
    },
    {
        carName: "Vantage",
        brand: "Aston Martin",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 11000,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "8.8 km/l", rating: 4.85, ratingCount: 29, baggage: 2,
        description: "An exotic British grand tourer blending sculptural design with an aggressive twin-turbo V8 producing a thunderous exhaust note."
    },
    {
        carName: "Continental GT",
        brand: "Bentley",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 16000,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "7.9 km/l", rating: 4.93, ratingCount: 34, baggage: 3,
        description: "The definition of fine luxury touring. Standard AWD, exquisite wood-and-leather cabin, and massive torque from a twin-turbo engine."
    },
    {
        carName: "Ghost",
        brand: "Rolls-Royce",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 25000,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "6.8 km/l", rating: 4.99, ratingCount: 51, baggage: 4,
        description: "Step into an oasis of absolute silence. Features self-leveling suspension, bespoke materials, and the legendary Magic Carpet Ride feel."
    },
    {
        carName: "Roma",
        brand: "Ferrari",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 20000,
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "8.9 km/l", rating: 4.96, ratingCount: 31, baggage: 2,
        description: "A gorgeous front-mid-engined coupe representing the sweet life ('La Nuova Dolce Vita') with a twin-turbo V8 producing 612 horsepower."
    },
    {
        carName: "Ghibli Trofeo",
        brand: "Maserati",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 7000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "9.0 km/l", rating: 4.65, ratingCount: 43, baggage: 3,
        description: "Italian executive sedan with a Ferrari-built V8 engine, delivering sharp responsiveness, race mode setups, and signature style."
    },
    {
        carName: "LC 500 Coupe",
        brand: "Lexus",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 9500,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "10.2 km/l", rating: 4.9, ratingCount: 48, baggage: 2,
        description: "Features a glorious, naturally aspirated 5.0L V8, concept-car styling, and an incredibly crafted cabin built by Takumi master craftsmen."
    },
    {
        carName: "RS 7 Sportback",
        brand: "Audi",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 11500,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "8.5 km/l", rating: 4.88, ratingCount: 55, baggage: 4,
        description: "A high-performance fastback offering devastating twin-turbo V8 speed, wide-body styling, and quattro all-wheel drive utility."
    },
    {
        carName: "AMG GT R",
        brand: "Mercedes-Benz",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 14000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "7.8 km/l", rating: 4.94, ratingCount: 36, baggage: 1,
        description: "Developed directly on the Nürburgring. Packing an active aerodynamic package, 9-way traction control, and 577 track-focused horsepower."
    },
    {
        carName: "M4 Competition",
        brand: "BMW",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 7200,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "10.4 km/l", rating: 4.82, ratingCount: 62, baggage: 2,
        description: "High-performance coupe with aggressive styling, standard carbon-fiber trim, active rear differential, and twin-turbo straight-six engine."
    },
    {
        carName: "Escalade V-Sport",
        brand: "Cadillac",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 9000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "6.5 km/l", rating: 4.89, ratingCount: 84, baggage: 5,
        description: "The absolute king of luxury road presence, boasting a supercharged V8 engine, magnetic ride control, and a massive 38-inch OLED screen."
    },
    {
        carName: "Navigator Black",
        brand: "Lincoln",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 8800,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "7.8 km/l", rating: 4.86, ratingCount: 61, baggage: 5,
        description: "Lincoln's flagship luxury SUV offering active massage seats, customized high-end audio setup, and premium twin-turbo towing power."
    },
    {
        carName: "G90 Luxury",
        brand: "Genesis",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 6500,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "9.5 km/l", rating: 4.8, ratingCount: 47, baggage: 4,
        description: "A highly refined, luxury sedan with lounge seating, active noise cancellation, ambient fragrance dispenser, and high-performance ride controls."
    },
    {
        carName: "Giulia QV",
        brand: "Alfa Romeo",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 5500,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "10.5 km/l", rating: 4.75, ratingCount: 39, baggage: 3,
        description: "Boasting a Ferrari-derived 2.9L twin-turbo V6, near perfect 50:50 weight distribution, and razor-sharp steering dynamics."
    },
    {
        carName: "740d M Sport",
        brand: "BMW",
        model: "2024",
        category: "Premium",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 9200,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "14.2 km/l", rating: 4.9, ratingCount: 52, baggage: 4,
        description: "The futuristic executive sedan featuring a giant 31-inch theater screen in the rear, executive lounge seats, and a responsive diesel engine."
    },
    {
        carName: "E-Class LWB",
        brand: "Mercedes-Benz",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 4800,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "12.5 km/l", rating: 4.76, ratingCount: 91, baggage: 3,
        description: "The gold standard of corporate luxury. Offering extended rear legroom, rear reclining seats, and dual widescreen cockpit display."
    },
    {
        carName: "A8 L Horch",
        brand: "Audi",
        model: "2023",
        category: "Premium",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 8800,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "12.0 km/l", rating: 4.88, ratingCount: 46, baggage: 4,
        description: "Audi's flagship luxury sedan featuring dual touchscreens, dynamic all-wheel steering, and customizable luxury cabin comfort options."
    },
    {
        carName: "LS 500h Luxury",
        brand: "Lexus",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 8000,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "15.4 km/l", rating: 4.87, ratingCount: 50, baggage: 3,
        description: "A self-charging hybrid sedan combining outstanding luxury, hand-pleated door panels, Kiriko glass accents, and a whisper-quiet ride."
    },
    {
        carName: "S90 Recharge",
        brand: "Volvo",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 4500,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "18.2 km/l", rating: 4.74, ratingCount: 58, baggage: 3,
        description: "Scandinavian luxury at its peak, offering orthopedic seating, Google built-in systems, crystal gear shifter, and safety systems."
    },
    {
        carName: "XF R-Dynamic",
        brand: "Jaguar",
        model: "2023",
        category: "Premium",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 4200,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "14.8 km/l", rating: 4.65, ratingCount: 42, baggage: 3,
        description: "Delivers an excellent balance between ride comfort, sporty feedback, clean cabin layout, and responsive performance."
    },
    {
        carName: "Panamera GTS",
        brand: "Porsche",
        model: "2024",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 10500,
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 4, mileage: "9.2 km/l", rating: 4.91, ratingCount: 44, baggage: 4,
        description: "Four-door luxury touring with the soul of a 911. Boasting adjustable air suspension, active spoilers, and twin-turbo V8 performance."
    },
    {
        carName: "Corvette C8 Stingray",
        brand: "Chevrolet",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 8500,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 2, doors: 2, mileage: "9.0 km/l", rating: 4.88, ratingCount: 65, baggage: 1,
        description: "Mid-engine layout supercar performance at an accessible rate. Packing a naturally aspirated 6.2L V8 and quick-shifting dual-clutch transmission."
    },
    {
        carName: "GT-R Nismo",
        brand: "Nissan",
        model: "2023",
        category: "Premium",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 11000,
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 2, mileage: "8.0 km/l", rating: 4.9, ratingCount: 57, baggage: 2,
        description: "Godzilla is ready. Advanced AWD system, hand-built twin-turbo V6, motorsport suspension, and raw track acceleration."
    },

    // ==========================================
    // SUV CATEGORY (30 Cars)
    // ==========================================
    {
        carName: "Land Cruiser 300",
        brand: "Toyota",
        model: "2024",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 5500,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "11.2 km/l", rating: 4.9, ratingCount: 156, baggage: 5,
        description: "The Toyota Land Cruiser is the gold standard of luxury off-roading, offering legendary reliability, exceptional comfort, and massive cargo space."
    },
    {
        carName: "Thar 4x4",
        brand: "Mahindra",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 3500,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 3, mileage: "15.2 km/l", rating: 4.8, ratingCount: 210, baggage: 2,
        description: "An iconic off-roader with removable roof panels, high ground clearance, four-wheel drive, and rugged design built to explore the unknown."
    },
    {
        carName: "Creta SX",
        brand: "Hyundai",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2000,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "16.8 km/l", rating: 4.6, ratingCount: 145, baggage: 3,
        description: "Hyundai's popular smart SUV equipped with a panoramic sunroof, ventilated seats, premium bose sound system, and advanced safety features."
    },
    {
        carName: "Seltos GTX+",
        brand: "Kia",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 2100,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "18.0 km/l", rating: 4.6, ratingCount: 92, baggage: 3,
        description: "A sporty SUV characterized by its bold styling, modern widescreen dashboard layout, custom drive modes, and refined performance."
    },
    {
        carName: "Innova Crysta",
        brand: "Toyota",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Manual",
        pricePerDay: 3000,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "12.9 km/l", rating: 4.85, ratingCount: 220, baggage: 4,
        description: "The gold standard of family MPVs, offering absolute passenger luxury, massive luggage space, robust suspension, and dynamic long-distance mileage."
    },
    {
        carName: "Scorpio-N Z8L",
        brand: "Mahindra",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 2800,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "14.0 km/l", rating: 4.8, ratingCount: 182, baggage: 4,
        description: "The Big Daddy of SUVs. Features a body-on-frame setup, powerful mHawk diesel engine, premium coffee-black leather seats, and 4WD options."
    },
    {
        carName: "Harrier XZA+",
        brand: "Tata",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 3200,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "14.6 km/l", rating: 4.75, ratingCount: 110, baggage: 3,
        description: "Based on the Land Rover D8 platform, this premium SUV offers muscular styling, massive panoramic roof panel, and exceptional highway dynamics."
    },
    {
        carName: "XUV700 AX7L",
        brand: "Mahindra",
        model: "2024",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 3500,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "13.2 km/l", rating: 4.9, ratingCount: 235, baggage: 4,
        description: "Equipped with dual 10.25-inch visual screens, Level-2 ADAS, smart driver aids, custom memory seats, and outstanding 200hp performance."
    },
    {
        carName: "Wrangler Rubicon",
        brand: "Jeep",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 4800,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "10.6 km/l", rating: 4.85, ratingCount: 118, baggage: 3,
        description: "The ultimate 4x4 offroader featuring locking differentials, electronic sway bar disconnects, and massive all-terrain mud tires."
    },
    {
        carName: "Bronco Wildtrak",
        brand: "Ford",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 4600,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "9.8 km/l", rating: 4.82, ratingCount: 89, baggage: 3,
        description: "Built for hardcore offroading. Sasquatch package, electronic lockers, removable doors, and modular frame design."
    },
    {
        carName: "Fortuner Legender",
        brand: "Toyota",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 4000,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "12.0 km/l", rating: 4.88, ratingCount: 198, baggage: 4,
        description: "Unmatched road status and robust reliability. Distinct split-grille styling, dual-tone cabin, and signature high-torque diesel performance."
    },
    {
        carName: "Tucson Signature",
        brand: "Hyundai",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 3100,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "15.4 km/l", rating: 4.74, ratingCount: 82, baggage: 3,
        description: "Parametric jewel styling, heated/ventilated seats, full ADAS Level 2, and HTRAC AWD system for complete driving stability."
    },
    {
        carName: "Sportage GT",
        brand: "Kia",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2500,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "14.2 km/l", rating: 4.68, ratingCount: 71, baggage: 3,
        description: "Distinct styling with high-performance cabin tech, panoramic curved display, and active dynamic AWD terrain setups."
    },
    {
        carName: "CR-V Hybrid",
        brand: "Honda",
        model: "2024",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2700,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "19.5 km/l", rating: 4.8, ratingCount: 115, baggage: 3,
        description: "Advanced dual-motor hybrid system, premium noise isolation, highly spacious cabin, and reliable safety package."
    },
    {
        carName: "Rogue SV",
        brand: "Nissan",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2200,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "14.8 km/l", rating: 4.5, ratingCount: 94, baggage: 3,
        description: "Nissan's popular family SUV, featuring ProPILOT assist, flexible cargo layouts, and ultra-comfortable zero-gravity seats."
    },
    {
        carName: "CX-5 Premium",
        brand: "Mazda",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2400,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "13.5 km/l", rating: 4.78, ratingCount: 102, baggage: 3,
        description: "Exquisite Kodo design language, upscale cabin, sporty road behavior, and standard i-Activ AWD system."
    },
    {
        carName: "Outback Touring",
        brand: "Subaru",
        model: "2024",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2600,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "13.8 km/l", rating: 4.82, ratingCount: 121, baggage: 4,
        description: "Part wagon, part rugged SUV. Featuring Symmetrical AWD, robust roof rack system, and dynamic EyeSight driver safety aids."
    },
    {
        carName: "Yukon Denali",
        brand: "GMC",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 6500,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "7.2 km/l", rating: 4.91, ratingCount: 65, baggage: 5,
        description: "Huge presence, chrome accents, premium V8 engine, active magnetic suspension, and hand-stitched leather interiors."
    },
    {
        carName: "Explorer Limited",
        brand: "Ford",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 3800,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "11.0 km/l", rating: 4.67, ratingCount: 132, baggage: 4,
        description: "Perfect for long road trips. Boasts three rows of seats, EcoBoost performance, and dynamic terrain management control."
    },
    {
        carName: "Grand Cherokee L",
        brand: "Jeep",
        model: "2024",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 5000,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "10.8 km/l", rating: 4.84, ratingCount: 96, baggage: 5,
        description: "Luxury meets trail capacity. Three rows of seats, premium McIntosh audio system, and Quadra-Lift air suspension."
    },
    {
        carName: "Tiguan R-Line",
        brand: "Volkswagen",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2900,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "12.6 km/l", rating: 4.6, ratingCount: 88, baggage: 3,
        description: "German engineering, sharp clean lines, digital cockpit layout, and solid highway ride dynamics."
    },
    {
        carName: "Kodiaq L&K",
        brand: "Skoda",
        model: "2024",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 3300,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "12.8 km/l", rating: 4.82, ratingCount: 74, baggage: 4,
        description: "The luxurious Laurin & Klement edition with adaptive chassis controls, premium Canton sound, and 'Simply Clever' features."
    },
    {
        carName: "Hector Sharp",
        brand: "MG",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 2200,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "13.7 km/l", rating: 4.58, ratingCount: 112, baggage: 3,
        description: "Features a massive 14-inch touchscreen system, premium voice control helper, and highly comfortable captain seats."
    },
    {
        carName: "Safari Adventure",
        brand: "Tata",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 3400,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "14.2 km/l", rating: 4.78, ratingCount: 142, baggage: 4,
        description: "Imposing design, majestic third-row seating, electronic parking brake, and multiple drive-terrain modes."
    },
    {
        carName: "XUV300 W8",
        brand: "Mahindra",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1500,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "17.0 km/l", rating: 4.45, ratingCount: 96, baggage: 2,
        description: "Widest cabin in its segment, offering punchy turbo engines, 5-star global safety build, and dual-zone climate controls."
    },
    {
        carName: "Venue N Line",
        brand: "Hyundai",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1600,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "18.2 km/l", rating: 4.55, ratingCount: 88, baggage: 2,
        description: "Sporty compact SUV with custom dual-tip exhaust, stiffened dampers, metal pedals, and paddle shifters."
    },
    {
        carName: "Sonet X-Line",
        brand: "Kia",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",
        pricePerDay: 1700,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "19.0 km/l", rating: 4.6, ratingCount: 114, baggage: 2,
        description: "Premium matte graphite finish, wireless phone charger, ventilated front seats, and responsive paddle shifters."
    },
    {
        carName: "Magnite Turbo",
        brand: "Nissan",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1200,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "20.0 km/l", rating: 4.38, ratingCount: 81, baggage: 2,
        description: "Japanese HRA0 1.0L Turbo engine, sleek bi-projector LEDs, around-view monitor, and incredible value."
    },
    {
        carName: "Kiger RXZ",
        brand: "Renault",
        model: "2023",
        category: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1300,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "20.5 km/l", rating: 4.4, ratingCount: 69, baggage: 2,
        description: "Distinct athletic looks, 3 driving modes (Eco, Normal, Sport), ambient lighting, and spacious 405L boot space."
    },
    {
        carName: "Gurkha 4x4",
        brand: "Force",
        model: "2023",
        category: "SUV",
        fuelType: "Diesel",
        transmission: "Manual",
        pricePerDay: 2500,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 3, mileage: "12.4 km/l", rating: 4.65, ratingCount: 52, baggage: 3,
        description: "Pure functional offroader, factory-fitted snorkel, mechanical locking front/rear differentials, and towering height."
    },

    // ==========================================
    // ELECTRIC CATEGORY (30 Cars)
    // ==========================================
    {
        carName: "Model S",
        brand: "Tesla",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4500,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "600 km/charge", rating: 4.9, ratingCount: 124, baggage: 3,
        description: "The Tesla Model S is an all-electric luxury sedan featuring dual-motor AWD, supercar acceleration, and industry-leading autopilot features."
    },
    {
        carName: "Nexon EV Max",
        brand: "Tata",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2200,
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "465 km/charge", rating: 4.7, ratingCount: 118, baggage: 3,
        description: "India's bestselling electric SUV, featuring a high-capacity battery pack, zero emissions, instant response torque, and advanced regenerator modes."
    },
    {
        carName: "e-tron GT",
        brand: "Audi",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 9000,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "488 km/charge", rating: 4.88, ratingCount: 52, baggage: 3,
        description: "A progressive electric grand tourer combining electric quattro, aerodynamic lines, premium materials, and a silent cabin ride."
    },
    {
        carName: "Ioniq 5",
        brand: "Hyundai",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3800,
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "518 km/charge", rating: 4.82, ratingCount: 65, baggage: 3,
        description: "Retro-futuristic crossover electric vehicle with ultra-fast 800V charging, slide center console, and highly flexible eco-friendly cabin."
    },
    {
        carName: "EV6 GT",
        brand: "Kia",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4000,
        image: "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "528 km/charge", rating: 4.84, ratingCount: 71, baggage: 3,
        description: "A gorgeous, athletic crossover EV offering dynamic instant acceleration, high-tech infotainment screens, and responsive driver setups."
    },
    {
        carName: "Model 3 Performance",
        brand: "Tesla",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3200,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "507 km/charge", rating: 4.8, ratingCount: 142, baggage: 2,
        description: "Track Mode V3, dual motor AWD, carbon fiber spoiler, lowered suspension, and blisteringly fast 0-100 acceleration."
    },
    {
        carName: "Model Y Long Range",
        brand: "Tesla",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3500,
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "533 km/charge", rating: 4.83, ratingCount: 168, baggage: 4,
        description: "The most popular electric SUV globally. Huge cargo volume, panoramic glass roof, and high driving position."
    },
    {
        carName: "Model X Plaid",
        brand: "Tesla",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 5500,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 6, doors: 5, mileage: "543 km/charge", rating: 4.92, ratingCount: 88, baggage: 4,
        description: "Boasting Falcon Wing rear doors, 1020 horsepower from three electric motors, and unmatched electric utility performance."
    },
    {
        carName: "Leaf Tekna",
        brand: "Nissan",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 1800,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "385 km/charge", rating: 4.4, ratingCount: 85, baggage: 2,
        description: "Equipped with Nissan e-Pedal technology for one-pedal driving, ProPILOT, and high efficiency."
    },
    {
        carName: "Bolt EV Premier",
        brand: "Chevrolet",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 1600,
        image: "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "417 km/charge", rating: 4.42, ratingCount: 63, baggage: 2,
        description: "Compact utility layout, highly efficient, dynamic regeneration paddle, and very easy to park in cities."
    },
    {
        carName: "Mustang Mach-E GT",
        brand: "Ford",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4200,
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "490 km/charge", rating: 4.76, ratingCount: 94, baggage: 3,
        description: "Electric performance crossover with the pony heritage, 480 horsepower, Brembo brakes, and custom drive modes."
    },
    {
        carName: "Taycan 4S",
        brand: "Porsche",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 12000,
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 4, mileage: "450 km/charge", rating: 4.95, ratingCount: 47, baggage: 3,
        description: "Pure driving genetics, 800-volt battery tech for ultra-fast charging, sports-car chassis, and stunning electric response."
    },
    {
        carName: "i4 eDrive40",
        brand: "BMW",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 5000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "590 km/charge", rating: 4.79, ratingCount: 66, baggage: 3,
        description: "A proper BMW executive sedan that happens to be electric. Sleek gran coupe styling, curved screen, and rear-wheel drive."
    },
    {
        carName: "iX xDrive50",
        brand: "BMW",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 7500,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "610 km/charge", rating: 4.88, ratingCount: 54, baggage: 4,
        description: "Flagship luxury EV SUV with high-end lounge interior, hexagonal steering wheel, carbon-fiber reinforced structure, and air suspension."
    },
    {
        carName: "Q4 e-tron",
        brand: "Audi",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4800,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "480 km/charge", rating: 4.68, ratingCount: 43, baggage: 3,
        description: "Sleek German premium electric SUV, offering a virtual cockpit, augmented reality HUD display, and supreme passenger luxury."
    },
    {
        carName: "EQS 580 Sedan",
        brand: "Mercedes-Benz",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 11000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "780 km/charge", rating: 4.93, ratingCount: 49, baggage: 4,
        description: "Boasting the massive 56-inch Hyperscreen dashboard, ultra-high aerodynamic efficiency, and ultimate rear-seat luxury features."
    },
    {
        carName: "EQB 300 4MATIC",
        brand: "Mercedes-Benz",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4500,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "420 km/charge", rating: 4.62, ratingCount: 38, baggage: 3,
        description: "A highly versatile 7-seater electric SUV, offering active 4MATIC AWD capability, and modern MBUX screen interfaces."
    },
    {
        carName: "Kona Electric",
        brand: "Hyundai",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2000,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "452 km/charge", rating: 4.45, ratingCount: 78, baggage: 2,
        description: "Perfect city runabout. Fast charging, highly reliable electric drivetrain, and compact crossover layout."
    },
    {
        carName: "ZS EV Exclusive",
        brand: "MG",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2100,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "461 km/charge", rating: 4.5, ratingCount: 91, baggage: 3,
        description: "Panoramic sky-roof, PM 2.5 air filter, 360-degree camera system, and dynamic electric response."
    },
    {
        carName: "Atto 3",
        brand: "BYD",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2300,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "521 km/charge", rating: 4.65, ratingCount: 84, baggage: 3,
        description: "Innovative Blade Battery technology, gym-themed interior layout, rotatable central touchscreen, and long range."
    },
    {
        carName: "Seal Performance",
        brand: "BYD",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3600,
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "580 km/charge", rating: 4.86, ratingCount: 63, baggage: 3,
        description: "A gorgeous sedan with AWD, cell-to-body tech, 523 horsepower, and sports-car handling."
    },
    {
        carName: "XC40 Recharge",
        brand: "Volvo",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 4100,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "418 km/charge", rating: 4.72, ratingCount: 68, baggage: 3,
        description: "Dual motor AWD putting out 408 hp, Google-integrated cabin, and legendary Scandinavian safety engineering."
    },
    {
        carName: "Polestar 2",
        brand: "Polestar",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3900,
        image: "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "542 km/charge", rating: 4.77, ratingCount: 71, baggage: 3,
        description: "Minimalist avant-garde fastback EV. Premium vegan interior, pixel LEDs, and gold Brembo brake details."
    },
    {
        carName: "R1S Launch Edition",
        brand: "Rivian",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 8500,
        image: "https://images.unsplash.com/photo-1533519148007-1b89f53121b1?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "516 km/charge", rating: 4.94, ratingCount: 52, baggage: 5,
        description: "Quad-motor electric adventure SUV, adjustable height suspension, and extreme off-road crawl modes."
    },
    {
        carName: "R1T Adventure",
        brand: "Rivian",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 8000,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "505 km/charge", rating: 4.92, ratingCount: 48, baggage: 5,
        description: "The ultimate electric pickup truck. Features an innovative gear tunnel, built-in air compressor, and massive battery."
    },
    {
        carName: "Air Grand Touring",
        brand: "Lucid",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 9500,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "830 km/charge", rating: 4.97, ratingCount: 31, baggage: 4,
        description: "Industry-leading electric range, glass canopy roof, executive rear legroom, and premium AWD handling."
    },
    {
        carName: "ID.4 Pro",
        brand: "Volkswagen",
        model: "2023",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2500,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "440 km/charge", rating: 4.48, ratingCount: 92, baggage: 3,
        description: "Quiet ride, highly spacious cargo area, dynamic rear-wheel drive, and clean Volkswagen tech layout."
    },
    {
        carName: "Prologue Elite",
        brand: "Honda",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 2900,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "482 km/charge", rating: 4.6, ratingCount: 35, baggage: 3,
        description: "Honda's spacious electric SUV offering clean styling, standard AWD, and wireless smartphone charger."
    },
    {
        carName: "Blazer EV RS",
        brand: "Chevrolet",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 3000,
        image: "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "512 km/charge", rating: 4.64, ratingCount: 42, baggage: 3,
        description: "Sporty RS styling, 17.7-inch central infotainment touchscreen, dual-zone climate controls, and fast-charging capability."
    },
    {
        carName: "RZ 450e Direct4",
        brand: "Lexus",
        model: "2024",
        category: "Electric",
        fuelType: "Electric",
        transmission: "Automatic",
        pricePerDay: 5200,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "354 km/charge", rating: 4.75, ratingCount: 28, baggage: 3,
        description: "Direct4 advanced AWD system, luxury synthetic seating, premium insulation, and refined Lexus cabin craftsmanship."
    },

    // ==========================================
    // BUDGET CATEGORY (30 Cars)
    // ==========================================
    {
        carName: "Civic Type R",
        brand: "Honda",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 2500,
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 4, mileage: "12.5 km/l", rating: 4.7, ratingCount: 68, baggage: 2,
        description: "A high-performance hatchback combining daily usability with race-car handling, standard 6-speed manual transmission, and modern tech."
    },
    {
        carName: "City i-VTEC",
        brand: "Honda",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1800,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "17.8 km/l", rating: 4.7, ratingCount: 130, baggage: 3,
        description: "A premium sedan known for its ride comfort, generous rear legroom, high fuel efficiency, and highly responsive i-VTEC engine."
    },
    {
        carName: "Verna Turbo",
        brand: "Hyundai",
        model: "2024",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1900,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "18.6 km/l", rating: 4.5, ratingCount: 78, baggage: 3,
        description: "A futuristic fastback-style sedan offering dynamic turbo engines, dual-screen instrumentation, heated/ventilated seating, and smart ADAS tech."
    },
    {
        carName: "Swift Sport",
        brand: "Suzuki",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1200,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "21.2 km/l", rating: 4.6, ratingCount: 167, baggage: 1,
        description: "A sporty, agile, lightweight hatchback that provides punchy engine acceleration, outstanding city mileage, and fun handling dynamics."
    },
    {
        carName: "Baleno Alpha",
        brand: "Maruti",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1100,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "22.3 km/l", rating: 4.4, ratingCount: 115, baggage: 2,
        description: "A premium urban hatchback equipped with a 360-degree camera view, a futuristic HUD display, and exceptional cabin efficiency."
    },
    {
        carName: "Amaze VX",
        brand: "Honda",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1000,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "18.6 km/l", rating: 4.3, ratingCount: 84, baggage: 2,
        description: "A compact sedan that packs a highly spacious interior cabin, excellent ride stability, and robust safety into an affordable daily driver."
    },
    {
        carName: "i20 N Line",
        brand: "Hyundai",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1400,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "20.1 km/l", rating: 4.55, ratingCount: 96, baggage: 2,
        description: "Motorsport-inspired design featuring sporty exhaust notes, quick gear shifts, stiff cornering setup, and stylish dual-tone decals."
    },
    {
        carName: "Punch Creative",
        brand: "Tata",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1000,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "18.9 km/l", rating: 4.4, ratingCount: 104, baggage: 2,
        description: "A bold micro-SUV offering a 5-star adult safety rating, high seat positioning, high ground clearance, and reliable urban response."
    },
    {
        carName: "Dzire ZXI",
        brand: "Maruti",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1000,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "23.2 km/l", rating: 4.35, ratingCount: 125, baggage: 2,
        description: "India's favorite compact sedan. Renowned reliability, class-leading fuel efficiency, and comfortable cabin controls."
    },
    {
        carName: "Grand i10 Asta",
        brand: "Hyundai",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 950,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "20.7 km/l", rating: 4.38, ratingCount: 92, baggage: 2,
        description: "Smart city hatch with wireless charging, dual airbags, keyless start, and highly refined 4-cylinder engine response."
    },
    {
        carName: "Kwid Climber",
        brand: "Renault",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 800,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "22.0 km/l", rating: 4.12, ratingCount: 78, baggage: 1,
        description: "Rugged SUV-inspired styling, digital instrumentation panel, high ground clearance, and ultra-light steering behavior."
    },
    {
        carName: "Alto K10 VXI",
        brand: "Maruti",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 700,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "24.3 km/l", rating: 4.1, ratingCount: 142, baggage: 1,
        description: "Ultra-affordable, easy handling, outstanding mileage, and the easiest car to maneuver in tight city traffic conditions."
    },
    {
        carName: "WagonR VXI",
        brand: "Maruti",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 900,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "23.5 km/l", rating: 4.25, ratingCount: 165, baggage: 2,
        description: "The iconic tallboy design, offering maximum headroom, large cargo versatility, and bulletproof engine durability."
    },
    {
        carName: "Tiago XZ+",
        brand: "Tata",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 950,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "19.0 km/l", rating: 4.45, ratingCount: 110, baggage: 2,
        description: "Awarded a 4-star safety rating, Harman premium sound system, sporty rear spoiler, and solid build quality."
    },
    {
        carName: "Tigor XZ+",
        brand: "Tata",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1050,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "19.2 km/l", rating: 4.4, ratingCount: 88, baggage: 3,
        description: "Elegant coupe-like silhouette sedan, 4-star safety build, premium fabric seating, and digital control clusters."
    },
    {
        carName: "Sunny XL",
        brand: "Nissan",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1300,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "17.0 km/l", rating: 4.28, ratingCount: 67, baggage: 3,
        description: "Known globally for its massive rear legroom, smooth CVT automatic gearbox, and highly reliable engine longevity."
    },
    {
        carName: "Yaris G",
        brand: "Toyota",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1500,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "17.1 km/l", rating: 4.5, ratingCount: 79, baggage: 3,
        description: "Standard 7 airbags, acoustic glass windshield, exceptional NVH insulation, and smooth automatic transmission."
    },
    {
        carName: "Aura SX",
        brand: "Hyundai",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1000,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "20.0 km/l", rating: 4.36, ratingCount: 73, baggage: 2,
        description: "Distinct design with honeycombed LED DRLs, wireless smartphone charging, and highly comfortable seats."
    },
    {
        carName: "Slavia Active",
        brand: "Skoda",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1800,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "19.4 km/l", rating: 4.65, ratingCount: 84, baggage: 4,
        description: "European styling, highly robust structure, massive 521L boot space, and class-leading ground clearance."
    },
    {
        carName: "Virtus Comfortline",
        brand: "Volkswagen",
        model: "2024",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 2000,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "18.1 km/l", rating: 4.7, ratingCount: 93, baggage: 4,
        description: "Stunning sedan build, 5-star GNCAP rating, punchy TSI performance, and excellent high-speed stability controls."
    },
    {
        carName: "WR-V S",
        brand: "Honda",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1400,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "17.5 km/l", rating: 4.38, ratingCount: 65, baggage: 3,
        description: "Compact crossover offering high seat position, sunroof, rugged body cladding, and highly reliable engine response."
    },
    {
        carName: "Ciaz Delta",
        brand: "Suzuki",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1600,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "20.0 km/l", rating: 4.42, ratingCount: 110, baggage: 4,
        description: "Mid-size sedan with smart hybrid technology, extremely spacious rear seat room, and executive design trims."
    },
    {
        carName: "Glanza V",
        brand: "Toyota",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1200,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "22.3 km/l", rating: 4.48, ratingCount: 83, baggage: 2,
        description: "Toyota's signature premium hatch, featuring a 360-degree camera, HUD display, and legendary service backing."
    },
    {
        carName: "Triber RXZ",
        brand: "Renault",
        model: "2023",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1100,
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 7, doors: 5, mileage: "19.0 km/l", rating: 4.22, ratingCount: 76, baggage: 2,
        description: "Highly modular 7-seater vehicle with removable third-row seating, cool box console, and 4 airbags."
    },
    {
        carName: "Spark LS",
        brand: "Chevrolet",
        model: "2022",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 750,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 4, doors: 5, mileage: "18.8 km/l", rating: 4.02, ratingCount: 45, baggage: 1,
        description: "Extremely compact design, excellent city mileage, and very easy parking profile."
    },
    {
        carName: "Figo Sports",
        brand: "Ford",
        model: "2022",
        category: "Budget",
        fuelType: "Diesel",
        transmission: "Manual",
        pricePerDay: 1000,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "24.4 km/l", rating: 4.5, ratingCount: 97, baggage: 2,
        description: "Popular diesel hatchback with legendary hydraulic feedback steering, high torque, and black alloy wheels."
    },
    {
        carName: "Aspire Titanium",
        brand: "Ford",
        model: "2022",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1050,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 4, mileage: "18.5 km/l", rating: 4.38, ratingCount: 71, baggage: 3,
        description: "Comfortable compact sedan with robust build safety, automatic climate control, and smooth engine feedback."
    },
    {
        carName: "Micra Active",
        brand: "Nissan",
        model: "2022",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Automatic",
        pricePerDay: 1100,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "19.2 km/l", rating: 4.15, ratingCount: 59, baggage: 2,
        description: "Super smooth CVT automatic, retro styling cues, highly reliable air conditioning, and spacious rear cabin."
    },
    {
        carName: "Polo GT TSI",
        brand: "Volkswagen",
        model: "2022",
        category: "Budget",
        fuelType: "Petrol",
        transmission: "Manual",
        pricePerDay: 1300,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "18.0 km/l", rating: 4.72, ratingCount: 145, baggage: 2,
        description: "The enthusiast's premium hatchback. Solid German build, highly tuneful chassis dynamics, and sporty steering."
    },
    {
        carName: "Punto Evo",
        brand: "Fiat",
        model: "2022",
        category: "Budget",
        fuelType: "Diesel",
        transmission: "Manual",
        pricePerDay: 1100,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400&q=80",
        seats: 5, doors: 5, mileage: "20.0 km/l", rating: 4.4, ratingCount: 68, baggage: 2,
        description: "Heavy build quality, legendary tank-like solidity, excellent steering feedback, and robust multijet diesel engine."
    }
];

// Background seeder utility to populate missing cars in the database automatically.
// Checks existing cars, identifies missing, and runs sequential POST requests to /addCar.
function seedMissingCars(dbCars, callback) {
    // Create a Set of existing car names for quick lookup
    const existingKeys = new Set(dbCars.map(c => `${c.brand.toLowerCase()}::${c.carName.toLowerCase()}`));
    
    // Find missing cars
    const missingCars = FLEET_CARS.filter(c => !existingKeys.has(`${c.brand.toLowerCase()}::${c.carName.toLowerCase()}`));
    
    if (missingCars.length === 0) {
        if (callback) callback();
        return;
    }
    
    console.log(`[Seeder] Found ${missingCars.length} missing cars. Starting background auto-seeder...`);
    
    // Seed sequentially to avoid database lock issues on slow local servers
    let index = 0;
    
    function seedNext() {
        if (index >= missingCars.length) {
            console.log("[Seeder] Database successfully synchronized with fleet catalogue.");
            if (callback) callback();
            return;
        }
        
        const car = missingCars[index];
        const params = new URLSearchParams();
        params.append("carName", car.carName);
        params.append("brand", car.brand);
        params.append("model", car.model);
        params.append("category", car.category);
        params.append("fuelType", car.fuelType);
        params.append("transmission", car.transmission);
        params.append("pricePerDay", car.pricePerDay.toString());
        
        let imageUrl = car.image;
        // Keep it as a full URL, or absolute path if it is local. No replacement necessary.
        params.append("image", imageUrl);
        
        fetch("../addCar", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        })
        .then(() => {
            console.log(`[Seeder] Registered ${car.brand} ${car.carName} [${index + 1}/${missingCars.length}]`);
            index++;
            seedNext();
        })
        .catch(err => {
            console.error(`[Seeder] Failed to register ${car.brand} ${car.carName}:`, err);
            index++;
            seedNext();
        });
    }
    
    seedNext();
}
