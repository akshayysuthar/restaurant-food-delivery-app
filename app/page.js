"use client"
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
