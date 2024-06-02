import { Module } from '@nestjs/common';
import { RentalsModule } from './rentals/rentals.module';
@Module({
  imports: [RentalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
