"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", "#747474"];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.12;

interface CardStackProps {
  value: string;
  rotate: number;
}

export const CardStack = ({
  array,
  renderCard,
}: {
  array: Array<string>;
  renderCard: (item: any, index: number) => React.ReactNode;
}) => {
  const [cards, setCards] = useState<string[]>(array);
  const [dragDirection, setDragDirection] = useState(0);
  const [rotations] = useState(() => {
    const rotationMap = new Map();
    array.forEach((card) => {
      rotationMap.set(
        card,
        (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 2)
      );
    });
    return rotationMap;
  });

  const move = (arr: Array<any>, from: number, to: number) => {
    const newArr = [...arr];
    const [item] = newArr.slice(from, 1);
    newArr.splice(0, 1);
    newArr.push(item);

    return newArr;
  };
  const moveToEnd = (from: any) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="relative ">
      <ul className="relative flex justify-center items-center w-[400] h-[400] ">
        {cards.map((card, index) => {
          const canDrag = index === 0;
          return (
            <motion.li
              className="absolute rounded-md list-none "
              key={card}
              style={{
                backgroundColor: card,
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_COLORS.length - index,
                rotate: rotations.get(card),
                x: 0,
              }}
              whileDrag={{
                scale: 1.05,
                rotate: rotations.get(card) + dragDirection * 0.02, // 드래그 방향에 따라
                zIndex: 999,
                transition: { duration: 0 }, // 즉각 반응
              }}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              drag={canDrag ? "x" : false}
              onDrag={(event, info) => {
                setDragDirection(info.offset.x); // 드래그 거리 저장
              }}
              onDragEnd={() => {
                setDragDirection(0);
                moveToEnd(index);
              }}
            >
              {renderCard(card, index)}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
