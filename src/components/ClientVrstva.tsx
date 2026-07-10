"use client";

import LoadingScreen from "./LoadingScreen";
import LenisScroll from "./LenisScroll";
import ScrollProgress from "./ScrollProgress";
import KurzorZamerovac from "./KurzorZamerovac";
import "./kurzor.css";

export default function ClientVrstva() {
  return (
    <>
      <LoadingScreen />
      <LenisScroll />
      <ScrollProgress />
      <KurzorZamerovac />
    </>
  );
}
