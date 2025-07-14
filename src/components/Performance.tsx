'use client'

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';

// --- 新增：为从 API 获取的图表数据定义一个类型 ---
type CalendarYearData = {
  year: string;
  cnew: number;
  benchmark: number;
};

// --- 移除：不再需要硬编码的数据 ---
// const calendarYearData = [ ... ];

export default function Performance() {
  // --- 修改：为数据获取、加载状态和错误处理添加 state ---
  const [chartData, setChartData] = useState<CalendarYearData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

// --- 修改：使用 useEffect 在组件挂载时从 API 获取数据 ---
  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/performance'); // 调用我们创建的 API
        if (!response.ok) {
          throw new Error('获取年度表现数据失败，请稍后重试。');
        }
        const data: CalendarYearData[] = await response.json();
        setChartData(data);
      } catch (err: unknown) { // 使用 'unknown' 类型更安全
        if (err instanceof Error) {
          setError(err.message); // 现在可以安全地访问 message 属性
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false); // 无论成功或失败，都结束加载状态
      }
    };

    fetchChartData();
  }, []); // 空依赖数组确保此 effect 只在组件首次渲染时运行一次
  // --- 结束修改 ---


  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Performance
        </h2>

        {/* Prices Section (代码无变化) */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prices</h3>
          <p className="text-sm text-gray-600 mb-4">as at 14-Jul-25</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">Volume 30-day Avg</th>
                  <th className="px-4 py-3 text-left text-sm">Daily change NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">YTD change NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">Premium/ Discount</th>
                  <th className="px-4 py-3 text-left text-sm">Premium/ Discount Distribution Charts</th>
                  <th className="px-4 py-3 text-left text-sm">NAV & Premium/Discount History</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">
                    <div>CNEW</div>
                    <div className="font-semibold">$7.21</div>
                    <div className="font-semibold">$7.14</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>$2084.50</div>
                    <div>40967.00</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>▲ $0 / +0.74%</div>
                    <div>▲ $0 / —</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>—</div>
                    <div>—</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>4.07</div>
                    <div>-0.96%</div>
                  </td>
                  <td className="px-4 py-3">
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="SELECT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chart">Chart</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance History (代码无变化) */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance history (%)</h3>
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-gray-600 text-white text-sm">Month End as at 30-Jun-25</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm">Quarter End as at 30-Jun-25</button>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm"></th>
                  <th className="px-4 py-3 text-left text-sm">1 Mth</th>
                  <th className="px-4 py-3 text-left text-sm">3 Mths</th>
                  <th className="px-4 py-3 text-left text-sm">6 Mths</th>
                  <th className="px-4 py-3 text-left text-sm">1 Yr</th>
                  <th className="px-4 py-3 text-left text-sm">3 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">5 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">10 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">ETF Inception p.a.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Price return</td>
                  <td className="px-4 py-2">1.00</td>
                  <td className="px-4 py-2">-1.11</td>
                  <td className="px-4 py-2">0.72</td>
                  <td className="px-4 py-2">21.83</td>
                  <td className="px-4 py-2">-3.43</td>
                  <td className="px-4 py-2">-3.84</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">5.69</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Income return</td>
                  <td className="px-4 py-2">1.00</td>
                  <td className="px-4 py-2">0.98</td>
                  <td className="px-4 py-2">0.99</td>
                  <td className="px-4 py-2">1.21</td>
                  <td className="px-4 py-2">1.45</td>
                  <td className="px-4 py-2">1.39</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">1.55</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Total return</td>
                  <td className="px-4 py-2">2.00</td>
                  <td className="px-4 py-2">-0.13</td>
                  <td className="px-4 py-2">1.71</td>
                  <td className="px-4 py-2">23.04</td>
                  <td className="px-4 py-2">-1.98</td>
                  <td className="px-4 py-2">-2.45</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">7.24</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Index (MGCNEAUN)</td>
                  <td className="px-4 py-2">2.00</td>
                  <td className="px-4 py-2">-0.03</td>
                  <td className="px-4 py-2">2.06</td>
                  <td className="px-4 py-2">24.22</td>
                  <td className="px-4 py-2">-2.89</td>
                  <td className="px-4 py-2">-1.37</td>
                  <td className="px-4 py-2">1.68</td>
                  <td className="px-4 py-2">8.47</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-600 text-sm">View all indices</a>
            <a href="#" className="text-blue-600 text-sm">View all ETFs</a>
          </div>
          <p className="text-xs text-gray-600 mt-4 leading-relaxed">
            The tables above show past performance of the ETF from 8 November 2018. Index performance shown prior to 15 June 2017 is simulated based on the current index
            methodology. The change of name in the index was to continue the existing methodology when the original index methodology was changed in September 2021. Results are
            calculated to the last trading day of the month in China and assume immediate reinvestment of distributions. ETF results are net of management fees and costs, but before
            brokerage fees or bid/ask spreads incurred when investors buy/sell on the ASX. Returns for periods longer than one year are annualised. Past performance is not a reliable
            indicator of current or future performance which may be lower or higher.
          </p>
        </div>

        {/* --- MODIFIED: Calendar Year Returns Chart --- */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar year returns (%)</h3>
          <p className="text-sm text-gray-600 mb-4">as at 31-Dec-24</p>
          
          <div className="bg-white p-6 border rounded">
            {/* 图例 (Legend) */}
            <div className="flex items-center gap-4 text-xs mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span>CNEW (Nav)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded"></div>
                <span>Benchmark Index (MGCNEAUN)</span>
              </div>
            </div>

            {/* Recharts 图表容器 */}
            <div className="w-full h-72">
              {/* --- 修改：根据 isLoading 和 error 状态条件性地渲染 UI --- */}
              {isLoading ? (
                // 状态一：正在加载，显示骨架屏
                <div className="w-full h-full animate-pulse bg-gray-200 rounded-md"></div>
              ) : error ? (
                // 状态二：发生错误，显示错误信息
                <div className="w-full h-full flex items-center justify-center text-red-600 bg-red-50 rounded-md">
                  <p>{error}</p>
                </div>
              ) : (
                // 状态三：数据加载成功，渲染图表
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData} // <-- 关键：使用从 state 获取的数据
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      tickLine={false} 
                      axisLine={{ stroke: '#374151', strokeWidth: 2 }} 
                      tick={{ fill: '#374151', fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      domain={[-40, 40]}
                      ticks={[-40, -20, 0, 20, 40]}
                      tickFormatter={(value) => `${value}`}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(230, 230, 230, 0.5)' }}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem'
                      }}
                      labelStyle={{ fontWeight: 'bold', color: '#111827' }}
                      formatter={(value, name) => {
                          const displayName = name === 'cnew' ? 'CNEW (Nav)' : 'Benchmark Index';
                          return [`${Number(value).toFixed(1)}%`, displayName];
                      }}
                    />
                    <Bar dataKey="cnew" fill="#2563eb" barSize={20} />
                    <Bar dataKey="benchmark" fill="#14b8a6" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              )}
              {/* --- 结束修改 --- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}