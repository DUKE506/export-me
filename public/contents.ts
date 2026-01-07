/**
 * Tab 내용
 * --
 */
export interface TabProps {
  title: string;
  desc: string;
  url: string;
}
export const tab = [
  {
    title: "README.DUKE",
    desc: "이동희에 대한 문서입니다.\n경력, 기술 스택 등과 같은 정보를 확인하세요.",
    url: "/resume",
  },
  {
    title: "EXAMPLE",
    desc: "이동희의 다양한 활용 예시를\n확인할 수 있습니다.",
    url: "/play",
  },
];
