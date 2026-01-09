import React from "react";

export default function Page() {
  return (
    <div className="px-48 py-24">
      <div className="flex flex-col gap-12">
        <span className="text-6xl">이동희</span>
        <span className="text-2xl">{`"재밌어보이는데?" "ㄱㄱ?"`}</span>
      </div>
      <div className="flex flex-col gap-4">
        <span>99.11.28</span>
        {/* 클릭하면 군대시절 사진들 일부와 설명 */}
        <span>해군 병장 만기전역 ( 2019.2.18. ~ 2020.11.18 )</span>
      </div>
    </div>
  );
}
