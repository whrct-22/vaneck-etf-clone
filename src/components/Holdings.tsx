'use client'

import { useState, useEffect, useCallback } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// 一个用于加深颜色的辅助函数
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

// 饼图每个切片的数据类型
type SliceData = {
    name: string;
    value: number;
    color: string;
};

// 自定义 Tooltip 的 props 接口
interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: SliceData }[];
  activeIndex: number | null;
  sectorData: SliceData[];
}

const CustomTooltip = ({ active, payload, activeIndex, sectorData }: CustomTooltipProps) => {
  let data: SliceData | undefined;
  if (active && payload && payload.length) {
    data = payload[0].payload;
  } else if (activeIndex !== null) {
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
  const [sectorData, setSectorData] = useState<SliceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/holdings');
        if (!response.ok) {
          throw new Error('获取数据失败。');
        }
        const data: SliceData[] = await response.json();
        setSectorData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('发生未知错误。');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onPieEnter = useCallback((_: SliceData, index: number) => {
    setActiveIndex(index);
  }, []);

  const onPieLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);
  
  if (isLoading) {
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

  if (error) {
    return (
      <div className="bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto text-center text-red-600">
          <h2 className="text-2xl font-bold">加载数据时出错</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  const activeShape = activeIndex !== null ? sectorData[activeIndex] : null;
  const totalValue = sectorData.reduce((acc, entry) => acc + entry.value, 0);

  return (
    // 使用一个 Fragment (<>) 来包裹 style 标签和原有的 div
    <>
      {/* 
        修改的关键点：
        添加一个 style 标签，使用 CSS 类选择器直接为饼图扇形元素移除焦点轮廓。
        `.recharts-pie-sector` 是 recharts 库为每个扇形 <path> 元素添加的类名。
        这个规则的优先级更高，可以确保覆盖浏览器的默认样式。
      */}
      <style>{`
        .recharts-pie-sector:focus {
          outline: none;
        }
      `}</style>
    
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
                        // 我们依然保留这里的 outline: 'none' 作为备用，但主要依赖上面的 <style> 块
                        style={{ 
                          transition: 'opacity 0.2s ease-in-out', 
                          cursor: 'pointer',
                          outline: 'none' 
                        }}
                        opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                      />
                    ))}
                  </Pie>

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
                          style={{ cursor: 'pointer', outline: 'none' }}
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
    </>
  )
}