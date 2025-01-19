const projects = [
  {
    id: 19,
    filter: "filter-web",
    category: "Website",
    title: "Portfolio - Cyan Creations",
    image: "assets/img/projects/cyan-1.png",
    slides: [
      "assets/img/projects/cyan-1.png",
      "assets/img/projects/cyan-2.png",
      "assets/img/projects/cyan-3.png",
    ],
    date: "Dec 2024 - Jan 2025",
    context: "Client Project",
    client: "Cyan Creations",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    weburl: "https://sparkware-tech.github.io/cyan-creation/index.html",
    github: "",
    skills: "HTML | CSS | JavaScript",
    description:
      "Showcasing a graphic design portfolio, the site offers a user-friendly experience across all devices with interactive navigation, allowing visitors to explore the graphic designs.",
  },
  {
    id: 19,
    filter: "filter-web",
    category: "Website",
    title: "AI Chatbot Backend",
    image: "assets/img/projects/AI-Chatbot-Backend.png",
    slides: ["assets/img/projects/AI-Chatbot-Backend.png"],
    date: "Oct 2024 - Nov 2024",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    weburl: "",
    github: "https://github.com/tkdeshan/AI-Chatbot-Backend",
    skills: "Python | Django | Simple Language Model (SLM)",
    description:
      "This project is a backend server for a chatbot application, built using Django and a Simple Language Model (SLM) for text generation. The system is designed to handle user queries, generate meaningful responses, and serve them via API endpoints.",
  },
  {
    id: 18,
    filter: "filter-web",
    category: "Website",
    title: "Phoenix Soft Solutions Website",
    image: "assets/img/projects/Phoenix web 2.png",
    slides: ["assets/img/projects/Phoenix web 1.png", "assets/img/projects/Phoenix web 2.png"],
    date: "Jul 2024 - Sep 2024",
    context: "Client Project",
    client: "",
    contributor_1_name: "Shammi Dodangoda",
    contributor_1_linkedin: "https://www.linkedin.com/in/shammi-saman-kumari/",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    weburl: "https://phoenixsoftsolutions.com/",
    github: "https://github.com/tkdeshan/Phoenix-Soft-Solutions",
    skills: "MERN stack | Full-stack Web Development",
    description:
      "Phoenix Soft Solutions is a technology company offering web, mobile, and software development services. This website showcases services and portfolio with a responsive design. It also includes an admin panel for updating projects, events, and customer reviews.",
  },
  {
    id: 17,
    filter: "filter-web",
    category: "Website",
    title: "Self Assistant AI Web App",
    image: "assets/img/projects/AI Web App 1.png",
    slides: ["assets/img/projects/AI Web App 1.png", "assets/img/projects/AI Web App 2.png"],
    date: "Jan 2024 - May 2024",
    context: "Independent Study",
    client: "",
    contributor_1_name: "Shammi Dodangoda",
    contributor_1_linkedin: "https://www.linkedin.com/in/shammi-saman-kumari/",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    weburl: "https://self-assistant-ai-web-app.vercel.app/",
    github: "https://github.com/tkdeshan/Self_Assistant_AI_Web_App",
    skills: "MERN Stack | Gemini Api",
    description:
      "The AI Career Guidance and Knowledge Testing Web App provides personalized career advice and quizzes through a chat interface and dashboard. Users can explore career options, track quiz results, and receive tailored guidance to help them make informed decisions and improve their skills.",
  },
  {
    id: 16,
    filter: "filter-iot",
    category: "IoT",
    title: "Smart Home",
    image: "assets/img/projects/smart home 1.jpg",
    slides: [
      "assets/img/projects/smart home 1.jpg",
      "assets/img/projects/smart home 2.jpg",
      "assets/img/projects/smart home 3.png",
    ],
    date: "Feb 2024 - Mar 2024",
    context: "Prototype Development",
    client: "",
    contributor_1_name: "Shammi Dodangoda",
    contributor_1_linkedin: "https://www.linkedin.com/in/shammi-saman-kumari/",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "https://youtu.be/mFKJOkdENto?si=bA_bPPkvqOLS1big",
    weburl: "",
    github: "https://github.com/tkdeshan/Smart_Home/",
    skills: "IoT | C++",
    description:
      "This is the prototype of a smart home system that can securely control lights, switches, gates, and doors using a mobile phone. It utilizes sensors to detect objects and flames. The security status, sensor states, and other controlling element states can be viewed on the mobile phone.",
  },
  {
    id: 15,
    filter: "filter-es",
    category: "Embedded Systems",
    title: "Computer Controlled Power Supply",
    image: "assets/img/projects/ccps 3.png",
    slides: [
      "assets/img/projects/ccps 1.jpg",
      "assets/img/projects/ccps 6.png",
      "assets/img/projects/ccps 5.png",
      "assets/img/projects/ccps 4.png",
      "assets/img/projects/ccps 3.png",
    ],
    date: "Sep 2022 - Apr 2023",
    context: "Research Project",
    client: "",
    contributor_1_name: "Ramesh",
    contributor_1_linkedin: "",
    contributor_2_name: "Chamara",
    contributor_2_linkedin: "",
    contributor_3_name: "Masusha",
    contributor_3_linkedin: "",
    demonstration: "https://youtu.be/qlbTec5k6Nw?si=dy2EXsYNu9u4bX03",
    report: "https://drive.google.com/file/d/16DLSyZGm3z7cCXkWnOW1ap89l2XOnii-/view",
    weburl: "",
    github: "https://github.com/tkdeshan/Computer_Controlled_Power_Supply",
    skills: "Embedded Systems | C# | C++ | Innovation Development | Electronics",
    description:
      "This power supply features a graphical user interface (GUI) that allows users to obtain variable voltages up to 12 V with 0.1 V resolution. It can measure resistor values and plot I-V characteristic curves for electronic components like resistors, diodes, and transistors. The GUI facilitates command input and output display, including measured values and I-V curves.",
  },
  {
    id: 14,
    filter: "filter-web",
    category: "Website",
    title: "E-Commerce Website",
    image: "assets/img/projects/E-Commerce 1.png",
    slides: ["assets/img/projects/E-Commerce 1.png", "assets/img/projects/E-Commerce 2.png"],
    date: "Feb 2023 - Apr 2023",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "https://tkdauto.onrender.com/",
    github: "https://github.com/tkdeshan/E-Commerce_website",
    skills: "MERN stack | Full-stack Web Development",
    description:
      "Responsive e-commerce website with functions including signup, login, updating account details, browsing items, managing shopping cart, viewing order history, accessing order details, and more.",
  },
  {
    id: 13,
    filter: "filter-web",
    category: "Website",
    title: "Travel Lanka Website",
    image: "assets/img/projects/Travel Lanka 2.png",
    slides: ["assets/img/projects/Travel Lanka 1.png", "assets/img/projects/Travel Lanka 2.png"],
    date: "Jan 2023 - Feb 2023",
    context: "Academic Project",
    client: "",
    contributor_1_name: "Ramesh Maduranga",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "http://travel-lanka.infinityfreeapp.com/index.php",
    github: "https://github.com/tkdeshan/Web_Travel_Lanka",
    skills: "HTML  | CSS | JavaScript | PHP | MySQL",
    description:
      "This website for a travel company that provides holiday packages and tours. Using this responsive website, customers can view information about the company, browse through available packages, and make online reservations.",
  },
  {
    id: 12,
    filter: "filter-web",
    category: "Web Application",
    title: "GPA Calculator Web App",
    image: "assets/img/projects/GPA Calculator Web App.png",
    slides: ["assets/img/projects/GPA Calculator Web App.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "https://gpa-calculator-web-app-frontend.vercel.app/",
    github: "https://github.com/tkdeshan/GPA_Calculator_Web_App",
    skills: "MERN Stack | Bootstrap",
    description:
      "This is a GPA calculation web application managing subjects with insert, update, and delete. The GPA is calculated automatically.",
  },
  {
    id: 11,
    filter: "filter-web",
    category: "Website",
    title: "Restaurent Website",
    image: "assets/img/projects/Restaurent Website.png",
    slides: ["assets/img/projects/Restaurent Website.png"],
    date: "",
    context: "Capstone Project",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "https://tkdeshan.github.io/Web_King_Taste_Restaurent/",
    github: "https://github.com/tkdeshan/Web_King_Taste_Restaurent",
    skills: "HTML | CSS",
    description:
      "A website for a restaurant. Using this website, customers can access restaurant details and view available food options for reservations.",
  },
  {
    id: 10,
    filter: "filter-web",
    category: "Web Application",
    title: "Shopping List Management Web App",
    image: "assets/img/projects/Shopping List Management Web App.png",
    slides: ["assets/img/projects/Shopping List Management Web App.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "https://shopping-list-management-web-app-frontend.vercel.app/",
    github: "https://github.com/tkdeshan/Shopping_List_Management_Web_App",
    skills: "MERN Stack | Bootstrap",
    description:
      "This is a simple shopping list responsive web application with function including create, update, and delete items.",
  },
  {
    id: 9,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "Facial Recognition Attendance System",
    image: "assets/img/projects/Facial Recognition Attendance System 1.png",
    slides: [
      "assets/img/projects/Facial Recognition Attendance System 1.png",
      "assets/img/projects/Facial Recognition Attendance System 2.png",
    ],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Python_Facial_Recognition_Attendance_System",
    skills: "Python | Image Processing | MySQL",
    description:
      "This is a Python-based Face Recognition Attendance System that allows you to automate the attendance tracking process using facial recognition technology. The system detects and matches faces with an existing database and recorded their attendance. It can add new information about new employees.",
  },
  {
    id: 8,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "Weather Report App",
    image: "assets/img/projects/py weather.png",
    slides: ["assets/img/projects/py weather.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Python_weather_Report_App",
    skills: "Python | API",
    description:
      "This app allows users to search for weather information related to a specific location. It utilizes weather APIs to fetch real-time weather data and provides details such as temperature, humidity, wind speed, and weather description for the desired location.",
  },

  {
    id: 7,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "White Board",
    image: "assets/img/projects/White Board.png",
    slides: ["assets/img/projects/White Board.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Python_White_Board_App",
    skills: "Python",
    description:
      "Interactive application that allows users to resize the pencil, choose different colors, draw, erase, and add images.",
  },
  {
    id: 6,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "Text To Speech",
    image: "assets/img/projects/Text To Speech.png",
    slides: ["assets/img/projects/Text To Speech.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Python_Text_To_Speech_App",
    skills: "Python",
    description: "This app converts text input to audio output.",
  },
  {
    id: 5,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "Tea Factory Management System",
    image: "assets/img/projects/Tea Factory 1.png",
    slides: ["assets/img/projects/Tea Factory 1.png", "assets/img/projects/Tea Factory 2.png"],
    date: "",
    context: "Capstone Project",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Tea_Factory_Management_System",
    skills: "C# | .NET Framework | MySQL",
    description:
      "This desktop application is designed for a tea factory to help manage customer details and information about tea transactions. It allows users to insert, retrieve, update, and delete data. Additionally, the system is capable of generating monthly tea bills automatically.",
  },
  {
    id: 4,
    filter: "filter-ds",
    category: "Desktop Application",
    title: "Student Registration System",
    image: "assets/img/projects/Student Registration System 1.png",
    slides: ["assets/img/projects/Student Registration System 1.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Student_Registration_System",
    skills: "C# | .NET Framework | MySQL",
    description:
      "The student information can be manage by using this desktop application such as inserting, retriving, updating and deleting.",
  },
  {
    id: 3,
    filter: "filter-es",
    category: "Embedded System",
    title: "Temperature & Humidity Controller Unit",
    image: "assets/img/projects/Controller Unit 1.png",
    slides: ["assets/img/projects/Controller Unit 1.png"],
    date: "",
    context: "Prototype Development",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "https://drive.google.com/drive/folders/1fbi5q10jKP54VMA1K6bVnN09N_52qf8I",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/Student_Registration_System",
    skills: "Embedded System | C++",
    description:
      "This unit is designed to maintain temperature and humidity at the desired level by automatically turning on and off. It is specifically designed for mushroom huts.",
  },
  {
    id: 2,
    filter: "filter-web",
    category: "Web Application",
    title: "User Management API Demo",
    image: "assets/img/projects/API.png",
    slides: ["assets/img/projects/API.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "",
    report: "",
    weburl: "",
    github: "https://github.com/tkdeshan/nodejs-assessment",
    skills: "Node.js | ExpressJs | MongoDB | API | Postman",
    description:
      "This Node.js application provides a simple CRUD API for managing user records. It includes the operations such as Create a new user, Read user details by ID, Update user information, and Delete a user.",
  },
  {
    id: 1,
    filter: "filter-es",
    category: "Embedded System",
    title: "Arduino Projects",
    image: "assets/img/projects/Arduino Projects.png",
    slides: ["assets/img/projects/Arduino Projects.png"],
    date: "",
    context: "Independent Study",
    client: "",
    contributor_1_name: "",
    contributor_1_linkedin: "",
    contributor_2_name: "",
    contributor_2_linkedin: "",
    contributor_3_name: "",
    contributor_3_linkedin: "",
    demonstration: "https://drive.google.com/drive/folders/1kkAOleFsZ3P_2VXuTjijk7srRkxxJI0A",
    report: "",
    weburl: "",
    github: "",
    skills: "Embedded System | Innovation Development",
    description:
      "From childhood, I have been interested in designing innovative things. I have created several embedded system applications using Arduino and NodeMCU. Additionally, I have organized multiple workshops at my school to provide knowledge about embedded systems and how to utilize them for developing innovative products. Furthermore, I have authored a book on this subject, which is now available in the school library.",
  },
];
