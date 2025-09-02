"use client";
import ProjectCardWithTabs from "./gitCardComponent";
import { title, subtitle } from "@/components/primitives";


export default function Projects() {
    return (
        <div className="text-center">
            <span className={title({color: "pink", size: "xxl"})}>/ </span>
        <div className="flex flex-wrap gap-8 justify-center mt-20">
            <ProjectCardWithTabs
          title="ergosmart-2"
          description="ErgoSmart 2.0 – A comprehensive ergonomic workspace solution with modern design and advanced features."
          tags={['React', 'TypeScript', 'Tailwind CSS']}
          imageSrc="/images/ergosmartPreview.png"
          repoUrl="https://github.com/SJKodehode/ergosmart-reimagined"
          />
            <ProjectCardWithTabs
          title="Kodeverket Oslo"
          description="Forslag til nytt design for Kodeverket"
          tags={['React', 'TypeScript', 'Tailwind CSS']}
          imageSrc="/images/kodeverketPreview.png"
          repoUrl="https://github.com/SJKodehode/kodeverket-oslo"
          />
            <ProjectCardWithTabs
          title="Kodeverket Oslo"
          description="Forslag til nytt design for Kodeverket"
          tags={['React', 'TypeScript', 'Tailwind CSS']}
          imageSrc="/images/kodehodePreview.png"
          repoUrl="https://github.com/SJKodehode/kodehode-oslo"
          />
        </div>
          </div>
    )
}