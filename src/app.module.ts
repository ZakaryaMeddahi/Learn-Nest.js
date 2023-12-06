import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';

// Decorator Marks A Class As Module
@Module({
  // Get Child Modules
  imports: [NinjasModule, UsersModule],
  // List All Controllers Defined In This Module
  controllers: [AppController],
  providers: [AppService],
})
// Export AppModule To Be Used To Create An App Instance
export class AppModule {}
