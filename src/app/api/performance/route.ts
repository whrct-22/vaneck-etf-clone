import { NextResponse } from 'next/server';

// 之前硬编码在前端的图表数据，现在移动到这里。
const calendarYearData = [
  { year: '2019', cnew: 26.7, benchmark: 28.0 },
  { year: '2020', cnew: 23.3, benchmark: 24.7 },
  { year: '2021', cnew: 20.0, benchmark: 21.3 },
  { year: '2022', cnew: -23.3, benchmark: -21.3 },
  { year: '2023', cnew: 3.3,  benchmark: 2.7 },
  { year: '2024', cnew: 10.0, benchmark: 9.3 },
];

/**
 * GET 请求的处理函数，返回年度表现数据。
 */
export async function GET() {
  // 在一个真实的应用中，您可能会从数据库、其他服务或文件中查询这些数据。
  // 目前，我们直接返回这个静态数组。
  return NextResponse.json(calendarYearData);
}