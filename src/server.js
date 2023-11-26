import { VenomBot } from './venom.js'
import { stages, getStage } from './stages.js'
import { initialStage } from './stages/0.js'

const main = async () => {
  try {
    const venombot = await VenomBot.getInstance().init({
      session: 'Delícias da Neide',
      headless: true,
      useChrome: true,
      folderNameToken: 'tokens', // nome da pasta para armazenar tokens
      mkdirFolderToken: '', // caminho da pasta para armazenar tokens
      headless: false, // abre o navegador
      devtools: false, // abre as ferramentas do desenvolvedor
      debug: false, // debug
      logQR: true, // log QR automaticamente no terminal
      browserWS: '', // se usar chrome, defina o caminho do websocket
      browserArgs: [''], // parâmetros adicionais para passar para o puppeteer
      puppeteerOptions: {}, // parâmetros adicionais para passar para o puppeteer
      disableSpins: true, // desabilita os spins
      disableWelcome: true, // desabilita mensagem de boas-vindas
      updatesLog: true, // log de atualizações
      autoClose: false, // fecha o venom automaticamente
      createPathFileToken: true, // cria o caminho do arquivo token automaticamente
    })

    venombot.onMessage(async (message) => {
      if (!message.isGroupMsg && !initialStage){
        return initialStage
      }

      const currentStage = getStage({ from: message.from })

      await stages[currentStage].stage.exec({
        from: message.from,
        message: message.body,
      })
    })
  } catch (error) {
    console.error(error)
  }
}

main()
