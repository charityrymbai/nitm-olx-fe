export interface Product {
    id: string
    title: string
    price: number
    description: string
    image: string
    tags: string[]
    seller: string
    location: string
  }
  
  export const products: Product[] = [
    {
      id: "1",
      title: "HP Laptop - Almost New",
      price: 35000,
      description:
        "HP Pavilion laptop, 8GB RAM, 512GB SSD, Intel i5 processor. Used for only 3 months, in excellent condition. Comes with original charger and box.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Electronics", "Laptop", "HP"],
      seller: "Rahul Sharma",
      location: "Engineering Block",
    },
    {
      id: "2",
      title: "Engineering Textbooks Bundle",
      price: 1200,
      description:
        "Complete set of engineering textbooks for 2nd year Computer Science. Includes Data Structures, Algorithms, Computer Networks, and Database Management Systems.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Books", "Engineering", "CSE"],
      seller: "Priya Patel",
      location: "Library Building",
    },
    {
      id: "3",
      title: "Scientific Calculator",
      price: 800,
      description:
        "Casio FX-991EX scientific calculator. Perfect for engineering and science students. All functions working perfectly.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Electronics", "Calculator", "Study"],
      seller: "Amit Kumar",
      location: "Science Block",
    },
    {
      id: "4",
      title: "Hostel Room Furniture",
      price: 3500,
      description:
        "Wooden study table and chair set. Sturdy construction, perfect for hostel rooms. Table has two drawers for storage.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Furniture", "Hostel", "Study"],
      seller: "Neha Singh",
      location: "Girls Hostel",
    },
    {
      id: "5",
      title: "Bicycle - Good Condition",
      price: 2000,
      description:
        "Hero cycle in good condition. Perfect for commuting around campus. New tires installed last month. Lock included.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Vehicle", "Bicycle", "Transport"],
      seller: "Vikram Reddy",
      location: "Boys Hostel",
    },
    {
      id: "6",
      title: "Drawing Equipment Set",
      price: 1500,
      description:
        "Complete engineering drawing kit. Includes drafting board, set squares, compass, scales, and more. Perfect for first-year students.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Stationery", "Engineering", "Drawing"],
      seller: "Ananya Gupta",
      location: "Design Department",
    },
    {
      id: "7",
      title: "Sports Shoes - Size 9",
      price: 1200,
      description:
        "Nike running shoes, size 9. Used for one semester only. Good condition, perfect for college sports activities.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Clothing", "Shoes", "Sports"],
      seller: "Rajesh Khanna",
      location: "Sports Complex",
    },
    {
      id: "8",
      title: "Electric Kettle",
      price: 600,
      description:
        "Prestige electric kettle, 1.5L capacity. Perfect for hostel use. Makes tea, coffee, and instant noodles quickly.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Electronics", "Kitchen", "Hostel"],
      seller: "Meera Joshi",
      location: "Girls Hostel",
    },
  ]
  