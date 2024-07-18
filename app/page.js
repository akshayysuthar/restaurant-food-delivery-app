"use client"
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
