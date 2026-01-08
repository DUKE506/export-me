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

export interface ResumeProps {
  name: string;
  address: string;
  number: string;
  email: string;
  github?: string | null;
  military: boolean;
  introMessage: string;
  skills: Skill[];
  workExperiences: WorkExperience[];
  educations: Education[];
  award: Award[];
  extracurricularActivities: ExtracurricularActivity[];
}

export interface Skill {
  title: string;
  skillName: string[];
}

export interface WorkExperience {
  name: string;
  dept: string;
  startDt: Date;
  endDt?: Date | null;
  projects: Project[];
  workType: string;
}

export interface Project {
  title: string;
  subTitle?: string;
  year?: number | null;
}

export interface Education {
  schoolName: string;
  major: string;
  gpa: number; // 학점
  startDt: Date;
  endDt?: Date;
}

export interface Award {
  host: string; //주최
  event: string; //행사명
  award: string; //수상명
  year?: number | null;
}

export interface ExtracurricularActivity {
  event: string; //프로그램, 행사명
  startDt: Date;
  endDt?: Date;
  contents: string;
}

export const resume: ResumeProps = {
  name: "이동희",
  address: "경기도 성남시 수정구 남문로 47번길 28",
  number: "+82 010-3266-5670",
  email: "dukebs1128@gmail.com",
  github: null,
  military: true,
  introMessage: "시작과 끝을 맺는 개발자 이동희입니다.",
  skills: [
    {
      title: "디자인",
      skillName: ["Figma"],
    },
    {
      title: "DB",
      skillName: ["MySQL, Maria, PostgreSQL,Mongo"],
    },
    {
      title: "프론트엔드",
      skillName: [
        "React, NextJS, Blazor, TypeScript, JavaScript, C#, HTML/CSS, Tailwind CSS",
      ],
    },
    {
      title: "백엔드",
      skillName: ["Node.js, Express, Sequelize, Mongoose"],
    },
    {
      title: "DevOps",
      skillName: [
        "AWS(EC2, S3, Route53)",
        "Docker",
        "Nginx",
        "PM2",
        "Ubuntu",
        "Linux",
      ],
    },
  ],
  workExperiences: [
    {
      name: "에스텍시스템",
      dept: "시스템개발연구소",
      startDt: new Date(2024, 2),
      endDt: null,
      projects: [
        {
          title: "S-Agent UI/UX 및 개발",
          subTitle: "자사 용역업무관리 플랫폼",
          year: 2025,
        },
        {
          title: "웹 기반 상품 3D 랜더링 뷰어 데모 개발",
          year: 2025,
        },
        {
          title: "Park-It 개발 및 내부망 설치 프로그램 제작",
          subTitle: "공동주택형 주차이력관리 플랫폼",
          year: 2025,
        },
        {
          title: "S-Works DB 설계 및 FE 개발",
          subTitle: "자사 시설물관리 플랫폼",
          year: 2024,
        },
      ],
      workType: "프론트엔드",
    },
    {
      name: "구현솔루션",
      dept: "개발팀",
      startDt: new Date(2023, 9),
      endDt: new Date(2023, 12),
      projects: [
        {
          title: "Jooya Jooya DB설계 및 개발",
          subTitle: "웹 기반 전화 상담 플랫폼",
        },
      ],
      workType: "백엔드",
    },
    {
      name: "디앤커머스",
      dept: "개발팀",
      startDt: new Date(2023, 7),
      endDt: new Date(2023, 8),
      projects: [
        {
          title: "DN METRICS DB 설계 및 개발",
          subTitle: "웹사이트 접속 데이터 분석 툴",
        },
      ],
      workType: "백엔드",
    },
  ],
  educations: [
    {
      schoolName: "동서대학교",
      major: "소프트웨어",
      gpa: 3.7,
      startDt: new Date(2018.3),
      endDt: new Date(2024.2),
    },
  ],
  award: [
    {
      host: "동서대학교 SW중심대학 사업단",
      event: "2023 쇼미더동서AI",
      award: "우수상",
    },
    {
      host: "한국컴퓨터정보학회",
      event: "한국컴퓨터정보학회 학술대회",
      award: "우수 논문상",
    },
    {
      host: "한국융합신호처리학회",
      event: "한국융합신호처리학회 학술대회",
      award: "우수 발표 논문상",
    },
    {
      host: "동서대학교 SW중심대학 사업단",
      event: "2023 AI·SW 모의 IR 피칭대회",
      award: "최우수상",
    },
    {
      host: "제 2회 스마트 Iot 아이디어 콘테스트",
      event: "동서대학교 LINC+ 사업단",
      award: "최우수상",
    },
    {
      host: "2018 DSU 창업아이디어 경진대회",
      event: "동서대학교 LINC+ 사업단",
      award: "대상",
    },
  ],
  extracurricularActivities: [
    {
      event: "구현솔루션 인턴쉽",
      startDt: new Date(2023, 9),
      endDt: new Date(2023, 12),
      contents:
        "홈페이지 제작 및 소프트웨어 문서화 작업(다이어그램), Jooya Jooya 전화상담 플랫폼 개발",
    },
    {
      event: "제 8회 부산 ICT 융합 해커톤대회",
      startDt: new Date(2023, 8),
      contents: "AI활용 아이디어 도출 및 프로토타입 개발",
    },
    {
      event: "디앤커머스 하계 인턴쉽",
      startDt: new Date(2023, 7),
      endDt: new Date(2023, 8),
      contents: "실무 경험 및 프로젝트에 참여하여 S/W 개발, DN METRICS 개발",
    },
    {
      event: "한국컴퓨터정보학회 하계학술대회",
      startDt: new Date(2023, 7),
      contents:
        "한국 컴퓨터정보학회에서 개최한 하계학술대회 [학습 데이터 용량 및 반복 학습 횟수에 따른 이미지 기반 GPT 문장생성 및 성능 분석]",
    },
    {
      event: "한국융합신호처리학회 하계학술대회",
      startDt: new Date(2023, 6),
      contents:
        "한국 융합신호처리학회에서 개최한 하계학술대회 [상황별 글쓰기를 위한 이미지 객체 탐지 기반 GPT 활용기법]",
    },
    {
      event: "AI·SW 모의 IR피칭대회",
      startDt: new Date(2023, 5),
      contents: "창업을 위해 아이디어 투자금을 유치하기 위한 모의 IR피칭대회",
    },
    {
      event: "캡스톤디자인",
      startDt: new Date(2023, 3),
      endDt: new Date(2023, 7),
      contents:
        "사용자가 블로그 게시물 작성 시 삽입하는 이미지에서 객체 탐지 데이터 및 메타 데이터를 생성형 인공지능 GPT의 프롬프트 값으로 활용하여 블로그 형식의 글을 작성하는 것을 보조해주는 시스템 개발 및 연구",
    },
    {
      event: "IMPL연구실",
      startDt: new Date(2023, 1),
      contents:
        "웹, AI를 활용한 다수의 프로젝트 참여하여 S/W 결과물 도출 및 연구, 연구실장",
    },
    {
      event: "상상 씨앗 공모전",
      startDt: new Date(2018, 11),
      contents:
        "교내 학생들의 불편함을 개선할 수 있는 아이디어를 도출 [식당 좌석 확인 앱]",
    },
    {
      event: "동남권 LINC+ 창업노마드 캠프 & 아이디어 경진대회",
      startDt: new Date(2018, 11),
      contents: "교내 학생들의 불편함을 개선할 수 있는 아이디어를 도출",
    },
    {
      event: "2018 DSU 창업아이디어 경진대회",
      startDt: new Date(2018, 10),
      contents: "창업 교육 및 아이디어 도출",
    },
    {
      event: "제 4회 부산 국제창업 아이디어 경진대회",
      startDt: new Date(2018, 9),
      contents:
        "창업 교육 및 창업 아이디어를 도출하여 창업 계획서 작성 및 발표 [사용자 핸들 감지 자동 브레이크 유모차]",
    },
    {
      event: "제 2회 스마트 IoT 아이디어 콘테스트 공모전",
      startDt: new Date(2018, 10),
      contents: "IoT와 관련된 아이디어를 도출 [Clean a Window]",
    },
    {
      event: "스마트 IoT 연구회",
      startDt: new Date(2018, 10),
      endDt: new Date(2021, 11),
      contents:
        "공모전 및 경진대회 참여, 교내 사업단 프로그램에 참여하여 팀프로젝트 경험",
    },
  ],
};
