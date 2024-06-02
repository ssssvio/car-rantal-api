import { Module } from '@nestjs/common';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [RentalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
