import '@/styles/index.css';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="container">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5 max-w-[460px]">
                    <h1 className="text-[60px]">Молодежный портал услуг</h1>
                    <p className="text-[20px]">Найди для себя работу или подбери интересное обучение! Собирай все свои достижения в одном месте и делись успехами с остальными!</p>
                    <a href="#" className="href-button">Перейти в портфолио</a>
                </div>
                <Image src="/images/index/megaphone.svg" alt="Мегафон" draggable="false" width={504} height={432}/>
            </div>
        </section>
    );
}
