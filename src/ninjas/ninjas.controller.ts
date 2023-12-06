import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto, Rank } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

// Dependency Injection (DI)
// Nest Instantiate Service Automaticaly To Be Injected In The Controller Or Other Service
// const service = new NinjasService()
// Nest Instantiate Controller As Well Automaticaly
// const controller = new NinjasController()

@Controller('ninjas')
// We Can Use The Guard In The Controller Or In A Specified Route
@UseGuards(BeltGuard)
export class NinjasController {
  // Instead Of Instantiating A New NinjasService Object Inside Every Method
  // We Can Do It Only One Time In The Controller
  // And Use It In Every Method
  // Inject NinjasService
  constructor(private readonly ninjasService: NinjasService) {}
  // Get all ninjas
  @Get()
  getAllNinjas(@Query('rank') rank: Rank) {
    // const ninjasService = new NinjasService();
    return this.ninjasService.getNinjas(rank);
  }
  // Get a single ninja
  @Get(':id')
  // Use ParseIntPipe To Transform A String Into Integer (Number)
  getSingleNinja(@Param('id', ParseIntPipe) id: number) {
    // const ninjasService = new NinjasService();
    try {
      // We Are Getting id Of Type String
      // So We Should Parse It Into Number
      return this.ninjasService.getSingleNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
  // Create a ninja
  @Post()
  @UseGuards(BeltGuard)
  // We Use ValidationPipe() To Check Wether The Request Body follows The Annotations Provided In The CreateNinjaDto
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    // const ninjasService = new NinjasService();
    return this.ninjasService.createNinja(createNinjaDto);
  }
  // Update a ninja
  @Patch(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    // const ninjasService = new NinjasService();
    return this.ninjasService.updateNinja(id, updateNinjaDto);
  }
  // Delete a ninja
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    // const ninjasService = new NinjasService();
    return this.ninjasService.deleteNinja(id);
  }
}

// Notes:
// - Controller Depends On Services
// - Controllers Gets Instantiated During The Bootstrap Process (Module Initialization)
// - Services Gets Instantiated During The Bootstrap Process As Well
// - We Can Use Pipes Either To Transform Or Validate Data
// - Pipes Are Used In The Controller Level
// - We Can Use Guards To Protect Routes
// - Guards Are Used In The Controller Level
