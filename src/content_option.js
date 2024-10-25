const logotext = "JV";
const meta = {
    title: "Rohith JV",
    description: "I’m Rohith ,Graduated with a masters degree in Computer Engineering at ASU.",
};

const introdata = {
    title: "I’m Rohith",
    animated: {
        first: "I love coding",
        second: "Bringing innovation to life with embedded systems.",
        third: "Code, circuits, and creativity.",
    },
    description: `Embedded Systems Engineer | Graduated in Arizona State University with Masters Degree in Computer Engineering | Formerly employed at Tata Consultancy Services`,
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
    {
        jobtitle:'Intern',
        where:'Kernel Masters',
        date:'Aug,2023 - May,2024',
        description:
            <>
            <p>'Designed and developed an advanced diagnostic tool on the STM32F401RBTx platform, tailored for real-time vehicle data analysis and health monitoring.'</p>
            <p>'Created to increase accuracy and responsiveness in vehicle diagnostics, addressing the need for precise and timely insights in automotive systems.'</p>
            <p>'Integrated CAN communication with IoT for comprehensive data capture, while employing the ESP32 module to relay real-time vehicle health updates via WiFi.'</p>
            <p>'Enhanced diagnostic data accuracy by 95%, and improved response times, enabling users to make data-driven decisions on vehicle health and maintenance.'</p>
            </>
    }
    {
        jobtitle: "Embedded Software Engineer",
        where: "Tata Consultancy Services Pvt Ltd.",
        date: "Aug,2021 - Aug,2022",
        description: 
        <><p>Conducted Data validation, reconciliation achieving a 99.5% in data integrity accuracy for a trillion-dollar cap client.</p>
    <p>Optimized Docker configuration, resulting in a 30% reduction in deployment time and improved system stability by 15%.</p>
    <p>Integrated JIRA and Git, reducing project delivery time by 20% through enhanced collaboration and code management.</p></>
          ,
    }
    ,
    {
        jobtitle:'Graduate Student Assistant',
        where:'Arizona State University',
        date:'Aug,2023 - May,2024',
        description:'Worked on the monitoring & assessing of multiple embedded system design projects for UG students in Senior Design Lab.',
    }
    
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "MongoDB",
        value: 85,
    },
    {
        name: "AWS",
        value: 80,
    },
    {
        name: "ETL Tools",
        value: 60,
    },
    {
        name: "MATLAB",
        value: 85,
    },
];

const services = [{
        title: "Custom Cache Replacement Policy Implementation: ",
        description: <><p>Developed and deployed a bespoke cache replacement policy in Gem5, leveraging ARM Cortex processors and Real-Time 
Operating Systems for optimized cache management.</p>
<p>• Exhibited C++ expertise by integrating FIFO, LRU, and a modified cache policy optimized for ARM Cortex architecture.</p>
<p>• Implemented State Machine logic for dynamic cache management, ensuring adaptability to system states and workloads.</p>
<p>• Employed advanced debugging techniques, including real-time monitoring and analysis, to identify and address performance 
bottlenecks, resulting in enhanced cache efficiency and overall system performance in Gem5.</p>
Technologies: Python, C++, ARM, GEM5, RTOS.</>
    
    },
    {
        title: "Smart Building Energy Management System:",
        description: <><p>Developed a system using ARM Cortex-M series microcontrollers and integrated actuators for HVAC and lighting control.</p>
<p>• Utilized FreeRTOS for real-time task scheduling, ensuring system stability, and integrated Wi-Fi for connectivity with building 
management systems and cloud platforms.</p>
<p>• Integrated energy monitoring circuitry to measure electricity consumption, facilitating data-driven energy optimization.</p>
<p>• Developed a user-friendly application for monitoring, scheduling, and notifications, with support for firmware OTA updates.
Technologies: Arduino, FreeRTOS, C++, Tkinter.</p> </>
    },
    {
        title: "Virtual gesture Recognition Using OpenCV Machine Learning Software:",
        description: <><p>Developed a vision-based gesture and object recognition system to empower computer control through gestures and reduced 
the time spent on data input by 25% for users with physical disabilities, improving overall experience and productivity.</p>
<p>• Engineered gesture recognition model with 94.5% accuracy and 30 ms frame processing for real-time responsiveness.</p>
<p>• Curated and processed a 10,000-sample gesture dataset, achieving 97% accuracy post-model fine-tuning.</p>
Technologies: Python, TensorFlow, OpenCV, Deep Learning, CNN.

        </>},
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "venkatarohithj@gmail.com",
    YOUR_FONE: "(480)-238-9775",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/venkatarj",
    linkedin: "https://www.linkedin.com/in/venkata-rohith-jujjuru/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
