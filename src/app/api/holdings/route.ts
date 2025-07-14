import { NextResponse } from 'next/server';

// Os dados que antes estavam no frontend agora ficam no backend.
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

/**
 * Handler para a requisição GET que retorna os dados de alocação de setores.
 */
export async function GET() {
  // Em um cenário real, aqui você poderia buscar dados de um banco de dados,
  // de outra API, ou de um arquivo.
  // Por enquanto, apenas retornamos os dados estáticos.
  return NextResponse.json(sectorData);
}