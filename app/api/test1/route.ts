export const runtime = 'nodejs'

export async function GET() {
  return fetch('https://example.vercel.sh/')
}
