import { notFound } from "next/navigation";
import { missions } from "@/lib/data";
import { QuizClient } from "@/components/quiz-client";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mission = missions.find((m) => m.id === params.id);
  if (!mission) {
    return { title: "Mission Not Found" };
  }
  return {
    title: `${mission.title} | EduQuest`,
  };
}

export default function MissionPage({ params }: { params: { id: string } }) {
  const mission = missions.find((m) => m.id === params.id);

  if (!mission) {
    notFound();
  }

  return <QuizClient mission={mission} />;
}

export async function generateStaticParams() {
  return missions.map((mission) => ({
    id: mission.id,
  }));
}
