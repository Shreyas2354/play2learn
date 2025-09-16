"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { experiments } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export default function ExperimentPage() {
  const params = useParams();
  const { t } = useLanguage();
  const experiment = experiments.find((exp) => exp.id === params.id);

  if (!experiment) {
    notFound();
  }

  const pageText = {
      step: {
          en: "Step",
          hi: "चरण",
          te: "దశ",
      }
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight text-center">
          {t('title', experiment)}
        </h1>
        <p className="text-muted-foreground text-center mt-2">
          {t('description', experiment)}
        </p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {experiment.steps.map((step, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="flex flex-col md:flex-row items-center justify-center p-0">
                    <div className="md:w-1/2 p-6 flex flex-col justify-center items-start">
                      <Badge variant="secondary" className="mb-2">{t('step', pageText)} {index + 1}</Badge>
                      <h2 className="text-2xl font-bold font-headline">{t('title', step)}</h2>
                      <p className="mt-2 text-muted-foreground">{t('description', step)}</p>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src={step.imageUrl}
                        alt={t('title', step)}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={step.imageHint}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-12" />
        <CarouselNext className="-right-4 md:-right-12" />
      </Carousel>
    </div>
  );
}
