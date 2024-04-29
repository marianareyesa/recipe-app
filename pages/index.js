import Head from 'next/head';
import Banner from '../components/Banner';
import FeaturedCarousel from '../components/FeaturedCarousel';
export default function Home() {
    const carouselData = [
        {
            image: "/images/featured.png",
            title: "featured",
            description: "welcome to our featured page, where each week we bring you handpicked highlights from the world of gastronomy and art. discover the week's most enticing recipe, a must-visit restaurant, and captivating food-centric artwork. stay tuned for a delightful blend of flavors, culture, and creativity, all in one place"
        },
        {
            image: "/images/discover.png",
            title: "explore",
            description: "welcome to our explore page, your ultimate culinary compass. dive into a world of diverse flavors and culinary delights, tailored to your preferences. discover a vast array of recipes categorized by cuisine, meal type, dietary requirements, and more. let your taste buds travel the globe as you embark on a delightful culinary adventure, customized\n" +
                "just for you"
        },
        {
            image: "/images/community.png",
            title: "community",
            description: "welcome to our community page, a dynamic space where culinary enthusiasts gather. explore user-generated videos, tutorials, blogs, and forums, and join our engaging series. connect with like-minded food aficionados and be part of a thriving community that celebrates the art of gastronomy and creativity"
        }
    ];
    return (
        <>
            <Head>
                <title>Cookie - Unleash Your Inner Chef</title>
                <meta name="description" content="Cookie is your ultimate culinary companion." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner /> {/* Include the Banner component */}
            <FeaturedCarousel carouselData={carouselData} />

            {/* The rest of your homepage content goes here */}
        </>
    );
}
