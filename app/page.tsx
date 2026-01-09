import { Time } from "@/components/features/theme/time";
import { tab, TabProps } from "@/public/contents";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import {
  SlideInFormRight,
  SlideInFromBottom,
} from "@/components/animation/enter/text";
import { HoverSlide } from "@/components/animation/hover/hover-slide";

export default function Home() {
  return (
    <div className="flex items-center h-full mx-24 relative overflow-x-hidden">
      <SlideInFormRight className="absolute right-10 top-10 flex flex-col items-end gap-12">
        <Time />
        <LoginButton />
      </SlideInFormRight>

      <SlideInFromBottom>
        <div className="text-8xl text-(--primary)">
          export {"{"} me {"}"}{" "}
        </div>
      </SlideInFromBottom>
      <div className="flex gap-12 absolute bottom-20 right-60">
        {tab.map((v, i) => (
          <HoverSlide key={i}>
            <TabItem tab={v} />
          </HoverSlide>
        ))}
      </div>
    </div>
  );
}

const TabItem = ({ tab }: { tab: TabProps }) => {
  return (
    <Link href={tab.url}>
      <div className="flex flex-col gap-2">
        <p className="text-2xl">{tab.title}</p>
        <p className="text-(--description) whitespace-pre-line">{tab.desc}</p>
      </div>
    </Link>
  );
};

const LoginButton = () => {
  return (
    <Link href={"/signin"}>
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="font-bold group-hover:text-(--primary)">AUTH</span>
        <ArrowRightIcon className="group-hover:text-(--primary)" />
      </div>
    </Link>
  );
};
