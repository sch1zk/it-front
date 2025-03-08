import AchievementsSection from "./Achievements";
import InfoSection from "./Info";
import LastCasesSection from "./LastCases";
import StatsSection from "./Stats";
import "./style.css";

export default function UserPage() {
  return (
    <div
      className="container flex gap-10 mb-5"
      style={{ minHeight: "calc(100vh - var(--header-height))" }}
    >
      <InfoSection/>
      <div className="w-[800px] space-y-5">
        <StatsSection/>
        <AchievementsSection/>
        <LastCasesSection/>
      </div>
      
    </div>
  );
};