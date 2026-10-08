import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { About } from "@/components/sections/About";
import { TransformationProcess } from "@/components/sections/TransformationProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({ searchParams }: { searchParams: Promise<{ goal?: string | string[] }> }) {
  const { goal } = await searchParams;
  return <><Hero /><Programs /><About /><TransformationProcess /><Testimonials /><FAQ /><Contact initialGoal={typeof goal === "string" ? goal : ""} /></>;
}
