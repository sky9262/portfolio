import { useState, useEffect } from "react";
import {
  BadgeContainer,
  CardContainer,
  HistoryCard,
  ExpandableSpace,
  Skeleton,
  RunningLine,
} from "@/components";
import { useWindowSize, useScrollLocation } from "@/hooks";
import { useTranslation } from "react-i18next";

export const InformationCards = () => {
  // TODO: Add futuristic stripe when the page is scroll.
  const { t } = useTranslation();
  const workExperiences = ["EH_SummerTrainning"];
  const otherWorkExperiences = [
    "TryHackMe",
    "PicoCTF",
    "SquidCTF",
    "KnightCTF",
    "CollegeProject",
    "CISCObadge",
  ];
  const Certification = [
    "N4",
    "aws",
    "N5",
    "python2",
    "python1",
    "CISCO"
  ];
  const languages = ["hindi", "english", "japanese"];
  const educations = ["graduation", "Intermediate"];

  const [skills, setSkills] = useState([]);
  const [skillsLoading, setSkillsLoading] = useState(true);

  const windowSize = useWindowSize();
  const scrollLocation = useScrollLocation();
  const [spaceExpanded, setSpaceExpanded] = useState(false);

  const fetchSkill = async () => {
    // Set loading to true to render Skeleton component.
    setSkillsLoading(true);
    await fetch("/api/skills").then(async (res) => {
      await res
        .json()
        .then((data) => {
          setSkills(data.skills);
          setSkillsLoading(false);
        })
        .catch((error) => {
          console.error({ error });
          setSkillsLoading(false);
        });
    });
  };

  useEffect(() => {
    // If there's no skill data, fetch it from the API.
    if (!!skills?.length === false) {
      fetchSkill();
    }
  }, [skills]);

  useEffect(() => {
    if (scrollLocation?.y > 20) {
      setSpaceExpanded(true);
    } else {
      setSpaceExpanded(false);
    }
  }, [scrollLocation]);

  return (
    <div className={`${windowSize.containerClass} overflow-hidden mt-3`}>
      <div className="d-flex position-relative w-100 justify-content-center">
        <RunningLine height="2000px" />
      </div>
      <div className="row">
        {/* Left column */}
        <div className="col-12 col-lg-6">
          <ExpandableSpace expanded={spaceExpanded} height={"20px"} />
          <CardContainer title={t("WorkExperience.title")}>
            {workExperiences.map((work, index) => {
              return (
                <HistoryCard
                  key={`work-${index}`}
                  title={t(`WorkExperience.${work}.title`)}
                  subtitle={t(`WorkExperience.${work}.subtitle`)}
                  placeName={t(`WorkExperience.${work}.placeName`)}
                  dateRange={t(`WorkExperience.${work}.dateRange`)}
                  location={t(`WorkExperience.${work}.location`)}
                  url={t(`WorkExperience.${work}.url`)}
                  // Support up to five tasks per one work place.
                  tasks={[
                    t(`WorkExperience.${work}.tasks.1`),
                    t(`WorkExperience.${work}.tasks.2`),
                    t(`WorkExperience.${work}.tasks.3`),
                    t(`WorkExperience.${work}.tasks.4`),
                    t(`WorkExperience.${work}.tasks.5`),
                  ].filter((task) => !!task)}
                />
              );
            })}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"} />
          <CardContainer title={t("Achievement.title")}>
            {otherWorkExperiences.map((work, index) => {
              return (
                <HistoryCard
                  key={`otherWork-${index}`}
                  title={t(`Achievement.${work}.title`)}
                  subtitle={t(`Achievement.${work}.subtitle`)}
                  placeName={t(`Achievement.${work}.desc`)}
                  dateRange={t(`Achievement.${work}.dateRange`)}
                  location={t(`Achievement.${work}.location`)}
                  url={t(`Achievement.${work}.url`)}
                />
              );
            })}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"} />
          <CardContainer title={t("Certification.title")}>
            {Certification.map((cert, index) => {
              return (
                <HistoryCard
                  key={`Certificate-${index}`}
                  title={t(`Certification.${cert}.title`)}
                  subtitle={t(`Certification.${cert}.subtitle`)}
                  placeName={t(`Certification.${cert}.desc`)}
                  dateRange={t(`Certification.${cert}.dateRange`)}
                  location={t(`Certification.${cert}.location`)}
                  url={t(`Certification.${cert}.url`)}
                />
              );
            })}
          </CardContainer>
        </div>
        {/* Right column */}
        <div className="col-12 col-lg-6">
          <ExpandableSpace expanded={spaceExpanded} height={"80px"} />
          <CardContainer title={t("Skills.title")}>
            {skillsLoading ? (
              <Skeleton width="" height="200px" />
            ) : (
              <BadgeContainer contents={skills} />
            )}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"} />
          <CardContainer title={t("Languages.title")}>
            <div className="row">
              {languages?.map((lang, index) => {
                return (
                  <div key={`language-${index}`} className="col-12 col-lg-4">
                    <p className="mb-0">{t(`Languages.${lang}.title`)}</p>
                    <p className="mb-2 text-muted fst-italic">
                      {t(`Languages.${lang}.level`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"60px"} />
          <CardContainer title={t("Education.title")}>
            {educations?.map((education, index) => {
              return (
                <HistoryCard
                  key={`education-${index}`}
                  title={t(`Education.${education}.title`)}
                  subtitle={t(`Education.${education}.marks`)}
                  placeName={t(`Education.${education}.placeName`)}
                  dateRange={t(`Education.${education}.dateRange`)}
                  location={t(`Education.${education}.location`)}
                  subjects={t(`Education.${education}.subjects`)}
                  courses={[
                    t(`Education.${education}.courses.1`),
                    t(`Education.${education}.courses.2`),
                    t(`Education.${education}.courses.3`),
                    t(`Education.${education}.courses.4`),
                  ].filter((course) => !!course)}
                />
              );
            })}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"} />
          <CardContainer title={t("Interests.title")}>
  <div id="badge-container">
    {t("Interests.content").split(',').map(interest => (
      <span key={interest} className="badge border custom-border border-3 text-black fs-6 m-1">
        {interest.trim()}
      </span>
    ))}
  </div>
</CardContainer>
        </div>
      </div>
    </div>
  );
};
