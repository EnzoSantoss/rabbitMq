import { Injectable } from '@nestjs/common';
import { Nack, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // @RabbitSubscribe({
  //   exchange: 'minhaEx',
  //   routingKey: 'pagamento',
  //   //queue: 'delivery-queue',
  // })
  // public async pubSubHandler(msg: any) {
  //   console.log(`Received message: ${JSON.stringify(msg)}`);
  // }

  @RabbitSubscribe({
    exchange: 'minhaEx',
    routingKey: 'pagamento',
    queue: 'pagamento1', // Nome da sua fila
  })
  async processarMensagem(mensagem: any) {
    console.log('Mensagem recebida da fila:', mensagem);
  }

  @RabbitSubscribe({
    exchange: 'minhaEx',
    routingKey: 'pagamento',
    queue: 'pagamento2', // Nome da sua fila
  })
  async processarMensagem2(mensagem: any) {
    console.log('Mensagem recebida da fila2:', mensagem);
    // Lógica para processar a mensagem aqui...
  }
}
