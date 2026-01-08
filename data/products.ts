export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    alt: string;
    badge?: {
        text: string;
        color: string;
    };
    description?: string;
}

export const products: Product[] = [
    {
        id: "precision-chef-knife",
        name: "Precision Chef's Knife",
        price: 120.00,
        rating: 5,
        reviews: 128,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXrrcHxFqIsFtwTi6wtk6Le2P9yYOkhDKgnk1vNULiXiMNJ-yZt1s6dyNpWZCaOvKCgX_a7V1fTjmGLC6jdQfjQyKF5Tm17ULzJc6KMBJCwFYqYCZklO--xG2aHSPGDt0_lSn3U-L6FN-jwpFXE4GOsaFdWiJyLp61l7SGlgPY101r1RINn8zHs85a-q3AJalOKilVykhT1mAz0qpp-ir5TVNNU1CGs1ZYeDoUaXuVARvPoj556jms6jE92dwCEdJLMFQBi7vkGvo",
        alt: "Stainless steel chef knife on wooden board",
        badge: { text: "HOT", color: "bg-red-500" },
        description: "Experience the perfect balance of sharpness and durability with our Precision Chef's Knife. Crafted from high-carbon stainless steel, this knife is designed for effortless slicing, dicing, and chopping. The ergonomic handle ensures a comfortable grip, making it an essential tool for every kitchen."
    },
    {
        id: "smart-digital-scale",
        name: "Smart Digital Scale",
        price: 45.00,
        rating: 4.5,
        reviews: 84,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOW9RIywuMrCVgI1wFjjdw0aoOKF3MtGhhhQlEbHyYIYAYd79l-Qtr0CHzp62voSyeDTJ-R-sCfpilCeHJ8gHVidxtgV1oKxFBqTw_xVNtrBai-IYft_0rfVhBKZ2xpa4CYXsswR6mfEK6qtZKYiFvwH2wzsy8QjxlW9jfGy5WIFpBaCJ2rnOBX-W914OZ96FuzeEaesjfeAAbBT8OPtFu5ezi3QI9iFiBkKDNZwDdfR98mJg6YIHMloB0YNqiPWcP35VjJ_psovs",
        alt: "Digital kitchen scale showing weight of ingredients",
        description: "Achieve baking perfection with the Smart Digital Scale. Connects via Bluetooth to the ChefSmart app to track macros and auto-convert units. Features a sleek glass surface that's easy to clean and a high-contrast LED display."
    },
    {
        id: "ergonomic-garlic-press",
        name: "Ergonomic Garlic Press",
        price: 25.00,
        rating: 5,
        reviews: 256,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAONrE21_5jhn9b0HmLcWaXeQCBIzf-139p-b0D1MDqDy1L9lKY0KV4d3DMVnrSejnf00AYp7cthi28WRggiUj8TmN4tMJDDfmtFSbs_gTUu21YS38TiEDHAYGm4j24F_36Qi-JHDfAEIhfZzBiluwLWJOvhBR3kE_ywbUYfOabXj1ZjuXEk5uHDaFH5xCYiR04hY2pvlaG9INiqXwvrNdTCyF2WkuKBNVmQTNUVa9Bcxy1fv1DN-z0_sgXEWIWnnwf6YwJP9GSnv8",
        alt: "Stainless steel garlic press on marble surface",
        description: "Crush garlic with ease using our Ergonomic Garlic Press. The leverage-optimized design requires minimal effort, even for unpeeled cloves. Dishwasher safe and built to last a lifetime."
    },
    {
        id: "rapid-salad-spinner",
        name: "Rapid Salad Spinner",
        price: 35.00,
        originalPrice: 42.00,
        rating: 4,
        reviews: 42,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYyVEQZ4MKRsq7trtKUW0Lx1AJP3xWc1l75X6EHqk2o2Cm2P5AXD7jDZ1BjVMhDEc-xuVo0g3FGOlmvxoIn7WWOatGFbYXIFjagyGFH4plE73DDhl4E8-2mcQ3Qn1vr7rqieQRK2EWV7LV7jBF_-5K_8yba-QisngwZymJPXs0pZGaqj_sQtOrJtV4gNJIDkTGGaRheWChRGi67siZG8NrbxGamnO5ZofSzVjONtw0I_MHEk7EtG8iwbcW1QS88U_TKSiLMTkdsA4",
        alt: "Green salad spinner with fresh greens inside",
        badge: { text: "-15%", color: "bg-primary" },
        description: "Dry your greens in seconds with the Rapid Salad Spinner. The pump mechanism allows for one-handed operation, and the brake button stops spinning instantly. The clear bowl doubles as a salad serving bowl."
    }
];
