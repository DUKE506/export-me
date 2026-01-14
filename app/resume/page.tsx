import { CardStack } from "@/components/animation/drag/stack";
import Image from "next/image";
import React from "react";

const profileImages = [
  {
    id: 1,
    src: "/resume/horizontal_kid.jpg",
    alt: "이미지",
    width: 895,
    height: 562,
  },
  {
    id: 2,
    src: "/resume/horizontal_navy_sergeant.jpg",
    alt: "이미지",
    width: 2880,
    height: 2160,
  },
  {
    id: 3,
    src: "/resume/horizontal_navy_udo.jpg",
    alt: "이미지",
    width: 960,
    height: 467,
  },
  {
    id: 4,
    src: "/resume/vertical_white_shirts.jpg",
    alt: "이미지",
    width: 720,
    height: 961,
  },
];

export default function Page() {
  console.log(profileImages.map((v) => v.src));
  return (
    <div className="px-48 py-24">
      <div className="flex justify-between">
        {/* 프로필 정보영역 */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-12">
            <span className="text-6xl">이동희</span>
            <span className="text-2xl">{`Life is not easy`}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl">99.11.28</span>
            {/* 클릭하면 군대시절 사진들 일부와 설명 */}
            <span className="text-lg">
              🪖해군 병장 만기전역 ( 2019.2.18. ~ 2020.11.18 )
            </span>
          </div>
        </div>
        {/* 프로필 이미지 영역 */}
        <CardStack
          array={profileImages.map((v) => v.src)}
          renderCard={(item, index) => {
            const MAX_HEIGHT = 400;
            const image = profileImages.find((v) => v.src === item); // ✅ item과 비교!
            if (!image) return null;
            const scale = MAX_HEIGHT / image.height;
            const scaledWidth = Math.round(image.width * scale);
            return (
              <Image
                key={item}
                src={item}
                width={scaledWidth}
                height={MAX_HEIGHT}
                alt="이미지"
                draggable={false}
                className="pointer-events-none"
              />
            );
          }}
        />
      </div>
    </div>
  );
}
