import { Furigana } from '@/types'
import { NextRequest } from 'next/server'
import { kuroshiro } from '@/lib/utils/furigana'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Furigana.ConvertParams
    const {
      options = {
        mode: 'furigana',
        to: 'hiragana',
      },
    } = body
    const res = (await kuroshiro.convert(body.text, options)) as string
    console.log('-----', res)
    return Response.json({
      status: 200,
      data: res,
    })
  } catch (err) {
    console.log('[furigana/convert] Error:', err)
    // TODO 第一次请求时会失败
    return Response.json({
      message: 'error',
      data: null
    })
  }
}
