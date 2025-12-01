import { IoHome } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineChecklist } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { IoAlbums } from "react-icons/io5";
export const closeEye = '/icons/hide.png';
export const openEye = '/icons/visible.png';
export const warningIcon = '/icons/warning.png';
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
export const adminLinks = [
    {
        text: 'الرئيسية',
        icon: IoHome,
        direct: '/dashboard/admin',
    },
    {
        text: 'القائمة',
        icon: MdOutlineChecklist,
        direct: '/dashboard/admin/menu'
    },
    {
        text: 'الطلبات',
        icon: IoFastFoodSharp,
        direct: '/dashboard/admin/orders'
    },
    {
        text: 'الوكلاء',
        icon: FaBusinessTime,
        direct: '/dashboard/admin/agents'
    },
    {
        text: 'المستخدمين',
        icon: FaUsers,
        direct: '/dashboard/admin/users'
    },
    {
        text: 'الملف الشخصي',
        icon: FaUser,
        direct: '/dashboard/admin/profile'
    },
];

export const userLinks = [
    {
        text: 'الرئيسية',
        icon: IoHome,
        direct: '/dashboard/user',
    },
    {
        text: 'المتجر',
        icon: FaBagShopping,
        direct: '/dashboard/user/store'
    },
    {
        text: 'الطلبات',
        icon: IoFastFoodSharp,
        direct: '/dashboard/user/orders'
    },
    {
        text: 'الملف الشخصي',
        icon: FaUser,
        direct: '/dashboard/user/profile'
    }
];

export const agentsLinks = [
    {
        text: 'الرئيسية',
        icon: IoHome,
        direct: '/dashboard/agent',
    },
    {
        text: 'إنشاء قائمة',
        icon: IoAddCircleSharp,
        direct: '/dashboard/agent/create-menu'
    },
    {
        text: 'القوائم',
        icon: IoFastFoodSharp,
        direct: '/dashboard/agent/menus'
    },
    {
        text: 'الطلبات',
        icon: IoFastFoodSharp,
        direct: '/dashboard/agent/orders'
    },
    {
        text: 'الملف الشخصي',
        icon: FaUser,
        direct: '/dashboard/agent/profile'
    }
];

export const HomeCardsInfo = [
    {
        title: 'عدد الطلبات',
        icon: IoAlbums,
        bgIconColor: '#E4ECFF',
        textIconColor: '#487FFF',
        value: 20,
    },
    {
        title: 'عدد الطلبات الناجحة',
        icon: FaBoxOpen,
        bgIconColor: '#FFE3FB',
        textIconColor: '#DE3ACE',
        value: 10,
    },
    {
        title: 'عدد الطلبات الملغية',
        icon: MdOutlineCancelScheduleSend,
        bgIconColor: '#FFE4E4',
        textIconColor: '#FF4848',
        value: 10,
    },
];

export const LastUserOrders = [
    {
        title: 'همبرجر',
        price: 300,
        date: '2025-12-13',
        category: 'وجبات سريعة',
        picture: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        status: 'قيد التنفيذ'
    },
    {
        title: 'بيتزا',
        price: 450,
        date: '2025-12-12',
        category: 'وجبات سريعة',
        picture: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
        status: 'جاهز'
    },
    {
        title: 'سلطة',
        price: 120,
        date: '2025-12-11',
        category: 'مقبلات',
        picture: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
        status: 'ملغى'
    },
    {
        title: 'سوشي',
        price: 600,
        date: '2025-12-09',
        category: 'مأكولات بحرية',
        picture: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D',
        status: 'قيد التنفيذ'
    },
    {
        title: 'آيس كريم',
        price: 80,
        date: '2025-12-08',
        category: 'حلويات',
        picture: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D',
        status: 'جاهز'
    }
];
export const categories = [
    { id: 1, name: 'الكل', icon: '🍽️' },
    { id: 2, name: 'وجبات سريعة', icon: '🍔' },
    { id: 3, name: 'مقبلات', icon: '🥗' },
    { id: 4, name: 'مأكولات بحرية', icon: '🍣' },
    { id: 5, name: 'حلويات', icon: '🍦' },
    { id: 6, name: 'مشروبات', icon: '🥤' },
    { id: 7, name: 'أطباق رئيسية', icon: '🍛' },
    { id: 8, name: 'شوربات', icon: '🍲' },
    { id: 9, name: 'سلطات', icon: '🥙' },
    { id: 10, name: 'سندويشات', icon: '🥪' },
    { id: 11, name: 'بيتزا', icon: '🍕' },
    { id: 12, name: 'مشاوي', icon: '🍖' },
    { id: 13, name: 'أطباق نباتية', icon: '🌱' },
    { id: 14, name: 'فطور', icon: '🥞' },
    { id: 15, name: 'معجنات', icon: '🥐' },
    { id: 16, name: 'أرز ومعكرونة', icon: '🍝' },
    { id: 17, name: 'أطباق عالمية', icon: '🌍' },
    { id: 18, name: 'أطباق عربية', icon: '🏺' },
    { id: 19, name: 'أطباق آسيوية', icon: '🎎' },
    { id: 20, name: 'أطباق إيطالية', icon: '🇮🇹' },
    { id: 21, name: 'أطباق مكسيكية', icon: '🇲🇽' },
    { id: 22, name: 'مقبلات ساخنة', icon: '🔥' },
    { id: 23, name: 'مقبلات باردة', icon: '❄️' },
    { id: 24, name: 'كاتو وكيك', icon: '🎂' },
    { id: 25, name: 'آيس كريم', icon: '🍨' },
    { id: 26, name: 'قهوة', icon: '☕' },
    { id: 27, name: 'عصائر طازجة', icon: '🍹' },
    { id: 28, name: 'شاي', icon: '🫖' },
    { id: 29, name: 'مشروبات ساخنة', icon: '🔥' },
    { id: 30, name: 'مشروبات باردة', icon: '🧊' },
    { id: 31, name: 'أطباق دايت', icon: '🥗' },
    { id: 32, name: 'أطباق أطفال', icon: '👶' },
    { id: 33, name: 'مكسرات', icon: '🥜' },
    { id: 34, name: 'صلصات', icon: '🥫' },
    { id: 35, name: 'مخللات', icon: '🥒' },
    { id: 36, name: 'أجبان', icon: '🧀' },
    { id: 37, name: 'لحوم', icon: '🥩' },
    { id: 38, name: 'دجاج', icon: '🍗' },
    { id: 39, name: 'أسماك', icon: '🐟' },
    { id: 40, name: 'أرز', icon: '🍚' }
];

export const sampleProducts = [
    {
        title: 'همبرجر لحم',
        price: 300,
        description: 'همبرجر لحم طازج مع الخضار والصلصة الخاصة',
        category: 'وجبات سريعة',
        picture: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        title: 'بيتزا بيبروني',
        price: 450,
        description: 'بيتزا بإضافات البيبروني والجوزة الممتازة',
        category: 'وجبات سريعة',
        picture: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D'
    },
    {
        title: 'سلطة طازجة',
        price: 120,
        description: 'سلطة خضار طازجة مع تتبيلة خاصة',
        category: 'مقبلات',
        picture: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D'
    }
];

export const agentOrders = [
    {
        title: 'همبرجر لحم',
        price: 300,
        date: '2025-12-15',
        category: 'وجبات سريعة',
        picture: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        status: 'قيد التنفيذ',
        userName: 'أحمد محمد',
        userPicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww'
    },
    {
        title: 'سلطة طازجة',
        price: 120,
        date: '2025-12-14',
        category: 'مقبلات',
        picture: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
        status: 'ملغى',
        userName: 'فهد العتيبي',
        userPicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww'
    },
    {
        title: 'سوشي',
        price: 600,
        date: '2025-12-14',
        category: 'مأكولات بحرية',
        picture: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D',
        status: 'جاهز',
        userName: 'لين عبدالله',
        userPicture: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww'
    }
];

export const menus = [
    {
        id: 1,
        name: "بيتزا مارغريتا",
        price: 35,
        category: "بيتزا",
        description: "بيتزا كلاسيكية مع صلصة الطماطم وجبن الموزاريلا والريحان الطازج",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop",
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        name: "برجر كلاسيك",
        price: 25,
        category: "برجر",
        description: "برجر لحم بقري مشوي مع خس وطماطم وصوص خاص في خبز بريوش",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w-500&h=500&fit=crop",
        createdAt: "2024-01-20"
    },
    {
        id: 3,
        name: "سلطة سيزر",
        price: 18,
        category: "سلطات",
        description: "سلطة طازجة مع خس روماين وكروتون وجبنة بارميزان وصوص سيزر",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w-500&h=500&fit=crop",
        createdAt: "2024-01-25"
    },
    {
        id: 5,
        name: "تشيز كيك",
        price: 22,
        category: "حلويات",
        description: "تشيز كيك كريمي مع طبقة من التوت البري الطازج",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w-500&h=500&fit=crop",
        createdAt: "2024-02-05"
    },
    {
        id: 6,
        name: "باستا ألفريدو",
        price: 28,
        category: "مقبلات",
        description: "باستا مع صلصة كريمية بالجبنة والفطر الطازج",
        image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w-500&h=500&fit=crop",
        createdAt: "2024-02-10"
    },
    {
        id: 7,
        name: "ستيك لحم",
        price: 55,
        category: "لحوم",
        description: "ستيك لحم بقري مشوي مع صلصة الفلفل الأسود وخضروات مشوية",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w-500&h=500&fit=crop",
        createdAt: "2024-02-12"
    },
    {
        id: 8,
        name: "سوشي سمك السلمون",
        price: 42,
        category: "مأكولات بحرية",
        description: "سوشي طازج مع سمك السلمون والأفوكادو والأرز الياباني",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w-500&h=500&fit=crop",
        createdAt: "2024-02-15"
    },
    {
        id: 9,
        name: "قهوة اسبريسو",
        price: 10,
        category: "مشروبات ساخنة",
        description: "قهوة اسبريسو إيطالية قوية ورائحة غنية",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w-500&h=500&fit=crop",
        createdAt: "2024-02-18"
    },
];