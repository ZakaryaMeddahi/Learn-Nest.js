import { Injectable } from '@nestjs/common';
import { CreateNinjaDto, Rank } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

// Mark A Class As Provider Which We Can Inject It Into Constructur Of Controller Or Other Services
@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'Ryu',
      rank: Rank.BLACK,
      available: true,
    },
    {
      id: 2,
      name: 'Yoshi',
      rank: Rank.BLUE,
      available: false,
    },
    {
      id: 3,
      name: 'Crystal',
      rank: Rank.BLACK,
      available: true,
    },
  ];

  getNinjas(rank?: Rank) {
    if (rank) {
      return this.ninjas.filter((ninja) => ninja.rank === rank);
    }
    return this.ninjas;
  }

  getSingleNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error(`Ninja with ID ${id} not found`);
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const id = Date.now();
    const newNinja = { ...createNinjaDto, id };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: string, updateNinjaDto: UpdateNinjaDto) {
    const ninja = this.getSingleNinja(id);
    const index = this.ninjas.indexOf(ninja);
    this.ninjas[index] = { ...ninja, ...updateNinjaDto };
    return this.ninjas[index];
  }

  deleteNinja(id: string) {
    const ninja = this.getSingleNinja(id);
    const index = this.ninjas.indexOf(ninja);
    this.ninjas.splice(index, 1);
    return `The ninja with id: ${id} has been deleted successfully`;
  }
}
