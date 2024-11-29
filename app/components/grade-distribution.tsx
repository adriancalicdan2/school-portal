"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { grade: "A", count: 12 },
  { grade: "B", count: 18 },
  { grade: "C", count: 8 },
  { grade: "D", count: 2 },
  { grade: "F", count: 1 },
];

const maxCount = Math.max(...data.map((item) => item.count));

export function GradeDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[350px]">
          <svg width="100%" height="100%">
            <g transform="translate(0, 20)">
              {data.map((item, index) => (
                <g key={index} transform={`translate(${index * 60}, 0)`}>
                  <rect
                    width="40"
                    height={(item.count / maxCount) * 300}
                    y={300 - (item.count / maxCount) * 300}
                    fill="var(--chart-1)" // or any custom color from your theme
                    rx="4"
                  />
                  <text
                    x="20"
                    y="320"
                    fontSize="12"
                    textAnchor="middle"
                    fill="#888888"
                  >
                    {item.grade}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
