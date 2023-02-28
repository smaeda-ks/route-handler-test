export const runtime = 'edge'

export async function GET() {
  return fetch('https://example.vercel.sh/')
}
