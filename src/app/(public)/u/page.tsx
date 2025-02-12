import { AchievementCard } from "./Achievement";
import { InfoContacts, InfoPerformance, InfoPersonal } from "./Info";
import Sidebar from "./Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex justify-center bg-main">
      <div className="flex flex-col w-full gap-5 max-w-7xl">

        <div className="flex gap-10">
          <Sidebar/>
          <div className="flex flex-col flex-1 gap-5">
            <div id="achievements" className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <AchievementCard imagePath="/images/achievements/rocket.svg" title="5 дней в ударном режиме!" description="Твой позвоночник никогда не будет прежним"/>
              <AchievementCard imagePath="/images/achievements/trophy.svg" title="Новое достижение!" description="Посмотри, вдруг там что-то важное"/>
              <AchievementCard imagePath="/images/achievements/video-game.svg" title="Последние кейсы"/>
              <AchievementCard imagePath="/images/achievements/clipboard.svg" title="Решенные кейсы" description="Уже 138 кейсов!"/>
            </div>
            <InfoPersonal/>
            <InfoContacts/>
            <InfoPerformance/>
            {/* <div id="personalisation">

            </div>
            <div id="case-hisory">

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};