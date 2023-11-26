import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = "Olá! Bem-vinda (o) ! Para agilizarmos o seu atendimento, por favor, digite o número correspondente à sua escolha:\n"
            +"\n"
            +"1. Agendar um horário de maquiagem. \n\n"
            +"2. Obter informações sobre cursos de automaquiagem.\n\n"
            +"3. Receber informações sobre cursos profissionalizantes. \n\n"
            +"4. Para outros assuntos. \n\n"
            +"\n"         
            +"Estamos ansiosos para que você conheça os nossos serviços, aguardamos você 🤎"
    await venombot.sendText({ to: from, message })
  },
}
