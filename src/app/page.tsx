import Carousel from "@/components/ui/Carousel";
import TypingSpan from "@/components/ui/TypingSpan";
import clsx from "clsx";
import Image from "next/image";
import {
  MdArrowForwardIos,
  MdHelpCenter,
  MdOutlineCloud,
  MdOutlineDataset,
  MdOutlineDesktopWindows,
  MdOutlineDns,
  MdOutlinePhoneAndroid,
} from "react-icons/md";

const HeroSegment: React.FC = () => {
  return (
    <section
      className="container flex"
      style={{ minHeight: "calc(100vh - var(--header-height))" }}
    >
      <div
        className="m-auto w-fit"
        style={{ paddingBottom: "var(--header-height)" }}
      >
        <div className="flex justify-between mb-6 text-lg text-primary">
          <span className={"max-w-[350px]"}>
            Прокачивай свои навыки, находи новые возможности и реализуйся в IT
            сфере.
          </span>
          <span className={"max-w-[350px] text-right"}>
            Решай реальные кейсы, получай ачивки и становись лидером своей
            профессии.
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 mb-10 title text-8xl">
          <span className="tracking-wide">Найди работу</span>
          <span>
            в{" "}
            <span className="text-primary">
              {"< "}IT СФЕРЕ{" >"}
            </span>
          </span>
        </div>
        <div className="mx-auto w-fit">
          <p className="mb-4 text-xl text-primary">
            {"<p> "}Путь к карьере в IT начинается здесь{" </p>"}
          </p>
          <button
            className={clsx(
              "bg-primary text-2xl py-4 px-8 w-full text-light rounded-md cursor-pointer border border-primary",
              "transition-all",
              "shadow-glow shadow-primary/20 hover:shadow-none",
              "hover:bg-transparent hover:text-primary"
            )}
          >
            НАЧАТЬ СЕЙЧАС
          </button>
        </div>
      </div>
    </section>
  );
};

interface FourStepsProps {
  number: string;
  imagePath: string;
  alt: string;
  description: string[];
  hrefTitle: string;
}

const FourStepsCard: React.FC<FourStepsProps> = ({
  number,
  imagePath,
  alt,
  description,
  hrefTitle,
}) => {
  return (
    <div className="flex flex-col w-[240px] h-[240px] bg-contain bg-[url(/images/index/steps_card.svg)]">
      <div className="flex w-fill">
        <div className="flex justify-center items-center w-[80px] h-[70px]">
          <span className="text-5xl text-primary">{number}</span>
        </div>
        <Image
          src={imagePath}
          width={60}
          height={60}
          alt={alt}
          className="mx-auto h-[140px] filter drop-shadow-[0_0_15px_rgba(186,222,79,0.7)]"
        />
      </div>
      <div className="inline-flex flex-col justify-end h-full max-h-[80px] m-2.5">
        <div className="mb-2 text-center text-lg/6">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <a
          href="#"
          className={clsx(
            "bg-primary py-2 text-center text-lg text-light rounded-md cursor-pointer border border-primary",
            "transition-colors",
            "hover:bg-transparent hover:text-primary"
          )}
        >
          {hrefTitle}
        </a>
      </div>
    </div>
  );
};

const FourStepsSegment: React.FC = () => {
  return (
    <section className="container flex flex-col mb-40">
      <p className="text-center mb-25 title text-7xl">
        Всего <span className="text-primary">4</span> шага до успеха
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FourStepsCard
            number="01"
            imagePath="/images/index/steps_card_1.svg"
            alt=""
            description={["Выбери направление"]}
            hrefTitle="НАПРАВЛЕНИЯ"
          />
          <MdArrowForwardIos
            size={40}
            color="var(--color-primary)"
            className="hidden xl:inline"
          />
          <FourStepsCard
            number="02"
            imagePath="/images/index/steps_card_2.svg"
            alt=""
            description={["Решай разные кейсы и", "получай за них бонусы"]}
            hrefTitle="КЕЙСЫ"
          />
        </div>
        <MdArrowForwardIos
          size={40}
          color="var(--color-primary)"
          className="hidden xl:inline"
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FourStepsCard
            number="03"
            imagePath="/images/index/steps_card_3.svg"
            alt=""
            description={["Достигай большего", "и расти в рейтинге"]}
            hrefTitle="РЕЙТИНГ"
          />
          <MdArrowForwardIos
            size={40}
            color="var(--color-primary)"
            className="hidden xl:inline"
          />
          <FourStepsCard
            number="04"
            imagePath="/images/index/steps_card_4.svg"
            alt=""
            description={["Стань заметным", "для IT-компаний"]}
            hrefTitle="ВАКАНСИИ"
          />
        </div>
      </div>
    </section>
  );
};

const WhyAreWeSegment: React.FC = () => {
  return (
    <section className="container flex flex-col mb-40">
      <p className="text-4xl text-center mb-25 title md:text-5xl xl:text-7xl ">
        Почему мы?
      </p>
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap justify-center gap-5 mx-auto">
          <div className="w-[450px] text-right">
            <p className="mb-3 text-3xl font-semibold text-primary">
              Реальные кейсы
            </p>
            <p className="text-xl">
              Мы создаём задачи, максимально приближенные к реальным условиям
              работы.
            </p>
          </div>
          <div className="border-r hr-mute" />
          <div className="w-[450px] mb-5">
            <p className="mb-3 text-3xl font-semibold text-primary">
              10 000+ задач
            </p>
            <p className="text-xl">
              охватывающих самые популярные направления в IT, уже на платформе.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mx-auto">
          <div className="w-[450px] text-right">
            <p className="mb-3 text-3xl font-semibold text-primary">
              От новичка до профи
            </p>
            <p className="text-xl">
              Любой юзер найдет задачи под свой уровень и сможет развить навыки.
            </p>
          </div>
          <div className="border-r hr-mute" />
          <div className="w-[450px] mb-5">
            <p className="mb-3 text-3xl font-semibold text-primary">
              100 000+ разработчиков
            </p>
            <p className="text-xl">
              уже объединены нашей платформой, и их количество только продолжает
              расти.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mx-auto">
          <div className="w-[450px] text-right">
            <p className="mb-3 text-3xl font-semibold text-primary">
              Достижения, рейтинги
            </p>
            <p className="text-xl">
              Чем больше достижений ты собираешь,тем выше твой рейтинг.
            </p>
          </div>
          <div className="border-r hr-mute" />
          <div className="w-[450px] mb-5">
            <p className="mb-3 text-3xl font-semibold text-primary">
              10 000+ вакансий
            </p>
            <p className="text-xl">
              в IT-компаниях уже нашли своих соискателей на нашей платформе.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mx-auto">
          <div className="w-[450px] text-right">
            <p className="mb-3 text-3xl font-semibold text-primary">
              Актуальные вакансии
            </p>
            <p className="text-xl">
              Каждый день компании публикуют новые вакансии для специалистов
              любого грейда.
            </p>
          </div>
          <div className="border-r hr-mute" />
          <div className="w-[450px] mb-5">
            <p className="mb-3 text-3xl font-semibold text-primary">
              150+ IT-компаний
            </p>
            <p className="text-xl">
              уже с нами в поисках талантливых сотрудников.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingSegment: React.FC = () => {
  return (
    <section className="container flex flex-col mb-40">
      <p className="text-4xl text-center mb-25 title md:text-5xl xl:text-7xl ">
        Топовые направления
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-[auto] gap-10">
        {/* <div className="flex gap-10 mb-10"> */}
          <a className="panel flex flex-col w-full gap-2 lg:col-span-3">
            <MdOutlineDesktopWindows size={40} color="var(--color-primary)" />
            <p className="text-3xl font-semibold">Frontend</p>
            <p className="text-xl">
              Оживляй пользовательские интерфейсы с помощью HTML, CSS и
              JavaScript. Работай с популярными фреймворками, такими как React,
              Angular и Vue.
            </p>
          </a>
          <a className="panel flex flex-col w-full gap-2 lg:col-span-3">
            <MdOutlineDns size={40} color="var(--color-primary)" />
            <p className="text-3xl font-semibold">Backend</p>
            <p className="text-xl">
              Разрабатывай серверную часть приложений, обрабатывай данные и
              создавай API. Прокачивай навыки на Python, Java, Node.js и других
              языках.
            </p>
          </a>
        {/* </div> */}

        {/* <div className="flex gap-10 mb-10"> */}
          <a className="panel-inv flex flex-col w-full gap-2 lg:col-span-2">
            <MdOutlineDataset size={40} color="var(--color-primary)" />
            <p className="text-3xl font-semibold">Data Science</p>
            <p className="text-xl">
              Анализируй данные, работай с алгоритмами машинного обучения и
              находи инсайты. Применяй Python, R и SQL для решения сложных
              задач.
            </p>
          </a>
          <a className="panel-inv flex flex-col w-full gap-2 lg:col-span-2">
            <MdOutlineCloud size={40} color="var(--color-primary)" />
            <p className="text-3xl font-semibold">DevOps</p>
            <p className="text-xl">
              Автоматизируй процессы, настраивай CI/CD пайплайны и работай с
              облачными инфраструктурами, такими как AWS, Azure или Google
              Cloud.
            </p>
          </a>
          <a className="panel-inv flex flex-col w-full gap-2 lg:col-span-2">
            <MdOutlinePhoneAndroid size={40} color="var(--color-primary)" />
            <p className="text-3xl font-semibold">Mobile</p>
            <p className="text-xl">
              Создавай мобильные приложения для iOS и Android. Работай с Kotlin,
              Swift, Flutter или React Native.
            </p>
          </a>
        {/* </div> */}

        <div className="panel flex lg:col-span-6">
          <div className="flex flex-col gap-5 max-w-[750px]">
            <MdHelpCenter size={40} color="var(--color-primary)" />
            <span className="text-3xl font-semibold">
              Не можешь выбрать направление в IT?
            </span>

            <p className="text-xl">
              Пройди бесплатный тест на нашем сервисе и узнай, какой путь в IT
              подходит именно тебе. Мы поможем выявить твои сильные стороны и
              подскажем, какие кейсы и навыки стоит развивать для успешного
              старта в выбранной области.
            </p>
            <button
              className={clsx(
                "bg-primary text-xl w-fit py-2.5 px-7 text-light rounded-md cursor-pointer border border-primary",
                "transition-colors",
                "hover:bg-transparent hover:text-primary"
              )}
            >
              Пройти тест
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-end w-full">
            <Image
              src="/images/index/puzzle_piece.svg"
              alt="Кусочек паззла"
              width={200}
              height={200}
              className="filter drop-shadow-[0_0_30px_rgba(186,222,79,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface UserReviewCardProps {
  name: string;
  role: string;
  message: string;
  imagePath: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({
  name,
  role,
  message,
  imagePath,
}) => {
  return (
    <div className="flex items-center gap-10 p-10">
      <div className="flex-shrink-0 px-4">
        <Image src={imagePath} alt={name} width={150} height={150} />
      </div>
      <div className="flex flex-col gap-2.5 text-xl">
        <p className="font-semibold">{name}</p>
        <p className="text-primary">{role}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

const UserReviewsSegment: React.FC = () => {
  const reviews = [
    {
      name: "Екатерина Мельникова",
      role: "Data Scientist",
      imagePath: "/images/index/review_1.png",
      message: `Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого.
        Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее.
        А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!`,
    },
    {
      name: "Екатерина Мельникова",
      role: "Data Scientist",
      imagePath: "/images/index/review_1.png",
      message: `Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого.
        Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее.
        А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!`,
    },
    {
      name: "Екатерина Мельникова",
      role: "Data Scientist",
      imagePath: "/images/index/review_1.png",
      message: `Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого.
        Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее.
        А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!`,
    },
  ];

  const reviewCards = reviews.map((review, index) => (
    <UserReviewCard
      key={index}
      name={review.name}
      role={review.role}
      message={review.message}
      imagePath={review.imagePath}
    />
  ));

  return (
    <section className="container flex flex-col mb-40">
      <p className="text-center mb-25 title text-7xl ">
        Что о нас говорят?
      </p>
      <div className="noise-overlay rounded-lg bg-alt">
        <Carousel content={reviewCards} />
      </div>
    </section>
  );
};

const CallToActionSegment: React.FC = () => {
  return (
    <section className="container flex flex-col items-start justify-center min-h-[50vh] mb-40">
      <div className="mb-20 font-semibold text-left text-7xl max-w-[550px]">
        <TypingSpan
          text="Начни свой путь в IT сфере уже сегодня"
        />
      </div>
      <div className="flex justify-center">
        <button
          className={clsx(
            "bg-primary text-2xl py-4 px-8 text-light rounded-md cursor-pointer border border-primary",
            "transition-all",
            "shadow-glow shadow-primary/20 hover:shadow-none",
            "hover:bg-transparent hover:text-primary"
          )}
        >
          РЕШИТЬ СВОЙ ПЕРВЫЙ КЕЙС
        </button>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <HeroSegment />
      <FourStepsSegment />
      <WhyAreWeSegment />
      <TrendingSegment />
      <UserReviewsSegment />
      <CallToActionSegment />
    </>
  );
}
