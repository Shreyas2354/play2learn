import { notFound } from 'next/navigation';
import { missions, subjects } from '@/lib/data';
import { SubjectPageClient } from '@/components/subject-page-client';

export default function SubjectPage({ params }: { params: { id: string } }) {
  const subject = subjects.find((s) => s.id === params.id);
  const subjectMissions = missions.filter((m) => m.subject === params.id);

  if (!subject) {
    notFound();
  }

  return <SubjectPageClient subject={subject} subjectMissions={subjectMissions} />;
}

export async function generateStaticParams() {
    return subjects.map((subject) => ({
      id: subject.id,
    }));
}
