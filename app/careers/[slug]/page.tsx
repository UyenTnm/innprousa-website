import JobDetailClient from "@/components/careers/JobDetailClient";
import { jobs } from "@/lib/data/jobs";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ slug: string }>;
};

//static params
export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

// metadata
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  return {
    title: `${job?.title} | InnPro Careers`,
    description: job?.description,
  };
}

// page
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  console.log("PARAMS:", resolvedParams); // 👈 thêm ở đây

  const job = jobs.find((j) => j.slug === resolvedParams.slug);

  if (!job) return notFound();

  return <JobDetailClient job={job} />;
}
