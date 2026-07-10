"use client";

import LoadingScreen from "./LoadingScreen";
import LenisScroll from "./LenisScroll";
import ScrollProgress from "./ScrollProgress";

export default function ClientVrstva() {
  return (
    <>
      <LoadingScreen />
      <LenisScroll />
      <ScrollProgress />
    </>
  );
}
