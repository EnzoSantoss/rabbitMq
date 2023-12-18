import { Injectable } from '@nestjs/common';
import { Nack, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}
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
    this.createNfe(mensagem);
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

  // @RabbitSubscribe(
  //   { exchange: 'minhaEx', routingKey: 'nfe', queue: 'nfe' },
  //   // Nome da sua fila})
  // )
  async createNfe(nf: any) {
    this.amqpConnection.publish('minhaEx', 'nfe', {
      data: nf,
    });
    console.log('enviando nota para fila ->', nf);
  }

  @RabbitSubscribe(
    { exchange: 'minhaEx', routingKey: 'nfe', queue: 'nfe' },
    // Nome da sua fila})
  )
  processNf(nf: any) {
    console.log('EMITINDO NF ->', nf);
  }
}
