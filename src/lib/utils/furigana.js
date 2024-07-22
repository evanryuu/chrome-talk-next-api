// import Kuroshiro from 'kuroshiro'
const Kuroshiro = require('kuroshiro').default
// Initialize kuroshiro with an instance of analyzer (You could check the [apidoc](#initanalyzer) for more information):
// For this example, you should npm install and import the kuromoji analyzer first
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji').default
const path = require('path')
// import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'

// Instantiate
const kuroshiro = new Kuroshiro()

const PUBLIC_PATH = './public';
const DICT_PATH = 'kuromoji/dict';

const resolveDictFolderPath = () => {
  return path.resolve(process.cwd(), PUBLIC_PATH, DICT_PATH);
};
async function init() {
  // Here uses async/await, you could also use Promise
  await kuroshiro.init(
    new KuromojiAnalyzer({
      // dictPath: 'public/kuromoji/dict/',
      dictPath: resolveDictFolderPath()
    })
  )

  return kuroshiro
}

// Convert what you want
// const result = await kuroshiro.convert(
//   '感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！',
//   { to: 'hiragana' },
// );
module.exports = {
  init,
}
