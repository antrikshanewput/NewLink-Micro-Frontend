import React from 'react';

import { Center, chakra } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center flex="1">
      <chakra.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="189"
        height="189"
      >
        <g>
          <g transform="rotate(0 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.875s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(45 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.75s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.625s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(135 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.5s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.375s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(225 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.25s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.125s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(315 50 50)">
            <rect
              fill="#ffff"
              height="7"
              width="7"
              ry="3.5"
              rx="3.5"
              y="28.5"
              x="46.5"
            >
              <animate
                repeatCount="indefinite"
                begin="0s"
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              ></animate>
            </rect>
          </g>
          <g></g>
        </g>
      </chakra.svg>
    </Center>
  );
};
