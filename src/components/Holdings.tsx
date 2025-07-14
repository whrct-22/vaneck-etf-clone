'use client'

import { useState, useEffect, useCallback } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import type { TooltipProps } from 'recharts';
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

/**
 * 计算一个颜色的加深版本。
 * @param color - HEX 格式的颜色字符串 (例如, "#RRGGBB").
 * @param amount - 加深的程度，从 0 到 1 (例如, 0.2 表示加深 20%).
 * @returns 返回加深后的 HEX 颜色字符串。
 */
const darkenColor = (color: string, amount: number = 0.2): string => {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16);
  r = Math.max(0, Math.min(255, r - Math.floor(255 * amount)));

  let g = (num >> 8) & 0x00FF;
  g = Math.max(0, Math.min(255, g - Math.floor(255 * amount)));

  let b = num & 0x0000FF;
  b = Math.max(0, Math.min(255, b - Math.floor(255 * amount)));
  
  const newColor = (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0');

  return (usePound ? "#" : "") + newColor;
};

const sectorData = [
    { name: 'Technology Hardware & Equipment', value: 18.7, color: '#4a5568' },
    { name: 'Food, Beverage & Tobacco', value: 17.7, color: '#a0aec0' },
    { name: 'Pharmaceuticals, Biotechnology', value: 16.9, color: '#d1d5db' },
    { name: 'Consumer Durables & Apparel', value: 7.6, color: '#81e6d9' },
    { name: 'Capital Goods', value: 5.9, color: '#b2f5ea' },
    { name: 'Materials', value: 5.8, color: '#e6fffa' },
    { name: 'Health Care Equipment & Services', value: 5.6, color: '#2d3748' },
    { name: 'Media & Entertainment', value: 5.2, color: '#718096' },
    { name: 'Household & Personal', value: 2.9, color: '#e2e8f0' },
    { name: 'Semiconductors & Semiconductor Equipment', value: 3.7, color: '#a78bfa' },
    { name: 'Automobiles & Components', value: 2.7, color: '#c4b5fd' },
    { name: 'Software & Services', value: 1.6, color: '#ddd6fe' },
    { name: 'Retailing', value: 1.6, color: '#f472b6' },
    { name: 'Food & Staples Retailing', value: 1.4, color: '#fbcfe8' },
    { name: 'Commercial & Professional Services', value: 0.8, color: '#fce7f3' },
    { name: 'Consumer Services', value: 0.8, color: '#fb923c' },
    { name: 'Other/Cash', value: 0.2, color: '#fed7aa' }
];

type SliceData = typeof sectorData[0];

// FIX 1: 定义一个更明确的 Props 接口来解决 TS 错误
interface CustomTooltipProps {
  // 由 Recharts 自动传入的 Props
  active?: boolean;
  payload?: { payload: SliceData }[];
  // 我们手动传入的 Props
  activeIndex: number | null;
  sectorData: SliceData[];
}

const CustomTooltip = ({ active, payload, activeIndex, sectorData }: CustomTooltipProps) => {
  let data: SliceData | undefined;

  // 优先从 recharts 的 payload 获取数据 (当悬停在饼图上时)
  if (active && payload && payload.length) {
    // FIX 1 (cont.): 修正 payload 的访问方式
    data = payload[0].payload;
  } 
  // 否则，根据 activeIndex 从我们的数据源获取 (当悬停在图例上时)
  else if (activeIndex !== null) {
    data = sectorData[activeIndex];
  }

  if (data) {
    return (
      <div className="p-3 text-sm bg-white rounded-md shadow-lg border border-gray-200 z-10">
        <p className='font-bold'>{data.name}</p>
        <div className="flex items-center mt-1">
          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: data.color }} />
          <span>Allocation: {data.value.toFixed(1)}%</span>
        </div>
      </div>
    );
  }

  return null;
};


export default function Holdings() {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onPieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, []);

  const onPieLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (!isClient) {
    return (
      <div className="bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2 inline-block">
            Holdings & allocations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 lg:h-96 flex justify-center items-center">
              <div className="w-full h-full animate-pulse bg-gray-200 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm animate-pulse">
                {Array.from({ length: 17 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                        <div className="h-4 w-3/4 bg-gray-200 rounded"/>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeShape = activeIndex !== null ? sectorData[activeIndex] : null;
  const totalValue = sectorData.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2 inline-block">
          Holdings & allocations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 lg:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip 
                  content={<CustomTooltip activeIndex={activeIndex} sectorData={sectorData} />} 
                  cursor={{ fill: 'transparent' }} 
                  isAnimationActive={false}
                  position={{ x: 0, y: 0 }}
                  wrapperStyle={{ visibility: activeIndex !== null ? 'visible' : 'hidden' }}
                />
                
                <Pie
                  data={sectorData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  stroke="none"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                >
                  {sectorData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{ transition: 'opacity 0.2s ease-in-out', cursor: 'pointer' }}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                    />
                  ))}
                </Pie>

                {/* FIX 2: 添加 activeIndex !== null 的显式检查来帮助 TS 进行类型收窄 */}
                {activeShape && activeIndex !== null && (
                  <Pie
                    data={[activeShape]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="95%"
                    startAngle={sectorData.slice(0, activeIndex).reduce((acc, curr) => acc + curr.value, 0) / totalValue * -360 + 90}
                    endAngle={(sectorData.slice(0, activeIndex).reduce((acc, curr) => acc + curr.value, 0) + activeShape.value) / totalValue * -360 + 90}
                    paddingAngle={0}
                    stroke="none"
                    isAnimationActive={false}
                  >
                     <Cell
                        key={`active-cell-${activeIndex}`}
                        fill={darkenColor(activeShape.color, 0.2)}
                        style={{ cursor: 'pointer' }}
                      />
                  </Pie>
                )}

              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {sectorData.map((slice, index) => (
              <div
                key={slice.name}
                className="flex items-center gap-3"
                style={{ 
                  cursor: 'pointer',
                  opacity: activeIndex === null || activeIndex === index ? 1 : 0.3,
                  transition: 'opacity 0.2s ease-in-out',
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ 
                    backgroundColor: activeIndex === index ? darkenColor(slice.color, 0.2) : slice.color,
                    transition: 'background-color 0.2s ease-in-out'
                  }} 
                />
                <span className="truncate">{slice.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}